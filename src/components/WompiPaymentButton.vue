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

// Removed unused emit - widget handles everything internally

const isLoading = ref(true);
const signature = ref('');
const reference = ref('');
const error = ref('');
const widgetContainer = ref<HTMLElement>();

// Generate unique reference
const generateReference = () => {
  return props.reference || `REF_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Generate signature and setup widget
const setupWidget = async () => {
  try {
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
    
    // Create the widget
    await createWompiWidget();
    
  } catch (err) {
    console.error('❌ Error setting up Wompi widget:', err);
    error.value = err instanceof Error ? err.message : 'Error al configurar el pago';
  } finally {
    isLoading.value = false;
  }
};

// Create Wompi widget with JavaScript
const createWompiWidget = async () => {
  if (!widgetContainer.value) return;
  
  try {
    const publicKeyValue = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
    const redirectUrlValue = props.redirectUrl || `${window.location.origin}/pagos/wompi/redirect`;
    
    // Clear container
    widgetContainer.value.innerHTML = '';
    
    // Create form
    const form = document.createElement('form');
    
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.setAttribute('data-render', 'button');
    script.setAttribute('data-public-key', publicKeyValue);
    script.setAttribute('data-currency', props.currency);
    script.setAttribute('data-amount-in-cents', props.amount.toString());
    script.setAttribute('data-reference', reference.value);
    script.setAttribute('data-signature:integrity', signature.value);
    script.setAttribute('data-redirect-url', redirectUrlValue);
    
    // Append to form and container
    form.appendChild(script);
    widgetContainer.value.appendChild(form);
    
    console.log('✅ Wompi widget created successfully:', {
      reference: reference.value,
      amount: props.amount,
      currency: props.currency
    });
    
  } catch (err) {
    console.error('❌ Error creating Wompi widget:', err);
    error.value = 'Error al crear el widget de pago';
  }
};

// Retry function
const retrySetup = () => {
  error.value = '';
  isLoading.value = true;
  setupWidget();
};

onMounted(() => {
  setupWidget();
});
</script>

<template>
  <div class="wompi-payment-button">
    <!-- Loading state -->
    <div v-if="isLoading" class="flex items-center justify-center p-4">
      <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-primary mr-2"></div>
      <span class="text-sm text-gray-600">Preparando pago...</span>
    </div>
    
    <!-- Error state -->
    <div v-else-if="error" class="text-center">
      <div class="p-3 border border-red-300 rounded-lg bg-red-50 text-red-700 mb-3">
        <div class="font-medium mb-1">Error al cargar el pago</div>
        <div class="text-sm">{{ error }}</div>
      </div>
      <button 
        @click="retrySetup" 
        class="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-sm transition-colors"
      >
        Reintentar
      </button>
    </div>
    
    <!-- Wompi Widget -->
    <div v-else class="wompi-widget" ref="widgetContainer">
      <!-- Widget will be inserted here by JavaScript -->
    </div>
  </div>
</template>

<style scoped>
.wompi-payment-button {
  width: 100%;
  min-height: 50px;
}

.wompi-widget {
  width: 100%;
}

/* Style the Wompi button */
:deep(.wompi-button) {
  width: 100% !important;
  border-radius: 8px !important;
  font-weight: 600 !important;
  padding: 12px 24px !important;
  font-size: 16px !important;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%) !important;
  border: none !important;
  color: white !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
}

:deep(.wompi-button:hover) {
  transform: translateY(-1px) !important;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4) !important;
}

:deep(.wompi-button:active) {
  transform: translateY(0) !important;
}
</style>
