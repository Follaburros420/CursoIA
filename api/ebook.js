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

  console.log('📧 Ebook webhook called');

  try {
    const payload = req.body;

    if (!payload) {
      console.error('❌ No payload received');
      return res.status(400).json({ error: 'No payload' });
    }

    console.log('📥 Payload received:', payload);

    // Simple response for now - webhook forwarding can be added later
    return res.status(200).json({
      success: true,
      message: 'Ebook request received',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Ebook webhook error:', error.message);
    return res.status(500).json({
      error: 'Server error',
      message: error.message
    });
  }
}
