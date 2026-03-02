-- ============================================
-- SETUP BANCO - TABELA DE DIAGNÓSTICOS
-- Execute esto no Supabase SQL Editor
-- ============================================

-- CRIAR TABELA DE DIAGNÓSTICOS
CREATE TABLE IF NOT EXISTS diagnostics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  company VARCHAR(255),
  area VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  budget_estimate DECIMAL(10, 2),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- CRIAR ÍNDICES
CREATE INDEX IF NOT EXISTS idx_diagnostics_status ON diagnostics(status);
CREATE INDEX IF NOT EXISTS idx_diagnostics_created_at ON diagnostics(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_diagnostics_area ON diagnostics(area);

-- HABILITAR RLS
ALTER TABLE diagnostics ENABLE ROW LEVEL SECURITY;

-- POLÍTICA: Qualquer um pode inserir (formulário público)
DROP POLICY IF EXISTS diagnostics_insert_public ON diagnostics;
CREATE POLICY diagnostics_insert_public ON diagnostics
  FOR INSERT
  WITH CHECK (true);

-- POLÍTICAS: Apenas usuários autenticados podem ler/atualizar (admin)
DROP POLICY IF EXISTS diagnostics_select_auth ON diagnostics;
CREATE POLICY diagnostics_select_auth ON diagnostics
  FOR SELECT
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS diagnostics_update_auth ON diagnostics;
CREATE POLICY diagnostics_update_auth ON diagnostics
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

DROP POLICY IF EXISTS diagnostics_delete_auth ON diagnostics;
CREATE POLICY diagnostics_delete_auth ON diagnostics
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- GRANT PERMISSÕES
GRANT INSERT ON table diagnostics TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON table diagnostics TO authenticated;
