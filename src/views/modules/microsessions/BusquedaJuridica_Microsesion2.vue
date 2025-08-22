<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20">
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button @click="router.push('/modulo/busqueda-juridica')" variant="ghost" size="sm">
              <ArrowLeft class="w-4 h-4 mr-2" />Volver al módulo
            </Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Microsesión 2: Fundamentos de la búsqueda con IA</h1>
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
          <Badge class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mr-3">Módulo 4</Badge>
          <Badge variant="outline" class="mr-3">Microsesión 2</Badge>
          <Badge variant="secondary">35 min</Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">🔍 Fundamentos de la búsqueda con IA</h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">Comprender los principios básicos de la búsqueda jurídica asistida por IA</p>
      </div>

      <div class="space-y-8">
        <Card class="border-l-4 border-l-blue-500">
          <CardHeader><CardTitle class="flex items-center text-xl text-blue-700 dark:text-blue-300">🎯 Objetivo de la sesión</CardTitle></CardHeader>
          <CardContent><p class="text-slate-700 dark:text-slate-300 leading-relaxed">Comprender los principios básicos de la búsqueda jurídica asistida por IA, incluyendo búsqueda semántica, vectorización y relevancia contextual.</p></CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader><CardTitle class="flex items-center text-xl text-blue-700 dark:text-blue-300">🧠 Búsqueda semántica vs. tradicional</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">🔤 Búsqueda tradicional</h4>
                <p class="text-blue-700 dark:text-blue-300 text-sm mb-2">Coincidencia exacta de palabras clave</p>
                <ul class="text-blue-600 dark:text-blue-400 text-xs space-y-1">
                  <li>• Búsqueda literal</li>
                  <li>• Operadores booleanos</li>
                  <li>• Limitada por sinónimos</li>
                </ul>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">🧠 Búsqueda semántica</h4>
                <p class="text-blue-700 dark:text-blue-300 text-sm mb-2">Comprende el significado y contexto</p>
                <ul class="text-blue-600 dark:text-blue-400 text-xs space-y-1">
                  <li>• Análisis de intención</li>
                  <li>• Relaciones conceptuales</li>
                  <li>• Contexto jurídico</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle class="flex items-center text-xl">🔢 Vectorización y embeddings</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">¿Qué son los embeddings?</h4>
              <p class="text-indigo-700 dark:text-indigo-300 text-sm">Representaciones numéricas de texto que capturan significado semántico y relaciones conceptuales en espacios multidimensionales.</p>
            </div>
            <div class="grid gap-4 md:grid-cols-3">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <h5 class="font-medium text-slate-800 dark:text-slate-200 mb-2">📊 Vectorización</h5>
                <p class="text-slate-600 dark:text-slate-400 text-sm">Conversión de texto a vectores numéricos</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <h5 class="font-medium text-slate-800 dark:text-slate-200 mb-2">🎯 Similitud</h5>
                <p class="text-slate-600 dark:text-slate-400 text-sm">Cálculo de proximidad semántica</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <h5 class="font-medium text-slate-800 dark:text-slate-200 mb-2">🔍 Recuperación</h5>
                <p class="text-slate-600 dark:text-slate-400 text-sm">Búsqueda por relevancia contextual</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="border-l-4 border-l-indigo-500 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20">
          <CardHeader><CardTitle class="flex items-center text-xl text-indigo-700 dark:text-indigo-300">🧪 Ejercicio práctico</CardTitle></CardHeader>
          <CardContent>
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
              <p class="text-indigo-800 dark:text-indigo-200 font-semibold mb-4">Comparar resultados de búsqueda tradicional vs. búsqueda semántica con IA</p>
              <div class="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded border border-indigo-300 dark:border-indigo-600">
                <ol class="space-y-2 text-indigo-800 dark:text-indigo-200 list-decimal list-inside">
                  <li>Selecciona una consulta legal compleja (ej. "responsabilidad por daños en contratos de servicios")</li>
                  <li>Realiza la búsqueda usando métodos tradicionales (palabras clave)</li>
                  <li>Realiza la misma búsqueda usando herramientas de IA semántica</li>
                  <li>Compara la relevancia y precisión de los resultados</li>
                  <li>Analiza las diferencias en comprensión contextual</li>
                  <li>Documenta las ventajas de cada método</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Mejores modelos y herramientas inteligentes</h3>
                <p class="text-blue-100">Seleccionar herramientas y modelos optimizados para recuperación legal.</p>
              </div>
              <Button @click="goToNextSession" class="bg-white text-blue-600 hover:bg-blue-50 ml-4">Continuar <ArrowRight class="w-4 h-4 ml-2" /></Button>
            </div>
          </CardContent>
        </Card>

        <div class="flex justify-center pt-8">
          <Button @click="completeMicrosession" :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'" class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
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
  isCompleted.value = completedMicrosessions['busqueda-juridica-2'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['busqueda-juridica-2'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => { router.push('/modulo/busqueda-juridica/microsesion-3'); };
</script>

<style scoped>
.transition-all { transition: all 0.3s ease; }
.hover\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.backdrop-blur-md { backdrop-filter: blur(12px); }
</style>
