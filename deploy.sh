#!/bin/bash

echo "🚀 Script de Deploy - A+ Engenharia Website"
echo "=========================================="
echo ""

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Execute este script no diretório raiz do projeto!"
    exit 1
fi

echo "📦 Instalando dependências..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências!"
    exit 1
fi

echo ""
echo "🔨 Gerando build de produção..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erro ao gerar build!"
    exit 1
fi

echo ""
echo "📤 Fazendo deploy no GitHub Pages..."
npm run deploy

if [ $? -ne 0 ]; then
    echo "❌ Erro ao fazer deploy!"
    exit 1
fi

echo ""
echo "✅ Deploy concluído com sucesso!"
echo ""
echo "🌐 Seu site estará disponível em alguns minutos em:"
echo "   https://gabrieljaccoud.github.io/a-plus-group-website/"
echo ""
echo "📱 WhatsApp: https://wa.me/5522991017777"
echo ""

