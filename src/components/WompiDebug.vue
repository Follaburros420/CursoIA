<script setup lang="ts">
import { ref, onMounted } from 'vue';

const debugInfo = ref({
  publicKey: '',
  hasPublicKey: false,
  signatureTest: null as any,
  error: ''
});

const testSignatureGeneration = async () => {
  try {
    const testData = {
      reference: 'TEST_' + Date.now(),
      amount: 5000000,
      currency: 'COP'
    };

    console.log('🧪 Testing signature generation with:', testData);

    const response = await fetch('/api/wompi/generate-signature', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    
    if (response.ok) {
      debugInfo.value.signatureTest = {
        success: true,
        data: result
      };
      console.log('✅ Signature test successful:', result);
    } else {
      debugInfo.value.signatureTest = {
        success: false,
        error: result.error || 'Unknown error'
      };
      console.error('❌ Signature test failed:', result);
    }
  } catch (error) {
    debugInfo.value.signatureTest = {
      success: false,
      error: error instanceof Error ? error.message : 'Network error'
    };
    console.error('❌ Signature test error:', error);
  }
};

onMounted(() => {
  // Check environment variables
  const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
  debugInfo.value.publicKey = publicKey || 'NOT_CONFIGURED';
  debugInfo.value.hasPublicKey = !!publicKey;
  
  console.log('🔍 Wompi Debug Info:', {
    publicKey: publicKey ? publicKey.substring(0, 20) + '...' : 'NOT_CONFIGURED',
    hasPublicKey: !!publicKey
  });

  // Test signature generation
  testSignatureGeneration();
});
</script>

<template>
  <div class="wompi-debug p-6 bg-gray-100 rounded-lg">
    <h3 class="text-lg font-bold mb-4">🔍 Wompi Debug Information</h3>
    
    <!-- Public Key Status -->
    <div class="mb-4">
      <h4 class="font-semibold mb-2">Public Key Status:</h4>
      <div class="flex items-center">
        <span :class="debugInfo.hasPublicKey ? 'text-green-600' : 'text-red-600'" class="mr-2">
          {{ debugInfo.hasPublicKey ? '✅' : '❌' }}
        </span>
        <span class="font-mono text-sm">
          {{ debugInfo.hasPublicKey ? debugInfo.publicKey.substring(0, 30) + '...' : 'NOT_CONFIGURED' }}
        </span>
      </div>
    </div>

    <!-- Signature Test -->
    <div class="mb-4">
      <h4 class="font-semibold mb-2">Signature Generation Test:</h4>
      <div v-if="debugInfo.signatureTest === null" class="text-gray-600">
        🔄 Testing...
      </div>
      <div v-else-if="debugInfo.signatureTest.success" class="text-green-600">
        ✅ Success! Signature: {{ debugInfo.signatureTest.data.signature.substring(0, 20) }}...
      </div>
      <div v-else class="text-red-600">
        ❌ Failed: {{ debugInfo.signatureTest.error }}
      </div>
    </div>

    <!-- Actions -->
    <div class="flex gap-2">
      <button 
        @click="testSignatureGeneration"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
      >
        🔄 Test Again
      </button>
      <button 
        @click="console.log('Debug info:', debugInfo)"
        class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm"
      >
        📋 Log to Console
      </button>
    </div>

    <!-- Raw Debug Data -->
    <details class="mt-4">
      <summary class="cursor-pointer font-semibold">Raw Debug Data</summary>
      <pre class="mt-2 p-3 bg-gray-800 text-green-400 text-xs rounded overflow-auto">{{ JSON.stringify(debugInfo, null, 2) }}</pre>
    </details>
  </div>
</template>

<style scoped>
.wompi-debug {
  font-family: system-ui, -apple-system, sans-serif;
}
</style>
