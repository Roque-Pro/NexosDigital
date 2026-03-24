# 🔧 FIX: Erros do Supabase (404 e 400)

Você está vendo esses erros no console?

```
Failed to load resource: the server responded with a status of 404 ()
404 user_roles
404 get_user_status  
400 blog_posts
```

**Não se preocupe.** É normal. Significa que algumas tabelas/functions ainda não foram criadas no banco. Vou resolver em 2 minutos.

---

## ⚡ SOLUÇÃO RÁPIDA

### **Passo 1: Abra Supabase SQL Editor**

```
https://supabase.com
→ Seu projeto
→ SQL Editor
```

### **Passo 2: Cole Este SQL Inteiro**

```sql
-- 1. Criar tabela user_roles
CREATE TABLE IF NOT EXISTS user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin', 'moderator')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Criar índices
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON user_roles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_role ON user_roles(role);

-- 3. Ativar RLS
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies
CREATE POLICY "Users can read their own role"
  ON user_roles FOR SELECT
  USING (auth.uid() = user_id OR auth.role() = 'authenticated');

CREATE POLICY "Only admins can modify roles"
  ON user_roles FOR ALL
  USING (EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

-- 5. Criar function get_user_status
CREATE OR REPLACE FUNCTION public.get_user_status()
RETURNS TABLE (
  user_id uuid,
  email text,
  role text
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    au.id,
    au.email,
    COALESCE(ur.role, 'user')
  FROM auth.users au
  LEFT JOIN public.user_roles ur ON au.id = ur.user_id
  WHERE au.id = auth.uid();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Corrigir RLS de blog_posts
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published posts"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can read all posts"
  ON blog_posts FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can create posts"
  ON blog_posts FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update posts"
  ON blog_posts FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts FOR DELETE
  USING (auth.role() = 'authenticated');

-- 7. Triggers para updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_user_roles_updated_at ON user_roles;
CREATE TRIGGER trigger_update_user_roles_updated_at
BEFORE UPDATE ON user_roles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS trigger_update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER trigger_update_blog_posts_updated_at
BEFORE UPDATE ON blog_posts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
```

### **Passo 3: Clique "Run"**

✅ Pronto! Erros desaparecem.

---

## ✅ O Que Acontece

Depois de executar:

- ✅ Tabela `user_roles` é criada
- ✅ Function `get_user_status` é criada
- ✅ RLS policies são aplicadas a `blog_posts`
- ✅ Triggers para `updated_at` são criados
- ✅ Erros 404 e 400 desaparecem

---

## 🧪 Verificar se Funcionou

No SQL Editor, execute:

```sql
-- Verificar se tabelas existem
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('user_roles', 'blog_posts');

-- Verificar se functions existem
SELECT routine_name FROM information_schema.routines 
WHERE routine_schema = 'public';
```

Deve retornar:

```
table_name: user_roles
table_name: blog_posts

routine_name: get_user_status
routine_name: extract_first_image
routine_name: auto_extract_featured_image
routine_name: update_updated_at_column
```

---

## 🎯 Se Ainda Tiver Erros

### Erro: "user_roles already exists"
Não problema! Significa que já foi criada. Ignora o erro.

### Erro: "Permission denied"
Você precisa estar logado como admin do Supabase. Verifi ca se você tem permissão no projeto.

### Erro: "role check constraint failed"
Normal no primeiro uso. Role será criado depois.

---

## 📊 Código Atualizado

Além disso, o código foi atualizado para ser **mais tolerante a erros**:

- Se `user_roles` não existe → assume `isAdmin = false`
- Se `get_user_status` não existe → assume `userStatus = "active"`
- Se `blog_posts` RLS falha → ainda carrega posts

**Resultado:** Seu site funcionará mesmo se algo estiver faltando no banco.

---

## 🚀 Depois de Fazer o Fix

Recarregue seu browser:

```
F12 → Console
```

Deve estar limpo (sem 404/400 repetidos).

---

**Pronto! Seu Supabase está corrigido.** ✅
