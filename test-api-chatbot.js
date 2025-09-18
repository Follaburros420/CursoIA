#!/usr/bin/env node

// Test script for chatbot API
console.log('🤖 Testing chatbot API endpoint...\n');

async function testChatbotAPI() {
  const testMessage = 'Hola, esto es una prueba del chatbot';
  
  try {
    console.log('📤 Sending message to API:', testMessage);
    console.log('🔄 URL: http://localhost:5174/api/chatbot');
    
    const response = await fetch('http://localhost:5174/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: testMessage })
    });

    console.log('📡 Response status:', response.status);
    console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));

    const responseText = await response.text();
    console.log('📥 Raw response:', responseText);
    
    if (response.ok) {
      try {
        const data = JSON.parse(responseText);
        console.log('✅ Parsed response:', JSON.stringify(data, null, 2));
        
        if (data.webhookStatus) {
          console.log('🔗 Webhook status:', data.webhookStatus);
        }
        
        if (data.note) {
          console.log('ℹ️ Note:', data.note);
        }
        
      } catch (parseError) {
        console.log('⚠️ Response is not JSON, but request was successful');
      }
    } else {
      console.error('❌ API returned error status:', response.status);
      console.error('❌ Error response:', responseText);
    }

  } catch (error) {
    console.error('❌ Error testing API:', {
      message: error.message,
      name: error.name,
      code: error.code
    });
    
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Tip: Make sure the development server is running (npm run dev)');
    }
  }
}

// Run the test
testChatbotAPI();
