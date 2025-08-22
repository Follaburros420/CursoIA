<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-teal-50 dark:from-slate-900 dark:via-green-900/20 dark:to-teal-900/20">
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button @click="router.push('/modulo/busqueda-juridica')" variant="ghost" size="sm"><ArrowLeft class="w-4 h-4 mr-2" />Volver al módulo</Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Microsesión 3: Mejores modelos y herramientas inteligentes</h1>
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
          <Badge class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mr-3">Módulo 4</Badge>
          <Badge variant="outline" class="mr-3">Microsesión 3</Badge>
          <Badge variant="secondary">30 min</Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">🛠️ Mejores modelos y herramientas inteligentes</h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">Seleccionar herramientas y modelos optimizados para recuperación legal</p>
      </div>

      <div class="space-y-8">
        <Card class="border-l-4 border-l-green-500">
          <CardHeader><CardTitle class="flex items-center text-xl text-green-700 dark:text-green-300">🎯 Objetivo de la sesión</CardTitle></CardHeader>
          <CardContent><p class="text-slate-700 dark:text-slate-300 leading-relaxed">Seleccionar herramientas y modelos optimizados para recuperación legal, conociendo sus fortalezas específicas.</p></CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-green-200 dark:border-green-800">
          <CardHeader><CardTitle class="flex items-center text-xl text-green-700 dark:text-green-300">🏆 Herramientas especializadas</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">🔍 Perplexity</h4>
                <p class="text-green-700 dark:text-green-300 text-sm">Búsqueda con fuentes verificables, ideal para investigación legal actualizada</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">🧠 Claude</h4>
                <p class="text-green-700 dark:text-green-300 text-sm">Análisis profundo de documentos extensos, excelente para jurisprudencia</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">🏠 Ollama</h4>
                <p class="text-green-700 dark:text-green-300 text-sm">Modelos locales para búsquedas confidenciales y privadas</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">📚 RAG personalizado</h4>
                <p class="text-green-700 dark:text-green-300 text-sm">Sistemas propios con bases de datos jurídicas específicas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="border-l-4 border-l-teal-500 bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20">
          <CardHeader><CardTitle class="flex items-center text-xl text-teal-700 dark:text-teal-300">🧪 Ejercicio práctico</CardTitle></CardHeader>
          <CardContent>
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-teal-200 dark:border-teal-700">
              <p class="text-teal-800 dark:text-teal-200 font-semibold mb-4">Comparar resultados de búsqueda entre diferentes herramientas y modelos</p>
              <div class="bg-teal-100 dark:bg-teal-900/30 p-4 rounded border border-teal-300 dark:border-teal-600">
                <ol class="space-y-2 text-teal-800 dark:text-teal-200 list-decimal list-inside">
                  <li>Selecciona una consulta legal específica</li>
                  <li>Realiza la búsqueda en 3 herramientas diferentes</li>
                  <li>Evalúa precisión, relevancia y actualidad</li>
                  <li>Compara velocidad y facilidad de uso</li>
                  <li>Documenta fortalezas de cada herramienta</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-green-500 to-teal-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Técnicas avanzadas de búsqueda</h3>
                <p class="text-green-100">Aplicar técnicas sofisticadas para búsquedas precisas y comprehensivas.</p>
              </div>
              <Button @click="goToNextSession" class="bg-white text-green-600 hover:bg-green-50 ml-4">Continuar <ArrowRight class="w-4 h-4 ml-2" /></Button>
            </div>
          </CardContent>
        </Card>

        <div class="flex justify-center pt-8">
          <Button @click="completeMicrosession" :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'" class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
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
  isCompleted.value = completedMicrosessions['busqueda-juridica-3'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['busqueda-juridica-3'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => { router.push('/modulo/busqueda-juridica/microsesion-4'); };
</script>

<style scoped>
.transition-all { transition: all 0.3s ease; }
.hover\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.backdrop-blur-md { backdrop-filter: blur(12px); }
</style>
