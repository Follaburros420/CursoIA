<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-orange-900/20 dark:to-red-900/20">
    <!-- Navbar -->
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button
              @click="router.push('/modulo/herramientas-utiles')"
              variant="ghost"
              size="sm"
              class="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <ArrowLeft class="w-4 h-4 mr-2" />
              Volver al módulo
            </Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Microsesión 7: Introducción a Claude
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            <Button
              @click="router.push('/dashboard')"
              variant="outline"
              size="sm"
            >
              <Home class="w-4 h-4 mr-2" />
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Contenido principal -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header de la microsesión -->
      <div class="mb-8">
        <div class="flex items-center mb-4">
          <Badge class="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 mr-3">
            Módulo 2
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 7
          </Badge>
          <Badge variant="secondary">
            30 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎭 Introducción a Claude
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">
          Utilizar las fortalezas de Anthropic en análisis y redacción legal
        </p>
      </div>

      <!-- Contenido de la microsesión -->
      <div class="space-y-8">
        <!-- Objetivo -->
        <Card class="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-orange-700 dark:text-orange-300">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Utilizar las fortalezas únicas de Claude de Anthropic en análisis profundo y redacción legal, aprovechando su enfoque en seguridad y su capacidad para manejar documentos extensos.
            </p>
          </CardContent>
        </Card>

        <!-- ¿Qué es Claude? -->
        <Card class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-orange-700 dark:text-orange-300">
              🤖 ¿Qué es Claude?
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-orange-800 dark:text-orange-200 leading-relaxed">
              Claude es el modelo de IA de Anthropic, diseñado con un enfoque especial en seguridad, honestidad y utilidad. Destaca por su capacidad de análisis profundo y manejo de contextos extensos.
            </p>
            
            <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-3">Versiones disponibles:</h4>
              <div class="grid gap-3 md:grid-cols-2">
                <div class="bg-orange-100 dark:bg-orange-900/30 p-3 rounded border border-orange-300 dark:border-orange-600">
                  <h5 class="font-medium text-orange-900 dark:text-orange-100">Claude 3 Haiku</h5>
                  <p class="text-orange-700 dark:text-orange-300 text-sm">Rápido y eficiente para tareas simples</p>
                </div>
                <div class="bg-orange-100 dark:bg-orange-900/30 p-3 rounded border border-orange-300 dark:border-orange-600">
                  <h5 class="font-medium text-orange-900 dark:text-orange-100">Claude 3 Sonnet</h5>
                  <p class="text-orange-700 dark:text-orange-300 text-sm">Balance entre velocidad y capacidad</p>
                </div>
                <div class="bg-orange-100 dark:bg-orange-900/30 p-3 rounded border border-orange-300 dark:border-orange-600">
                  <h5 class="font-medium text-orange-900 dark:text-orange-100">Claude 3 Opus</h5>
                  <p class="text-orange-700 dark:text-orange-300 text-sm">Máxima capacidad para tareas complejas</p>
                </div>
                <div class="bg-orange-100 dark:bg-orange-900/30 p-3 rounded border border-orange-300 dark:border-orange-600">
                  <h5 class="font-medium text-orange-900 dark:text-orange-100">Claude 3.5 Sonnet</h5>
                  <p class="text-orange-700 dark:text-orange-300 text-sm">Versión mejorada con mejor rendimiento</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Fortalezas únicas -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              💪 Fortalezas únicas de Claude
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Análisis profundo -->
            <div class="border-l-4 border-l-blue-500 pl-4">
              <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">
                🔍 Análisis profundo y detallado
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Claude destaca en análisis exhaustivos y razonamiento paso a paso, ideal para casos legales complejos.
              </p>
              <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <p class="text-blue-800 dark:text-blue-200 font-medium">Aplicaciones legales:</p>
                <ul class="mt-2 space-y-1 text-blue-700 dark:text-blue-300">
                  <li>• Análisis de precedentes complejos</li>
                  <li>• Revisión exhaustiva de contratos</li>
                  <li>• Evaluación de riesgos legales</li>
                </ul>
              </div>
            </div>

            <!-- Documentos largos -->
            <div class="border-l-4 border-l-green-500 pl-4">
              <h3 class="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
                📄 Manejo de documentos extensos
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Capacidad superior para procesar y analizar documentos legales largos manteniendo el contexto.
              </p>
              <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p class="text-green-800 dark:text-green-200 font-medium">Casos de uso:</p>
                <ul class="mt-2 space-y-1 text-green-700 dark:text-green-300">
                  <li>• Análisis de expedientes completos</li>
                  <li>• Revisión de contratos multi-página</li>
                  <li>• Síntesis de documentación extensa</li>
                </ul>
              </div>
            </div>

            <!-- Principios de seguridad -->
            <div class="border-l-4 border-l-purple-500 pl-4">
              <h3 class="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">
                🛡️ Principios de seguridad
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Diseñado con Constitutional AI para ser más seguro, honesto y útil en contextos profesionales.
              </p>
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <p class="text-purple-800 dark:text-purple-200 font-medium">Beneficios para abogados:</p>
                <ul class="mt-2 space-y-1 text-purple-700 dark:text-purple-300">
                  <li>• Mayor confiabilidad en respuestas</li>
                  <li>• Reconocimiento de limitaciones</li>
                  <li>• Enfoque ético en recomendaciones</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-red-700 dark:text-red-300">
              🧪 Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-red-200 dark:border-red-700">
              <p class="text-red-800 dark:text-red-200 font-semibold mb-4">
                Analizar un documento legal extenso usando las capacidades de Claude
              </p>
              
              <div class="space-y-4">
                <div class="bg-red-100 dark:bg-red-900/30 p-4 rounded border border-red-300 dark:border-red-600">
                  <p class="text-red-900 dark:text-red-100 font-medium mb-3">🎯 Pasos del ejercicio:</p>
                  <ol class="space-y-2 text-red-800 dark:text-red-200 list-decimal list-inside">
                    <li>Selecciona un documento legal extenso (contrato, sentencia, etc.)</li>
                    <li>Pide a Claude un análisis estructurado y detallado</li>
                    <li>Solicita identificación de riesgos y oportunidades</li>
                    <li>Compara la profundidad del análisis con otros modelos</li>
                    <li>Evalúa la capacidad de mantener contexto en todo el documento</li>
                  </ol>
                </div>
                
                <div class="bg-red-100 dark:bg-red-900/30 p-3 rounded border border-red-300 dark:border-red-600">
                  <p class="text-red-900 dark:text-red-100 font-medium">
                    📝 Documenta las ventajas específicas de Claude para análisis extensos.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Lo que te llevas -->
        <Card class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-emerald-700 dark:text-emerald-300">
              🧭 Lo que te llevas de esta sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-3">
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Conoces las versiones de Claude y sus capacidades específicas
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Sabes aprovechar su fortaleza en análisis profundo y documentos extensos
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Entiendes los principios de seguridad que lo hacen confiable
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Puedes elegir Claude para tareas que requieren análisis exhaustivo
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-orange-500 to-red-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Introducción a Perplexity</h3>
                <p class="text-orange-100">
                  Aprovechar las capacidades de búsqueda y síntesis de información legal con verificación de fuentes.
                </p>
              </div>
              <Button 
                @click="goToNextSession"
                class="bg-white text-orange-600 hover:bg-orange-50 ml-4"
              >
                Continuar
                <ArrowRight class="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <!-- Botón de completar microsesión -->
        <div class="flex justify-center pt-8">
          <Button
            @click="completeMicrosession"
            :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-orange-600 hover:bg-orange-700'"
            class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
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
import { 
  ArrowLeft, 
  Home, 
  Check, 
  BookOpen, 
  ArrowRight 
} from "lucide-vue-next";

const router = useRouter();
const isCompleted = ref(false);

onMounted(() => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (!isAuthenticated) {
    router.push('/login');
    return;
  }

  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  isCompleted.value = completedMicrosessions['herramientas-utiles-7'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['herramientas-utiles-7'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  router.push('/modulo/herramientas-utiles/microsesion-8');
};
</script>

<style scoped>
.transition-all {
  transition: all 0.3s ease;
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.backdrop-blur-md {
  backdrop-filter: blur(12px);
}
</style>
