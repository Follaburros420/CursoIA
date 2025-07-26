import crypto from 'crypto';

// Helper: generate SHA256 signature
function generateSignature(payload) {
  return crypto.createHash('sha256').update(payload).digest('hex');
}

export default function handler(req, res) {
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
    const { amount_in_cents, currency = 'COP', reference, redirect_url } = req.body;
    
    // Validate required fields
    if (!amount_in_cents || !reference || !redirect_url) {
      return res.status(400).json({ 
        error: 'Missing required fields: amount_in_cents, reference, redirect_url' 
      });
    }

    const publicKey = process.env.WOMPI_PUBLIC_KEY;
    const secret = process.env.WEBHOOK_INTEGRITY_SECRET;

    if (!publicKey || !secret) {
      console.error('Missing environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Build integrity signature: "<reference><amount><currency><secret>"
    const integrityPayload = `${reference}${amount_in_cents}${currency}${secret}`;
    const signature = generateSignature(integrityPayload);

    // Choose host: always checkout endpoint
    const host = 'https://checkout.wompi.co/p';

    // Build checkout URL with query params
    const params = new URLSearchParams({
      'public-key': publicKey,
      'amount-in-cents': amount_in_cents.toString(),
      'currency': currency,
      'reference': reference,
      'signature:integrity': signature,
      'redirect-url': redirect_url
    });

    const checkoutUrl = `${host}/?${params.toString()}`;
    
    console.log('Checkout URL generated:', checkoutUrl);
    
    return res.json({ checkoutUrl });
  } catch (error) {
    console.error('Error creating Wompi redirect session:', error);
    return res.status(500).json({ error: 'Error generating checkout URL' });
  }
}
