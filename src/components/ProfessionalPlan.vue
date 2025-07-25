<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Plan Profesional</h1>
    <p class="mb-6">Accede a todas las características avanzadas y contenido exclusivo.</p>
    <ul class="list-disc list-inside mb-6">
      <li>Acceso completo a todos los cursos</li>
      <li>Soporte prioritario</li>
      <li>Materiales adicionales y actualizaciones frecuentes</li>
    </ul>
    <button
      @click="goToPayment"
      class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
    >
      Comprar Plan Profesional
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToPayment() {
  // Aquí iría la lógica para conectar con la pasarela de pago
  // Por ahora, solo redirigimos a un enlace de ejemplo
  window.open('https://ejemplo-pasarela-pago.com/plan-profesional', '_blank');
}
</script>

<style scoped>
/* Estilos específicos para esta página */
</style>
