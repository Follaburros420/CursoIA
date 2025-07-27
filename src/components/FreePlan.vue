<script setup lang="ts">
import UnifiedNavbar from './UnifiedNavbar.vue';
</script>

<template>
  <div class="min-h-screen bg-background">
    <UnifiedNavbar variant="default" :show-back-button="true" />
    <section class="py-12 pt-28 bg-gray-50 dark:bg-black">
    <div class="max-w-4xl mx-auto p-6 bg-white dark:bg-black rounded-lg shadow-lg">
      <h1 class="text-5xl font-extrabold mb-8 text-center text-primary uppercase tracking-wide">
        Curso de IA para Abogados - Plan Gratuito
      </h1>
      <div class="flex flex-col md:flex-row items-center gap-8">
        <img src="/ebook.png" alt="Plan Gratuito" class="w-full md:w-1/2 rounded-lg shadow" />
        <div class="md:w-1/2 space-y-4">
          <p class="text-lg leading-relaxed text-gray-700">
            Introducción gratuita al uso de la IA en el ámbito legal. Ideal para quienes desean conocer las bases antes de dar el siguiente paso.
          </p>
          <ul class="list-disc list-inside marker:text-orange-500 text-gray-700 space-y-1">
            <li>Acceso a fundamentos de IA para el sector legal</li>
            <li>Material teórico de introducción</li>
            <li>Acceso a comunidad de apoyo</li>
          </ul>
          <router-link
            to="/ebook-gratis"
            class="w-full inline-block mt-4 py-3 text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-500 transition"
          >
            Comenzar ahora
          </router-link>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<style scoped>
.text-primary {
  color: theme('colors.orange.500');
}
</style>
