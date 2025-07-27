<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

interface Props {
  amount: number; // Amount in cents
  currency?: string;
  reference?: string;
  redirectUrl?: string;
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
const widgetId = ref(`wompi-widget-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);

// Generate unique reference if not provided
const generateReference = () => {
  return props.reference || `REF_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Generate integrity signature
const generateIntegritySignature = async (reference: string, amount: number, currency: string) => {
  try {
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
    console.error('❌ Error generating signature:', error);
    throw error;
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
    const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;

    if (!publicKey) {
      throw new Error('Wompi public key not configured');
    }

    console.log('🔧 Initializing Wompi widget with:', {
      reference,
      amount: props.amount,
      currency: props.currency,
      publicKey: publicKey.substring(0, 20) + '...',
      redirectUrl
    });

    // Generate integrity signature
    const signature = await generateIntegritySignature(reference, props.amount, props.currency);

    // Clear container
    widgetContainer.value.innerHTML = '';

    // Clear container and create form
    widgetContainer.value.innerHTML = '';

    // Create form element
    const form = document.createElement('form');
    form.id = widgetId.value;

    // Create script element
    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.setAttribute('data-render', 'button');
    script.setAttribute('data-public-key', publicKey);
    script.setAttribute('data-currency', props.currency);
    script.setAttribute('data-amount-in-cents', props.amount.toString());
    script.setAttribute('data-reference', reference);
    script.setAttribute('data-signature:integrity', signature);
    script.setAttribute('data-redirect-url', redirectUrl);

    // Append script to form and form to container
    form.appendChild(script);
    widgetContainer.value.appendChild(form);

    console.log('✅ Wompi widget initialized successfully');

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
      console.log('✅ Transaction successful:', event.data.transactionId);
      emit('success', event.data.transactionId);
      break;
    case 'TRANSACTION_ERROR':
      console.log('❌ Transaction error:', event.data.error);
      emit('error', event.data.error || 'Transaction failed');
      break;
    case 'WIDGET_CLOSED':
      console.log('🔒 Widget closed by user');
      break;
    default:
      console.log('📨 Other widget event:', event.data);
  }
};

onMounted(() => {
  // Add event listener for widget messages
  window.addEventListener('message', handleWidgetMessage);

  nextTick(() => {
    initializeWidget();
  });
});

// Cleanup on unmount
onUnmounted(() => {
  window.removeEventListener('message', handleWidgetMessage);
});

// Expose methods
defineExpose({
  reinitialize: initializeWidget
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
