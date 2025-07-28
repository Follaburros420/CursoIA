import crypto from 'crypto';

export default function handler(req, res) {
  console.log('🔧 Simple signature generator called');
  
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  try {
    console.log('📥 Request body:', req.body);
    console.log('🔐 Environment check:', {
      hasIntegritySecret: !!process.env.WEBHOOK_INTEGRITY_SECRET,
      secretPreview: process.env.WEBHOOK_INTEGRITY_SECRET ? 
        process.env.WEBHOOK_INTEGRITY_SECRET.substring(0, 10) + '...' : 'NOT_SET'
    });

    const { reference, amount, currency } = req.body || {};
    
    // Basic validation
    if (!reference || !amount || !currency) {
      console.error('❌ Missing fields:', { reference: !!reference, amount: !!amount, currency: !!currency });
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['reference', 'amount', 'currency'],
        received: { reference: !!reference, amount: !!amount, currency: !!currency }
      });
    }

    const secret = process.env.WEBHOOK_INTEGRITY_SECRET;
    if (!secret) {
      console.error('❌ No integrity secret found');
      return res.status(500).json({ 
        error: 'Server configuration error',
        message: 'WEBHOOK_INTEGRITY_SECRET not configured'
      });
    }

    // Generate signature
    const payload = `${reference}${amount}${currency}${secret}`;
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
    console.error('❌ Error in simple signature generator:', error);
    return res.status(500).json({
      error: 'Server error',
      message: error.message
    });
  }
}
