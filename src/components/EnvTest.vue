<script setup lang="ts">
import { ref, onMounted } from 'vue';

const envInfo = ref({
  publicKey: '',
  hasPublicKey: false,
  allEnvVars: {} as Record<string, any>
});

onMounted(() => {
  // Check Wompi public key
  const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
  envInfo.value.publicKey = publicKey || 'NOT_SET';
  envInfo.value.hasPublicKey = !!publicKey;
  
  // Get all environment variables that start with VITE_
  const allViteVars: Record<string, any> = {};
  Object.keys(import.meta.env).forEach(key => {
    if (key.startsWith('VITE_')) {
      allViteVars[key] = import.meta.env[key];
    }
  });
  envInfo.value.allEnvVars = allViteVars;
  
  console.log('🔍 Environment Variables Check:', {
    publicKey: publicKey ? publicKey.substring(0, 20) + '...' : 'NOT_SET',
    hasPublicKey: !!publicKey,
    allViteVars
  });
});
</script>

<template>
  <div class="env-test p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-4">
    <h3 class="font-bold text-lg mb-3">🔍 Environment Variables Test</h3>
    
    <div class="space-y-2">
      <div class="flex items-center">
        <span class="font-semibold mr-2">Wompi Public Key:</span>
        <span :class="envInfo.hasPublicKey ? 'text-green-600' : 'text-red-600'">
          {{ envInfo.hasPublicKey ? '✅ Configured' : '❌ Not Set' }}
        </span>
      </div>
      
      <div v-if="envInfo.hasPublicKey" class="text-sm text-gray-600 font-mono">
        {{ envInfo.publicKey.substring(0, 30) }}...
      </div>
      
      <div class="mt-4">
        <details>
          <summary class="cursor-pointer font-semibold">All VITE_ Environment Variables</summary>
          <pre class="mt-2 p-2 bg-gray-100 text-xs rounded overflow-auto">{{ JSON.stringify(envInfo.allEnvVars, null, 2) }}</pre>
        </details>
      </div>
    </div>
  </div>
</template>
