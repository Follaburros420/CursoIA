const crypto = require('crypto');

module.exports = function handler(req, res) {
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
    const { reference, amount, currency, expirationTime } = req.body;

    console.log('🔧 Generate signature request:', {
      reference,
      amount,
      currency,
      hasExpirationTime: !!expirationTime
    });

    // Validate required fields
    if (!reference || !amount || !currency) {
      console.error('❌ Missing required fields:', { reference, amount, currency });
      return res.status(400).json({
        error: 'Missing required fields: reference, amount, currency',
        received: { reference: !!reference, amount: !!amount, currency: !!currency }
      });
    }

    // Validate amount is a positive number
    if (typeof amount !== 'number' || amount <= 0) {
      console.error('❌ Invalid amount:', amount);
      return res.status(400).json({
        error: 'Amount must be a positive number',
        received: { amount, type: typeof amount }
      });
    }

    const integritySecret = process.env.WEBHOOK_INTEGRITY_SECRET;

    if (!integritySecret) {
      console.error('❌ Missing WEBHOOK_INTEGRITY_SECRET environment variable');
      return res.status(500).json({ error: 'Server configuration error: Missing integrity secret' });
    }

    // Build integrity payload according to Wompi documentation
    // Format: "<reference><amount><currency><secret>" or "<reference><amount><currency><expiration><secret>"
    let integrityPayload;
    
    if (expirationTime) {
      integrityPayload = `${reference}${amount}${currency}${expirationTime}${integritySecret}`;
    } else {
      integrityPayload = `${reference}${amount}${currency}${integritySecret}`;
    }

    // Generate SHA256 hash
    const signature = crypto.createHash('sha256').update(integrityPayload).digest('hex');

    console.log('✅ Signature generated successfully:', {
      reference,
      amount,
      currency,
      signaturePreview: signature.substring(0, 10) + '...',
      payloadLength: integrityPayload.length
    });

    return res.json({
      signature,
      reference,
      amount,
      currency,
      expirationTime: expirationTime || null,
      success: true
    });
  } catch (error) {
    console.error('❌ Error generating signature:', error);
    return res.status(500).json({ error: 'Error generating signature' });
  }
};
