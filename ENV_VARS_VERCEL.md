# 🎯 VARIÁVEIS DE AMBIENTE - VERCEL

## 📋 Copie e cole estas variáveis no painel da Vercel

Acesse: **Settings** → **Environment Variables**

---

### 1️⃣ SUPABASE_URL
```
NEXT_PUBLIC_SUPABASE_URL
```
**Value:**
```
https://tcfwuykrzeialpakfdkc.supabase.co
```
**Environments:** ✅ Production ✅ Preview ✅ Development

---

### 2️⃣ SUPABASE_ANON_KEY
```
NEXT_PUBLIC_SUPABASE_ANON_KEY
```
**Value:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnd1eWtyemVpYWxwYWtmZGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NDIzMjYsImV4cCI6MjA4NjIxODMyNn0.rb_BkXP0k0Sbpx7Xr_1NA9vEKNeU5RW9hMrJCIQHX64
```
**Environments:** ✅ Production ✅ Preview ✅ Development

---

### 3️⃣ SUPABASE_SERVICE_ROLE_KEY
```
SUPABASE_SERVICE_ROLE_KEY
```
**Value:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnd1eWtyemVpYWxwYWtmZGtjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDY0MjMyNiwiZXhwIjoyMDg2MjE4MzI2fQ.is5h_5B3Mxr0QOv9R0xzT9Kjo07shF-5Is-oK_08e70
```
**Environments:** ✅ Production ✅ Preview ✅ Development
⚠️ **ATENÇÃO:** Nunca exponha esta chave no frontend!

---

### 4️⃣ GOOGLE_CLIENT_ID
```
GOOGLE_CLIENT_ID
```
**Value:**
```
377837073788-2tipolvnkk62edjagj314te2agevigus.apps.googleusercontent.com
```
**Environments:** ✅ Production ✅ Preview ✅ Development

---

### 5️⃣ GOOGLE_TAG_MANAGER_ID
```
NEXT_PUBLIC_GTM_ID
```
**Value:**
```
GTM-K7GX9SVW
```
**Environments:** ✅ Production ✅ Preview ✅ Development

---

### 6️⃣ GOOGLE_ANALYTICS_ID
```
NEXT_PUBLIC_GA_MEASUREMENT_ID
```
**Value:**
```
G-22KJKFL28S
```
**Environments:** ✅ Production ✅ Preview ✅ Development

---

### 7️⃣ META_PIXEL_ID
```
NEXT_PUBLIC_META_PIXEL_ID
```
**Value:**
```
1572724200440814
```
**Environments:** ✅ Production ✅ Preview ✅ Development

---

## 🔄 APÓS ADICIONAR TODAS AS VARIÁVEIS

1. Vá em: **Deployments**
2. No último deployment, clique em **⋯** (três pontinhos)
3. Clique em **Redeploy**
4. Aguarde ~2 minutos
5. Teste: https://seu-dominio.vercel.app

---

## ✅ VERIFICAÇÃO

Depois do deploy, teste os endpoints:

```bash
# Health check da API
curl https://seu-dominio.vercel.app/api/leads

# Deve retornar:
# {"status":"ok","timestamp":"2026-02-09T..."}
```

---

## 🆘 TROUBLESHOOTING

**Erro: "Missing environment variable"**
- Verifique se marcou ✅ em todos os environments
- Faça Redeploy após adicionar

**API retorna 500**
- Verifique SUPABASE_SERVICE_ROLE_KEY
- Certifique-se que não tem espaços extras

**Tracking não funciona**
- Verifique se GA_MEASUREMENT_ID começa com "G-"
- Limpe cache do navegador
- Teste em aba anônima
