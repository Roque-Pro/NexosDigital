/**
 * 🚀 SEO OPTIMIZATION SUITE - RANQUEAMENTO AGRESSIVO
 * Otimizações avançadas para dominar SERPs
 */

export interface BlogMetadata {
  title: string;
  slug: string;
  excerpt: string;
  htmlContent: string;
  publishedAt: string;
}

/**
 * 1. INJETAR STRUCTURED DATA (Schema.org JSON-LD)
 * Essencial para rich snippets no Google
 */
export function injectBlogSchema(metadata: BlogMetadata, firstImageUrl?: string) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    description: metadata.excerpt,
    image: firstImageUrl || "https://www.technexos.com.br/og-image-blog.png",
    datePublished: metadata.publishedAt,
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Roque Rafael Proença",
      url: "https://www.technexos.com.br",
    },
    publisher: {
      "@type": "Organization",
      name: "TechNexos Consultoria",
      logo: {
        "@type": "ImageObject",
        url: "https://www.technexos.com.br/logo.png",
        width: 250,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.technexos.com.br/blog/${metadata.slug}`,
    },
    keywords: generateKeywords(metadata.title, metadata.excerpt),
  };

  // Injetar no head
  let scriptElement = document.querySelector('script[type="application/ld+json"][data-blog-schema]');
  if (!scriptElement) {
    scriptElement = document.createElement("script");
    scriptElement.setAttribute("type", "application/ld+json");
    scriptElement.setAttribute("data-blog-schema", "true");
    document.head.appendChild(scriptElement);
  }
  scriptElement.textContent = JSON.stringify(schemaData);
}

/**
 * 2. GERAR PALAVRAS-CHAVE AUTOMATICAMENTE
 * Para melhorar relevância semântica
 */
export function generateKeywords(title: string, excerpt: string): string {
  const seoKeywords = [
    "automação empresarial",
    "inteligência artificial",
    "transformação digital",
    "tecnologia",
    "RPA",
    "machine learning",
    "otimização de processos",
    "consultoria tecnológica",
    "inovação digital",
    "cloud computing",
    "business intelligence",
    "devops",
    "infraestrutura",
    "eficiência operacional",
    "economia de custos",
  ];

  // Combinar title + excerpt + keywords do domínio
  const titleKeywords = title.toLowerCase().split(" ").slice(0, 5);
  const excerptWords = excerpt
    .toLowerCase()
    .split(" ")
    .filter((w) => w.length > 4)
    .slice(0, 5);

  const combined = [...titleKeywords, ...excerptWords, ...seoKeywords].slice(0, 15);
  return combined.join(", ");
}

/**
 * 3. OTIMIZAR HEADINGS (H1, H2, H3...)
 * Crucial para estrutura de página e SEO
 */
export function extractAndOptimizeHeadings(htmlContent: string): {
  h1: string[];
  h2: string[];
  h3: string[];
} {
  const h1Regex = /<h1[^>]*>([^<]+)<\/h1>/gi;
  const h2Regex = /<h2[^>]*>([^<]+)<\/h2>/gi;
  const h3Regex = /<h3[^>]*>([^<]+)<\/h3>/gi;

  return {
    h1: Array.from(htmlContent.matchAll(h1Regex)).map((m) => m[1]),
    h2: Array.from(htmlContent.matchAll(h2Regex)).map((m) => m[1]),
    h3: Array.from(htmlContent.matchAll(h3Regex)).map((m) => m[1]),
  };
}

/**
 * 4. CALCULAR SCORE DE SEO
 * Feedback para melhorar conteúdo
 */
export function calculateSEOScore(metadata: BlogMetadata): {
  score: number;
  feedback: string[];
  suggestions: string[];
} {
  const feedback: string[] = [];
  const suggestions: string[] = [];
  let score = 50; // Base 50

  // Verificar título
  if (metadata.title.length >= 50 && metadata.title.length <= 60) {
    score += 10;
  } else {
    suggestions.push("Título deve ter entre 50-60 caracteres para SEO ideal");
  }

  // Verificar excerpt/meta description
  if (metadata.excerpt.length >= 120 && metadata.excerpt.length <= 160) {
    score += 10;
  } else {
    suggestions.push("Meta description deve ter entre 120-160 caracteres");
  }

  // Verificar comprimento do conteúdo
  const wordCount = metadata.htmlContent.split(" ").length;
  if (wordCount >= 1500) {
    score += 15;
    feedback.push(`✓ Excelente comprimento: ${wordCount} palavras`);
  } else {
    suggestions.push(`Conteúdo com ${wordCount} palavras. Recomendado: 1500+`);
  }

  // Verificar headings
  const headings = extractAndOptimizeHeadings(metadata.htmlContent);
  if (headings.h1.length === 1) {
    score += 10;
    feedback.push("✓ Um H1 encontrado (ideal)");
  } else if (headings.h1.length > 1) {
    suggestions.push("Apenas um H1 deve existir por página");
  }

  if (headings.h2.length >= 2) {
    score += 10;
    feedback.push(`✓ ${headings.h2.length} subtítulos H2 encontrados`);
  } else {
    suggestions.push("Adicione mais subtítulos H2 para melhor estrutura");
  }

  // Verificar links
  const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([^<]+)<\/a>/gi;
  const links = Array.from(metadata.htmlContent.matchAll(linkRegex));
  if (links.length >= 3) {
    score += 10;
    feedback.push(`✓ ${links.length} links internos/externos`);
  } else {
    suggestions.push("Adicione mais links (internos e externos) para SEO");
  }

  // Verificar imagens
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  const images = Array.from(metadata.htmlContent.matchAll(imgRegex));
  if (images.length >= 1) {
    score += 10;
    feedback.push(`✓ ${images.length} imagem(ns) detectada(s)`);
  } else {
    suggestions.push("Adicione imagens para melhorar engajamento");
  }

  // Verificar keywords
  const titleLower = metadata.title.toLowerCase();
  const excerptLower = metadata.excerpt.toLowerCase();
  const contentLower = metadata.htmlContent.toLowerCase();

  if (
    contentLower.includes(titleLower) &&
    titleLower.includes(excerptLower.split(" ")[0])
  ) {
    score += 5;
    feedback.push("✓ Boa distribuição de palavras-chave");
  }

  // Score final
  const finalScore = Math.min(100, score);

  return {
    score: finalScore,
    feedback,
    suggestions,
  };
}

/**
 * 5. GERAR SITEMAP XML ENTRY
 * Para Google rastrear melhor
 */
export function generateSitemapEntry(metadata: BlogMetadata): string {
  return `<url>
    <loc>https://www.technexos.com.br/blog/${metadata.slug}</loc>
    <lastmod>${new Date(metadata.publishedAt).toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}

/**
 * 6. OTIMIZAR ALT TAGS DE IMAGENS
 * Importante para acessibilidade e SEO de imagem
 */
export function optimizeImageAltTags(
  htmlContent: string,
  title: string
): string {
  let optimizedContent = htmlContent;
  let imageIndex = 0;

  const imgRegex = /<img[^>]*src=["']([^"']+)["'][^>]*>/gi;
  optimizedContent = optimizedContent.replace(imgRegex, (match) => {
    imageIndex++;
    // Se não tem alt tag, adicionar
    if (!match.includes('alt="')) {
      const altText = `${title} - Imagem ${imageIndex}`;
      return match.replace(/>$/, ` alt="${altText}">`);
    }
    return match;
  });

  return optimizedContent;
}

/**
 * 7. GERAR OPEN GRAPH TAGS OTIMIZADAS
 */
export function generateOpenGraphTags(
  metadata: BlogMetadata,
  firstImageUrl?: string
): Record<string, string> {
  return {
    "og:title": metadata.title,
    "og:description": metadata.excerpt,
    "og:type": "article",
    "og:url": `https://www.technexos.com.br/blog/${metadata.slug}`,
    "og:image": firstImageUrl || "https://www.technexos.com.br/og-image-blog.png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:site_name": "TechNexos Consultoria",
    "og:locale": "pt_BR",
    "article:published_time": metadata.publishedAt,
    "article:author": "Roque Rafael Proença",
    "article:section": "Tecnologia",
  };
}

/**
 * 8. CONTEÚDO OTIMIZADO PARA FEATURED SNIPPETS
 */
export function createFeaturedSnippetContent(
  mainQuestion: string,
  answers: string[]
): string {
  const snippetHtml = `
    <div class="featured-snippet-optimized">
      <h2>${mainQuestion}</h2>
      <ol>
        ${answers.map((answer) => `<li>${answer}</li>`).join("")}
      </ol>
    </div>
  `;
  return snippetHtml;
}
