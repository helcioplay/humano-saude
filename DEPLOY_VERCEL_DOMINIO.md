# 🌐 GUIA COMPLETO: CONFIGURAR DOMÍNIO NA VERCEL

## 📋 RESUMO DAS 4 ETAPAS EXECUTADAS

### ✅ ETAPA 1: Configurado .env.local
```bash
GOOGLE_CLIENT_ID=377837073788-2tipolvnkk62edjagj314te2agevigus.apps.googleusercontent.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX (substituir quando criar no GA)
NEXT_PUBLIC_META_PIXEL_ID=1572724200440814
```

### ✅ ETAPA 2: Página /obrigado criada
- Rota: `/app/(public)/obrigado/page.tsx`
- Design: Black premium com ícone de sucesso animado
- CTAs: WhatsApp + Voltar ao início

### ✅ ETAPA 3: Google Analytics integrado
- Componente: `/app/components/GoogleAnalytics.tsx`
- Helpers: `trackLeadSubmission()`, `trackCalculation()`, `trackWhatsAppClick()`
- Integrado no layout: `/app/(public)/layout.tsx`

### ✅ ETAPA 4: Migrations prontas (execute manualmente)
- Ver instruções em: `EXECUTAR_MIGRATIONS.md`

---

## 🚀 DEPLOY NA VERCEL + DOMÍNIO

### PASSO 1: Fazer Deploy Inicial

#### 1.1 - Commit e Push do Código
```bash
cd "/Users/helciomattos/Desktop/HUMANO SAUDE SITE"
git add .
git commit -m "feat: Landing page completa com 13 componentes + API routes"
git push origin main
```

#### 1.2 - Criar Projeto na Vercel
1. Acesse: https://vercel.com/new
2. Importe o repositório: `helcioplay/humano-saude`
3. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

#### 1.3 - Adicionar Environment Variables
Clique em **Environment Variables** e adicione:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tcfwuykrzeialpakfdkc.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnd1eWtyemVpYWxwYWtmZGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NDIzMjYsImV4cCI6MjA4NjIxODMyNn0.rb_BkXP0k0Sbpx7Xr_1NA9vEKNeU5RW9hMrJCIQHX64

SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnd1eWtyemVpYWxwYWtmZGtjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDY0MjMyNiwiZXhwIjoyMDg2MjE4MzI2fQ.is5h_5B3Mxr0QOv9R0xzT9Kjo07shF-5Is-oK_08e70

GOOGLE_CLIENT_ID=377837073788-2tipolvnkk62edjagj314te2agevigus.apps.googleusercontent.com

NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

NEXT_PUBLIC_META_PIXEL_ID=1572724200440814
```

4. Clique em **Deploy**
5. Aguarde ~2-3 minutos
6. Anote a URL temporária: `https://humano-saude-xxx.vercel.app`

---

### PASSO 2: Configurar Domínio Personalizado

#### 2.1 - Adicionar Domínio na Vercel
1. No projeto implantado, vá em: **Settings** → **Domains**
2. Clique em **Add Domain**
3. Digite: `humanosaude.com.br`
4. Clique em **Add**

#### 2.2 - Vercel vai pedir para configurar DNS
Você verá uma tela com registros DNS necessários:

**Opção A - Usar Nameservers da Vercel (RECOMENDADO):**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Opção B - Configurar Registros Manualmente:**
```
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

---

### PASSO 3: Configurar DNS no Registro.br

#### 3.1 - Acessar Painel do Registro.br
1. Acesse: https://registro.br
2. Login com CPF/CNPJ
3. Vá em: **Meus Domínios** → `humanosaude.com.br`

#### 3.2 - Escolha uma das opções:

**OPÇÃO A - Nameservers da Vercel (Mais Simples):**
1. Clique em **Alterar Servidores DNS**
2. Remova os atuais
3. Adicione:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
4. Salve
5. ⏱️ Aguarde 24-48h para propagação

**OPÇÃO B - Manter DNS atual e adicionar registros:**
1. Clique em **Gerenciar Zona DNS**
2. Adicione registro A:
   ```
   Host: @
   Type: A
   Value: 76.76.21.21
   TTL: 3600
   ```
3. Adicione registro CNAME:
   ```
   Host: www
   Type: CNAME
   Value: cname.vercel-dns.com
   TTL: 3600
   ```
4. Salve
5. ⏱️ Aguarde 1-6h para propagação

---

### PASSO 4: Adicionar Subdomain 'www'

1. Volte na Vercel: **Settings** → **Domains**
2. Clique em **Add Domain**
3. Digite: `www.humanosaude.com.br`
4. Selecione: **Redirect to humanosaude.com.br** ✅
5. Clique em **Add**

---

### PASSO 5: Configurar SSL (Automático)

A Vercel configura SSL automaticamente via Let's Encrypt.

1. Aguarde alguns minutos após DNS propagar
2. Verifique status em: **Settings** → **Domains**
3. Deve aparecer: 🔒 **Valid Configuration**

Se aparecer erro:
- Aguarde mais tempo (DNS ainda propagando)
- Clique em **Refresh** depois de 1h

---

### PASSO 6: Atualizar URLs Autorizadas no Google Cloud

#### 6.1 - Voltar no Google Cloud Console
1. Acesse: https://console.cloud.google.com/apis/credentials
2. Clique no OAuth Client ID: "Humano Saúde"

#### 6.2 - Atualizar Origens JavaScript Autorizadas
**REMOVER:**
```
http://localhost:3000
```

**ADICIONAR:**
```
https://humanosaude.com.br
https://www.humanosaude.com.br
https://humano-saude-xxx.vercel.app
```

#### 6.3 - URIs de Redirecionamento (se usar OAuth)
**ADICIONAR:**
```
https://humanosaude.com.br/api/auth/callback/google
https://www.humanosaude.com.br/api/auth/callback/google
```

#### 6.4 - Salvar
Clique em **Save** no topo da página

---

### PASSO 7: Atualizar Configurações do Meta Pixel

1. Acesse: https://business.facebook.com/events_manager2
2. Selecione o Pixel: `1572724200440814`
3. Vá em: **Configurações** → **Domínios Permitidos**
4. Adicione:
   ```
   humanosaude.com.br
   www.humanosaude.com.br
   ```

---

### PASSO 8: Criar Google Analytics Property

#### 8.1 - Acessar Google Analytics
1. Acesse: https://analytics.google.com
2. Admin → **Create Property**

#### 8.2 - Configurar Propriedade
```
Nome da Propriedade: Humano Saúde
Fuso horário: (GMT-03:00) Brasília
Moeda: Real Brasileiro (BRL)
```

#### 8.3 - Configurar Fluxo de Dados
```
Plataforma: Web
URL do site: https://humanosaude.com.br
Nome do fluxo: Produção
```

#### 8.4 - Copiar Measurement ID
Você verá algo como: `G-X1Y2Z3A4B5`

#### 8.5 - Adicionar na Vercel
1. Volte em: **Settings** → **Environment Variables**
2. Edite: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. Cole o ID: `G-X1Y2Z3A4B5`
4. Clique em **Save**
5. Vá em **Deployments** → **Redeploy** (para aplicar)

---

### PASSO 9: Verificar Funcionamento

#### 9.1 - Testar Domínio
```bash
# Testar DNS
dig humanosaude.com.br

# Testar ping
ping humanosaude.com.br
```

#### 9.2 - Acessar Site
1. Abra: https://humanosaude.com.br
2. Verifique:
   - ✅ SSL ativo (cadeado verde)
   - ✅ Formulário funcionando
   - ✅ Calculadora carregando
   - ✅ WhatsApp Float aparecendo

#### 9.3 - Testar API Routes
```bash
# Health check
curl https://humanosaude.com.br/api/leads

# Deve retornar: {"status":"ok","timestamp":"..."}
```

#### 9.4 - Verificar Tracking
1. Abra DevTools (F12)
2. Aba **Network**
3. Filtro: `gtag` ou `fbq`
4. Preencha formulário
5. Verifique requests para:
   - `www.google-analytics.com/g/collect` (GA4)
   - `www.facebook.com/tr` (Meta Pixel)

---

## ✅ CHECKLIST FINAL

- [ ] Código commitado e pushed para GitHub
- [ ] Deploy na Vercel concluído
- [ ] Environment variables configuradas
- [ ] Domínio adicionado na Vercel
- [ ] DNS configurado no Registro.br
- [ ] SSL ativo (HTTPS)
- [ ] Google Cloud OAuth URLs atualizadas
- [ ] Meta Pixel domínios permitidos
- [ ] Google Analytics Property criada
- [ ] Measurement ID adicionado
- [ ] Site acessível em https://humanosaude.com.br
- [ ] Formulário enviando leads
- [ ] Migrations executadas no Supabase
- [ ] Tracking funcionando (GA + Meta Pixel)

---

## 🆘 PROBLEMAS COMUNS

### DNS não propaga
- **Solução**: Aguardar 24-48h. Verificar em: https://dnschecker.org

### SSL com erro
- **Solução**: Aguardar propagação DNS. Depois: Settings → Domains → Refresh

### API retorna 500
- **Solução**: Verificar env vars na Vercel. Redeployar.

### Tracking não funciona
- **Solução**: Verificar Measurement ID. Limpar cache. Testar em aba anônima.

---

## 📞 SUPORTE

- Vercel Docs: https://vercel.com/docs
- Registro.br: https://registro.br/ajuda
- Supabase: https://supabase.com/docs

---

🎉 **Pronto! Seu site estará no ar em humanosaude.com.br**
