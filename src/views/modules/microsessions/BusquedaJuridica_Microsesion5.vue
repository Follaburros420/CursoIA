<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-cyan-900/20 dark:to-blue-900/20">
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button @click="router.push('/modulo/busqueda-juridica')" variant="ghost" size="sm"><ArrowLeft class="w-4 h-4 mr-2" />Volver al módulo</Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Microsesión 5: Prompts para consultas legales efectivas</h1>
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
          <Badge class="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 mr-3">Módulo 4</Badge>
          <Badge variant="outline" class="mr-3">Microsesión 5</Badge>
          <Badge variant="secondary">30 min</Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">💬 Prompts para consultas legales efectivas</h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">Dominar la construcción de prompts específicos para búsquedas jurídicas</p>
      </div>

      <div class="space-y-8">
        <Card class="border-l-4 border-l-cyan-500">
          <CardHeader><CardTitle class="flex items-center text-xl text-cyan-700 dark:text-cyan-300">🎯 Objetivo de la sesión</CardTitle></CardHeader>
          <CardContent><p class="text-slate-700 dark:text-slate-300 leading-relaxed">Dominar la construcción de prompts específicos para búsquedas jurídicas con contexto legal y especificidad jurisdiccional.</p></CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-cyan-200 dark:border-cyan-800">
          <CardHeader><CardTitle class="flex items-center text-xl text-cyan-700 dark:text-cyan-300">📝 Estructura de prompts legales</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <h4 class="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">🏛️ Contexto jurisdiccional</h4>
                <p class="text-cyan-700 dark:text-cyan-300 text-sm">Especificar país, región, área del derecho aplicable</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <h4 class="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">📅 Marco temporal</h4>
                <p class="text-cyan-700 dark:text-cyan-300 text-sm">Definir período de vigencia y actualidad requerida</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <h4 class="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">🎯 Especificidad</h4>
                <p class="text-cyan-700 dark:text-cyan-300 text-sm">Nivel de detalle y profundidad requerida</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <h4 class="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">📊 Tipo de fuente</h4>
                <p class="text-cyan-700 dark:text-cyan-300 text-sm">Preferencia por jurisprudencia, doctrina o normativa</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
          <CardHeader><CardTitle class="flex items-center text-xl text-blue-700 dark:text-blue-300">🧪 Ejercicio práctico</CardTitle></CardHeader>
          <CardContent>
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <p class="text-blue-800 dark:text-blue-200 font-semibold mb-4">Crear una biblioteca de prompts para diferentes tipos de consultas legales</p>
              <div class="bg-blue-100 dark:bg-blue-900/30 p-4 rounded border border-blue-300 dark:border-blue-600">
                <ol class="space-y-2 text-blue-800 dark:text-blue-200 list-decimal list-inside">
                  <li>Identifica 5 tipos de consultas frecuentes en tu práctica</li>
                  <li>Crea un prompt base para cada tipo</li>
                  <li>Incluye contexto jurisdiccional específico</li>
                  <li>Prueba cada prompt con casos reales</li>
                  <li>Refina basándote en la calidad de resultados</li>
                  <li>Documenta variaciones para diferentes contextos</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Extracción de líneas jurisprudenciales y doctrina probable</h3>
                <p class="text-cyan-100">Identificar y extraer patrones jurisprudenciales y tendencias doctrinales.</p>
              </div>
              <Button @click="goToNextSession" class="bg-white text-cyan-600 hover:bg-cyan-50 ml-4">Continuar <ArrowRight class="w-4 h-4 ml-2" /></Button>
            </div>
          </CardContent>
        </Card>

        <div class="flex justify-center pt-8">
          <Button @click="completeMicrosession" :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-cyan-600 hover:bg-cyan-700'" class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
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
  isCompleted.value = completedMicrosessions['busqueda-juridica-5'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['busqueda-juridica-5'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => { router.push('/modulo/busqueda-juridica/microsesion-6'); };
</script>

<style scoped>
.transition-all { transition: all 0.3s ease; }
.hover\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.backdrop-blur-md { backdrop-filter: blur(12px); }
</style>
