import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set');
}

const supabase = createClient(SUPABASE_URL ?? '', SUPABASE_SERVICE_ROLE_KEY ?? '');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // CORS handling
  if (req.method === 'OPTIONS') {
    return new Response('ok', { 
      status: 200, 
      headers: corsHeaders 
    });
  }

  try {
    if (!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY is not set');

    const prompt = `
      Crie um post de blog profissional e investigativo em Português do Brasil.
      Tema: Tecnologia, IA, Automação aplicada a Oficinas Automotivas, AutoCenters e Empresas em geral.
      Estilo: Investigativo, SEO Parasita, palavras-chave fortes e atuais.
      Requisitos:
      - Mínimo de 900 palavras.
      - Use H1 para o título.
      - Use H2 para subtemas.
      - Formate o conteúdo em parágrafos claros.
      - O tom deve ser de autoridade e consultoria.
      - Inclua estratégias de SEO agressivo.
      - Retorne os dados em formato JSON com as chaves: "title", "excerpt", "html_content".
      - No "html_content", inclua 3 placeholders de imagem no formato: <img src="IMAGE_PLACEHOLDER_X" alt="Descrição relevante" class="w-full rounded-xl my-8" />
      
      O conteúdo deve focar nos benefícios de ter um sistema, automação de processos e como a tecnologia revoluciona oficinas e empresas.
      JSON format only.
    `;

    const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { response_mime_type: "application/json" }
      })
    });

    if (!geminiRes.ok) {
      const text = await geminiRes.text();
      console.error('Gemini API error', geminiRes.status, text);
      throw new Error(`Gemini API returned ${geminiRes.status}`);
    }

    const geminiData = await geminiRes.json().catch((err) => {
      console.error('Failed to parse Gemini JSON', err);
      throw new Error('Invalid JSON from Gemini API');
    });

    const contentText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!contentText) {
      console.error('Unexpected Gemini response shape', JSON.stringify(geminiData));
      throw new Error('Gemini response missing content');
    }

    let parsed;
    try {
      parsed = JSON.parse(contentText);
    } catch (err) {
      console.error('Failed to parse contentText as JSON', err, contentText);
      throw new Error('Gemini returned invalid JSON content');
    }

    const { title, excerpt, html_content } = parsed;

    if (!title || typeof title !== 'string') {
      console.error('Missing or invalid title from Gemini', parsed);
      throw new Error('Generated content missing title');
    }
    if (!html_content || typeof html_content !== 'string') {
      console.error('Missing or invalid html_content from Gemini', parsed);
      throw new Error('Generated content missing html_content');
    }

    // Image sourcing (Placeholders for Unsplash with relevant keywords)
    const keywords = ["technology", "automation", "mechanic", "business", "software", "car", "ai"];
    const getRandomKeyword = () => keywords[Math.floor(Math.random() * keywords.length)];
    
    let finalHtml = html_content;
    for (let i = 1; i <= 3; i++) {
      const keyword = getRandomKeyword();
      const imageUrl = `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 1000000)}?q=80&w=1200&auto=format&fit=crop&sig=${Math.random()}`;
      // Note: Real unsplash needs specific IDs, but for automation we use source.unsplash or specific curated keywords
      const unsplashUrl = `https://source.unsplash.com/featured/1200x800/?${keyword},tech&sig=${Math.random()}`;
      finalHtml = finalHtml.replace(`IMAGE_PLACEHOLDER_${i}`, unsplashUrl);
    }

    const slug = title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');

    // Try insert, handle possible unique slug conflict by retrying once with suffix
    let insertSlug = slug;
    let insertResult;
    for (let attempt = 0; attempt < 2; attempt++) {
      const { data, error } = await supabase.from('blog_posts').insert({
        title,
        slug: insertSlug,
        excerpt,
        html_content: finalHtml,
        published: true
      }).select();

      if (error) {
        console.error('Supabase insert attempt', attempt, 'error', error);
        // Postgres unique violation code is '23505' — supabase-js surfaces it in error.code
        if (error?.code === '23505' && attempt === 0) {
          // append short random suffix and retry
          insertSlug = `${slug}-${Math.random().toString(36).slice(2, 7)}`;
          console.warn('Slug conflict, retrying with', insertSlug);
          continue;
        }
        throw error;
      }

      insertResult = data;
      break;
    }

    return new Response(JSON.stringify({ success: true, post: insertResult?.[0] }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Function error', error);
    const message = error?.message ?? String(error);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
