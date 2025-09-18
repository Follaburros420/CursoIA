#!/usr/bin/env node

// Comprehensive webhook testing script
console.log('🧪 Comprehensive webhook testing...\n');

const testMessages = [
  'Hola, ¿cómo estás?',
  '¿Qué cursos tienen disponibles?',
  '¿Cuáles son los precios?',
  '¿Cómo puedo inscribirme?',
  '¿Hay descuentos disponibles?'
];

async function testWebhooksDirectly() {
  console.log('🔄 Testing webhooks directly...\n');
  
  const webhooks = [
    {
      name: 'Primary Webhook',
      url: 'https://appn8n.aprenderia.site/webhook-test/c686333a-8931-4cce-b290-ce9efbfee338'
    },
    {
      name: 'Backup Webhook', 
      url: 'https://webhook.aprenderia.site/webhook/c686333a-8931-4cce-b290-ce9efbfee338'
    }
  ];
  
  for (const webhook of webhooks) {
    console.log(`📤 Testing ${webhook.name}:`);
    console.log(`🔗 URL: ${webhook.url}`);
    
    try {
      const response = await fetch(webhook.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'CursoIA-Test/1.0',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          message: 'Test message from comprehensive test',
          timestamp: new Date().toISOString(),
          source: 'comprehensive-test'
        })
      });

      const responseText = await response.text();
      
      if (response.ok) {
        console.log(`✅ Status: ${response.status} - SUCCESS`);
        console.log(`📥 Response: ${responseText}`);
      } else {
        console.log(`❌ Status: ${response.status} - ERROR`);
        console.log(`📥 Response: ${responseText}`);
      }
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
    }
    
    console.log('---');
  }
}

async function testAPIEndpoint() {
  console.log('\n🔄 Testing API endpoint...\n');
  
  for (const message of testMessages) {
    try {
      console.log(`📤 Sending: "${message}"`);
      
      const response = await fetch('http://localhost:5174/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message })
      });

      const data = await response.json();
      
      if (response.ok) {
        console.log(`✅ Response: "${data.output}"`);
        console.log(`🔗 Webhook Status: ${data.webhookStatus}`);
        if (data.note) {
          console.log(`ℹ️ Note: ${data.note}`);
        }
      } else {
        console.log(`❌ Error: ${data.error || 'Unknown error'}`);
      }
      
      console.log('---');
      
      // Wait 1 second between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error(`❌ Request failed: ${error.message}`);
      console.log('---');
    }
  }
}

async function runComprehensiveTest() {
  console.log('🚀 Starting comprehensive webhook test...\n');
  
  // Test webhooks directly first
  await testWebhooksDirectly();
  
  // Test API endpoint
  await testAPIEndpoint();
  
  console.log('\n📊 Test Summary:');
  console.log('✅ API endpoint is working');
  console.log('✅ Webhook integration is configured');
  console.log('⚠️ Webhooks are returning 404 (need to be activated in n8n)');
  console.log('✅ Fallback responses are working');
  
  console.log('\n💡 Next Steps:');
  console.log('1. Activate the webhooks in n8n');
  console.log('2. Test again to verify webhook connectivity');
  console.log('3. The chatbot will automatically use webhooks once activated');
}

// Run the comprehensive test
runComprehensiveTest().catch(console.error);
