# Open Graph Tags - Compartilhamento Social Dinâmico

## Resumo da Solução Implementada

Foi implementada uma solução **híbrida de 2 camadas** para corrigir o problema de compartilhamento social nos posts do blog:

### Camada 1: Supabase Edge Function (API)
- **Arquivo**: `supabase/functions/get-blog-metadata/index.ts`
- **Função**: Retorna meta tags em JSON para cada post
- **Endpoint**: `https://seu-supabase.functions.supabase.co/functions/v1/get-blog-metadata?slug=SLUG`
- **Uso**: Redes sociais consultam esse endpoint para gerar previews dinâmicos

### Camada 2: Vite Plugin (Middleware)
- **Arquivo**: `vite-plugin-og-tags.ts`
- **Função**: Injeta meta tags no HTML antes de enviar para o cliente
- **Benefício**: Crawlers sociais recebem meta tags corretas direto no primeiro load

## Como Funciona

```
1. Social Crawler (Facebook, LinkedIn, etc.)
   ↓
2. Acessa www.technexos.com.br/blog/material
   ↓
3. Vite Plugin intercepta requisição
   ↓
4. Consulta Supabase pelo post "material"
   ↓
5. Injeta meta tags específicas do post no HTML
   ↓
6. Crawler recebe HTML + meta tags corretas
   ↓
7. Resultado: Preview correto no compartilhamento
```

## Instalação e Deploy

### Passo 1: Deploy da Edge Function

```bash
# No diretório do projeto
supabase functions deploy get-blog-metadata
```

Isso criará o endpoint:
```
https://[SUPABASE_PROJECT_ID].supabase.co/functions/v1/get-blog-metadata
```

### Passo 2: Configurar Variáveis de Ambiente

Não é necessário adicionar nada novo ao `.env`. O plugin usa as variáveis já existentes:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Passo 3: Build e Deploy

```bash
npm run build
npm run preview  # Para testar localmente
```

Depois faça deploy normalmente no Vercel/seu servidor.

## Testes

### Teste Local (Simulado)

1. **Build do projeto**:
```bash
npm run build
npm run preview
```

2. **Teste com curl**:
```bash
curl "http://localhost:4173/blog/material"
```

Procure por meta tags como:
```html
<meta property="og:title" content="Seu Título do Post" />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
```

### Teste com Redes Sociais (Antes e Depois)

#### Facebook
1. Acesse: https://developers.facebook.com/tools/debug/
2. Cole: `https://www.technexos.com.br/blog/material`
3. Clique em "Scrape Again"
4. Verifique se mostra o título e descrição corretos

#### LinkedIn
1. Acesse: https://www.linkedin.com/feed/update/urn:li:activity:xxx/
2. Cole o link do seu post
3. Verifique o preview gerado

#### Twitter/X
1. Use: https://cards-dev.twitter.com/validator
2. Cole: `https://www.technexos.com.br/blog/material`
3. Verifique o preview

### Teste da Edge Function Diretamente

```bash
# Substitua SUPABASE_URL e slug
curl "https://[SEU_SUPABASE_URL]/functions/v1/get-blog-metadata?slug=material" \
  -H "Authorization: Bearer [SEU_ANON_KEY]"
```

Resposta esperada:
```json
{
  "title": "Título do Post",
  "description": "Descrição do post...",
  "imageUrl": "https://...",
  "url": "https://www.technexos.com.br/blog/material",
  "author": "Roque Rafael Proença",
  "publishedAt": "2024-01-01T10:00:00Z"
}
```

## Arquivos Criados/Modificados

### ✅ Criados
- `supabase/functions/get-blog-metadata/index.ts` - Edge Function
- `src/lib/og-tags.ts` - Utility para injetar meta tags
- `vite-plugin-og-tags.ts` - Middleware Vite
- `OG_TAGS_SETUP.md` - Este arquivo

### ✏️ Modificados
- `src/pages/BlogPost.tsx` - Adicionado uso da nova utility
- `vite.config.ts` - Registrado o plugin

## Funcionamento Técnico

### O Plugin Vite

O plugin funciona em 3 etapas:

1. **Detecção de URL de Blog**
   - Identifica padrão `/blog/[slug]`
   - Verifica se é um bot ou crawler

2. **Consulta ao Supabase**
   ```typescript
   const { data: post } = await supabase
     .from('blog_posts')
     .select('*')
     .eq('slug', slug)
     .eq('published', true)
     .single()
   ```

3. **Injeção de Meta Tags**
   - Substitui as meta tags genéricas pelas específicas do post
   - Injeta antes da tag `</head>`

### A Edge Function

A função Supabase:

1. Recebe `?slug=` como parâmetro
2. Consulta a tabela `blog_posts`
3. Extrai a primeira imagem do HTML do post
4. Retorna JSON com todos os metadados
5. Inclui cache de 1 hora (`max-age=3600`)

## Troubleshooting

### Problema: Meta tags não aparecem no compartilhamento

**Causa 1: Edge Function não foi deployada**
- Solução: Execute `supabase functions deploy get-blog-metadata`

**Causa 2: Variáveis de ambiente não configuradas**
- Solução: Verifique `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`

**Causa 3: Build antigo sendo usado**
- Solução: Limpe cache (`npm run build` com `--reset-cache`)

### Problema: Imagem do post não aparece

**Causa**: Primeira imagem do HTML não foi encontrada
- Solução: A função usa fallback `og-image-blog.png`
- Verifique se há `<img>` tag no início do post

### Problema: Edge Function retorna erro 404

**Causa**: Post não existe ou não está publicado
- Solução: Verifique se o `slug` existe e se `published = true`

## Manutenção Futura

### Para adicionar/atualizar posts

Nada especial! O sistema é automático:
1. Crie o post normalmente no admin
2. Defina `published = true`
3. Compartilhe a URL
4. O plugin e a Edge Function cuidam do resto

### Para customizar meta tags

Edit `src/lib/og-tags.ts` (função `injectOpenGraphTags`) ou `supabase/functions/get-blog-metadata/index.ts`

### Para mudar imagem padrão

Edit os arquivos acima e substitua:
```typescript
const imageUrl = firstImage || "https://www.technexos.com.br/og-image-blog.png";
```

## Performance

- **Edge Function**: Cached em 1 hora (Supabase)
- **Vite Plugin**: Executado apenas em build time
- **Impacto em tempo de build**: ~50-100ms por post

## Segurança

- Edge Function usa `ANON_KEY` (leitura apenas)
- Filtra apenas posts `published = true`
- CORS habilitado para compartilhamento social
- Cache headers configurados corretamente

## Próximas Melhorias (Opcional)

1. **OG Image Generator**: Usar Vercel OG para gerar imagens dinâmicas
2. **Schema.org JSON-LD**: Adicionar dados estruturados para SEO
3. **Rich Snippets**: Implementar marcação estruturada para posts

---

**Data de Implementação**: 2024
**Versão**: 1.0
**Autor**: Roque Rafael Proença
