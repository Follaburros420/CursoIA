<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50 dark:from-slate-900 dark:via-red-900/20 dark:to-orange-900/20">
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button @click="router.push('/modulo/redaccion-legal')" variant="ghost" size="sm"><ArrowLeft class="w-4 h-4 mr-2" />Volver al módulo</Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Microsesión 7: Limitaciones de la IA y problemas de privacidad</h1>
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
          <Badge class="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 mr-3">Módulo 3</Badge>
          <Badge variant="outline" class="mr-3">Microsesión 7</Badge>
          <Badge variant="secondary">30 min</Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">⚠️ Limitaciones de la IA y problemas de privacidad</h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">Identificar riesgos y limitaciones críticas en el uso de IA para redacción legal</p>
      </div>

      <div class="space-y-8">
        <Card class="border-l-4 border-l-red-500">
          <CardHeader><CardTitle class="flex items-center text-xl text-red-700 dark:text-red-300">🎯 Objetivo de la sesión</CardTitle></CardHeader>
          <CardContent><p class="text-slate-700 dark:text-slate-300 leading-relaxed">Identificar riesgos y limitaciones críticas en el uso de IA para redacción legal, incluyendo problemas de privacidad y confidencialidad.</p></CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
          <CardHeader><CardTitle class="flex items-center text-xl text-red-700 dark:text-red-300">🚨 Limitaciones críticas</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-red-200 dark:border-red-700">
                <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">🔍 Alucinaciones legales</h4>
                <p class="text-red-700 dark:text-red-300 text-sm">Citas falsas, precedentes inexistentes, normativa incorrecta</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-red-200 dark:border-red-700">
                <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">📅 Información desactualizada</h4>
                <p class="text-red-700 dark:text-red-300 text-sm">Cambios normativos recientes no reflejados</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-red-200 dark:border-red-700">
                <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">🔒 Riesgos de confidencialidad</h4>
                <p class="text-red-700 dark:text-red-300 text-sm">Exposición de información sensible del cliente</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-red-200 dark:border-red-700">
                <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">⚖️ Sesgos algorítmicos</h4>
                <p class="text-red-700 dark:text-red-300 text-sm">Prejuicios incorporados en el entrenamiento</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
          <CardHeader><CardTitle class="flex items-center text-xl text-orange-700 dark:text-orange-300">🧪 Ejercicio práctico</CardTitle></CardHeader>
          <CardContent>
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
              <p class="text-orange-800 dark:text-orange-200 font-semibold mb-4">Evaluar un caso real donde el uso de IA podría comprometer la confidencialidad</p>
              <div class="bg-orange-100 dark:bg-orange-900/30 p-4 rounded border border-orange-300 dark:border-orange-600">
                <ol class="space-y-2 text-orange-800 dark:text-orange-200 list-decimal list-inside">
                  <li>Identifica un documento altamente confidencial de tu práctica</li>
                  <li>Evalúa los riesgos de usar IA externa para su redacción</li>
                  <li>Lista las medidas de protección necesarias</li>
                  <li>Determina si el uso de IA es apropiado en este caso</li>
                  <li>Documenta criterios para futuras evaluaciones</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-red-500 to-orange-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Mitigar el riesgo de privacidad</h3>
                <p class="text-red-100">Implementar estrategias para proteger información confidencial.</p>
              </div>
              <Button @click="goToNextSession" class="bg-white text-red-600 hover:bg-red-50 ml-4">Continuar <ArrowRight class="w-4 h-4 ml-2" /></Button>
            </div>
          </CardContent>
        </Card>

        <div class="flex justify-center pt-8">
          <Button @click="completeMicrosession" :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'" class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
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
  isCompleted.value = completedMicrosessions['redaccion-legal-7'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['redaccion-legal-7'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => { router.push('/modulo/redaccion-legal/microsesion-8'); };
</script>

<style scoped>
.transition-all { transition: all 0.3s ease; }
.hover\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.backdrop-blur-md { backdrop-filter: blur(12px); }
</style>
