#!/usr/bin/env bash
set -euo pipefail

# Ejecuta desde la raíz del proyecto (donde está angular.json)
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

# 1) Compilar Angular
echo "🔨 Compilando Angular..."
npx ng build

# 2) Dejar listo lo que se sube al servidor (solo browser/)
OUT_DIR="$PROJECT_DIR/deploy_out"
SRC_DIR="$PROJECT_DIR/dist/landinpage/browser"

echo "📦 Preparando carpeta de deploy en: $OUT_DIR"
rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

# Copia exactamente lo que necesitas subir a /home/ubuntu/deploy
cp -a "$SRC_DIR"/. "$OUT_DIR"/

echo "✅ Listo. Sube TODO lo que está en:"
echo "   $OUT_DIR"
