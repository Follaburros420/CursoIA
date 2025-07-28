<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

interface Props {
  amount: number; // Amount in cents
  currency?: string;
  reference?: string;
  redirectUrl?: string;
  buttonText?: string;
  buttonClass?: string;
  useWidget?: boolean; // New prop to choose between widget and direct checkout
}

const props = withDefaults(defineProps<Props>(), {
  currency: 'COP',
  reference: '',
  redirectUrl: '',
  buttonText: 'Pagar con Wompi',
  buttonClass: 'w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-colors',
  useWidget: true // Default to widget
});

const isLoading = ref(true);
const signature = ref('');
const reference = ref('');
const error = ref('');
const checkoutUrl = ref('');
const widgetContainer = ref<HTMLElement>();
const widgetReady = ref(false);

// Generate unique reference
const generateReference = () => {
  return props.reference || `REF_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Setup payment (widget or checkout URL)
const setupPayment = async () => {
  try {
    isLoading.value = true;
    error.value = '';

    // Verify required data
    if (!props.amount || props.amount <= 0) {
      throw new Error('Monto inválido');
    }

    const publicKeyValue = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
    if (!publicKeyValue) {
      throw new Error('Clave pública de Wompi no configurada');
    }

    reference.value = generateReference();

    // Generate signature
    const response = await fetch('/api/wompi/generate-signature', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reference: reference.value,
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

    if (props.useWidget) {
      // Create widget
      await createWompiWidget();
    } else {
      // Generate checkout URL for direct checkout
      const redirectUrlValue = props.redirectUrl || `${window.location.origin}/pagos/wompi/redirect`;
      const params = new URLSearchParams({
        'public-key': publicKeyValue,
        'amount-in-cents': props.amount.toString(),
        'currency': props.currency,
        'reference': reference.value,
        'signature:integrity': signature.value,
        'redirect-url': redirectUrlValue
      });

      checkoutUrl.value = `https://checkout.wompi.co/p/?${params.toString()}`;
      console.log('✅ Checkout URL generated:', checkoutUrl.value);
    }

  } catch (err) {
    console.error('❌ Error setting up payment:', err);
    error.value = err instanceof Error ? err.message : 'Error al configurar el pago';
  } finally {
    isLoading.value = false;
  }
};

// Create Wompi widget according to official documentation
const createWompiWidget = async () => {
  if (!widgetContainer.value) return;

  try {
    const publicKeyValue = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
    const redirectUrlValue = props.redirectUrl || `${window.location.origin}/pagos/wompi/redirect`;

    // Clear container
    widgetContainer.value.innerHTML = '';

    // Create form element
    const form = document.createElement('form');

    // Create script element with Wompi widget according to documentation
    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.setAttribute('data-render', 'button');
    script.setAttribute('data-public-key', publicKeyValue);
    script.setAttribute('data-currency', props.currency);
    script.setAttribute('data-amount-in-cents', props.amount.toString());
    script.setAttribute('data-reference', reference.value);
    script.setAttribute('data-signature:integrity', signature.value);
    script.setAttribute('data-redirect-url', redirectUrlValue);

    // Add event listeners for widget loading
    script.onload = () => {
      console.log('✅ Wompi widget script loaded');
      setTimeout(() => {
        widgetReady.value = true;
      }, 500);
    };

    script.onerror = () => {
      console.error('❌ Error loading Wompi widget script');
      widgetReady.value = false;
    };

    // Append script to form and form to container
    form.appendChild(script);
    widgetContainer.value.appendChild(form);

    console.log('✅ Wompi widget created successfully:', {
      reference: reference.value,
      amount: props.amount,
      currency: props.currency,
      signature: signature.value.substring(0, 10) + '...',
      publicKey: publicKeyValue.substring(0, 20) + '...',
      redirectUrl: redirectUrlValue
    });

  } catch (err) {
    console.error('❌ Error creating Wompi widget:', err);
    error.value = 'Error al crear el widget de pago';
    widgetReady.value = false;
  }
};

// Open Wompi checkout (for direct checkout mode)
const openCheckout = async () => {
  if (!checkoutUrl.value) {
    await setupPayment();
  }

  if (checkoutUrl.value) {
    window.open(checkoutUrl.value, '_blank');
  }
};

// Retry function
const retrySetup = () => {
  error.value = '';
  widgetReady.value = false;
  setupPayment();
};

onMounted(() => {
  // Always setup payment, but widget creation depends on useWidget prop
  setupPayment();
});
</script>

<template>
  <div class="wompi-payment-button">
    <!-- Loading state -->
    <div v-if="isLoading" class="flex items-center justify-center">
      <button
        disabled
        class="w-full bg-gray-400 text-white font-medium py-3 px-6 rounded-lg cursor-not-allowed flex items-center justify-center"
      >
        <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
        {{ useWidget ? 'Cargando widget...' : 'Preparando pago...' }}
      </button>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="text-center">
      <div class="p-3 border border-red-300 rounded-lg bg-red-50 text-red-700 mb-3">
        <div class="font-medium mb-1">Error al cargar el pago</div>
        <div class="text-sm">{{ error }}</div>
      </div>
      <button
        @click="retrySetup"
        class="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
      >
        Reintentar
      </button>
    </div>

    <!-- Widget Mode -->
    <div v-else-if="useWidget" class="wompi-widget-container">
      <!-- Widget Container -->
      <div ref="widgetContainer" class="wompi-widget">
        <!-- Wompi widget will be inserted here -->
      </div>

      <!-- Loading indicator for widget -->
      <div v-if="!widgetReady && !isLoading && !error" class="mt-4 text-center">
        <div class="animate-pulse">
          <div class="h-12 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg mb-2"></div>
          <div class="text-sm text-gray-500">Cargando widget de pago...</div>
        </div>
      </div>

      <!-- Fallback button if widget doesn't load -->
      <div v-if="!widgetReady && !isLoading && !error" class="mt-6">
        <div class="text-center text-sm text-gray-600 mb-3">
          <span class="inline-flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            ¿El widget no se carga? Usa el checkout directo:
          </span>
        </div>
        <button
          @click="openCheckout"
          class="premium-payment-button w-full group"
        >
          <div class="flex items-center justify-center">
            <svg class="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            <span class="font-semibold">Abrir Checkout Seguro</span>
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
        </button>
      </div>
    </div>

    <!-- Direct Checkout Mode -->
    <div v-else>
      <button
        @click="openCheckout"
        class="premium-payment-button w-full group"
      >
        <div class="flex items-center justify-center">
          <svg class="w-5 h-5 mr-3 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
          </svg>
          <span class="font-semibold">{{ buttonText }}</span>
          <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.wompi-payment-button {
  width: 100%;
}

.wompi-widget-container {
  width: 100%;
}

.wompi-widget {
  width: 100%;
  min-height: 50px;
}

/* Premium Payment Button Styles */
.premium-payment-button {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow:
    0 8px 25px rgba(102, 126, 234, 0.3),
    0 4px 10px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: translateY(0);
}

.premium-payment-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s;
}

.premium-payment-button:hover::before {
  left: 100%;
}

.premium-payment-button:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow:
    0 15px 35px rgba(102, 126, 234, 0.4),
    0 8px 20px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.premium-payment-button:active {
  transform: translateY(-1px) scale(1.01);
  transition: all 0.1s ease;
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
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  box-shadow:
    0 8px 25px rgba(102, 126, 234, 0.3),
    0 4px 10px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
  position: relative !important;
  overflow: hidden !important;
}

:deep(.wompi-button::before) {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: -100% !important;
  width: 100% !important;
  height: 100% !important;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent) !important;
  transition: left 0.6s !important;
}

:deep(.wompi-button:hover::before) {
  left: 100% !important;
}

:deep(.wompi-button:hover) {
  transform: translateY(-3px) scale(1.02) !important;
  box-shadow:
    0 15px 35px rgba(102, 126, 234, 0.4),
    0 8px 20px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
}

:deep(.wompi-button:active) {
  transform: translateY(-1px) scale(1.01) !important;
  transition: all 0.1s ease !important;
}

/* Style the Wompi form container */
:deep(form) {
  width: 100% !important;
  margin: 0 !important;
}

/* Loading animation */
@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.animate-pulse {
  animation: shimmer 2s infinite linear;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
}
</style>
