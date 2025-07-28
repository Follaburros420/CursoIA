module.exports = function handler(req, res) {
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

    // Simple response for now - external API forwarding can be added later
    return res.status(200).json({
      success: true,
      output: 'Gracias por tu mensaje. Un asesor se pondrá en contacto contigo pronto.',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Chatbot error:', error.message);
    return res.status(500).json({
      error: 'Server error',
      output: 'Lo siento, hay un problema de conexión. Por favor, intenta más tarde.',
      message: error.message
    });
  }
};
