const crypto = require('crypto');

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
    console.error('❌ Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('🔧 Generate signature request received');

  try {
    // Validate request body exists
    if (!req.body) {
      console.error('❌ No request body provided');
      return res.status(400).json({
        error: 'Request body is required',
        received: 'null or undefined'
      });
    }

    const { reference, amount, currency, expirationTime } = req.body;

    console.log('🔧 Generate signature request:', {
      reference: reference ? reference.substring(0, 20) + '...' : 'missing',
      amount,
      currency,
      hasExpirationTime: !!expirationTime,
      bodyKeys: Object.keys(req.body)
    });

    // Validate required fields
    if (!reference || !amount || !currency) {
      console.error('❌ Missing required fields:', {
        reference: !!reference,
        amount: !!amount,
        currency: !!currency,
        receivedBody: req.body
      });
      return res.status(400).json({
        error: 'Missing required fields: reference, amount, currency',
        received: {
          reference: !!reference,
          amount: !!amount,
          currency: !!currency,
          bodyKeys: Object.keys(req.body || {})
        }
      });
    }

    // Validate amount is a positive number
    if (typeof amount !== 'number' || amount <= 0) {
      console.error('❌ Invalid amount:', { amount, type: typeof amount });
      return res.status(400).json({
        error: 'Amount must be a positive number',
        received: { amount, type: typeof amount }
      });
    }

    // Validate currency
    if (typeof currency !== 'string' || !['COP', 'USD'].includes(currency)) {
      console.error('❌ Invalid currency:', currency);
      return res.status(400).json({
        error: 'Currency must be COP or USD',
        received: { currency, type: typeof currency }
      });
    }

    const integritySecret = process.env.WEBHOOK_INTEGRITY_SECRET;

    if (!integritySecret) {
      console.error('❌ Missing WEBHOOK_INTEGRITY_SECRET environment variable');
      console.error('Available env vars:', Object.keys(process.env).filter(key => key.includes('WOMPI') || key.includes('WEBHOOK')));
      return res.status(500).json({
        error: 'Server configuration error: Missing integrity secret',
        hint: 'WEBHOOK_INTEGRITY_SECRET environment variable not set'
      });
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
    let signature;
    try {
      signature = crypto.createHash('sha256').update(integrityPayload).digest('hex');
    } catch (cryptoError) {
      console.error('❌ Crypto error:', cryptoError);
      return res.status(500).json({
        error: 'Error generating cryptographic signature',
        details: cryptoError.message
      });
    }

    console.log('✅ Signature generated successfully:', {
      reference: reference.substring(0, 20) + '...',
      amount,
      currency,
      signaturePreview: signature.substring(0, 10) + '...',
      payloadLength: integrityPayload.length,
      timestamp: new Date().toISOString()
    });

    return res.status(200).json({
      signature,
      reference,
      amount,
      currency,
      expirationTime: expirationTime || null,
      success: true,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('❌ Unexpected error generating signature:', {
      error: error.message,
      stack: error.stack,
      body: req.body,
      timestamp: new Date().toISOString()
    });

    return res.status(500).json({
      error: 'Internal server error',
      message: error.message,
      timestamp: new Date().toISOString(),
      requestId: req.headers['x-vercel-id'] || 'unknown'
    });
  }
};
