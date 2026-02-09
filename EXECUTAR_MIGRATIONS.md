# 🚀 EXECUTAR MIGRATIONS NO SUPABASE

## Passo a Passo:

### 1. Acessar Supabase Dashboard
- Acesse: https://supabase.com/dashboard/project/tcfwuykrzeialpakfdkc
- Login com sua conta

### 2. Abrir SQL Editor
- No menu lateral: **SQL Editor**
- Clique em: **+ New Query**

### 3. Executar Migration 1: planos_saude
```sql
-- Copie e cole TODO o conteúdo do arquivo:
-- frontend/supabase/migrations/20260209_create_planos_table.sql
```
- Clique em **RUN** (▶️)
- Aguarde confirmação: "Success. No rows returned"

### 4. Executar Migration 2: leads_landing
```sql
-- Copie e cole TODO o conteúdo do arquivo:
-- frontend/supabase/migrations/20260209_create_leads_landing_table.sql
```
- Clique em **RUN** (▶️)
- Aguarde confirmação: "Success. No rows returned"

### 5. Verificar Tabelas Criadas
- No menu lateral: **Table Editor**
- Você deve ver:
  - ✅ planos_saude (com 13 registros de seed)
  - ✅ leads_landing (vazia, pronta para receber leads)

### 6. Verificar RLS (Row Level Security)
- Clique em cada tabela → **RLS**
- Deve ter:
  - planos_saude: Policy "Public read" (SELECT)
  - leads_landing: Policy "Public insert" (INSERT)

---

## ⚠️ IMPORTANTE: Depois de executar, me confirme aqui!
Quando terminar, digite: "Migrations executadas com sucesso"
