<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

interface Props {
  amount: number; // Amount in cents
  currency?: string;
  reference?: string;
  redirectUrl?: string;
  customerData?: {
    email?: string;
    fullName?: string;
    phoneNumber?: string;
    phoneNumberPrefix?: string;
    legalId?: string;
    legalIdType?: string;
  };
  buttonText?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  currency: 'COP',
  reference: '',
  redirectUrl: '',
  buttonText: 'Pagar con Wompi',
  disabled: false
});

const emit = defineEmits<{
  success: [transactionId: string];
  error: [error: string];
  loading: [loading: boolean];
}>();

const widgetContainer = ref<HTMLElement>();
const isLoading = ref(false);

// Generate unique reference if not provided
const generateReference = () => {
  return props.reference || `REF_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Generate integrity signature
const generateIntegritySignature = async (reference: string, amount: number, currency: string) => {
  try {
    // This should be done on the server side for security
    // For now, we'll use a placeholder or call our API
    const response = await fetch('/api/wompi/generate-signature', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reference,
        amount,
        currency
      })
    });

    if (!response.ok) {
      throw new Error('Failed to generate signature');
    }

    const data = await response.json();
    return data.signature;
  } catch (error) {
    console.error('Error generating signature:', error);
    // Fallback: generate a basic signature (NOT SECURE - only for development)
    const payload = `${reference}${amount}${currency}test_integrity_secret`;
    const encoder = new TextEncoder();
    const data = encoder.encode(payload);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
};

// Initialize Wompi widget
const initializeWidget = async () => {
  if (!widgetContainer.value) return;

  isLoading.value = true;
  emit('loading', true);

  try {
    const reference = generateReference();
    const redirectUrl = props.redirectUrl || `${window.location.origin}/pagos/wompi/redirect`;
    
    // Generate integrity signature
    const signature = await generateIntegritySignature(reference, props.amount, props.currency);

    // Clear container
    widgetContainer.value.innerHTML = '';

    // Create form element
    const form = document.createElement('form');
    
    // Create script element with Wompi widget
    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.setAttribute('data-render', 'button');
    script.setAttribute('data-public-key', import.meta.env.VITE_WOMPI_PUBLIC_KEY || 'pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH');
    script.setAttribute('data-currency', props.currency);
    script.setAttribute('data-amount-in-cents', props.amount.toString());
    script.setAttribute('data-reference', reference);
    script.setAttribute('data-signature:integrity', signature);
    script.setAttribute('data-redirect-url', redirectUrl);

    // Add customer data if provided
    if (props.customerData) {
      if (props.customerData.email) {
        script.setAttribute('data-customer-data:email', props.customerData.email);
      }
      if (props.customerData.fullName) {
        script.setAttribute('data-customer-data:full-name', props.customerData.fullName);
      }
      if (props.customerData.phoneNumber) {
        script.setAttribute('data-customer-data:phone-number', props.customerData.phoneNumber);
      }
      if (props.customerData.phoneNumberPrefix) {
        script.setAttribute('data-customer-data:phone-number-prefix', props.customerData.phoneNumberPrefix);
      }
      if (props.customerData.legalId) {
        script.setAttribute('data-customer-data:legal-id', props.customerData.legalId);
      }
      if (props.customerData.legalIdType) {
        script.setAttribute('data-customer-data:legal-id-type', props.customerData.legalIdType);
      }
    }

    // Add script to form
    form.appendChild(script);
    
    // Add form to container
    widgetContainer.value.appendChild(form);

    // Listen for widget events
    window.addEventListener('message', handleWidgetMessage);

    console.log('✅ Wompi widget initialized:', {
      reference,
      amount: props.amount,
      currency: props.currency,
      redirectUrl,
      signature: signature.substring(0, 10) + '...'
    });

  } catch (error) {
    console.error('❌ Error initializing Wompi widget:', error);
    emit('error', error instanceof Error ? error.message : 'Error initializing payment widget');
  } finally {
    isLoading.value = false;
    emit('loading', false);
  }
};

// Handle widget messages
const handleWidgetMessage = (event: MessageEvent) => {
  if (event.origin !== 'https://checkout.wompi.co') return;

  console.log('📨 Wompi widget message:', event.data);

  switch (event.data.type) {
    case 'TRANSACTION_SUCCESS':
      emit('success', event.data.transactionId);
      break;
    case 'TRANSACTION_ERROR':
      emit('error', event.data.error || 'Transaction failed');
      break;
    case 'WIDGET_CLOSED':
      console.log('🔒 Widget closed by user');
      break;
  }
};

// Cleanup
const cleanup = () => {
  window.removeEventListener('message', handleWidgetMessage);
};

onMounted(() => {
  nextTick(() => {
    initializeWidget();
  });
});

// Expose methods
defineExpose({
  reinitialize: initializeWidget,
  cleanup
});
</script>

<template>
  <div class="wompi-widget-container">
    <div 
      ref="widgetContainer" 
      class="wompi-widget"
      :class="{ 'opacity-50 pointer-events-none': disabled || isLoading }"
    >
      <!-- Widget will be inserted here -->
      <div v-if="isLoading" class="flex items-center justify-center p-4">
        <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
        <span class="ml-2 text-sm text-muted-foreground">Cargando pasarela de pago...</span>
      </div>
    </div>
    
    <!-- Fallback button if widget fails to load -->
    <div v-if="!isLoading && widgetContainer?.innerHTML === ''" class="mt-4">
      <button
        @click="initializeWidget"
        :disabled="disabled"
        class="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.wompi-widget-container {
  width: 100%;
}

.wompi-widget {
  min-height: 50px;
}

/* Override Wompi button styles if needed */
:deep(.wompi-button) {
  width: 100% !important;
  border-radius: 0.5rem !important;
  font-weight: 500 !important;
}
</style>
