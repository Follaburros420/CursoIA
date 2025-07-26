export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    // Validate message
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Forward to CoinEstate chatbot webhook
    const response = await fetch(
      'https://webhook.coinestate.com.co/webhook/a609b346-3941-43e3-ae05-0a6c3c189400',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('CoinEstate chatbot webhook error:', response.status, errorText);
      throw new Error(`Chatbot webhook failed: ${response.status}`);
    }

    const result = await response.json();
    console.log('Chatbot message processed successfully');

    return res.json(result);
  } catch (error) {
    console.error('Error processing chatbot message:', error);
    return res.status(500).json({ 
      error: 'Error processing chatbot message',
      output: 'Lo siento, hay un problema de conexión. Por favor, intenta más tarde o contáctanos por WhatsApp.'
    });
  }
}
