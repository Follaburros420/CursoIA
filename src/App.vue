<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import UnifiedNavbar from "./components/UnifiedNavbar.vue";
import { RouterView } from 'vue-router';
import FloatingContactHub from "./components/FloatingContactHub.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();

// Rutas que tienen su propia navbar personalizada con variantes específicas
const routesWithCustomNavbar = ['/plan-profesional', '/elite'];

const showDefaultNavbar = computed(() => {
  return !routesWithCustomNavbar.includes(route.path);
});

const showDefaultFooter = computed(() => {
  return !routesWithCustomNavbar.includes(route.path);
});
</script>

<template>
  <UnifiedNavbar v-if="showDefaultNavbar" />
  <RouterView />
  <FloatingContactHub />
  <Footer v-if="showDefaultFooter" />
</template>
