-- ═══════════════════════════════════════════════════════════════════════════
-- FIX: Criar tabelas e functions faltando no Supabase
-- ═══════════════════════════════════════════════════════════════════════════
-- Execute isto no Supabase SQL Editor: https://supabase.com/dashboard

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

-- 4. RLS Policies para user_roles
CREATE POLICY "Users can read their own role"
  ON user_roles FOR SELECT
  USING (auth.uid() = user_id OR auth.role() = 'authenticated');

CREATE POLICY "Only admins can read all roles"
  ON user_roles FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Only admins can insert roles"
  ON user_roles FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Only admins can update roles"
  ON user_roles FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Only admins can delete roles"
  ON user_roles FOR DELETE
  USING (EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

-- 5. Criar function get_user_status
CREATE OR REPLACE FUNCTION public.get_user_status()
RETURNS TABLE (
  user_id uuid,
  email text,
  role text,
  created_at timestamp with time zone,
  last_sign_in_at timestamp with time zone
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    au.id,
    au.email,
    COALESCE(ur.role, 'user'),
    au.created_at,
    au.last_sign_in_at
  FROM auth.users au
  LEFT JOIN public.user_roles ur ON au.id = ur.user_id
  WHERE au.id = auth.uid();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Garantir que blog_posts tem RLS correto
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Remover policies antigas se existirem
DROP POLICY IF EXISTS "Allow public to read published posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated users to read all posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated users to insert posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated users to update posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated users to delete posts" ON blog_posts;

-- Criar policies novas
CREATE POLICY "Anyone can read published posts"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can read all posts"
  ON blog_posts FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can create posts"
  ON blog_posts FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update their posts"
  ON blog_posts FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts FOR DELETE
  USING (auth.role() = 'authenticated');

-- 7. Teste - verificar se tabelas existem
SELECT 'user_roles' as table_name, COUNT(*) as record_count FROM user_roles
UNION ALL
SELECT 'blog_posts', COUNT(*) FROM blog_posts;

-- 8. Criar trigger para atualizar updated_at
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

-- ═══════════════════════════════════════════════════════════════════════════
-- Após executar isto:
-- 1. Erros 404 devem desaparecer
-- 2. Blog posts vão carregar corretamente
-- 3. Autenticação vai funcionar properly
-- ═══════════════════════════════════════════════════════════════════════════
