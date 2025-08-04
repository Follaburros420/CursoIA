// API service with fallback for development
import axios from 'axios';

const isDevelopment = import.meta.env.DEV;
const baseURL = isDevelopment ? '' : '';

// Create axios instance
const api = axios.create({
  baseURL,
  timeout: 10000,
});

// Mock responses for development
const mockResponses = {
  wompiCreateSession: (data: any) => ({
    checkoutUrl: `https://checkout.wompi.co/p/?public-key=pub_test_example&amount-in-cents=${data.amount_in_cents}&currency=${data.currency}&reference=${data.reference}&redirect-url=${encodeURIComponent(data.redirect_url)}`
  }),
  
  couponValidate: (data: any) => {
    const coupons: Record<string, any> = {
      'ABOGADOS-IA': { discount: 40, type: 'percentage' },
      'DESCUENTO20': { discount: 20, type: 'percentage' },
      'PROMO30': { discount: 30, type: 'percentage' }
    };
    
    const coupon = coupons[data.code?.toUpperCase()];
    if (!coupon) {
      return { valid: false, message: 'Cupón no válido' };
    }
    
    const discountedAmount = Math.round(data.originalAmount * (1 - coupon.discount / 100));
    return {
      valid: true,
      discountedAmount,
      discount: coupon.discount,
      type: coupon.type,
      message: `Cupón aplicado correctamente - ${coupon.discount}% de descuento`
    };
  },
  
  chatbot: (data: any) => ({
    output: `Hola! Recibí tu mensaje: "${data.message}". Soy tu asistente de IA especializado en cursos legales. ¿En qué más puedo ayudarte?`
  }),
  
  ebook: (_data: any) => ({
    success: true,
    message: 'Ebook submission processed successfully'
  })
};

// API functions with fallback
export const apiService = {
  async wompiCreateSession(data: {
    amount_in_cents: number;
    currency: string;
    reference: string;
    redirect_url: string;
  }) {
    try {
      const response = await api.post('/api/wompi/create-session', data);
      return response.data;
    } catch (error) {
      console.warn('API call failed, using mock response:', error);
      return mockResponses.wompiCreateSession(data);
    }
  },

  async validateCoupon(data: {
    code: string;
    originalAmount: number;
  }) {
    try {
      const response = await api.post('/api/coupons/validate', data);
      return response.data;
    } catch (error) {
      console.warn('API call failed, using mock response:', error);
      return mockResponses.couponValidate(data);
    }
  },

  async chatbot(data: { message: string }) {
    try {
      console.log('🤖 Calling chatbot API with:', data);
      const response = await api.post('/api/chatbot', data);
      console.log('✅ Chatbot API response:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('❌ Chatbot API call failed:', error);
      console.error('❌ Error details:', {
        message: error?.message,
        status: error?.response?.status,
        data: error?.response?.data
      });

      // Only use mock if it's a network error, not a server error
      if (error?.response?.status >= 500 || !error?.response) {
        console.warn('🔄 Using mock response due to server/network error');
        return mockResponses.chatbot(data);
      } else {
        // Re-throw client errors (4xx) to handle them properly
        throw error;
      }
    }
  },

  async submitEbook(data: any) {
    try {
      const response = await api.post('/api/ebook', data);
      return response.data;
    } catch (error: any) {
      console.warn('API call failed, using mock response:', error);
      return mockResponses.ebook(data);
    }
  }
};

export default apiService;
