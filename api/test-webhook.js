export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('🧪 Test webhook called');
  console.log('📥 Method:', req.method);
  console.log('📥 Headers:', req.headers);
  console.log('📥 Body:', req.body);

  try {
    const webhookUrl = 'https://appn8n.coinestate.com.co/webhook-test/a609b346-3941-43e3-ae05-0a6c3c189400';
    const testMessage = req.body?.message || 'Test message from CursoIA';
    
    console.log('🔄 Testing webhook:', webhookUrl);
    console.log('📤 Test payload:', { message: testMessage });
    
    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'CursoIA-Test/1.0',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ 
        message: testMessage,
        timestamp: new Date().toISOString(),
        source: 'test-endpoint',
        test: true
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    console.log('📡 Test response status:', response.status);
    console.log('📡 Test response headers:', Object.fromEntries(response.headers.entries()));

    const responseText = await response.text();
    console.log('📥 Raw test response:', responseText);
    
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.log('⚠️ Test response is not JSON:', responseText);
      data = { output: responseText };
    }

    return res.status(200).json({
      success: true,
      webhookUrl,
      testMessage,
      webhookStatus: response.status,
      webhookResponse: data,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Test webhook error:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });

    return res.status(200).json({
      success: false,
      error: error.message,
      errorType: error.name,
      timestamp: new Date().toISOString()
    });
  }
}
