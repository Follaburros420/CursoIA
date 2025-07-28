<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Props {
  amount: number; // Amount in cents
  currency?: string;
  reference?: string;
  redirectUrl?: string;
  buttonText?: string;
  buttonClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  currency: 'COP',
  reference: '',
  redirectUrl: '',
  buttonText: 'Pagar con Wompi',
  buttonClass: 'w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-colors'
});

const isLoading = ref(false);
const signature = ref('');
const reference = ref('');
const error = ref('');
const checkoutUrl = ref('');

// Generate unique reference
const generateReference = () => {
  return props.reference || `REF_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Generate checkout URL
const generateCheckoutUrl = async () => {
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
    const redirectUrlValue = props.redirectUrl || `${window.location.origin}/pagos/wompi/redirect`;

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

    // Build checkout URL
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

  } catch (err) {
    console.error('❌ Error generating checkout URL:', err);
    error.value = err instanceof Error ? err.message : 'Error al configurar el pago';
  } finally {
    isLoading.value = false;
  }
};

// Open Wompi checkout
const openCheckout = async () => {
  if (!checkoutUrl.value) {
    await generateCheckoutUrl();
  }

  if (checkoutUrl.value) {
    window.open(checkoutUrl.value, '_blank');
  }
};

// Retry function
const retrySetup = () => {
  error.value = '';
  generateCheckoutUrl();
};

onMounted(() => {
  // Don't auto-generate URL, wait for user click
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
        Preparando pago...
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

    <!-- Wompi Payment Button -->
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
</style>
