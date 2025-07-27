<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Props {
  amount: number; // Amount in cents
  currency?: string;
  reference?: string;
  redirectUrl?: string;
  buttonText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  currency: 'COP',
  reference: '',
  redirectUrl: '',
  buttonText: 'Pagar con Wompi'
});

const emit = defineEmits<{
  success: [transactionId: string];
  error: [error: string];
}>();

const isLoading = ref(false);
const signature = ref('');
const reference = ref('');

// Generate unique reference
const generateReference = () => {
  return props.reference || `REF_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Generate signature
const generateSignature = async () => {
  try {
    isLoading.value = true;
    reference.value = generateReference();
    
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
      throw new Error('Failed to generate signature');
    }

    const data = await response.json();
    signature.value = data.signature;
    
    console.log('✅ Signature generated:', {
      reference: reference.value,
      amount: props.amount,
      currency: props.currency,
      signature: signature.value.substring(0, 10) + '...'
    });
    
  } catch (error) {
    console.error('❌ Error generating signature:', error);
    emit('error', 'Error generating payment signature');
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  generateSignature();
});

// Get public key
const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
const redirectUrl = props.redirectUrl || `${window.location.origin}/pagos/wompi/redirect`;
</script>

<template>
  <div class="wompi-pay-button">
    <div v-if="isLoading" class="flex items-center justify-center p-4">
      <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
      <span class="ml-2 text-sm text-muted-foreground">Preparando pago...</span>
    </div>
    
    <form v-else-if="signature && reference">
      <script
        src="https://checkout.wompi.co/widget.js"
        data-render="button"
        :data-public-key="publicKey"
        :data-currency="currency"
        :data-amount-in-cents="amount.toString()"
        :data-reference="reference"
        :data-signature:integrity="signature"
        :data-redirect-url="redirectUrl"
      ></script>
    </form>
    
    <div v-else class="p-4 text-center text-red-500">
      Error al cargar el botón de pago
    </div>
  </div>
</template>

<style scoped>
.wompi-pay-button {
  width: 100%;
  min-height: 50px;
}

/* Override Wompi button styles */
:deep(.wompi-button) {
  width: 100% !important;
  border-radius: 0.5rem !important;
  font-weight: 500 !important;
  padding: 12px 24px !important;
}
</style>
