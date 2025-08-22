<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/20">
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button @click="router.push('/modulo/busqueda-juridica')" variant="ghost" size="sm"><ArrowLeft class="w-4 h-4 mr-2" />Volver al módulo</Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Microsesión 4: Técnicas avanzadas de búsqueda</h1>
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
          <Badge class="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mr-3">Módulo 4</Badge>
          <Badge variant="outline" class="mr-3">Microsesión 4</Badge>
          <Badge variant="secondary">35 min</Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">🚀 Técnicas avanzadas de búsqueda</h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">Aplicar técnicas sofisticadas para búsquedas precisas y comprehensivas</p>
      </div>

      <div class="space-y-8">
        <Card class="border-l-4 border-l-purple-500">
          <CardHeader><CardTitle class="flex items-center text-xl text-purple-700 dark:text-purple-300">🎯 Objetivo de la sesión</CardTitle></CardHeader>
          <CardContent><p class="text-slate-700 dark:text-slate-300 leading-relaxed">Aplicar técnicas sofisticadas como Chain-of-thought, reformulación automática y búsqueda iterativa.</p></CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
          <CardHeader><CardTitle class="flex items-center text-xl text-purple-700 dark:text-purple-300">🔗 Técnicas avanzadas</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">🧠 Chain-of-thought</h4>
                <p class="text-purple-700 dark:text-purple-300 text-sm">Descomponer consultas complejas en pasos lógicos secuenciales</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">🔄 Reformulación automática</h4>
                <p class="text-purple-700 dark:text-purple-300 text-sm">Generar variaciones de la consulta para ampliar resultados</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">📈 Expansión de consultas</h4>
                <p class="text-purple-700 dark:text-purple-300 text-sm">Incluir términos relacionados y sinónimos jurídicos</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">🔁 Búsqueda iterativa</h4>
                <p class="text-purple-700 dark:text-purple-300 text-sm">Refinar resultados a través de múltiples iteraciones</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="border-l-4 border-l-pink-500 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
          <CardHeader><CardTitle class="flex items-center text-xl text-pink-700 dark:text-pink-300">🧪 Ejercicio práctico</CardTitle></CardHeader>
          <CardContent>
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-pink-200 dark:border-pink-700">
              <p class="text-pink-800 dark:text-pink-200 font-semibold mb-4">Refinar una consulta compleja usando técnicas de reformulación y expansión</p>
              <div class="bg-pink-100 dark:bg-pink-900/30 p-4 rounded border border-pink-300 dark:border-pink-600">
                <ol class="space-y-2 text-pink-800 dark:text-pink-200 list-decimal list-inside">
                  <li>Toma una consulta legal compleja inicial</li>
                  <li>Aplica chain-of-thought para descomponerla</li>
                  <li>Genera 3 reformulaciones diferentes</li>
                  <li>Expande con términos jurídicos relacionados</li>
                  <li>Realiza búsqueda iterativa refinando resultados</li>
                  <li>Compara la efectividad de cada técnica</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Prompts para consultas legales efectivas</h3>
                <p class="text-purple-100">Dominar la construcción de prompts específicos para búsquedas jurídicas.</p>
              </div>
              <Button @click="goToNextSession" class="bg-white text-purple-600 hover:bg-purple-50 ml-4">Continuar <ArrowRight class="w-4 h-4 ml-2" /></Button>
            </div>
          </CardContent>
        </Card>

        <div class="flex justify-center pt-8">
          <Button @click="completeMicrosession" :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'" class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
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
  isCompleted.value = completedMicrosessions['busqueda-juridica-4'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['busqueda-juridica-4'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => { router.push('/modulo/busqueda-juridica/microsesion-5'); };
</script>

<style scoped>
.transition-all { transition: all 0.3s ease; }
.hover\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.backdrop-blur-md { backdrop-filter: blur(12px); }
</style>
