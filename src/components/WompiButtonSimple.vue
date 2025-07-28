<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  amount: number;
  currency?: string;
  buttonText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  currency: 'COP',
  buttonText: 'Pagar con Wompi'
});

const isLoading = ref(false);
const error = ref('');

// Generate unique reference
const generateReference = () => {
  return `REF_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Open Wompi checkout
const openWompiCheckout = async () => {
  try {
    isLoading.value = true;
    error.value = '';
    
    const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
    if (!publicKey) {
      throw new Error('Clave pública no configurada');
    }
    
    const reference = generateReference();
    
    // Generate signature
    const response = await fetch('/api/wompi/generate-signature', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reference,
        amount: props.amount,
        currency: props.currency
      })
    });

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.signature) {
      throw new Error('No se recibió la firma de integridad');
    }
    
    // Build checkout URL
    const redirectUrl = `${window.location.origin}/pagos/wompi/redirect`;
    const params = new URLSearchParams({
      'public-key': publicKey,
      'amount-in-cents': props.amount.toString(),
      'currency': props.currency,
      'reference': reference,
      'signature:integrity': data.signature,
      'redirect-url': redirectUrl
    });
    
    const checkoutUrl = `https://checkout.wompi.co/p/?${params.toString()}`;
    
    console.log('✅ Opening Wompi checkout:', checkoutUrl);
    
    // Open checkout in new window
    window.open(checkoutUrl, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
    
  } catch (err) {
    console.error('❌ Error opening Wompi checkout:', err);
    error.value = err instanceof Error ? err.message : 'Error al abrir el checkout';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="wompi-button-simple">
    <!-- Error state -->
    <div v-if="error" class="mb-4 p-3 border border-red-300 rounded-lg bg-red-50 text-red-700 text-sm">
      {{ error }}
    </div>
    
    <!-- Payment Button -->
    <button 
      @click="openWompiCheckout"
      :disabled="isLoading"
      class="wompi-premium-button group"
    >
      <div class="flex items-center justify-center relative z-10">
        <!-- Loading spinner -->
        <div v-if="isLoading" class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
        
        <!-- Payment icon -->
        <svg v-else class="w-6 h-6 mr-3 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
        </svg>
        
        <!-- Button text -->
        <span class="font-bold text-lg">
          {{ isLoading ? 'Preparando...' : buttonText }}
        </span>
        
        <!-- Arrow icon -->
        <svg v-if="!isLoading" class="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
      
      <!-- Hover effect overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      <!-- Shine effect -->
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:animate-shine"></div>
    </button>
  </div>
</template>

<style scoped>
.wompi-button-simple {
  width: 100%;
}

.wompi-premium-button {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  border: none;
  border-radius: 16px;
  padding: 20px 32px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 
    0 10px 30px rgba(102, 126, 234, 0.4),
    0 6px 20px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  background-size: 200% 200%;
  animation: gradientShift 4s ease infinite;
}

.wompi-premium-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.8s;
}

.wompi-premium-button:hover::before {
  left: 100%;
}

.wompi-premium-button:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 
    0 20px 40px rgba(102, 126, 234, 0.5),
    0 10px 25px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.wompi-premium-button:active {
  transform: translateY(-2px) scale(1.01);
  transition: all 0.1s ease;
}

.wompi-premium-button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
  transform: none;
}

.wompi-premium-button:disabled:hover {
  transform: none;
  box-shadow: 
    0 10px 30px rgba(102, 126, 234, 0.4),
    0 6px 20px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%) skewX(-12deg);
  }
  100% {
    transform: translateX(200%) skewX(-12deg);
  }
}

.animate-shine {
  animation: shine 0.8s ease-out;
}
</style>
