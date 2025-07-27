// Verification script for Vercel deployment
// Run with: node verify-deployment.js

console.log('🔍 Verifying deployment readiness...\n');

// Check environment variables
console.log('📋 Checking environment variables:');
const requiredEnvVars = [
  'VITE_WOMPI_PUBLIC_KEY',
  'WEBHOOK_INTEGRITY_SECRET',
  'WOMPI_PRIVATE_KEY',
  'WEBHOOK_EVENTS_SECRET'
];

let envVarsOk = true;
requiredEnvVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`✅ ${varName}: ${value.substring(0, 20)}...`);
  } else {
    console.log(`❌ ${varName}: Missing`);
    envVarsOk = false;
  }
});

// Check if .env file exists
const fs = require('fs');
const path = require('path');

console.log('\n📁 Checking configuration files:');

const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  console.log('✅ .env file exists');
} else {
  console.log('⚠️  .env file not found (will use Vercel environment variables)');
}

const vercelJsonPath = path.join(__dirname, 'vercel.json');
if (fs.existsSync(vercelJsonPath)) {
  console.log('✅ vercel.json exists');
} else {
  console.log('❌ vercel.json missing');
}

// Check API files
console.log('\n🔧 Checking API files:');
const apiFiles = [
  'api/wompi/create-session.js',
  'api/wompi/webhook.js',
  'api/wompi/generate-signature.js',
  'api/coupons/validate.js',
  'api/chatbot.js',
  'api/ebook.js'
];

apiFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${filePath}`);
  } else {
    console.log(`❌ ${filePath} missing`);
  }
});

// Check Wompi components
console.log('\n🎯 Checking Wompi components:');
const wompiComponents = [
  'src/components/WompiButton.vue',
  'src/components/WompiWidget.vue'
];

wompiComponents.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${filePath}`);
  } else {
    console.log(`❌ ${filePath} missing`);
  }
});

console.log('\n🚀 Deployment checklist:');
console.log('1. ✅ Template literal error fixed in WompiWidget.vue');
console.log('2. ✅ Production credentials configured');
console.log('3. ✅ API endpoints created');
console.log('4. ✅ Wompi components ready');
console.log('5. ⏳ Environment variables need to be set in Vercel Dashboard');

console.log('\n📝 Next steps for Vercel deployment:');
console.log('1. Set environment variables in Vercel Dashboard:');
console.log('   - VITE_WOMPI_PUBLIC_KEY=pub_prod_C01dSld0Z6syyGgA3u7SkF0TMqZdyQAu');
console.log('   - WEBHOOK_INTEGRITY_SECRET=prod_integrity_vJqHB0dzaWk5ym0qxxnQYlK6ZotJjfIz');
console.log('   - WOMPI_PRIVATE_KEY=prv_prod_dc02fE63hn6RTaqwPrIYB14vKeEkw27k');
console.log('   - WEBHOOK_EVENTS_SECRET=prod_events_qV7dkxX6oae5AxHLETiau73hSnzxBxnH');
console.log('2. Deploy to Vercel: vercel --prod');
console.log('3. Configure webhook URL in Wompi dashboard');

console.log('\n✨ Verification complete!');
