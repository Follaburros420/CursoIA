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

    // Append script to form and form to container
    form.appendChild(script);
    widgetContainer.value.appendChild(form);

    // Wait a bit for the widget to load
    await nextTick();
    setTimeout(() => {
      widgetReady.value = true;
    }, 1000);

    console.log('✅ Wompi widget created successfully:', {
      reference: reference.value,
      amount: props.amount,
      currency: props.currency,
      signature: signature.value.substring(0, 10) + '...'
    });

  } catch (err) {
    console.error('❌ Error creating Wompi widget:', err);
    error.value = 'Error al crear el widget de pago';
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
  if (props.useWidget) {
    setupPayment();
  }
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

      <!-- Fallback button if widget doesn't load -->
      <div v-if="!widgetReady && !isLoading" class="mt-4">
        <div class="text-center text-sm text-gray-600 mb-2">
          ¿El widget no se carga? Usa el checkout directo:
        </div>
        <button
          @click="openCheckout"
          class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
          Abrir Checkout
        </button>
      </div>
    </div>

    <!-- Direct Checkout Mode -->
    <div v-else>
      <button
        @click="openCheckout"
        class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
        </svg>
        {{ buttonText }}
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

/* Style the Wompi widget button when it loads */
:deep(.wompi-button) {
  width: 100% !important;
  border-radius: 8px !important;
  font-weight: 600 !important;
  padding: 12px 24px !important;
  font-size: 16px !important;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) !important;
  border: none !important;
  color: white !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
}

:deep(.wompi-button:hover) {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 15px rgba(59, 130, 246, 0.4) !important;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%) !important;
}

:deep(.wompi-button:active) {
  transform: translateY(0) !important;
}

/* Style the Wompi form container */
:deep(form) {
  width: 100% !important;
  margin: 0 !important;
}
</style>
