import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

/**
 * Script para pré-renderizar posts e páginas estáticas com OG tags dinâmicas
 * Executa após o build e gera arquivos HTML estáticos para bots de redes sociais
 */

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://rctrqntkfacxlweezbfu.supabase.co'
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  html_content: string
  created_at: string
  published: boolean
}

interface StaticPage {
  path: string
  title: string
  description: string
  image?: string
}

const domain = 'https://www.technexos.com.br'

const staticPages: StaticPage[] = [
  {
    path: '/',
    title: 'TechNexos Digital | Engenharia de Software e Desenvolvimento Web de Performance',
    description: 'A TechNexos desenvolve sites, sistemas SaaS, landing pages e soluções tecnológicas sob medida para empresas que precisam de estabilidade, escala e alta performance.'
  },
  {
    path: '/about-me',
    title: 'Roque Rafael Proença | Arquiteto de Soluções & Estrategista Digital | TechNexos',
    description: 'Especialista em Engenharia de Software com 15+ anos de experiência. Transformando desafios complexos em sistemas robustos, escaláveis e lucrativos.'
  },
  {
    path: '/trafego-pago',
    title: 'Gestão de Tráfego Pago & SEO de Performance | TechNexos Digital',
    description: 'Escale seu faturamento com anúncios agressivos no Meta Ads e Google Ads. Gestão de tráfego pago baseada em dados, ROAS alto e lucro real para sua empresa.'
  },
  {
    path: '/consultoria-totvs',
    title: 'Consultoria TOTVS Fluig & RM | Especialista Roque Rafael Proença',
    description: 'Consultoria técnica especializada em TOTVS Fluig e RM. Automação de processos (BPM), Fórmulas Visuais, suporte estratégico e desenvolvimento sob medida para o seu ERP.'
  },
  {
    path: '/autonomos',
    title: 'Soluções Digitais para Autônomos & Profissionais Liberais | TechNexos',
    description: 'Saia do amadorismo. Tenha sua Página de Vendas, Blog e CRM integrados com entrega em 24h. Ideal para Advogados, Médicos, Consultores e Freelancers.'
  },
  {
    path: '/autoclub-pro',
    title: 'AutoClub Pro | Sistema com Personalização Visual para Serviços Automotivos | TechNexos',
    description: 'AutoClub Pro - Sistema de gestão com personalização visual 100% para vidraçarias, estética, películas, som, capotaria, ar-condicionado e pneuarias.'
  },
  {
    path: '/riscos_moldes_moda',
    title: 'Riscos para Corte e Digitalização de Moldes | Technexos',
    description: 'Digitalização de moldes, ampliação de tamanhos e riscos para corte com encaixe inteligente para confecções de Minas Gerais e Rio de Janeiro.'
  },
  {
    path: '/blog',
    title: 'Blog TechNexos | Estratégias Digitais, Tecnologia e Performance',
    description: 'Artigos sobre desenvolvimento de software, tráfego pago, SEO e automação para escalar seu negócio.'
  }
]

const extractFirstImage = (htmlContent: string): string | null => {
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/
  const match = htmlContent.match(imgRegex)
  return match ? match[1] : null
}

const escapeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}

const generateMetaTagsHtml = (title: string, description: string, url: string, image?: string): string => {
  const imageUrl = image || `${domain}/og-image.png`

  return `
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="TechNexos" />
    <meta property="og:locale" content="pt_BR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${url}" />`
}

const generateBlogPostMetaTagsHtml = (post: BlogPost, domain: string): string => {
  const firstImage = extractFirstImage(post.html_content)
  const imageUrl = firstImage || `${domain}/og-image-blog.png`
  const description = post.excerpt || post.html_content.substring(0, 160).replace(/<[^>]*>/g, '')
  const postUrl = `${domain}/blog/${post.slug}`

  return `
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeHtml(post.title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${postUrl}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(post.title)}" />
    <meta property="og:site_name" content="TechNexos" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="article:published_time" content="${post.created_at}" />
    <meta property="article:author" content="Roque Rafael Proença" />
    <meta property="article:section" content="Tecnologia" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(post.title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${postUrl}" />`
}

async function main() {
  console.log('🔨 Iniciando pré-renderização de tags SEO...')

  // Lê o HTML base gerado pelo build do Vite
  const basePath = path.join(process.cwd(), 'dist', 'index.html')
  let baseHtml: string

  try {
    baseHtml = fs.readFileSync(basePath, 'utf-8')
  } catch {
    console.warn('⚠️  dist/index.html não encontrado - certifique-se de rodar "vite build" antes.')
    return
  }

  // 1. Processar Páginas Estáticas
  console.log('📄 Processando páginas estáticas...')
  for (const page of staticPages) {
    try {
      const pageUrl = `${domain}${page.path === '/' ? '' : page.path}`
      const metaTags = generateMetaTagsHtml(page.title, page.description, pageUrl, page.image)
      
      let pageHtml = baseHtml
        .replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`)
        .replace(/<meta property="og:[^>]*>/gi, '')
        .replace(/<meta name="twitter:[^>]*>/gi, '')
        .replace(/<meta name="description"[^>]*>/gi, '')
        .replace(/<link rel="canonical"[^>]*>/gi, '')
        .replace(/(<\/head>)/i, `${metaTags}\n    $1`)

      if (page.path === '/') {
        // Atualiza o index.html principal
        fs.writeFileSync(basePath, pageHtml)
        console.log('✅ Home Page (index.html)')
      } else {
        // Cria subdiretório e index.html para a rota
        const pageDir = path.join(process.cwd(), 'dist', page.path.substring(1))
        fs.mkdirSync(pageDir, { recursive: true })
        fs.writeFileSync(path.join(pageDir, 'index.html'), pageHtml)
        console.log(`✅ ${page.path}`)
      }
    } catch (err) {
      console.error(`❌ Erro ao processar página ${page.path}:`, err)
    }
  }

  // 2. Processar Blog Posts (se houver chave do Supabase)
  if (!SUPABASE_ANON_KEY) {
    console.warn('⚠️  SUPABASE_ANON_KEY não definida - pulando posts do blog')
  } else {
    try {
      console.log('📝 Processando posts do blog...')
      const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
      
      const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)

      if (error || !posts) {
        console.error('❌ Erro ao buscar posts:', error)
      } else {
        console.log(`📝 Encontrados ${posts.length} posts publicados`)

        for (const post of posts as BlogPost[]) {
          try {
            const metaTags = generateBlogPostMetaTagsHtml(post, domain)
            const title = `${post.title} | TechNexos Blog`

            let postHtml = baseHtml
              .replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
              .replace(/<meta property="og:[^>]*>/gi, '')
              .replace(/<meta name="twitter:[^>]*>/gi, '')
              .replace(/<meta name="description"[^>]*>/gi, '')
              .replace(/<link rel="canonical"[^>]*>/gi, '')
              .replace(/(<\/head>)/i, `${metaTags}\n    $1`)

            const postDir = path.join(process.cwd(), 'dist', 'blog', post.slug)
            fs.mkdirSync(postDir, { recursive: true })
            fs.writeFileSync(path.join(postDir, 'index.html'), postHtml)
            console.log(`✅ Blog: ${post.slug}`)
          } catch (err) {
            console.error(`❌ Erro ao processar blog post ${post.slug}:`, err)
          }
        }
      }
    } catch (err) {
      console.error('❌ Erro ao processar blog:', err)
    }
  }

  console.log('✨ Pré-renderização SEO concluída!')
}

main()

