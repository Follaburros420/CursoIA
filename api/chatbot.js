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
    const webhookUrl = 'https://webhook.coinestate.com.co/webhook/a609b346-3941-43e3-ae05-0a6c3c189400';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message })
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with status: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Webhook response:', data);

      // Return the response from the external webhook
      return res.status(200).json({
        success: true,
        output: data.output || data.message || 'Mensaje procesado correctamente.',
        timestamp: new Date().toISOString()
      });

    } catch (webhookError) {
      console.error('❌ Webhook error:', webhookError.message);

      // Fallback response if webhook fails
      return res.status(200).json({
        success: true,
        output: 'Gracias por tu mensaje. Un asesor se pondrá en contacto contigo pronto.',
        timestamp: new Date().toISOString()
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
