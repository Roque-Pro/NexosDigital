-- ============================================
-- SETUP DO BANCO - APENAS TABELA DE DIAGNÓSTICOS
-- ============================================

-- DELETAR TODAS AS TABELAS ANTIGAS (se existirem)
DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS replacements CASCADE;
DROP TABLE IF EXISTS clients CASCADE;
DROP TABLE IF EXISTS employees CASCADE;
DROP TABLE IF EXISTS inventory CASCADE;
DROP TABLE IF EXISTS diagnostics CASCADE;

-- CRIAR TABELA DE DIAGNÓSTICOS
CREATE TABLE diagnostics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  company VARCHAR(255),
  area VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new', -- new, contacted, quoted, won, lost
  budget_estimate DECIMAL(10, 2),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- CRIAR ÍNDICES PARA PERFORMANCE
CREATE INDEX idx_diagnostics_status ON diagnostics(status);
CREATE INDEX idx_diagnostics_created_at ON diagnostics(created_at DESC);
CREATE INDEX idx_diagnostics_area ON diagnostics(area);

-- HABILITAR RLS (Row Level Security)
ALTER TABLE diagnostics ENABLE ROW LEVEL SECURITY;

-- POLÍTICA: Qualquer um pode inserir (para o formulário público)
CREATE POLICY diagnostics_insert_policy ON diagnostics
  FOR INSERT
  WITH CHECK (true);

-- POLÍTICA: Apenas admin pode ler/atualizar/deletar
-- (você precisará settar uma role de admin no seu usuário)
-- Por enquanto, comentado para facilitar testes
-- CREATE POLICY diagnostics_select_policy ON diagnostics
--   FOR SELECT
--   USING (auth.jwt_claims() ->> 'role' = 'admin');

GRANT ALL PRIVILEGES ON TABLE diagnostics TO authenticated;
GRANT ALL PRIVILEGES ON TABLE diagnostics TO anon;
