import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

/**
 * Script para gerar sitemap.xml corretamente
 * Busca posts do Supabase e rotas estáticas
 */

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://rctrqntkfacxlweezbfu.supabase.co'
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY

const domain = 'https://www.technexos.com.br'

const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/google-meu-negocio-juiz-de-fora', priority: '0.95', changefreq: 'weekly' },
  { path: '/autoclub-pro', priority: '0.9', changefreq: 'weekly' },
  { path: '/about-me', priority: '0.8', changefreq: 'weekly' },
  { path: '/trafego-pago', priority: '0.85', changefreq: 'weekly' },
  { path: '/consultoria-totvs', priority: '0.8', changefreq: 'weekly' },
  { path: '/autonomos', priority: '0.8', changefreq: 'weekly' },
  { path: '/riscos_moldes_moda', priority: '0.85', changefreq: 'weekly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
]

async function main() {
  if (!SUPABASE_ANON_KEY) {
    console.warn('⚠️  SUPABASE_ANON_KEY não definida - pulando geração de sitemap')
    return
  }

  try {
    console.log('🔨 Gerando sitemap.xml...')
    
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    
    // Busca todos os posts publicados
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('slug, updated_at')
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (error || !posts) {
      console.error('❌ Erro ao buscar posts:', error)
      return
    }

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    // Adiciona rotas estáticas
    for (const route of staticRoutes) {
      xml += '  <url>\n'
      xml += `    <loc>${domain}${route.path}</loc>\n`
      xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`
      xml += `    <priority>${route.priority}</priority>\n`
      xml += '  </url>\n'
    }

    // Adiciona blog posts
    for (const post of posts) {
      xml += '  <url>\n'
      xml += `    <loc>${domain}/blog/${post.slug}</loc>\n`
      xml += `    <lastmod>${new Date(post.updated_at).toISOString().split('T')[0]}</lastmod>\n`
      xml += '    <changefreq>monthly</changefreq>\n'
      xml += '    <priority>0.6</priority>\n'
      xml += '  </url>\n'
    }

    xml += '</urlset>'

    // Salva na pasta public (para desenvolvimento e build)
    const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml')
    fs.writeFileSync(publicPath, xml)
    console.log(`✅ Sitemap gerado em ${publicPath}`)

    // Salva na pasta dist (se existir)
    const distPath = path.join(process.cwd(), 'dist', 'sitemap.xml')
    if (fs.existsSync(path.join(process.cwd(), 'dist'))) {
      fs.writeFileSync(distPath, xml)
      console.log(`✅ Sitemap copiado para ${distPath}`)
    }

    console.log('✨ Geração de sitemap concluída!')
  } catch (err) {
    console.error('❌ Erro geral:', err)
    process.exit(1)
  }
}

main()
