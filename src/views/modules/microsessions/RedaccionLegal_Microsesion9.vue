<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-50 dark:from-slate-900 dark:via-violet-900/20 dark:to-purple-900/20">
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button @click="router.push('/modulo/redaccion-legal')" variant="ghost" size="sm"><ArrowLeft class="w-4 h-4 mr-2" />Volver al módulo</Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Microsesión 9: Detección de inconsistencias, revisión crítica y validación</h1>
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
          <Badge class="bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200 mr-3">Módulo 3</Badge>
          <Badge variant="outline" class="mr-3">Microsesión 9</Badge>
          <Badge variant="secondary">35 min</Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">🔍 Detección de inconsistencias, revisión crítica y validación</h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">Identificar y corregir problemas en textos generados por IA</p>
      </div>

      <div class="space-y-8">
        <Card class="border-l-4 border-l-violet-500">
          <CardHeader><CardTitle class="flex items-center text-xl text-violet-700 dark:text-violet-300">🎯 Objetivo de la sesión</CardTitle></CardHeader>
          <CardContent><p class="text-slate-700 dark:text-slate-300 leading-relaxed">Identificar y corregir problemas en textos generados por IA usando técnicas de auditoría, prompts de validación y revisión sistemática.</p></CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border-violet-200 dark:border-violet-800">
          <CardHeader><CardTitle class="flex items-center text-xl text-violet-700 dark:text-violet-300">🔎 Técnicas de detección</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-violet-200 dark:border-violet-700">
                <h4 class="font-semibold text-violet-800 dark:text-violet-200 mb-2">❓ Prompts de interrogación</h4>
                <p class="text-violet-700 dark:text-violet-300 text-sm">"¿Qué supuestos implícitos hay en este texto? ¿Qué podría estar faltando?"</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-violet-200 dark:border-violet-700">
                <h4 class="font-semibold text-violet-800 dark:text-violet-200 mb-2">🔄 Auto-auditoría</h4>
                <p class="text-violet-700 dark:text-violet-300 text-sm">Hacer que la IA revise y critique su propio trabajo</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-violet-200 dark:border-violet-700">
                <h4 class="font-semibold text-violet-800 dark:text-violet-200 mb-2">📋 Checklist de validación</h4>
                <p class="text-violet-700 dark:text-violet-300 text-sm">Lista sistemática de elementos a verificar</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-violet-200 dark:border-violet-700">
                <h4 class="font-semibold text-violet-800 dark:text-violet-200 mb-2">🎯 Revisión por capas</h4>
                <p class="text-violet-700 dark:text-violet-300 text-sm">Contenido, estructura, precisión legal, coherencia</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20">
          <CardHeader><CardTitle class="flex items-center text-xl text-purple-700 dark:text-purple-300">🧪 Ejercicio práctico</CardTitle></CardHeader>
          <CardContent>
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
              <p class="text-purple-800 dark:text-purple-200 font-semibold mb-4">Hacer que la IA audite su propio texto y sugiera correcciones específicas</p>
              <div class="bg-purple-100 dark:bg-purple-900/30 p-4 rounded border border-purple-300 dark:border-purple-600">
                <ol class="space-y-2 text-purple-800 dark:text-purple-200 list-decimal list-inside">
                  <li>Genera un documento legal con IA</li>
                  <li>Usa prompts de auto-auditoría para que revise el texto</li>
                  <li>Aplica tu checklist de validación personal</li>
                  <li>Identifica inconsistencias o problemas</li>
                  <li>Refina el documento basándote en los hallazgos</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Cierre del módulo -->
        <Card class="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
          <CardContent class="p-6">
            <div class="text-center">
              <h3 class="text-2xl font-bold mb-4">🎉 ¡Módulo 3 Completado!</h3>
              <p class="text-violet-100 mb-4 leading-relaxed">
                Has dominado los fundamentos de la redacción legal inteligente, desde principios éticos hasta técnicas avanzadas de validación.
              </p>
              <p class="text-violet-100 font-medium mb-6">
                Ahora tienes las herramientas para usar IA de forma efectiva, ética y segura en tu práctica legal diaria.
              </p>
              <Button @click="goToNextModule" class="bg-white text-violet-600 hover:bg-violet-50">
                Ir al Dashboard <ArrowRight class="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div class="flex justify-center pt-8">
          <Button @click="completeMicrosession" :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-violet-600 hover:bg-violet-700'" class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            <Check v-if="isCompleted" class="w-5 h-5 mr-2" /><BookOpen v-else class="w-5 h-5 mr-2" />
            {{ isCompleted ? 'Módulo 3 Completado' : 'Completar Módulo 3' }}
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
  isCompleted.value = completedMicrosessions['redaccion-legal-9'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['redaccion-legal-9'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextModule = () => { router.push('/dashboard'); };
</script>

<style scoped>
.transition-all { transition: all 0.3s ease; }
.hover\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.backdrop-blur-md { backdrop-filter: blur(12px); }
</style>
