import crypto from 'crypto';

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

  console.log('🔧 Wompi signature generation started');

  try {
    const { reference, amount, currency } = req.body || {};

    console.log('📥 Request data:', { reference, amount, currency });

    // Basic validation
    if (!reference || !amount || !currency) {
      console.error('❌ Missing required fields');
      return res.status(400).json({
        error: 'Missing required fields: reference, amount, currency'
      });
    }

    // Get integrity secret
    const integritySecret = process.env.WEBHOOK_INTEGRITY_SECRET;
    if (!integritySecret) {
      console.error('❌ Missing WEBHOOK_INTEGRITY_SECRET');
      return res.status(500).json({
        error: 'Server configuration error'
      });
    }

    // Generate signature according to Wompi documentation
    const payload = `${reference}${amount}${currency}${integritySecret}`;
    const signature = crypto.createHash('sha256').update(payload).digest('hex');

    console.log('✅ Signature generated:', {
      reference: reference.substring(0, 15) + '...',
      amount,
      currency,
      signature: signature.substring(0, 10) + '...'
    });

    return res.status(200).json({
      signature,
      reference,
      amount,
      currency,
      success: true
    });

  } catch (error) {
    console.error('❌ Error:', error.message);
    return res.status(500).json({
      error: 'Server error',
      message: error.message
    });
  }
}
