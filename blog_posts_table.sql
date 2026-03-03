-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  html_content TEXT NOT NULL,
  excerpt TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);

-- Create RLS policies
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read published posts
CREATE POLICY "Allow public to read published posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

-- Allow authenticated users to read all posts (for admin)
CREATE POLICY "Allow authenticated users to read all posts"
  ON blog_posts
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Allow authenticated users to insert posts
CREATE POLICY "Allow authenticated users to insert posts"
  ON blog_posts
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to update posts
CREATE POLICY "Allow authenticated users to update posts"
  ON blog_posts
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to delete posts
CREATE POLICY "Allow authenticated users to delete posts"
  ON blog_posts
  FOR DELETE
  USING (auth.role() = 'authenticated');
