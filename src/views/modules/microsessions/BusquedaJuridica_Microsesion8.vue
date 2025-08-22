<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-pink-50 dark:from-slate-900 dark:via-rose-900/20 dark:to-pink-900/20">
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button @click="router.push('/modulo/busqueda-juridica')" variant="ghost" size="sm"><ArrowLeft class="w-4 h-4 mr-2" />Volver al módulo</Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Microsesión 8: Ética y confidencialidad</h1>
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
          <Badge class="bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200 mr-3">Módulo 4</Badge>
          <Badge variant="outline" class="mr-3">Microsesión 8</Badge>
          <Badge variant="secondary">30 min</Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">🛡️ Ética y confidencialidad</h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">Aplicar principios éticos y mantener confidencialidad en la búsqueda jurídica</p>
      </div>

      <div class="space-y-8">
        <Card class="border-l-4 border-l-rose-500">
          <CardHeader><CardTitle class="flex items-center text-xl text-rose-700 dark:text-rose-300">🎯 Objetivo de la sesión</CardTitle></CardHeader>
          <CardContent><p class="text-slate-700 dark:text-slate-300 leading-relaxed">Aplicar principios éticos y mantener confidencialidad en la búsqueda jurídica, protegiendo información sensible del cliente.</p></CardContent>
        </Card>

        <Card class="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border-rose-200 dark:border-rose-800">
          <CardHeader><CardTitle class="flex items-center text-xl text-rose-700 dark:text-rose-300">🔒 Principios éticos</CardTitle></CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-rose-200 dark:border-rose-700">
                <h4 class="font-semibold text-rose-800 dark:text-rose-200 mb-2">🔐 Privacidad en búsquedas</h4>
                <p class="text-rose-700 dark:text-rose-300 text-sm">Proteger información confidencial durante el proceso de búsqueda</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-rose-200 dark:border-rose-700">
                <h4 class="font-semibold text-rose-800 dark:text-rose-200 mb-2">🎭 Anonimización de consultas</h4>
                <p class="text-rose-700 dark:text-rose-300 text-sm">Eliminar datos identificables de las búsquedas realizadas</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-rose-200 dark:border-rose-700">
                <h4 class="font-semibold text-rose-800 dark:text-rose-200 mb-2">⚖️ Ética en investigación legal</h4>
                <p class="text-rose-700 dark:text-rose-300 text-sm">Mantener estándares profesionales en la investigación</p>
              </div>
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-rose-200 dark:border-rose-700">
                <h4 class="font-semibold text-rose-800 dark:text-rose-200 mb-2">📋 Protocolos de seguridad</h4>
                <p class="text-rose-700 dark:text-rose-300 text-sm">Procedimientos para proteger información sensible</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="border-l-4 border-l-pink-500 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20">
          <CardHeader><CardTitle class="flex items-center text-xl text-pink-700 dark:text-pink-300">🧪 Ejercicio práctico</CardTitle></CardHeader>
          <CardContent>
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-pink-200 dark:border-pink-700">
              <p class="text-pink-800 dark:text-pink-200 font-semibold mb-4">Desarrollar un protocolo ético para búsquedas de información sensible</p>
              <div class="bg-pink-100 dark:bg-pink-900/30 p-4 rounded border border-pink-300 dark:border-pink-600">
                <ol class="space-y-2 text-pink-800 dark:text-pink-200 list-decimal list-inside">
                  <li>Identifica tipos de información sensible en tu práctica</li>
                  <li>Define criterios para evaluar sensibilidad de consultas</li>
                  <li>Establece protocolos de anonimización</li>
                  <li>Crea procedimientos para búsquedas confidenciales</li>
                  <li>Define cuándo usar herramientas locales vs. externas</li>
                  <li>Documenta el protocolo para uso del equipo</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Cierre del módulo -->
        <Card class="bg-gradient-to-r from-rose-500 to-pink-600 text-white">
          <CardContent class="p-6">
            <div class="text-center">
              <h3 class="text-2xl font-bold mb-4">🎉 ¡Módulo 4 Completado!</h3>
              <p class="text-rose-100 mb-4 leading-relaxed">
                Has dominado las técnicas de búsqueda de información jurídica con IA, desde fuentes del derecho hasta ética y confidencialidad.
              </p>
              <p class="text-rose-100 font-medium mb-6">
                Ahora puedes realizar investigaciones legales efectivas, validar información y mantener los más altos estándares éticos.
              </p>
              <Button @click="goToNextModule" class="bg-white text-rose-600 hover:bg-rose-50">
                Ir al Dashboard <ArrowRight class="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div class="flex justify-center pt-8">
          <Button @click="completeMicrosession" :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-rose-600 hover:bg-rose-700'" class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            <Check v-if="isCompleted" class="w-5 h-5 mr-2" /><BookOpen v-else class="w-5 h-5 mr-2" />
            {{ isCompleted ? 'Módulo 4 Completado' : 'Completar Módulo 4' }}
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
  isCompleted.value = completedMicrosessions['busqueda-juridica-8'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['busqueda-juridica-8'] = true;
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
