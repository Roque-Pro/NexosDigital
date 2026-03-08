import { Plugin } from 'vite'
import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

/**
 * Vite plugin to inject Open Graph meta tags for blog posts
 * Detects when a social crawler or bot is accessing a blog URL
 * and injects the correct metadata into the HTML response
 */

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  html_content: string
  created_at: string
  published: boolean
}

const extractFirstImage = (htmlContent: string): string | null => {
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/
  const match = htmlContent.match(imgRegex)
  return match ? match[1] : null
}

const generateMetaTagsHtml = (post: BlogPost): string => {
  const firstImage = extractFirstImage(post.html_content)
  const imageUrl = firstImage || 'https://www.technexos.com.br/og-image-blog.png'
  const description = post.excerpt || post.html_content.substring(0, 160).replace(/<[^>]*>/g, '')
  const postUrl = `https://www.technexos.com.br/blog/${post.slug}`

  return `
    <!-- Dynamic OG Tags for Blog Post -->
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
    <meta name="keywords" content="${escapeHtml(post.title)}, blog, tecnologia, consultoria" />
    <link rel="canonical" href="${postUrl}" />
  `
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

const isBot = (userAgent: string): boolean => {
  const botPatterns = [
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'whatsapp',
    'telegram',
    'viber',
    'googlebot',
    'bingbot',
    'slurp',
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'discordbot',
    'applebot',
  ]
  const userAgentLower = userAgent.toLowerCase()
  return botPatterns.some((pattern) => userAgentLower.includes(pattern))
}

export default function vitePluginOgTags(): Plugin {
  let supabase: any
  let htmlContent: string

  return {
    name: 'vite-plugin-og-tags',
    configResolved(config) {
      // Initialize Supabase client
      const supabaseUrl = process.env.VITE_SUPABASE_URL || ''
      const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || ''

      if (supabaseUrl && supabaseKey) {
        supabase = createClient(supabaseUrl, supabaseKey)
      }
    },
    async transformIndexHtml(html, ctx) {
      htmlContent = html

      // Only apply transformation in production or when accessed via bot
      const userAgent = ctx.request?.headers?.['user-agent'] || ''
      const url = ctx.request?.url || ''

      // Check if it's a blog post URL and either a bot or production build
      const blogPostMatch = url.match(/\/blog\/([a-zA-Z0-9\-_]+)/)

      if (blogPostMatch && supabase) {
        const slug = blogPostMatch[1]

        try {
          // Fetch blog post from Supabase
          const { data: post } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('slug', slug)
            .eq('published', true)
            .single()

          if (post) {
            const metaTagsHtml = generateMetaTagsHtml(post)
            const title = `${post.title} | TechNexos Blog`

            // Replace generic meta tags with specific ones
            let modifiedHtml = html
              .replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
              .replace(
                /(<meta property="og:type"[^>]*>)/i,
                metaTagsHtml + '$1'
              )

            // If the og:type meta tag wasn't found, insert after the head opening tag
            if (modifiedHtml === html) {
              modifiedHtml = html.replace(
                /(<\/head>)/i,
                `${metaTagsHtml}$1`
              )
            }

            return modifiedHtml
          }
        } catch (error) {
          console.error('Error fetching blog post metadata:', error)
        }
      }

      return html
    },
  }
}
