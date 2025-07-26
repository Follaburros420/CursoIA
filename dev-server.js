// Development server for API endpoints
// Run with: node dev-server.js

import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Helper: generate SHA256 signature
function generateSignature(payload) {
  return crypto.createHash('sha256').update(payload).digest('hex');
}

// Wompi create session endpoint
app.post('/api/wompi/create-session', (req, res) => {
  try {
    const { amount_in_cents, currency = 'COP', reference, redirect_url } = req.body;
    
    // Validate required fields
    if (!amount_in_cents || !reference || !redirect_url) {
      return res.status(400).json({ 
        error: 'Missing required fields: amount_in_cents, reference, redirect_url' 
      });
    }

    const publicKey = process.env.WOMPI_PUBLIC_KEY || 'pub_test_example_key';
    const secret = process.env.WEBHOOK_INTEGRITY_SECRET || 'test_secret';

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
    
    console.log('✅ Checkout URL generated:', checkoutUrl);
    
    return res.json({ checkoutUrl });
  } catch (error) {
    console.error('❌ Error creating Wompi redirect session:', error);
    return res.status(500).json({ error: 'Error generating checkout URL' });
  }
});

// Wompi webhook endpoint
app.post('/api/wompi/webhook', (req, res) => {
  try {
    const signatureHeader = req.headers['wompi-signature'] || req.headers['integrity_hash'] || '';
    const payload = JSON.stringify(req.body);
    const secret = process.env.WEBHOOK_INTEGRITY_SECRET || 'test_secret';

    // Validate webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(payload)
      .digest('hex');

    const isValid = expectedSignature === signatureHeader;

    if (!isValid && signatureHeader) {
      console.warn('⚠️ Invalid webhook signature');
      return res.status(400).json({ error: 'Invalid signature' });
    }

    // Log the webhook event
    console.log('📨 Webhook event received:', JSON.stringify(req.body, null, 2));

    return res.status(200).json({ message: 'Webhook processed successfully' });
  } catch (error) {
    console.error('❌ Error processing webhook:', error);
    return res.status(500).json({ error: 'Error processing webhook' });
  }
});

// Coupon validation endpoint
app.post('/api/coupons/validate', (req, res) => {
  try {
    const { code, originalAmount } = req.body;
    
    if (!code || !originalAmount) {
      return res.status(400).json({ 
        error: 'Missing required fields: code, originalAmount' 
      });
    }

    // Define available coupons
    const coupons = {
      'ABOGADOS-IA': {
        discount: 50,
        type: 'percentage',
        message: 'Cupón aplicado correctamente - 50% de descuento'
      },
      'DESCUENTO20': {
        discount: 20,
        type: 'percentage', 
        message: 'Cupón aplicado correctamente - 20% de descuento'
      },
      'PROMO30': {
        discount: 30,
        type: 'percentage',
        message: 'Cupón aplicado correctamente - 30% de descuento'
      }
    };

    const coupon = coupons[code.toUpperCase()];
    if (!coupon) {
      return res.json({ valid: false, message: 'Cupón no válido' });
    }

    let discountedAmount;
    if (coupon.type === 'percentage') {
      discountedAmount = Math.round(originalAmount * (1 - coupon.discount / 100));
    } else {
      discountedAmount = Math.max(0, originalAmount - coupon.discount);
    }
    
    console.log(`✅ Coupon validated: ${code} - ${coupon.discount}% off`);
    
    return res.json({ 
      valid: true, 
      discountedAmount,
      discount: coupon.discount,
      type: coupon.type,
      message: coupon.message
    });
  } catch (error) {
    console.error('❌ Error validating coupon:', error);
    return res.status(500).json({ error: 'Error validating coupon' });
  }
});

// Chatbot endpoint
app.post('/api/chatbot', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
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
      throw new Error(`Chatbot webhook failed: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Chatbot message processed');

    return res.json(result);
  } catch (error) {
    console.error('❌ Error processing chatbot message:', error);
    return res.status(500).json({ 
      error: 'Error processing chatbot message',
      output: 'Lo siento, hay un problema de conexión. Por favor, intenta más tarde o contáctanos por WhatsApp.'
    });
  }
});

// Ebook endpoint
app.post('/api/ebook', async (req, res) => {
  try {
    const payload = req.body;
    
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
      throw new Error(`CoinEstate webhook failed: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Ebook submission forwarded successfully');

    return res.json({ 
      success: true, 
      message: 'Ebook submission processed successfully' 
    });
  } catch (error) {
    console.error('❌ Error forwarding ebook submission:', error);
    return res.status(500).json({ 
      error: 'Error processing ebook submission',
      details: error.message 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Development API server running on http://localhost:${PORT}`);
  console.log('📋 Available endpoints:');
  console.log('   POST /api/wompi/create-session');
  console.log('   POST /api/wompi/webhook');
  console.log('   POST /api/coupons/validate');
  console.log('   POST /api/chatbot');
  console.log('   POST /api/ebook');
  console.log('   GET  /api/health');
  console.log('');
  console.log('💡 Make sure to set environment variables:');
  console.log('   WOMPI_PUBLIC_KEY=pub_test_your_key');
  console.log('   WEBHOOK_INTEGRITY_SECRET=your_secret');
});
