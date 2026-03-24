# 📸 PASSO A PASSO: ATIVAR FEATURED IMAGE NOS POSTS EXISTENTES

## ⚡ QUICK SUMMARY

Você quer que os posts existentes apareçam com suas primeiras imagens automaticamente, certo? Aqui está como:

---

## 🔧 PASSO 1: Executar Migration no Supabase

### 1. Acesse Supabase
```
https://supabase.com
→ Seu projeto
→ SQL Editor
```

### 2. Cole este SQL:

```sql
-- Migration: Adicionar campo featured_image aos posts existentes
-- Execute no Supabase SQL Editor

-- 1. Adicionar coluna featured_image
ALTER TABLE blog_posts 
ADD COLUMN IF NOT EXISTS featured_image TEXT;

-- 2. Criar função para extrair primeira imagem do HTML
CREATE OR REPLACE FUNCTION extract_first_image(html_content TEXT)
RETURNS TEXT AS $$
DECLARE
  img_url TEXT;
BEGIN
  -- Extrai a URL da primeira tag <img src="...">
  SELECT substring(html_content FROM '<img[^>]+src=[''"]([^''\"]+)[''"]')
  INTO img_url;
  RETURN img_url;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 3. Atualizar todos os posts com a primeira imagem extraída do HTML
UPDATE blog_posts
SET featured_image = extract_first_image(html_content)
WHERE featured_image IS NULL AND html_content LIKE '%<img%';

-- 4. Criar trigger para extrair automaticamente em novos posts
CREATE OR REPLACE FUNCTION auto_extract_featured_image()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.featured_image IS NULL THEN
    NEW.featured_image := extract_first_image(NEW.html_content);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 5. Aplicar trigger ao inserir novos posts
DROP TRIGGER IF EXISTS trigger_auto_featured_image ON blog_posts;
CREATE TRIGGER trigger_auto_featured_image
BEFORE INSERT OR UPDATE ON blog_posts
FOR EACH ROW
EXECUTE FUNCTION auto_extract_featured_image();

-- 6. Verificar resultado
SELECT id, title, featured_image FROM blog_posts LIMIT 10;
```

### 3. Clique "Run"

✅ **Pronto!** Todos os posts existentes agora têm `featured_image` preenchido automaticamente

---

## 📝 PASSO 2: Deploy do Código

O código já foi atualizado. Apenas faça:

```bash
npm run build
git add .
git commit -m "feat: featured_image automática - posts existentes + novos"
git push
```

---

## 🎨 PASSO 3: Verificar

### No Admin de Blog (`/blog-admin`):
- Agora aparece campo **"URL da Imagem em Destaque"**
- Você pode customizar manualmente se quiser
- Se deixar vazio, usa primeira imagem do HTML

### Na Listagem (`/blog`):
- Todos os posts antigos agora mostram imagem
- Posts novos extraem a imagem automaticamente

### No Post Individual (`/blog/{slug}`):
- Usa `featured_image` do banco
- Se não tiver, extrai do HTML

---

## 🔄 O QUE MUDA

### ANTES:
```
Post antigo
├─ Sem imagem no card
├─ Usuário tinha que editar para adicionar
└─ Sem campo featured_image
```

### DEPOIS:
```
Post antigo
├─ Imagem automaticamente do HTML
├─ Campo featured_image preenchido
├─ Pode customizar no admin se quiser
└─ Zero modificação necessária! ✨
```

---

## 💡 COMO FUNCIONA

1. **Migration** executa uma função que extrai primeira `<img>` do HTML
2. **Cada post antigo** recebe `featured_image` automaticamente
3. **Novo trigger** faz isso automaticamente para novos posts
4. **Se featured_image vazio** → código extrai do HTML (fallback)
5. **Se featured_image preenchido** → usa ele (prioridade)

---

## 📊 RESULTADO

### Para Posts Existentes:
```
SELECT * FROM blog_posts LIMIT 5;

id             | title                      | featured_image
---------------|----------------------------|------------------------------------------
123...         | "Meu Post 1"              | "https://images.unsplash.com/..."
456...         | "Meu Post 2"              | "https://cdn.exemplo.com/img.jpg"
789...         | "Post Sem Imagem"         | NULL (ou extrai do HTML)
```

### No Blog (`/blog`):
✅ Todos os posts com imagem no card
✅ Sem precisar apagar nada
✅ Zero downtime

---

## ✨ BÔNUS: Customizar Imagem Manualmente

Se um post tem uma imagem ruim no HTML, você pode:

1. Ir para `/blog-admin`
2. Clicar no lápis do post
3. Colar URL melhor em **"URL da Imagem em Destaque"**
4. Clicar "Atualizar"

Pronto! Agora usa essa imagem customizada.

---

## 🎯 CHECKLIST

- [ ] Ir para Supabase SQL Editor
- [ ] Colar o SQL acima
- [ ] Clicar "Run"
- [ ] Verificar resultado (SELECT mostra featured_image preenchido)
- [ ] Deploy código: `git push`
- [ ] Ir para `/blog` e confirmar imagens aparecem
- [ ] SUCESSO! ✨

---

## 🚨 Se Algo Der Errado

### "Erro na migration"
Verifique se a tabela `blog_posts` existe (deve existir)

### "Função já existe"
Normal! O `CREATE OR REPLACE` atualiza a função

### "Imagens ainda não aparecem"
Limpe cache: F12 → Application → Clear Cache
Recarregue a página

### "Wants mais ajuda?"
Todos os posts agora têm campo `featured_image`:
- Se preenchido → usa ele
- Se vazio → extrai do HTML

---

**Pronto! Posts existentes agora têm imagens. Sem apagar nada! 🎉**
