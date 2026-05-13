import fs from "node:fs";
import path from "node:path";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { chromium as playwrightChromium } from "playwright-core";
import chromium from "@sparticuz/chromium";
import slugify from "slugify";

const DEFAULT_SITE_URL = process.env.VITE_APP_URL || "https://www.technexos.com.br";
const SETTINGS_SLUG = "__blog-automation-settings__";

export interface BlogAutomationSettings {
  enabled: boolean;
  interval_minutes: number;
  next_run_at: string | null;
  last_run_at: string | null;
  last_success_at: string | null;
  last_status: string;
  last_error: string | null;
  last_generated_slug: string | null;
  publish_enabled: boolean;
  created_at?: string;
  updated_at?: string;
}

interface GeneratedPostPayload {
  title: string;
  slug: string;
  excerpt: string;
  html_content: string;
  keywords: string[];
}

const buildTestPost = (): GeneratedPostPayload => ({
  title: "Como estruturar automação e tráfego para vender com previsibilidade",
  slug: `teste-automacao-blog-${Date.now()}`,
  excerpt: "Conteúdo técnico de validação da automação do blog da TechNexos.",
  html_content: `
    <h2>Teste técnico da automação</h2>
    <p>Este conteúdo foi gerado para validar o fluxo completo da automação do blog via interface.</p>
    <p>O objetivo é confirmar login, abertura do painel, preenchimento dos campos, envio do formulário e criação do registro.</p>
    <h3>O que está sendo testado</h3>
    <ul>
      <li>Autenticação no painel administrativo</li>
      <li>Acesso à rota do blog admin</li>
      <li>Preenchimento automatizado de título, slug, resumo e HTML</li>
      <li>Submissão do formulário como um operador humano</li>
    </ul>
    <p>Quando este teste roda com sucesso, significa que a base da automação de publicação está operacional.</p>
  `,
  keywords: ["teste automacao blog", "publicacao automatica", "crm technexos", "blog admin", "validacao tecnica"],
});

export interface BlogAutomationRunOptions {
  force?: boolean;
  publish?: boolean;
  siteUrl?: string;
  testMode?: boolean;
}

export interface BlogAutomationRunResult {
  ok: boolean;
  skipped?: boolean;
  reason?: string;
  slug?: string;
  title?: string;
  published?: boolean;
  verified?: boolean;
  postId?: string;
}

const getRequiredEnv = (...names: string[]) => {
  for (const name of names) {
    const value = process.env[name];
    if (value) return value;
  }

  throw new Error(`Variável de ambiente ausente. Esperado um destes nomes: ${names.join(", ")}`);
};

const getSupabaseClient = () => {
  const url = getRequiredEnv("VITE_SUPABASE_URL", "SUPABASE_URL");
  const key = getRequiredEnv(
    "VITE_SUPABASE_PUBLISHABLE_KEY",
    "VITE_SUPABASE_ANON_KEY",
    "SUPABASE_ANON_KEY"
  );

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });
};

const getSupabaseUrl = () => getRequiredEnv("VITE_SUPABASE_URL", "SUPABASE_URL");

const getSupabaseProjectRef = () => {
  const url = new URL(getSupabaseUrl());
  return url.hostname.split(".")[0];
};

const serializeSettings = (settings: BlogAutomationSettings) => JSON.stringify(settings, null, 2);

const parseSettings = (raw: string | null) => {
  if (!raw) return null;

  try {
    return JSON.parse(raw) as BlogAutomationSettings;
  } catch {
    return null;
  }
};

const buildDefaultSettings = (): BlogAutomationSettings => ({
  enabled: false,
  interval_minutes: 90,
  next_run_at: null,
  last_run_at: null,
  last_success_at: null,
  last_status: "idle",
  last_error: null,
  last_generated_slug: null,
  publish_enabled: true,
});

const getAutomationCredentials = () => ({
  email: getRequiredEnv("BLOG_AUTOMATION_EMAIL"),
  password: getRequiredEnv("BLOG_AUTOMATION_PASSWORD"),
});

const buildPrompt = () => `Você é um estrategista editorial e especialista em SEO da TechNexos.

Crie UM post de blog original em JSON puro, sem markdown e sem texto extra, com a estrutura:
{
  "title": "string",
  "excerpt": "string",
  "html_content": "string",
  "keywords": ["string", "string", "string", "string", "string"]
}

Regras:
- título com até 70 caracteres
- excerpt com até 160 caracteres
- html_content com 900 a 1400 palavras
- use HTML limpo com <p>, <h2>, <h3>, <ul>, <ol>, <strong>
- inclua introdução, desenvolvimento, conclusão e CTA sutil
- foco em automação, tráfego pago, SEO, funil, geração de demanda, vendas e performance
- escrever em português do Brasil
- não cite concorrentes
- não use placeholders
- não use markdown
- o post precisa ser útil para empresários e gestores que querem crescer com estrutura
- evite repetir exatamente títulos já famosos
- keywords devem ser relevantes e específicas
`;

const extractJson = (input: string) => {
  const fencedMatch = input.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const raw = fencedMatch?.[1] || input;
  return JSON.parse(raw.trim());
};

const generateBlogPost = async (client: SupabaseClient): Promise<GeneratedPostPayload> => {
  const apiKey = getRequiredEnv("GEMINI_API_KEY", "VITE_GEMINI_API_KEY", "REACT_APP_GEMINI_API_KEY");

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: buildPrompt() }] }],
        generationConfig: {
          response_mime_type: "application/json",
          temperature: 0.9,
        },
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Falha ao gerar conteúdo com Gemini: ${errorText}`);
  }

  const payload = await response.json();
  const generatedText = payload.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!generatedText) {
    throw new Error("A IA não retornou conteúdo para o post.");
  }

  const parsed = extractJson(generatedText);
  const baseTitle = String(parsed.title || "").trim();
  const excerpt = String(parsed.excerpt || "").trim();
  const htmlContent = String(parsed.html_content || "").trim();
  const keywords = Array.isArray(parsed.keywords) ? parsed.keywords.map((item) => String(item).trim()).filter(Boolean) : [];

  if (!baseTitle || !excerpt || !htmlContent) {
    throw new Error("O conteúdo gerado veio incompleto.");
  }

  let slug = slugify(baseTitle, { lower: true, strict: true, trim: true });
  if (!slug) {
    slug = `post-${Date.now()}`;
  }

  const { data: existingPost } = await client.from("blog_posts").select("id").eq("slug", slug).maybeSingle();
  if (existingPost) {
    slug = `${slug}-${Date.now()}`;
  }

  return {
    title: baseTitle,
    slug,
    excerpt,
    html_content: htmlContent,
    keywords,
  };
};

const resolveLocalBrowserExecutable = () => {
  const candidates = [
    process.env.PLAYWRIGHT_EXECUTABLE_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  ].filter(Boolean) as string[];

  return candidates.find((candidate) => fs.existsSync(candidate));
};

const launchBrowser = async () => {
  const isVercel = Boolean(process.env.VERCEL);
  const executablePath = isVercel
    ? await chromium.executablePath()
    : resolveLocalBrowserExecutable();

  if (!executablePath) {
    throw new Error("Nenhum executável de navegador compatível foi encontrado para a automação.");
  }

  return playwrightChromium.launch({
    headless: true,
    executablePath,
    args: isVercel ? chromium.args : ["--no-sandbox", "--disable-setuid-sandbox"],
  });
};

const verifyPostExists = async (client: SupabaseClient, slug: string) => {
  for (let attempt = 0; attempt < 10; attempt += 1) {
    const { data } = await client
      .from("blog_posts")
      .select("id, published")
      .eq("slug", slug)
      .maybeSingle();

    if (data) {
      return { id: data.id as string, published: Boolean(data.published) };
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));
  }

  throw new Error("O post não apareceu no banco após o envio pelo formulário.");
};

const publishViaFrontend = async (
  post: GeneratedPostPayload,
  options: { siteUrl: string; publish: boolean; session: unknown }
) => {
  const { email, password } = getAutomationCredentials();
  const browser = await launchBrowser();

  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1200 },
    });
    const page = await context.newPage();

    const storageKey = `sb-${getSupabaseProjectRef()}-auth-token`;
    await page.goto(`${options.siteUrl}`, { waitUntil: "domcontentloaded" });
    await page.evaluate(
      ({ key, value }) => {
        window.localStorage.setItem(key, JSON.stringify(value));
      },
      { key: storageKey, value: options.session }
    );
    await page.goto(`${options.siteUrl}/blog-admin`, { waitUntil: "domcontentloaded" });

    if ((await page.url())?.includes("/auth")) {
      await page.locator("#email").fill(email);
      await page.locator("#password").fill(password);
      await page.locator("#password").press("Enter");
      await page.waitForFunction(
        (key) => Boolean(window.localStorage.getItem(key)),
        storageKey,
        { timeout: 60000 }
      );
      await page.goto(`${options.siteUrl}/blog-admin`, { waitUntil: "domcontentloaded" });
    }

    const newPostButton = page.getByTestId("blog-new-post");
    try {
      await newPostButton.waitFor({ state: "visible", timeout: 30000 });
      await newPostButton.click({ force: true });
    } catch {
      // If the creation form is already open, we can continue.
    }

    const form = page.locator("form");
    await form.waitFor({ state: "visible", timeout: 30000 });

    const titleField = page.getByTestId("blog-title").or(form.locator("input").nth(0));
    const slugField = page.getByTestId("blog-slug").or(form.locator("input").nth(1));
    const excerptField = page.getByTestId("blog-excerpt").or(form.locator("textarea").nth(0));
    const htmlField = page.getByTestId("blog-html-content").or(form.locator("textarea").nth(1));

    await titleField.fill(post.title);
    await slugField.fill(post.slug);
    await excerptField.fill(post.excerpt);
    await htmlField.fill(post.html_content);

    const publishToggle = page.getByTestId("blog-published");
    if (options.publish) {
      await publishToggle.check();
    } else {
      await publishToggle.uncheck();
    }

    await Promise.all([
      page.waitForResponse(
        (response) =>
          response.url().includes("/rest/v1/blog_posts") &&
          response.request().method() === "POST" &&
          response.status() < 400,
        { timeout: 30000 }
      ),
      page.getByTestId("blog-submit").or(page.getByRole("button", { name: "Criar Post" })).click(),
    ]);
  } finally {
    await browser.close();
  }
};

const authenticateAutomationClient = async () => {
  const client = getSupabaseClient();
  const { email, password } = getAutomationCredentials();
  const { data, error } = await client.auth.signInWithPassword({ email, password });

  if (error) {
    throw new Error(`Falha ao autenticar a automação: ${error.message}`);
  }

  if (!data.session) {
    throw new Error("A autenticação retornou sem sessão válida.");
  }

  return { client, session: data.session };
};

export const getOrCreateAutomationSettings = async (client: SupabaseClient) => {
  const { data, error } = await client
    .from("blog_posts")
    .select("id, html_content")
    .eq("slug", SETTINGS_SLUG)
    .maybeSingle();

  if (error) {
    throw new Error(`Falha ao carregar configuração da automação: ${error.message}`);
  }

  if (data) {
    return parseSettings(data.html_content as string) || buildDefaultSettings();
  }

  const defaults = buildDefaultSettings();

  const { error: insertError } = await client.from("blog_posts").insert({
    title: "Configuração interna da automação",
    slug: SETTINGS_SLUG,
    excerpt: "Registro interno do agendamento do blog",
    html_content: serializeSettings(defaults),
    published: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
  if (insertError) {
    throw new Error(`Falha ao criar configuração inicial da automação: ${insertError.message}`);
  }

  return defaults;
};

export const runBlogAutomation = async (
  options: BlogAutomationRunOptions = {}
): Promise<BlogAutomationRunResult> => {
  const { client: authClient, session } = await authenticateAutomationClient();
  const settings = await getOrCreateAutomationSettings(authClient);
  const now = new Date();

  if (!options.force && (!settings.enabled || !settings.next_run_at)) {
    return {
      ok: true,
      skipped: true,
      reason: settings.enabled ? "Sem próxima execução agendada." : "Automação desativada.",
    };
  }

  if (!options.force && settings.next_run_at && new Date(settings.next_run_at) > now) {
    return {
      ok: true,
      skipped: true,
      reason: "Ainda não chegou o horário da próxima execução.",
    };
  }

  const publish = typeof options.publish === "boolean" ? options.publish : settings.publish_enabled;
  const siteUrl = options.siteUrl || DEFAULT_SITE_URL;

  await authClient
    .from("blog_posts")
    .update({
      html_content: serializeSettings({
        ...settings,
        last_status: "running",
        last_error: null,
      }),
      updated_at: now.toISOString(),
    })
    .eq("slug", SETTINGS_SLUG);

  try {
    const generatedPost = options.testMode ? buildTestPost() : await generateBlogPost(authClient);
    const finalPost = options.testMode
      ? {
          ...generatedPost,
          title: `[Teste técnico] ${generatedPost.title}`,
          slug: `${generatedPost.slug}-teste`,
        }
      : generatedPost;

    await publishViaFrontend(finalPost, { siteUrl, publish, session });
    const verifiedPost = await verifyPostExists(authClient, finalPost.slug);

    return {
      ok: true,
      slug: finalPost.slug,
      title: finalPost.title,
      published: verifiedPost.published,
      verified: true,
      postId: verifiedPost.id,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro desconhecido na automação";
    return {
      ok: false,
      reason: message,
    };
  }
};

export const updateAutomationAfterRun = async (
  result: BlogAutomationRunResult,
  intervalMinutes: number
) => {
  const client = await authenticateAutomationClient();
  const current = await getOrCreateAutomationSettings(client.client);
  const now = new Date();
  const nextRun = new Date(now.getTime() + intervalMinutes * 60_000).toISOString();

  const payload: BlogAutomationSettings = result.ok
    ? {
        ...current,
        last_run_at: now.toISOString(),
        last_success_at: now.toISOString(),
        next_run_at: nextRun,
        last_status: result.skipped ? "scheduled" : "success",
        last_error: null,
        last_generated_slug: result.slug || null,
      }
    : {
        ...current,
        last_run_at: now.toISOString(),
        next_run_at: nextRun,
        last_status: "error",
        last_error: result.reason || "Falha na automação",
      };

  const { error } = await client.client
    .from("blog_posts")
    .update({
      html_content: serializeSettings(payload),
      updated_at: now.toISOString(),
    })
    .eq("slug", SETTINGS_SLUG);
  if (error) {
    throw new Error(`Falha ao atualizar status da automação: ${error.message}`);
  }
};

export const loadAutomationSettings = async () => {
  const client = await authenticateAutomationClient();
  return getOrCreateAutomationSettings(client.client);
};
