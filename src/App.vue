<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import UnifiedNavbar from "./components/UnifiedNavbar.vue";
import { RouterView } from 'vue-router';
import FloatingContactHub from "./components/FloatingContactHub.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();

// Rutas que tienen su propia navbar personalizada con variantes específicas
const routesWithCustomNavbar = [
  '/plan-profesional',
  '/plan-gratuito',
  '/ebook-gratis',
  '/plan-empresarial',
  '/login',
  '/dashboard',
  '/modulo/fundamentos-ia',
  '/modulo/herramientas-utiles',
  '/modulo/redaccion-legal',
  '/modulo/busqueda-juridica',
  '/modulo/automatizaciones',
  '/modulo/fundamentos-ia/microsesion-1',
  '/modulo/fundamentos-ia/microsesion-2',
  '/modulo/fundamentos-ia/microsesion-3',
  '/modulo/fundamentos-ia/microsesion-4',
  '/modulo/fundamentos-ia/microsesion-5',
  '/modulo/fundamentos-ia/microsesion-6',
  '/modulo/herramientas-utiles/microsesion-4',
  '/modulo/herramientas-utiles/microsesion-5',
  '/modulo/herramientas-utiles/microsesion-6',
  '/modulo/herramientas-utiles/microsesion-7',
  '/modulo/herramientas-utiles/microsesion-8',
  '/modulo/herramientas-utiles/microsesion-9',
  '/modulo/redaccion-legal/microsesion-1',
  '/modulo/redaccion-legal/microsesion-2',
  '/modulo/redaccion-legal/microsesion-3',
  '/modulo/redaccion-legal/microsesion-4',
  '/modulo/redaccion-legal/microsesion-5',
  '/modulo/redaccion-legal/microsesion-6',
  '/modulo/redaccion-legal/microsesion-7',
  '/modulo/redaccion-legal/microsesion-8',
  '/modulo/redaccion-legal/microsesion-9',
  '/modulo/busqueda-juridica/microsesion-1',
  '/modulo/busqueda-juridica/microsesion-2',
  '/modulo/busqueda-juridica/microsesion-3',
  '/modulo/busqueda-juridica/microsesion-4',
  '/modulo/busqueda-juridica/microsesion-5',
  '/modulo/busqueda-juridica/microsesion-6',
  '/modulo/busqueda-juridica/microsesion-7',
  '/modulo/busqueda-juridica/microsesion-8'
];

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
