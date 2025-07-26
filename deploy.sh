#!/bin/bash

# Deploy script for Vercel with Wompi integration

echo "🚀 Deploying to Vercel with Wompi integration..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment completed!"
echo ""
echo "📋 Next steps:"
echo "1. Configure environment variables in Vercel dashboard:"
echo "   - WOMPI_PUBLIC_KEY"
echo "   - WEBHOOK_INTEGRITY_SECRET"
echo ""
echo "2. Update Wompi webhook URL to:"
echo "   https://your-domain.vercel.app/api/wompi/webhook"
echo ""
echo "3. Test the payment flow"
echo ""
echo "🔗 Useful links:"
echo "   - Vercel Dashboard: https://vercel.com/dashboard"
echo "   - Wompi Dashboard: https://comercios.wompi.co/"
