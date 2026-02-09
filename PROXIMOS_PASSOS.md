# 🚀 DEPLOY CONCLUÍDO - PRÓXIMOS PASSOS

## ✅ STATUS ATUAL

- ✅ **Código:** Pushed para GitHub (commit `147f17c`)
- ✅ **Projeto Vercel:** Vinculado como `helcio-mattos/humano-saude`
- ✅ **Arquivos:** .vercel criado (projeto linkado)

---

## 🔧 ADICIONAR VARIÁVEIS NA VERCEL (2 MINUTOS)

### 1. Acesse o painel de variáveis:
```
https://vercel.com/helcio-mattos/humano-saude/settings/environment-variables
```

### 2. Para cada variável abaixo, clique em "Add New":

#### Variável 1:
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://tcfwuykrzeialpakfdkc.supabase.co
Environments: ✅ Production ✅ Preview ✅ Development
```

#### Variável 2:
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnd1eWtyemVpYWxwYWtmZGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NDIzMjYsImV4cCI6MjA4NjIxODMyNn0.rb_BkXP0k0Sbpx7Xr_1NA9vEKNeU5RW9hMrJCIQHX64
Environments: ✅ Production ✅ Preview ✅ Development
```

#### Variável 3:
```
Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnd1eWtyemVpYWxwYWtmZGtjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDY0MjMyNiwiZXhwIjoyMDg2MjE4MzI2fQ.is5h_5B3Mxr0QOv9R0xzT9Kjo07shF-5Is-oK_08e70
Environments: ✅ Production ✅ Preview ✅ Development
```

#### Variável 4:
```
Name: GOOGLE_CLIENT_ID
Value: 377837073788-2tipolvnkk62edjagj314te2agevigus.apps.googleusercontent.com
Environments: ✅ Production ✅ Preview ✅ Development
```

#### Variável 5:
```
Name: NEXT_PUBLIC_GTM_ID
Value: GTM-K7GX9SVW
Environments: ✅ Production ✅ Preview ✅ Development
```

#### Variável 6:
```
Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: G-22KJKFL28S
Environments: ✅ Production ✅ Preview ✅ Development
```

#### Variável 7:
```
Name: NEXT_PUBLIC_META_PIXEL_ID
Value: 1572724200440814
Environments: ✅ Production ✅ Preview ✅ Development
```

---

## 🚀 FAZER DEPLOY (AUTOMÁTICO)

Após adicionar todas as variáveis:

1. Vá em: **Deployments** → https://vercel.com/helcio-mattos/humano-saude
2. O último deployment vai aparecer (do push no GitHub)
3. Clique em **Redeploy** (se necessário)
4. Aguarde 2-3 minutos
5. ✅ Pronto!

**OU** faça pelo terminal:

```bash
cd "/Users/helciomattos/Desktop/HUMANO SAUDE SITE/frontend"
vercel --prod
```

---

## 🔗 URLS DO PROJETO

- **Dashboard:** https://vercel.com/helcio-mattos/humano-saude
- **Settings:** https://vercel.com/helcio-mattos/humano-saude/settings
- **Deployments:** https://vercel.com/helcio-mattos/humano-saude/deployments
- **Domains:** https://vercel.com/helcio-mattos/humano-saude/settings/domains

---

## ✅ CHECKLIST FINAL

Depois do deploy:

- [ ] 7 variáveis adicionadas
- [ ] Deploy concluído (status: Ready)
- [ ] Site acessível em: https://humano-saude-xxx.vercel.app
- [ ] API `/api/leads` funcionando (teste com curl)
- [ ] Formulário Hero enviando leads
- [ ] Wizard calculadora exibindo resultados
- [ ] Tracking GTM/GA4/Meta Pixel ativo
- [ ] Página /obrigado funcionando

---

## 🧪 TESTES APÓS DEPLOY

```bash
# Substitua pela URL da Vercel
export VERCEL_URL="https://humano-saude-xxx.vercel.app"

# Teste API
curl $VERCEL_URL/api/leads

# Deve retornar:
# {"status":"ok","timestamp":"..."}
```

---

## 🌐 ADICIONAR DOMÍNIO PERSONALIZADO

Depois que tudo funcionar:

1. Vá em: **Settings → Domains**
2. Clique em: **Add Domain**
3. Digite: `humanosaude.com.br`
4. Siga instruções do DNS (Registro.br)
5. Aguarde propagação (24-48h)

Guia completo: `DEPLOY_VERCEL_DOMINIO.md`

---

## 📊 MONITORAMENTO

- **Analytics:** https://vercel.com/helcio-mattos/humano-saude/analytics
- **Logs:** https://vercel.com/helcio-mattos/humano-saude/logs
- **Speed Insights:** https://vercel.com/helcio-mattos/humano-saude/speed-insights

---

🎉 **Seu projeto está pronto para produção!**
Adicione as 7 variáveis e o deploy será automático!
