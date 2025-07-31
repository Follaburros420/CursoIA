require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 4000;

// Helper: generate SHA256 signature
function generateSignature(payload) {
  return crypto.createHash('sha256').update(payload).digest('hex');
}

// Middleware
app.use(bodyParser.json());

// Validate coupon endpoint
app.post('/api/coupons/validate', (req, res) => {
  const { code, originalAmount } = req.body;
  if (code !== 'ABOGADOS-IA') {
    return res.json({ valid: false });
  }
  const discountedAmount = Math.round(originalAmount / 2);
  return res.json({ valid: true, discountedAmount });
});

// Web checkout parameters for redirect
app.post('/api/wompi/create-session', (req, res) => {
  try {
    const { amount_in_cents, currency = 'COP', reference, redirect_url } = req.body;
    const publicKey = process.env.WOMPI_PUBLIC_KEY;
    const secret = process.env.WEBHOOK_INTEGRITY_SECRET;

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
    return res.json({ checkoutUrl });
  } catch (error) {
    console.error('Error creating Wompi redirect session:', error);
    return res.status(500).json({ error: 'Error generating checkout URL' });
  }
});

// Webhook endpoint for transaction events
app.post('/api/wompi/webhook', (req, res) => {
  const signatureHeader = req.get('Wompi-Signature') || req.get('integrity_hash') || '';
  const payload = JSON.stringify(req.body);
  const valid = crypto.createHmac('sha256', process.env.WEBHOOK_INTEGRITY_SECRET)
                      .update(payload)
                      .digest('hex') === signatureHeader;
  if (!valid) {
    console.warn('Invalid webhook signature');
    return res.status(400).send('Invalid signature');
  }
  console.log('Webhook event received:', JSON.stringify(req.body, null, 2));
  return res.status(200).send('OK');
});

// Ebook submission webhook endpoint
app.post('/api/ebook', async (req, res) => {
  const payload = req.body;
  try {
    await axios.post('https://appn8n.coinestate.com.co/webhook-test/96e0fead-eaa4-466d-8f0f-6de162fe8c48', payload);
    return res.json({ success: true });
  } catch (error) {
    console.error('Error forwarding ebook submission:', error);
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
