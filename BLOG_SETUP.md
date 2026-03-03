# 📝 Setup do Sistema de Blog

## 🎯 O que foi criado

Um sistema completo de blog para trazer clientes via conteúdo:

- **Admin Blog** (`/blog-admin`) - Gerenciar posts (criar, editar, deletar, publicar)
- **Listagem Pública** (`/blog`) - Página pública com todos os posts publicados
- **Post Individual** (`/blog/:slug`) - Página de cada artigo

## 📋 Passos de Setup

### 1️⃣ Criar a Tabela no Supabase

1. Acesse seu projeto no Supabase (https://supabase.com)
2. Vá para **SQL Editor**
3. Cole o conteúdo do arquivo `blog_posts_table.sql` (já criado)
4. Clique em **Run** para executar

Isso vai criar:
- Tabela `blog_posts`
- Índices para performance
- Políticas de segurança (RLS)

### 2️⃣ Acessar o Admin de Blog

1. Faça login em `/auth`
2. Vá para `/crm`
3. Clique no botão "Blog" (azul)
4. Agora você está em `/blog-admin`

## 🚀 Como Usar

### Criar um Post

1. Clique em **"Novo Post"**
2. Preencha:
   - **Título**: Nome do artigo
   - **Slug**: URL automática (gera baseada no título)
   - **Resumo** (opcional): Descrição curta
   - **Conteúdo HTML**: Cole seu HTML aqui
   - **Publicar agora**: Ativa para publicar imediatamente

3. Clique em **"Criar Post"**

### Exemplo de HTML

```html
<h1>Meu Título</h1>
<p>Primeiro parágrafo do artigo.</p>
<h2>Subtítulo</h2>
<p>Mais conteúdo aqui.</p>
<img src="https://exemplo.com/imagem.jpg" alt="Descrição">
<p>Conclusão do artigo.</p>
```

### Editar um Post

1. Na listagem, clique no ícone **lápis** do post
2. Modifique os campos
3. Clique em **"Atualizar Post"**

### Visualizar Post Publicado

1. Na listagem, clique no ícone **olho**
2. Abre em uma aba nova a página pública do post

### Deletar um Post

1. Na listagem, clique no ícone **lixeira**
2. Confirme a exclusão

## 📱 Páginas Públicas

### Página de Listagem
- **URL**: `/blog`
- **O que mostra**: Todos os posts publicados em grid
- **Cards com**: Título, resumo, data, tempo de leitura

### Página Individual
- **URL**: `/blog/seu-slug-aqui`
- **O que mostra**: Post completo com HTML renderizado
- **Recursos**:
  - Título grande
  - Data de publicação
  - Tempo de leitura estimado
  - Conteúdo HTML completo
  - CTA para solicitar diagnóstico

## 🎨 Customizações do HTML

### Formatação

- `<h1>`, `<h2>`, `<h3>` - Títulos
- `<p>` - Parágrafos
- `<strong>` - Negrito
- `<em>` - Itálico
- `<a href="url">Link</a>` - Links

### Mídia

- `<img src="url" alt="desc">` - Imagens
- `<iframe src="url"></iframe>` - Vídeos

### Listas

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### Citações

```html
<blockquote>
  <p>Uma citação importante</p>
</blockquote>
```

### Código

```html
<code>var x = 10;</code>

<pre><code>
function hello() {
  console.log("Hello!");
}
</code></pre>
```

## 🔐 Segurança

- Apenas usuários **autenticados** podem criar/editar/deletar posts
- Qualquer pessoa pode **ler** posts **publicados**
- Rascunhos (não publicados) só aparecem para admin

## 📊 Schema da Tabela

```sql
- id (UUID) - ID único do post
- title (TEXT) - Título do artigo
- slug (TEXT UNIQUE) - URL slug (ex: meu-artigo-importante)
- html_content (TEXT) - Conteúdo HTML completo
- excerpt (TEXT) - Resumo curto
- published (BOOLEAN) - Se está público
- created_at (TIMESTAMP) - Data de criação
- updated_at (TIMESTAMP) - Data última edição
```

## ✨ Dicas

1. **SEO**: O slug é importante! Use palavras-chave (`como-otimizar-suas-vendas`)
2. **Texto**: Deixe um resumo bom em "Resumo" para a listagem
3. **Imagens**: Use URLs externas (hospede no imgur, cloudinary, etc)
4. **Links**: Crie links internos para `/diagnostico-gratuito`
5. **Posts**: Comece com 3-5 posts antes de divulgar o blog

## 🚨 Troubleshooting

### "Post não encontrado"
- Certifique-se que o post está marcado como "Publicado"
- Verifique o slug correto

### "Erro ao carregar posts"
- Confirme que criou a tabela no Supabase
- Verifique as permissões (RLS policies)

### HTML não renderizando
- Valide seu HTML (sem tags abertas)
- Use URLs absolutas para imagens
- Evite scripts/eventos inline por segurança

## 📈 Próximos Passos

1. Crie 5-10 posts sobre sua área de expertise
2. Divulgue o `/blog` nas redes sociais
3. Adicione links para o blog na landing page
4. Faça SEO com palavras-chave relevantes
5. Monitore quais artigos trazem mais clientes

## 🔗 Rotas

```
- /blog-admin (protegida) - Admin de blog
- /blog (pública) - Listagem de posts
- /blog/:slug (pública) - Post individual
```

---

**Dúvidas?** Verifique se tudo está funcionando primeiro localmente antes de fazer push!
