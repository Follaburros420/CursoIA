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
    const { code, originalAmount } = req.body;
    
    // Validate required fields
    if (!code || !originalAmount) {
      return res.status(400).json({ 
        error: 'Missing required fields: code, originalAmount' 
      });
    }

    // Define available coupons
    const coupons = {
      'ABOGADOS-IA': {
        discount: 40, // 40% de descuento
        type: 'percentage',
        message: 'Cupón aplicado correctamente - 40% de descuento'
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

    // Check if coupon exists
    const coupon = coupons[code.toUpperCase()];
    if (!coupon) {
      return res.json({ valid: false, message: 'Cupón no válido' });
    }

    // Calculate discounted amount
    let discountedAmount;
    if (coupon.type === 'percentage') {
      discountedAmount = Math.round(originalAmount * (1 - coupon.discount / 100));
    } else {
      // Fixed amount discount
      discountedAmount = Math.max(0, originalAmount - coupon.discount);
    }

    return res.json({
      valid: true,
      discountedAmount,
      discount: coupon.discount,
      type: coupon.type,
      message: coupon.message
    });
  } catch (error) {
    console.error('Error validating coupon:', error);
    return res.status(500).json({ error: 'Error validating coupon' });
  }
}
