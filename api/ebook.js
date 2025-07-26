module.exports = async function handler(req, res) {
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
    const payload = req.body;
    
    // Validate payload
    if (!payload || typeof payload !== 'object') {
      return res.status(400).json({ error: 'Invalid payload' });
    }

    // Forward to CoinEstate webhook
    const response = await fetch(
      'https://webhook.coinestate.com.co/webhook/96e0fead-eaa4-466d-8f0f-6de162fe8c48',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('CoinEstate webhook error:', response.status, errorText);
      throw new Error(`CoinEstate webhook failed: ${response.status}`);
    }

    const result = await response.json();
    console.log('Ebook submission forwarded successfully:', result);

    return res.json({ 
      success: true, 
      message: 'Ebook submission processed successfully' 
    });
  } catch (error) {
    console.error('Error forwarding ebook submission:', error);
    return res.status(500).json({ 
      error: 'Error processing ebook submission',
      details: error.message 
    });
  }
};
