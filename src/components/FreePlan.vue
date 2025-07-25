<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Plan Gratuito</h1>
    <p class="mb-6">Accede a las características básicas del curso sin costo alguno.</p>
    <ul class="list-disc list-inside mb-6">
      <li>Acceso limitado a contenido</li>
      <li>Soporte básico</li>
      <li>Actualizaciones periódicas</li>
    </ul>
    <button
      @click="goToPayment"
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      Comprar Plan Gratuito
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToPayment() {
  // Aquí iría la lógica para conectar con la pasarela de pago
  // Por ahora, solo redirigimos a un enlace de ejemplo
  window.open('https://ejemplo-pasarela-pago.com/plan-gratuito', '_blank');
}
</script>

<style scoped>
/* Estilos específicos para esta página */
</style>
