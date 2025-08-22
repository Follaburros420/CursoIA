<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-orange-900/20 dark:to-red-900/20">
    <!-- Navbar -->
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button @click="router.push('/modulo/redaccion-legal')" variant="ghost" size="sm">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Volver al módulo
            </Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Microsesión 4: Estructuración de documentos jurídicos
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            <Button @click="router.push('/dashboard')" variant="outline" size="sm">
              <Home class="w-4 h-4 mr-2" />
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Contenido principal -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="mb-8">
        <div class="flex items-center mb-4">
          <Badge class="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 mr-3">Módulo 3</Badge>
          <Badge variant="outline" class="mr-3">Microsesión 4</Badge>
          <Badge variant="secondary">35 min</Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          📋 Estructuración de documentos jurídicos
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">
          Dominar plantillas y estructuras para diferentes tipos de documentos legales
        </p>
      </div>

      <div class="space-y-8">
        <!-- Objetivo -->
        <Card class="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-orange-700 dark:text-orange-300">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Dominar plantillas y estructuras para diferentes tipos de documentos legales, desde contratos hasta demandas y recursos.
            </p>
          </CardContent>
        </Card>

        <!-- Plantillas principales -->
        <Card class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-orange-700 dark:text-orange-300">
              📄 Plantillas principales
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                <h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-2">📝 Contratos</h4>
                <p class="text-orange-700 dark:text-orange-300 text-sm">Estructura: Partes, Objeto, Obligaciones, Cláusulas especiales, Firma</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                <h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-2">📋 Memos legales</h4>
                <p class="text-orange-700 dark:text-orange-300 text-sm">Estructura: Resumen, Hechos, Análisis, Conclusiones, Recomendaciones</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                <h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-2">⚖️ Demandas</h4>
                <p class="text-orange-700 dark:text-orange-300 text-sm">Estructura: Hechos, Fundamentos de derecho, Pretensiones, Pruebas</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                <h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-2">📨 Cartas legales</h4>
                <p class="text-orange-700 dark:text-orange-300 text-sm">Estructura: Encabezado, Antecedentes, Posición legal, Solicitud, Cierre</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-red-700 dark:text-red-300">🧪 Ejercicio práctico</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-red-200 dark:border-red-700">
              <p class="text-red-800 dark:text-red-200 font-semibold mb-4">
                Elegir una plantilla y pedir a la IA que la rellene parcialmente con inputs dados
              </p>
              <div class="bg-red-100 dark:bg-red-900/30 p-4 rounded border border-red-300 dark:border-red-600">
                <p class="text-red-900 dark:text-red-100 font-medium mb-3">🎯 Pasos del ejercicio:</p>
                <ol class="space-y-2 text-red-800 dark:text-red-200 list-decimal list-inside">
                  <li>Selecciona un tipo de documento (contrato, memo, carta)</li>
                  <li>Define los inputs específicos (partes, objeto, condiciones)</li>
                  <li>Usa la IA para generar el documento siguiendo la plantilla</li>
                  <li>Evalúa la adherencia a la estructura</li>
                  <li>Refina el prompt para mejorar el resultado</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-orange-500 to-red-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Adaptación de tono, estilo y precisión</h3>
                <p class="text-orange-100">Ajustar el output según audiencia, contexto y nivel de formalidad.</p>
              </div>
              <Button @click="goToNextSession" class="bg-white text-orange-600 hover:bg-orange-50 ml-4">
                Continuar <ArrowRight class="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <!-- Botón de completar -->
        <div class="flex justify-center pt-8">
          <Button @click="completeMicrosession" :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-orange-600 hover:bg-orange-700'" class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            <Check v-if="isCompleted" class="w-5 h-5 mr-2" />
            <BookOpen v-else class="w-5 h-5 mr-2" />
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
  if (!isAuthenticated) {
    router.push('/login');
    return;
  }
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  isCompleted.value = completedMicrosessions['redaccion-legal-4'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['redaccion-legal-4'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  router.push('/modulo/redaccion-legal/microsesion-5');
};
</script>

<style scoped>
.transition-all { transition: all 0.3s ease; }
.hover\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.backdrop-blur-md { backdrop-filter: blur(12px); }
</style>
