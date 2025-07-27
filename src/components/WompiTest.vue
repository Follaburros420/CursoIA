<script setup lang="ts">
import { ref } from 'vue';

const testResult = ref('');
const isLoading = ref(false);

const testWompiAPI = async () => {
  isLoading.value = true;
  testResult.value = 'Testing...';
  
  try {
    const testData = {
      reference: 'TEST_' + Date.now(),
      amount: 5000000,
      currency: 'COP'
    };
    
    console.log('🧪 Testing Wompi API with:', testData);
    
    const response = await fetch('/api/wompi/generate-signature', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    const result = await response.json();
    
    if (response.ok) {
      testResult.value = `✅ SUCCESS!\n${JSON.stringify(result, null, 2)}`;
      console.log('✅ API Test successful:', result);
    } else {
      testResult.value = `❌ API ERROR!\nStatus: ${response.status}\n${JSON.stringify(result, null, 2)}`;
      console.error('❌ API Test failed:', result);
    }
  } catch (error) {
    testResult.value = `❌ NETWORK ERROR!\n${error instanceof Error ? error.message : 'Unknown error'}`;
    console.error('❌ Network error:', error);
  } finally {
    isLoading.value = false;
  }
};

const testEnvironment = () => {
  const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
  const envInfo = {
    publicKey: publicKey ? publicKey.substring(0, 30) + '...' : 'NOT_SET',
    hasPublicKey: !!publicKey,
    mode: import.meta.env.MODE,
    dev: import.meta.env.DEV,
    prod: import.meta.env.PROD
  };
  
  testResult.value = `🔍 ENVIRONMENT INFO:\n${JSON.stringify(envInfo, null, 2)}`;
  console.log('🔍 Environment test:', envInfo);
};

const testWompiWidget = () => {
  const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
  
  if (!publicKey) {
    testResult.value = '❌ Cannot test widget: Public key not configured';
    return;
  }
  
  // Create a simple test widget
  const testData = {
    publicKey,
    currency: 'COP',
    amount: 5000000,
    reference: 'WIDGET_TEST_' + Date.now(),
    redirectUrl: window.location.origin + '/test'
  };
  
  testResult.value = `🎯 WIDGET TEST DATA:\n${JSON.stringify(testData, null, 2)}\n\nCheck console for widget creation attempt...`;
  
  // Try to create widget programmatically
  try {
    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.setAttribute('data-render', 'button');
    script.setAttribute('data-public-key', testData.publicKey);
    script.setAttribute('data-currency', testData.currency);
    script.setAttribute('data-amount-in-cents', testData.amount.toString());
    script.setAttribute('data-reference', testData.reference);
    script.setAttribute('data-redirect-url', testData.redirectUrl);
    
    // Add to a test container
    const testContainer = document.getElementById('widget-test-container');
    if (testContainer) {
      testContainer.innerHTML = '';
      const form = document.createElement('form');
      form.appendChild(script);
      testContainer.appendChild(form);
      
      testResult.value += '\n\n✅ Widget script added to test container';
    }
    
    console.log('🎯 Widget test data:', testData);
  } catch (error) {
    testResult.value += `\n\n❌ Widget creation error: ${error}`;
    console.error('❌ Widget creation error:', error);
  }
};
</script>

<template>
  <div class="wompi-test p-6 bg-gray-50 border border-gray-300 rounded-lg">
    <h3 class="text-lg font-bold mb-4">🧪 Wompi Integration Test</h3>
    
    <div class="flex flex-wrap gap-2 mb-4">
      <button 
        @click="testEnvironment"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
      >
        🔍 Test Environment
      </button>
      
      <button 
        @click="testWompiAPI"
        :disabled="isLoading"
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm disabled:opacity-50"
      >
        🔧 Test API
      </button>
      
      <button 
        @click="testWompiWidget"
        class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-sm"
      >
        🎯 Test Widget
      </button>
      
      <button 
        @click="testResult = ''"
        class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm"
      >
        🗑️ Clear
      </button>
    </div>
    
    <!-- Test Results -->
    <div v-if="testResult" class="mb-4">
      <h4 class="font-semibold mb-2">Test Results:</h4>
      <pre class="p-3 bg-gray-800 text-green-400 text-xs rounded overflow-auto max-h-64">{{ testResult }}</pre>
    </div>
    
    <!-- Widget Test Container -->
    <div id="widget-test-container" class="mt-4 p-4 border border-dashed border-gray-400 rounded">
      <div class="text-gray-500 text-center">Widget test container (click "Test Widget" to populate)</div>
    </div>
  </div>
</template>

<style scoped>
.wompi-test {
  font-family: system-ui, -apple-system, sans-serif;
}
</style>
