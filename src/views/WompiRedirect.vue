<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { CheckCircle, XCircle, Clock, ArrowLeft } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const router = useRouter();

const status = ref<'loading' | 'success' | 'error' | 'pending'>('loading');
const transactionData = ref<any>(null);
const errorMessage = ref('');

onMounted(() => {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const transactionStatus = urlParams.get('status');
  
  // Simulate checking transaction status
  setTimeout(() => {
    if (transactionStatus === 'APPROVED') {
      status.value = 'success';
      transactionData.value = {
        id,
        status: transactionStatus,
        reference: urlParams.get('reference'),
        amount: urlParams.get('amount')
      };
    } else if (transactionStatus === 'DECLINED' || transactionStatus === 'ERROR') {
      status.value = 'error';
      errorMessage.value = 'La transacción fue rechazada o hubo un error en el procesamiento.';
    } else {
      status.value = 'pending';
    }
  }, 2000);
});

const goHome = () => {
  router.push('/');
};

const goToSupport = () => {
  window.open('https://wa.me/message/22XPE3IWTKONL1', '_blank');
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-4">
    <Card class="w-full max-w-md">
      <CardHeader class="text-center">
        <div class="mx-auto mb-4">
          <CheckCircle v-if="status === 'success'" class="w-16 h-16 text-green-500" />
          <XCircle v-else-if="status === 'error'" class="w-16 h-16 text-red-500" />
          <Clock v-else-if="status === 'pending'" class="w-16 h-16 text-yellow-500" />
          <div v-else class="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        <CardTitle class="text-2xl">
          <span v-if="status === 'loading'">Procesando pago...</span>
          <span v-else-if="status === 'success'">¡Pago exitoso!</span>
          <span v-else-if="status === 'error'">Pago rechazado</span>
          <span v-else>Pago pendiente</span>
        </CardTitle>
        
        <CardDescription>
          <span v-if="status === 'loading'">Verificando el estado de tu transacción</span>
          <span v-else-if="status === 'success'">Tu pago ha sido procesado correctamente</span>
          <span v-else-if="status === 'error'">{{ errorMessage }}</span>
          <span v-else>Tu pago está siendo procesado</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent class="space-y-4">
        <div v-if="transactionData && status === 'success'" class="bg-muted/50 rounded-lg p-4 space-y-2">
          <div class="flex justify-between text-sm">
            <span class="text-muted-foreground">ID de transacción:</span>
            <span class="font-mono">{{ transactionData.id }}</span>
          </div>
          <div v-if="transactionData.reference" class="flex justify-between text-sm">
            <span class="text-muted-foreground">Referencia:</span>
            <span class="font-mono">{{ transactionData.reference }}</span>
          </div>
          <div v-if="transactionData.amount" class="flex justify-between text-sm">
            <span class="text-muted-foreground">Monto:</span>
            <span class="font-semibold">${{ (transactionData.amount / 100).toLocaleString() }}</span>
          </div>
        </div>
        
        <div class="space-y-3">
          <Button 
            @click="goHome" 
            class="w-full"
            :variant="status === 'success' ? 'default' : 'outline'"
          >
            <ArrowLeft class="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
          
          <Button 
            v-if="status === 'error' || status === 'pending'"
            @click="goToSupport" 
            variant="outline"
            class="w-full"
          >
            Contactar soporte
          </Button>
        </div>
        
        <div v-if="status === 'success'" class="text-center text-sm text-muted-foreground">
          <p>Recibirás un email de confirmación en breve.</p>
          <p>Si tienes preguntas, no dudes en contactarnos.</p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
