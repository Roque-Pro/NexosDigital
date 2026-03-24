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
