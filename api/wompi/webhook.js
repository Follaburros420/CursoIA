import crypto from 'crypto';

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Wompi-Signature');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const signatureHeader = req.headers['wompi-signature'] || req.headers['integrity_hash'] || '';
    const payload = JSON.stringify(req.body);
    const secret = process.env.WEBHOOK_INTEGRITY_SECRET;

    if (!secret) {
      console.error('Missing WEBHOOK_INTEGRITY_SECRET environment variable');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Validate webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(payload)
      .digest('hex');

    const isValid = expectedSignature === signatureHeader;

    if (!isValid) {
      console.warn('Invalid webhook signature');
      console.log('Expected:', expectedSignature);
      console.log('Received:', signatureHeader);
      return res.status(400).json({ error: 'Invalid signature' });
    }

    // Log the webhook event
    console.log('Webhook event received:', JSON.stringify(req.body, null, 2));

    // Here you can add your business logic to handle the payment event
    const { event, data } = req.body;
    
    switch (event) {
      case 'transaction.updated':
        console.log('Transaction updated:', data.transaction);
        // Handle transaction update
        break;
      case 'transaction.created':
        console.log('Transaction created:', data.transaction);
        // Handle transaction creation
        break;
      default:
        console.log('Unknown event type:', event);
    }

    return res.status(200).json({ message: 'Webhook processed successfully' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return res.status(500).json({ error: 'Error processing webhook' });
  }
}
