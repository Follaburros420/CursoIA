<script setup lang="ts">
import { ref, nextTick } from 'vue';

interface Props {
  amount: number;
  currency?: string;
  buttonText?: string;
  reference?: string;
}

const props = withDefaults(defineProps<Props>(), {
  currency: 'COP',
  buttonText: 'Pagar con Wompi',
  reference: ''
});

const isLoading = ref(false);
const error = ref('');
const showWidget = ref(false);
const widgetContainer = ref<HTMLElement | null>(null);
const paymentReference = ref('');
const signature = ref('');
const widgetReady = ref(false);

// Generate unique reference
const generateReference = () => {
  return props.reference || `REF_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Initialize payment and create widget
const initializeWidget = async () => {
  try {
    isLoading.value = true;
    error.value = '';
    
    const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
    if (!publicKey) {
      throw new Error('Clave pública no configurada');
    }
    
    paymentReference.value = generateReference();
    
    // Generate signature
    const response = await fetch('/api/wompi/generate-signature', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reference: paymentReference.value,
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
    
    signature.value = data.signature;
    
    // Show widget and create it
    showWidget.value = true;
    await nextTick();
    await createWompiWidget();
    
    console.log('✅ Wompi widget initialized:', {
      reference: paymentReference.value,
      amount: props.amount,
      currency: props.currency
    });
    
  } catch (err) {
    console.error('❌ Error initializing widget:', err);
    error.value = err instanceof Error ? err.message : 'Error al inicializar el pago';
    showWidget.value = false;
  } finally {
    isLoading.value = false;
  }
};

// Create Wompi embedded widget
const createWompiWidget = async () => {
  if (!widgetContainer.value || !signature.value) return;
  
  try {
    const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
    const redirectUrl = `${window.location.origin}/pagos/wompi/redirect`;
    
    // Clear container
    widgetContainer.value.innerHTML = '';
    
    // Create form element
    const form = document.createElement('form');
    form.style.width = '100%';
    
    // Create script element with Wompi widget
    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.setAttribute('data-render', 'button');
    script.setAttribute('data-public-key', publicKey);
    script.setAttribute('data-currency', props.currency);
    script.setAttribute('data-amount-in-cents', props.amount.toString());
    script.setAttribute('data-reference', paymentReference.value);
    script.setAttribute('data-signature:integrity', signature.value);
    script.setAttribute('data-redirect-url', redirectUrl);
    
    // Add event listeners
    script.onload = () => {
      console.log('✅ Wompi widget script loaded');
      widgetReady.value = true;
    };
    
    script.onerror = () => {
      console.error('❌ Error loading Wompi widget script');
      error.value = 'Error al cargar el widget de pago';
    };
    
    // Append script to form and form to container
    form.appendChild(script);
    widgetContainer.value.appendChild(form);
    
  } catch (err) {
    console.error('❌ Error creating Wompi widget:', err);
    error.value = 'Error al crear el widget de pago';
  }
};

// Handle payment button click
const handlePaymentClick = async () => {
  if (showWidget.value) {
    // Widget already shown, scroll to it
    widgetContainer.value?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  
  await initializeWidget();
};

// Close widget
const closeWidget = () => {
  showWidget.value = false;
  widgetReady.value = false;
  error.value = '';
};
</script>

<template>
  <div class="wompi-embedded-widget">
    <!-- Error state -->
    <div v-if="error" class="mb-4 p-4 border border-red-300 rounded-lg bg-red-50 text-red-700 text-sm flex items-center justify-between">
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
        {{ error }}
      </div>
      <button @click="error = ''" class="text-red-500 hover:text-red-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    
    <!-- Payment Button -->
    <button 
      @click="handlePaymentClick"
      :disabled="isLoading"
      class="wompi-premium-button group w-full"
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
          {{ isLoading ? 'Preparando pago...' : showWidget ? 'Ver formulario de pago ↓' : buttonText }}
        </span>
        
        <!-- Arrow icon -->
        <svg v-if="!isLoading && !showWidget" class="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
      
      <!-- Hover effect overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      <!-- Shine effect -->
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:animate-shine"></div>
    </button>
    
    <!-- Wompi Widget Container -->
    <div v-if="showWidget" class="mt-8 p-6 border border-gray-200 rounded-xl bg-white shadow-xl widget-container">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div class="text-center flex-1">
          <h3 class="text-xl font-bold text-gray-800 mb-2">
            💳 Completa tu pago de forma segura
          </h3>
          <p class="text-sm text-gray-600">
            Procesado por Wompi - Plataforma de pagos certificada
          </p>
        </div>
        <button 
          @click="closeWidget"
          class="text-gray-400 hover:text-gray-600 transition-colors p-2"
          title="Cerrar"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- Widget will be inserted here -->
      <div ref="widgetContainer" class="wompi-widget-container">
        <div v-if="!widgetReady" class="flex items-center justify-center py-12">
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p class="text-gray-600">Cargando formulario de pago...</p>
          </div>
        </div>
      </div>
      
      <!-- Security badges -->
      <div class="flex justify-center items-center mt-6 space-x-6 text-xs text-gray-500 border-t pt-4">
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
          </svg>
          Pago seguro SSL
        </div>
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Certificado PCI DSS
        </div>
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"></path>
          </svg>
          Wompi Certified
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wompi-embedded-widget {
  width: 100%;
}

.wompi-premium-button {
  position: relative;
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

.wompi-premium-button:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 
    0 20px 40px rgba(102, 126, 234, 0.5),
    0 10px 25px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.wompi-premium-button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
  transform: none;
}

.widget-container {
  animation: slideDown 0.5s ease-out;
}

.wompi-widget-container {
  width: 100%;
  min-height: 200px;
}

/* Style the Wompi widget button when it loads */
:deep(.wompi-button) {
  width: 100% !important;
  border-radius: 12px !important;
  font-weight: 600 !important;
  padding: 16px 24px !important;
  font-size: 16px !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  border: none !important;
  color: white !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3) !important;
}

:deep(.wompi-button:hover) {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4) !important;
}

:deep(form) {
  width: 100% !important;
  margin: 0 !important;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shine {
  0% { transform: translateX(-100%) skewX(-12deg); }
  100% { transform: translateX(200%) skewX(-12deg); }
}

.animate-shine {
  animation: shine 0.8s ease-out;
}
</style>
