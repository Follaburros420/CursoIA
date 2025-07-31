export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('🤖 Chatbot webhook called');

  try {
    const { message } = req.body || {};

    if (!message) {
      console.error('❌ No message received');
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log('📥 Message received:', message);

    // Forward message to external webhook
    const webhookUrl = 'https://appn8n.coinestate.com.co/webhook-test/a609b346-3941-43e3-ae05-0a6c3c189400';

    console.log('🔄 Attempting to send to webhook:', webhookUrl);
    console.log('📤 Payload:', { message });

    try {
      // Create AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'CursoIA-Chatbot/1.0',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          message: message,
          timestamp: new Date().toISOString(),
          source: 'robotino-chat'
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      console.log('📡 Webhook response status:', response.status);
      console.log('📡 Webhook response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Webhook error response:', errorText);
        throw new Error(`Webhook responded with status: ${response.status} - ${errorText}`);
      }

      const responseText = await response.text();
      console.log('📥 Raw webhook response:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.log('⚠️ Response is not JSON, using as text:', responseText);
        data = { output: responseText };
      }

      console.log('✅ Parsed webhook response:', data);

      // Return the response from the external webhook
      return res.status(200).json({
        success: true,
        output: data.output || data.message || data.response || responseText || 'Mensaje procesado correctamente.',
        timestamp: new Date().toISOString(),
        webhookStatus: 'success'
      });

    } catch (webhookError) {
      console.error('❌ Webhook error details:', {
        message: webhookError.message,
        name: webhookError.name,
        stack: webhookError.stack
      });

      // Check if it's a timeout error
      if (webhookError.name === 'AbortError') {
        console.error('⏰ Webhook timeout after 10 seconds');
      }

      // Fallback response if webhook fails
      return res.status(200).json({
        success: true,
        output: 'Gracias por tu mensaje. Un asesor se pondrá en contacto contigo pronto.',
        timestamp: new Date().toISOString(),
        webhookStatus: 'failed',
        error: webhookError.message
      });
    }

  } catch (error) {
    console.error('❌ Chatbot error:', error.message);
    return res.status(500).json({
      error: 'Server error',
      output: 'Lo siento, hay un problema de conexión. Por favor, intenta más tarde.',
      message: error.message
    });
  }
}
