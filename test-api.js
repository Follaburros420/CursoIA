// Test script for API endpoints
// Run with: node test-api.js

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://your-vercel-app.vercel.app' 
  : 'http://localhost:5174';

async function testWompiCreateSession() {
  console.log('🧪 Testing Wompi Create Session...');
  
  try {
    const response = await fetch(`${baseUrl}/api/wompi/create-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount_in_cents: 5000000, // $50,000 COP
        currency: 'COP',
        reference: `TEST_${Date.now()}`,
        redirect_url: `${baseUrl}/pagos/wompi/redirect`
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Wompi Create Session: SUCCESS');
      console.log('   Checkout URL:', data.checkoutUrl);
    } else {
      const error = await response.text();
      console.log('❌ Wompi Create Session: FAILED');
      console.log('   Error:', error);
    }
  } catch (error) {
    console.log('❌ Wompi Create Session: ERROR');
    console.log('   Error:', error.message);
  }
}

async function testCouponValidation() {
  console.log('\n🧪 Testing Coupon Validation...');
  
  try {
    const response = await fetch(`${baseUrl}/api/coupons/validate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: 'ABOGADOS-IA',
        originalAmount: 10000000 // $100,000 COP
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Coupon Validation: SUCCESS');
      console.log('   Valid:', data.valid);
      console.log('   Discount:', data.discount + '%');
      console.log('   New Amount:', data.discountedAmount);
    } else {
      const error = await response.text();
      console.log('❌ Coupon Validation: FAILED');
      console.log('   Error:', error);
    }
  } catch (error) {
    console.log('❌ Coupon Validation: ERROR');
    console.log('   Error:', error.message);
  }
}

async function testChatbot() {
  console.log('\n🧪 Testing Chatbot...');
  
  try {
    const response = await fetch(`${baseUrl}/api/chatbot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hola, ¿qué cursos tienen disponibles?'
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Chatbot: SUCCESS');
      console.log('   Response:', data.output || data.message);
    } else {
      const error = await response.text();
      console.log('❌ Chatbot: FAILED');
      console.log('   Error:', error);
    }
  } catch (error) {
    console.log('❌ Chatbot: ERROR');
    console.log('   Error:', error.message);
  }
}

async function runTests() {
  console.log('🚀 Starting API Tests...');
  console.log('Base URL:', baseUrl);
  console.log('='.repeat(50));
  
  await testWompiCreateSession();
  await testCouponValidation();
  await testChatbot();
  
  console.log('\n' + '='.repeat(50));
  console.log('✨ Tests completed!');
}

// Run tests
runTests().catch(console.error);
