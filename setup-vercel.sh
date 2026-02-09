#!/bin/bash

# Script para configurar variáveis na Vercel via CLI
# Uso: chmod +x setup-vercel.sh && ./setup-vercel.sh

echo "🚀 Configurando variáveis de ambiente na Vercel..."
echo ""

# Instalar Vercel CLI se necessário
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm i -g vercel
fi

# Login na Vercel
echo "🔐 Faça login na Vercel..."
vercel login

# Link do projeto
echo "🔗 Vinculando projeto..."
cd frontend
vercel link

# Adicionar variáveis
echo "📝 Adicionando variáveis de ambiente..."

vercel env add NEXT_PUBLIC_SUPABASE_URL production preview development <<EOF
https://tcfwuykrzeialpakfdkc.supabase.co
EOF

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production preview development <<EOF
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnd1eWtyemVpYWxwYWtmZGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NDIzMjYsImV4cCI6MjA4NjIxODMyNn0.rb_BkXP0k0Sbpx7Xr_1NA9vEKNeU5RW9hMrJCIQHX64
EOF

vercel env add SUPABASE_SERVICE_ROLE_KEY production preview development <<EOF
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnd1eWtyemVpYWxwYWtmZGtjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDY0MjMyNiwiZXhwIjoyMDg2MjE4MzI2fQ.is5h_5B3Mxr0QOv9R0xzT9Kjo07shF-5Is-oK_08e70
EOF

vercel env add GOOGLE_CLIENT_ID production preview development <<EOF
377837073788-2tipolvnkk62edjagj314te2agevigus.apps.googleusercontent.com
EOF

vercel env add NEXT_PUBLIC_GTM_ID production preview development <<EOF
GTM-K7GX9SVW
EOF

vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID production preview development <<EOF
G-22KJKFL28S
EOF

vercel env add NEXT_PUBLIC_META_PIXEL_ID production preview development <<EOF
1572724200440814
EOF

echo ""
echo "✅ Variáveis configuradas com sucesso!"
echo ""
echo "🚀 Fazendo deploy..."
vercel --prod

echo ""
echo "🎉 Deploy concluído! Acesse: https://seu-projeto.vercel.app"
