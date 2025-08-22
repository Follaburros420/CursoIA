<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-indigo-900/20 dark:to-purple-900/20">
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button @click="router.push('/modulo/busqueda-juridica')" variant="ghost" size="sm"><ArrowLeft class="w-4 h-4 mr-2" />Volver al módulo</Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Microsesión 6: Extracción de líneas jurisprudenciales y doctrina probable</h1>
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
          <Badge class="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 mr-3">Módulo 4</Badge>
          <Badge variant="outline" class="mr-3">Microsesión 6</Badge>
          <Badge variant="secondary">40 min</Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">📊 Extracción de líneas jurisprudenciales y doctrina probable</h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">Identificar y extraer patrones jurisprudenciales y tendencias doctrinales</p>
      </div>

      <div class="space-y-8">
        <Card class="border-l-4 border-l-indigo-500">
          <CardHeader><CardTitle class="flex items-center text-xl text-indigo-700 dark:text-indigo-300">🎯 Objetivo de la sesión</CardTitle></CardHeader>
          <CardContent><p class="text-slate-700 dark:text-slate-300 leading-relaxed">Identificar y extraer patrones jurisprudenciales, líneas de decisión y tendencias doctrinales usando IA.</p></CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-200 dark:border-indigo-800">
          <CardHeader><CardTitle class="flex items-center text-xl text-indigo-700 dark:text-indigo-300">⚖️ Análisis jurisprudencial</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">📈 Líneas jurisprudenciales</h4>
                <p class="text-indigo-700 dark:text-indigo-300 text-sm">Patrones consistentes en decisiones judiciales sobre temas específicos</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">🔮 Doctrina probable</h4>
                <p class="text-indigo-700 dark:text-indigo-300 text-sm">Tendencias emergentes que pueden convertirse en precedente</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">📊 Análisis de precedentes</h4>
                <p class="text-indigo-700 dark:text-indigo-300 text-sm">Evaluación sistemática de decisiones relevantes</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Tendencias judiciales</h4>
                <p class="text-indigo-700 dark:text-indigo-300 text-sm">Evolución en criterios y enfoques interpretativos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
          <CardHeader><CardTitle class="flex items-center text-xl text-purple-700 dark:text-purple-300">🧪 Ejercicio práctico</CardTitle></CardHeader>
          <CardContent>
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
              <p class="text-purple-800 dark:text-purple-200 font-semibold mb-4">Extraer líneas jurisprudenciales de un conjunto de sentencias sobre un tema específico</p>
              <div class="bg-purple-100 dark:bg-purple-900/30 p-4 rounded border border-purple-300 dark:border-purple-600">
                <ol class="space-y-2 text-purple-800 dark:text-purple-200 list-decimal list-inside">
                  <li>Selecciona un tema jurídico específico (ej. protección de datos)</li>
                  <li>Recopila 10-15 sentencias relevantes</li>
                  <li>Usa IA para identificar patrones comunes</li>
                  <li>Extrae los criterios de decisión recurrentes</li>
                  <li>Identifica evolución temporal en los criterios</li>
                  <li>Predice tendencias futuras basándote en el análisis</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Filtrado y validación de información</h3>
                <p class="text-indigo-100">Asegurar calidad, vigencia y confiabilidad de la información encontrada.</p>
              </div>
              <Button @click="goToNextSession" class="bg-white text-indigo-600 hover:bg-indigo-50 ml-4">Continuar <ArrowRight class="w-4 h-4 ml-2" /></Button>
            </div>
          </CardContent>
        </Card>

        <div class="flex justify-center pt-8">
          <Button @click="completeMicrosession" :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'" class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
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
  isCompleted.value = completedMicrosessions['busqueda-juridica-6'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['busqueda-juridica-6'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => { router.push('/modulo/busqueda-juridica/microsesion-7'); };
</script>

<style scoped>
.transition-all { transition: all 0.3s ease; }
.hover\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.backdrop-blur-md { backdrop-filter: blur(12px); }
</style>
