<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const status = ref('loading');
const transactionData = ref<any>(null);

onMounted(() => {
  // Get transaction data from URL parameters
  const params = route.query;
  
  console.log('Wompi redirect params:', params);
  
  if (params.id) {
    // Transaction completed
    transactionData.value = {
      id: params.id,
      status: params.status,
      reference: params.reference,
      amount: params.amount,
      currency: params.currency
    };
    
    if (params.status === 'APPROVED') {
      status.value = 'success';
    } else if (params.status === 'DECLINED') {
      status.value = 'declined';
    } else {
      status.value = 'pending';
    }
  } else {
    status.value = 'error';
  }
});

const goHome = () => {
  router.push('/');
};

const goToCourse = () => {
  router.push('/plan-profesional');
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
      
      <!-- Loading State -->
      <div v-if="status === 'loading'" class="space-y-4">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
        <h2 class="text-xl font-semibold text-gray-800">Procesando pago...</h2>
        <p class="text-gray-600">Por favor espera mientras verificamos tu transacción.</p>
      </div>

      <!-- Success State -->
      <div v-else-if="status === 'success'" class="space-y-6">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <div>
          <h2 class="text-2xl font-bold text-green-600 mb-2">¡Pago Exitoso!</h2>
          <p class="text-gray-600 mb-4">Tu transacción ha sido procesada correctamente.</p>
          
          <div v-if="transactionData" class="bg-gray-50 rounded-lg p-4 text-sm text-left space-y-2">
            <div><strong>ID:</strong> {{ transactionData.id }}</div>
            <div><strong>Referencia:</strong> {{ transactionData.reference }}</div>
            <div><strong>Monto:</strong> ${{ (transactionData.amount / 100).toLocaleString() }} {{ transactionData.currency }}</div>
          </div>
        </div>
        
        <div class="space-y-3">
          <button 
            @click="goToCourse"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Acceder al Curso
          </button>
          <button 
            @click="goHome"
            class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Ir al Inicio
          </button>
        </div>
      </div>

      <!-- Declined State -->
      <div v-else-if="status === 'declined'" class="space-y-6">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        
        <div>
          <h2 class="text-2xl font-bold text-red-600 mb-2">Pago Rechazado</h2>
          <p class="text-gray-600 mb-4">Tu transacción no pudo ser procesada.</p>
          
          <div v-if="transactionData" class="bg-gray-50 rounded-lg p-4 text-sm text-left space-y-2">
            <div><strong>Referencia:</strong> {{ transactionData.reference }}</div>
            <div><strong>Estado:</strong> {{ transactionData.status }}</div>
          </div>
        </div>
        
        <div class="space-y-3">
          <button 
            @click="goToCourse"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Intentar de Nuevo
          </button>
          <button 
            @click="goHome"
            class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Ir al Inicio
          </button>
        </div>
      </div>

      <!-- Pending State -->
      <div v-else-if="status === 'pending'" class="space-y-6">
        <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
          <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        
        <div>
          <h2 class="text-2xl font-bold text-yellow-600 mb-2">Pago Pendiente</h2>
          <p class="text-gray-600 mb-4">Tu transacción está siendo procesada.</p>
          
          <div v-if="transactionData" class="bg-gray-50 rounded-lg p-4 text-sm text-left space-y-2">
            <div><strong>Referencia:</strong> {{ transactionData.reference }}</div>
            <div><strong>Estado:</strong> {{ transactionData.status }}</div>
          </div>
        </div>
        
        <div class="space-y-3">
          <button 
            @click="goHome"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Ir al Inicio
          </button>
        </div>
      </div>

      <!-- Error State -->
      <div v-else class="space-y-6">
        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
          <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>
        
        <div>
          <h2 class="text-2xl font-bold text-gray-600 mb-2">Error</h2>
          <p class="text-gray-600 mb-4">No se pudo obtener información de la transacción.</p>
        </div>
        
        <div class="space-y-3">
          <button 
            @click="goToCourse"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Intentar de Nuevo
          </button>
          <button 
            @click="goHome"
            class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Ir al Inicio
          </button>
        </div>
      </div>
      
    </div>
  </div>
</template>
