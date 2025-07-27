<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

interface Props {
  amount: number; // Amount in cents
  currency?: string;
  reference?: string;
  redirectUrl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  currency: 'COP',
  reference: '',
  redirectUrl: ''
});

const isLoading = ref(true);
const signature = ref('');
const reference = ref('');
const error = ref('');

// Generate unique reference
const generateReference = () => {
  return props.reference || `REF_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Generate signature and setup widget
const setupWidget = async () => {
  try {
    // Verificar que tenemos todos los datos necesarios
    if (!props.amount || props.amount <= 0) {
      throw new Error('Monto inválido');
    }

    if (!props.currency) {
      throw new Error('Moneda no especificada');
    }

    // Verificar clave pública
    const publicKeyValue = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
    if (!publicKeyValue) {
      throw new Error('Clave pública de Wompi no configurada');
    }

    reference.value = generateReference();

    console.log('🔧 Setting up Wompi widget:', {
      reference: reference.value,
      amount: props.amount,
      currency: props.currency,
      publicKey: publicKeyValue.substring(0, 20) + '...'
    });

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
      const errorText = await response.text();
      throw new Error(`Error del servidor: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    if (!data.signature) {
      throw new Error('No se recibió la firma de integridad del servidor');
    }

    signature.value = data.signature;

    console.log('✅ Wompi widget ready:', {
      reference: reference.value,
      signature: signature.value.substring(0, 10) + '...',
      publicKey: publicKeyValue.substring(0, 20) + '...'
    });

  } catch (err) {
    console.error('❌ Error setting up Wompi widget:', err);
    error.value = err instanceof Error ? err.message : 'Error al configurar el pago';
  } finally {
    isLoading.value = false;
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

// Computed values
const publicKey = computed(() => import.meta.env.VITE_WOMPI_PUBLIC_KEY);
const redirectUrl = computed(() => props.redirectUrl || `${window.location.origin}/pagos/wompi/redirect`);
const isReady = computed(() => !isLoading.value && signature.value && reference.value && publicKey.value && redirectUrl.value);
</script>

<template>
  <div class="wompi-button-container">
    <!-- Loading state -->
    <div v-if="isLoading" class="flex items-center justify-center p-4 border border-gray-300 rounded-lg">
      <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-primary mr-2"></div>
      <span class="text-sm text-gray-600">Preparando pago...</span>
    </div>
    
    <!-- Error state -->
    <div v-else-if="error" class="p-4 border border-red-300 rounded-lg bg-red-50 text-red-700">
      <div class="text-center font-medium mb-2">Error al cargar el pago</div>
      <div class="text-sm text-center">{{ error }}</div>
      <button
        @click="retrySetup"
        class="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-sm transition-colors"
      >
        Reintentar
      </button>
    </div>
    
    <!-- Debug Info (temporary) -->
    <div v-if="!isLoading && !error" class="mb-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm">
      <div><strong>Debug Info:</strong></div>
      <div>Public Key: {{ publicKey ? publicKey.substring(0, 20) + '...' : 'NOT_SET' }}</div>
      <div>Reference: {{ reference }}</div>
      <div>Signature: {{ signature ? signature.substring(0, 10) + '...' : 'NOT_SET' }}</div>
      <div>Amount: {{ amount }} {{ currency }}</div>
      <div>Ready: {{ isReady }}</div>
    </div>

    <!-- Wompi Widget -->
    <div v-else-if="isReady" class="wompi-widget">
      <form>
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
    </div>
    
    <!-- Fallback -->
    <div v-else class="p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 text-center">
      No se pudo cargar el botón de pago
    </div>
  </div>
</template>

<style scoped>
.wompi-button-container {
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
