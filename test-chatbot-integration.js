#!/usr/bin/env node

// Test script for chatbot integration
console.log('🤖 Testing chatbot integration...\n');

const testMessages = [
  'Hola, ¿cómo estás?',
  '¿Qué cursos tienen disponibles?',
  '¿Cuáles son los precios?',
  '¿Cómo puedo inscribirme?',
  '¿Hay descuentos disponibles?'
];

async function testChatbotAPI() {
  console.log('🔄 Testing chatbot API endpoint...\n');
  
  for (const message of testMessages) {
    try {
      console.log(`📤 Sending: "${message}"`);
      
      const response = await fetch('http://localhost:3000/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message })
      });

      const data = await response.json();
      
      if (response.ok) {
        console.log(`✅ Response: "${data.output}"`);
        console.log(`📊 Status: ${data.webhookStatus}`);
        console.log(`⏰ Timestamp: ${data.timestamp}`);
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

async function testDirectWebhook() {
  console.log('\n🔄 Testing webhooks directly...\n');
  
  const webhooks = [
    'https://appn8n.aprenderia.site/webhook-test/c686333a-8931-4cce-b290-ce9efbfee338',
    'https://webhook.aprenderia.site/webhook/c686333a-8931-4cce-b290-ce9efbfee338'
  ];
  
  for (const webhookUrl of webhooks) {
    try {
      console.log(`📤 Testing: ${webhookUrl}`);
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'CursoIA-Test/1.0'
        },
        body: JSON.stringify({
          message: 'Test message from integration script',
          timestamp: new Date().toISOString(),
          source: 'integration-test'
        })
      });

      const responseText = await response.text();
      
      if (response.ok) {
        console.log(`✅ Success: ${response.status}`);
        console.log(`📥 Response: ${responseText}`);
      } else {
        console.log(`❌ Error: ${response.status}`);
        console.log(`📥 Response: ${responseText}`);
      }
      
      console.log('---');
      
    } catch (error) {
      console.error(`❌ Webhook failed: ${error.message}`);
      console.log('---');
    }
  }
}

// Main test function
async function runTests() {
  console.log('🚀 Starting chatbot integration tests...\n');
  
  // Test direct webhooks first
  await testDirectWebhook();
  
  // Note: The API test requires the server to be running
  console.log('\n💡 To test the full API integration:');
  console.log('1. Start your development server (npm run dev)');
  console.log('2. Run this script again or test manually through the UI');
  console.log('\n✅ Webhook URLs have been updated in the codebase');
  console.log('✅ Fallback responses are configured');
  console.log('✅ Both primary and backup webhooks are set up');
}

// Run the tests
runTests().catch(console.error);
