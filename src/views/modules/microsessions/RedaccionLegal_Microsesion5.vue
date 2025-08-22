<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-rose-50 dark:from-slate-900 dark:via-pink-900/20 dark:to-rose-900/20">
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button @click="router.push('/modulo/redaccion-legal')" variant="ghost" size="sm">
              <ArrowLeft class="w-4 h-4 mr-2" />Volver al módulo
            </Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Microsesión 5: Adaptación de tono, estilo y precisión</h1>
          </div>
          <div class="flex items-center space-x-4">
            <Button @click="router.push('/dashboard')" variant="outline" size="sm"><Home class="w-4 h-4 mr-2" />Dashboard</Button>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="mb-8">
        <div class="flex items-center mb-4">
          <Badge class="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 mr-3">Módulo 3</Badge>
          <Badge variant="outline" class="mr-3">Microsesión 5</Badge>
          <Badge variant="secondary">30 min</Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">🎭 Adaptación de tono, estilo y precisión</h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">Ajustar el output según audiencia, contexto y nivel de formalidad</p>
      </div>

      <div class="space-y-8">
        <Card class="border-l-4 border-l-pink-500">
          <CardHeader><CardTitle class="flex items-center text-xl text-pink-700 dark:text-pink-300">🎯 Objetivo de la sesión</CardTitle></CardHeader>
          <CardContent><p class="text-slate-700 dark:text-slate-300 leading-relaxed">Ajustar el output según audiencia, contexto y nivel de formalidad requerido.</p></CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-pink-200 dark:border-pink-800">
          <CardHeader><CardTitle class="flex items-center text-xl text-pink-700 dark:text-pink-300">🎨 Técnicas de adaptación</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4 md:grid-cols-3">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-pink-200 dark:border-pink-700">
                <h4 class="font-semibold text-pink-800 dark:text-pink-200 mb-2">👨‍⚖️ Para jueces</h4>
                <p class="text-pink-700 dark:text-pink-300 text-sm">Formal, técnico, con citas precisas</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-pink-200 dark:border-pink-700">
                <h4 class="font-semibold text-pink-800 dark:text-pink-200 mb-2">👥 Para clientes</h4>
                <p class="text-pink-700 dark:text-pink-300 text-sm">Claro, accesible, explicativo</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-pink-200 dark:border-pink-700">
                <h4 class="font-semibold text-pink-800 dark:text-pink-200 mb-2">👔 Para colegas</h4>
                <p class="text-pink-700 dark:text-pink-300 text-sm">Profesional, directo, técnico</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="border-l-4 border-l-rose-500 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20">
          <CardHeader><CardTitle class="flex items-center text-xl text-rose-700 dark:text-rose-300">🧪 Ejercicio práctico</CardTitle></CardHeader>
          <CardContent>
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-rose-200 dark:border-rose-700">
              <p class="text-rose-800 dark:text-rose-200 font-semibold mb-4">Tomar un párrafo legal y adaptarlo para 3 audiencias distintas</p>
              <div class="bg-rose-100 dark:bg-rose-900/30 p-4 rounded border border-rose-300 dark:border-rose-600">
                <ol class="space-y-2 text-rose-800 dark:text-rose-200 list-decimal list-inside">
                  <li>Selecciona un párrafo legal complejo</li>
                  <li>Adapta el tono para un juez (formal y técnico)</li>
                  <li>Adapta el mismo contenido para un cliente (claro y explicativo)</li>
                  <li>Adapta para un colega abogado (profesional y directo)</li>
                  <li>Compara las diferencias en estructura y vocabulario</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Flujo de trabajo para el mejor resultado</h3>
                <p class="text-pink-100">Establecer procesos sistemáticos para redacción legal con IA.</p>
              </div>
              <Button @click="goToNextSession" class="bg-white text-pink-600 hover:bg-pink-50 ml-4">Continuar <ArrowRight class="w-4 h-4 ml-2" /></Button>
            </div>
          </CardContent>
        </Card>

        <div class="flex justify-center pt-8">
          <Button @click="completeMicrosession" :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-pink-600 hover:bg-pink-700'" class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            <Check v-if="isCompleted" class="w-5 h-5 mr-2" /><BookOpen v-else class="w-5 h-5 mr-2" />
            {{ isCompleted ? 'Microsesión Completada' : 'Marcar como Completada' }}
          </Button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Home, Check, BookOpen, ArrowRight } from "lucide-vue-next";

const router = useRouter();
const isCompleted = ref(false);

onMounted(() => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (!isAuthenticated) { router.push('/login'); return; }
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  isCompleted.value = completedMicrosessions['redaccion-legal-5'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['redaccion-legal-5'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => { router.push('/modulo/redaccion-legal/microsesion-6'); };
</script>

<style scoped>
.transition-all { transition: all 0.3s ease; }
.hover\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.backdrop-blur-md { backdrop-filter: blur(12px); }
</style>
