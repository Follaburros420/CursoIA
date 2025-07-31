#!/usr/bin/env node

// Direct webhook test script
console.log('🧪 Testing webhook directly...\n');

const webhookUrl = 'https://appn8n.coinestate.com.co/webhook-test/a609b346-3941-43e3-ae05-0a6c3c189400';
const testMessage = 'Test message from direct script';

async function testWebhook() {
  try {
    console.log('🔄 Sending to:', webhookUrl);
    console.log('📤 Message:', testMessage);
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'CursoIA-DirectTest/1.0',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ 
        message: testMessage,
        timestamp: new Date().toISOString(),
        source: 'direct-test'
      })
    });

    console.log('📡 Response status:', response.status);
    console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));

    const responseText = await response.text();
    console.log('📥 Raw response:', responseText);
    
    if (response.ok) {
      try {
        const data = JSON.parse(responseText);
        console.log('✅ Parsed response:', data);
      } catch (parseError) {
        console.log('⚠️ Response is not JSON, but request was successful');
      }
    } else {
      console.error('❌ Webhook returned error status:', response.status);
    }

  } catch (error) {
    console.error('❌ Error testing webhook:', {
      message: error.message,
      name: error.name
    });
  }
}

// Run the test
testWebhook();
