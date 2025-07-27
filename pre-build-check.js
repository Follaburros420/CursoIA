#!/usr/bin/env node

// Pre-build verification script
console.log('🔍 Running pre-build verification...\n');

const fs = require('fs');
const path = require('path');

// Check critical files exist
const criticalFiles = [
  'src/components/WompiButton.vue',
  'src/components/professional/PriceCTA.vue',
  'src/components/elite/ElitePricing.vue',
  'api/wompi/generate-signature.js',
  'api/wompi/webhook.js',
  'api/wompi/create-session.js',
  'vite.config.mts',
  'package.json'
];

console.log('📁 Checking critical files:');
let allFilesExist = true;

criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

// Check for common TypeScript issues
console.log('\n🔧 Checking for potential TypeScript issues:');

const wompiButtonContent = fs.readFileSync('src/components/WompiButton.vue', 'utf8');
if (wompiButtonContent.includes('redirectUrl.value')) {
  console.log('✅ redirectUrl properly referenced in computed');
} else {
  console.log('⚠️  redirectUrl might not be properly referenced');
}

if (wompiButtonContent.includes('data-redirect-url')) {
  console.log('✅ redirectUrl used in template');
} else {
  console.log('❌ redirectUrl not found in template');
}

// Check environment variables template
console.log('\n🔐 Checking environment configuration:');
if (fs.existsSync('.env.example')) {
  const envExample = fs.readFileSync('.env.example', 'utf8');
  if (envExample.includes('VITE_WOMPI_PUBLIC_KEY')) {
    console.log('✅ Environment variables template configured');
  } else {
    console.log('⚠️  Environment variables template incomplete');
  }
} else {
  console.log('⚠️  .env.example not found');
}

// Check package.json scripts
console.log('\n📦 Checking package.json scripts:');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (packageJson.scripts && packageJson.scripts.build) {
  console.log('✅ Build script configured');
} else {
  console.log('❌ Build script missing');
}

// Summary
console.log('\n📋 Pre-build verification summary:');
if (allFilesExist) {
  console.log('✅ All critical files present');
  console.log('✅ Ready for build process');
  console.log('\n🚀 Next steps:');
  console.log('1. Run: npm run build');
  console.log('2. If successful, deploy: vercel --prod');
  console.log('3. Configure environment variables in Vercel Dashboard');
  process.exit(0);
} else {
  console.log('❌ Some critical files are missing');
  console.log('❌ Build may fail');
  process.exit(1);
}
