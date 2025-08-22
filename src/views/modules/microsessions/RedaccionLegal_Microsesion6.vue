<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-900/20 dark:to-cyan-900/20">
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button @click="router.push('/modulo/redaccion-legal')" variant="ghost" size="sm"><ArrowLeft class="w-4 h-4 mr-2" />Volver al módulo</Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Microsesión 6: Flujo de trabajo para el mejor resultado</h1>
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
          <Badge class="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 mr-3">Módulo 3</Badge>
          <Badge variant="outline" class="mr-3">Microsesión 6</Badge>
          <Badge variant="secondary">35 min</Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">🔄 Flujo de trabajo para el mejor resultado</h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">Establecer procesos sistemáticos para redacción legal con IA</p>
      </div>

      <div class="space-y-8">
        <Card class="border-l-4 border-l-teal-500">
          <CardHeader><CardTitle class="flex items-center text-xl text-teal-700 dark:text-teal-300">🎯 Objetivo de la sesión</CardTitle></CardHeader>
          <CardContent><p class="text-slate-700 dark:text-slate-300 leading-relaxed">Establecer procesos sistemáticos para redacción legal con IA usando metodologías iterativas y control de calidad.</p></CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border-teal-200 dark:border-teal-800">
          <CardHeader><CardTitle class="flex items-center text-xl text-teal-700 dark:text-teal-300">📋 Flujo de trabajo optimizado</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-teal-200 dark:border-teal-700">
                <h4 class="font-semibold text-teal-800 dark:text-teal-200 mb-2">1. 📝 Preparación</h4>
                <p class="text-teal-700 dark:text-teal-300 text-sm">Brief claro, objetivos definidos, audiencia identificada</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-teal-200 dark:border-teal-700">
                <h4 class="font-semibold text-teal-800 dark:text-teal-200 mb-2">2. 🚀 Generación inicial</h4>
                <p class="text-teal-700 dark:text-teal-300 text-sm">Prompt estructurado, primera versión del documento</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-teal-200 dark:border-teal-700">
                <h4 class="font-semibold text-teal-800 dark:text-teal-200 mb-2">3. 🔍 Revisión crítica</h4>
                <p class="text-teal-700 dark:text-teal-300 text-sm">Evaluación de precisión, coherencia y completitud</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-teal-200 dark:border-teal-700">
                <h4 class="font-semibold text-teal-800 dark:text-teal-200 mb-2">4. ✨ Refinamiento</h4>
                <p class="text-teal-700 dark:text-teal-300 text-sm">Iteraciones específicas para mejorar aspectos identificados</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-teal-200 dark:border-teal-700">
                <h4 class="font-semibold text-teal-800 dark:text-teal-200 mb-2">5. ✅ Validación final</h4>
                <p class="text-teal-700 dark:text-teal-300 text-sm">Revisión humana completa y aprobación</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="border-l-4 border-l-cyan-500 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20">
          <CardHeader><CardTitle class="flex items-center text-xl text-cyan-700 dark:text-cyan-300">🧪 Ejercicio práctico</CardTitle></CardHeader>
          <CardContent>
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-cyan-200 dark:border-cyan-700">
              <p class="text-cyan-800 dark:text-cyan-200 font-semibold mb-4">Implementar un flujo completo desde brief inicial hasta documento final</p>
              <div class="bg-cyan-100 dark:bg-cyan-900/30 p-4 rounded border border-cyan-300 dark:border-cyan-600">
                <ol class="space-y-2 text-cyan-800 dark:text-cyan-200 list-decimal list-inside">
                  <li>Define un caso práctico (ej. contrato de servicios)</li>
                  <li>Aplica cada paso del flujo de trabajo</li>
                  <li>Documenta las iteraciones realizadas</li>
                  <li>Evalúa la calidad del resultado final</li>
                  <li>Identifica oportunidades de mejora en el proceso</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Limitaciones de la IA y problemas de privacidad</h3>
                <p class="text-teal-100">Identificar riesgos y limitaciones críticas en el uso de IA para redacción legal.</p>
              </div>
              <Button @click="goToNextSession" class="bg-white text-teal-600 hover:bg-teal-50 ml-4">Continuar <ArrowRight class="w-4 h-4 ml-2" /></Button>
            </div>
          </CardContent>
        </Card>

        <div class="flex justify-center pt-8">
          <Button @click="completeMicrosession" :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-teal-600 hover:bg-teal-700'" class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
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
  isCompleted.value = completedMicrosessions['redaccion-legal-6'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['redaccion-legal-6'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => { router.push('/modulo/redaccion-legal/microsesion-7'); };
</script>

<style scoped>
.transition-all { transition: all 0.3s ease; }
.hover\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.backdrop-blur-md { backdrop-filter: blur(12px); }
</style>
