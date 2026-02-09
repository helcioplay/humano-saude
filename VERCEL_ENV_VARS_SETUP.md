# 🔐 VARIÁVEIS DE AMBIENTE - COPIAR NA VERCEL

## 📋 INSTRUÇÕES:
1. Acesse: https://vercel.com/helcioplay/humano-saude/settings/environment-variables
2. Para cada variável abaixo, clique em "Add New"
3. Cole o NAME e VALUE exatamente como está
4. Marque: ✅ Production ✅ Preview ✅ Development
5. Clique em "Save"

---

## 📦 VARIÁVEIS (7 no total)

### 1. SUPABASE URL
**Name:**
```
NEXT_PUBLIC_SUPABASE_URL
```
**Value:**
```
https://tcfwuykrzeialpakfdkc.supabase.co
```

---

### 2. SUPABASE ANON KEY
**Name:**
```
NEXT_PUBLIC_SUPABASE_ANON_KEY
```
**Value:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnd1eWtyemVpYWxwYWtmZGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NDIzMjYsImV4cCI6MjA4NjIxODMyNn0.rb_BkXP0k0Sbpx7Xr_1NA9vEKNeU5RW9hMrJCIQHX64
```

---

### 3. SUPABASE SERVICE ROLE KEY ⚠️
**Name:**
```
SUPABASE_SERVICE_ROLE_KEY
```
**Value:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnd1eWtyemVpYWxwYWtmZGtjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDY0MjMyNiwiZXhwIjoyMDg2MjE4MzI2fQ.is5h_5B3Mxr0QOv9R0xzT9Kjo07shF-5Is-oK_08e70
```
⚠️ **IMPORTANTE: Nunca exponha esta chave no frontend!**

---

### 4. GOOGLE CLIENT ID
**Name:**
```
GOOGLE_CLIENT_ID
```
**Value:**
```
377837073788-2tipolvnkk62edjagj314te2agevigus.apps.googleusercontent.com
```

---

### 5. GOOGLE TAG MANAGER
**Name:**
```
NEXT_PUBLIC_GTM_ID
```
**Value:**
```
GTM-K7GX9SVW
```

---

### 6. GOOGLE ANALYTICS
**Name:**
```
NEXT_PUBLIC_GA_MEASUREMENT_ID
```
**Value:**
```
G-22KJKFL28S
```

---

### 7. META PIXEL
**Name:**
```
NEXT_PUBLIC_META_PIXEL_ID
```
**Value:**
```
1572724200440814
```

---

## ✅ CHECKLIST

Após adicionar todas as variáveis:

- [ ] 7 variáveis adicionadas na Vercel
- [ ] Todas marcadas para Production + Preview + Development
- [ ] Nenhuma variável com espaços extras
- [ ] Service Role Key mantida privada
- [ ] Fazer Redeploy para aplicar as variáveis

---

## 🔄 REDEPLOY

Depois de adicionar todas as variáveis:

1. Vá em: **Deployments**
2. Encontre o último deployment
3. Clique nos 3 pontinhos (**⋯**)
4. Selecione: **Redeploy**
5. Aguarde ~2-3 minutos
6. Teste: https://seu-projeto.vercel.app

---

## 🧪 TESTAR APÓS DEPLOY

```bash
# Health check da API
curl https://seu-projeto.vercel.app/api/leads

# Deve retornar:
# {"status":"ok","timestamp":"..."}
```

Abra o site e:
1. ✅ Preencha o formulário Hero
2. ✅ Use a calculadora wizard (5 passos)
3. ✅ Verifique tracking no DevTools (F12 → Network)
4. ✅ Teste botões WhatsApp
5. ✅ Confirme redirecionamento /obrigado

---

## 📞 SUPORTE

Se alguma variável não funcionar:
- Verifique se não tem espaços antes/depois
- Confirme que marcou os 3 environments
- Faça Redeploy após adicionar
- Limpe cache do navegador (Ctrl+Shift+R)

🎉 **Pronto! Seu site estará 100% funcional na Vercel!**
