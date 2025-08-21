<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 dark:from-slate-900 dark:via-green-900/20 dark:to-emerald-900/20">
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
              Microsesión 5: Introducción a ChatGPT
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
          <Badge class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mr-3">
            Módulo 2
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 5
          </Badge>
          <Badge variant="secondary">
            30 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💬 Introducción a ChatGPT
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">
          Aprovechar las capacidades conversacionales y de razonamiento de OpenAI
        </p>
      </div>

      <!-- Contenido de la microsesión -->
      <div class="space-y-8">
        <!-- Objetivo -->
        <Card class="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-green-700 dark:text-green-300">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Aprovechar las capacidades conversacionales y de razonamiento de OpenAI para tareas legales avanzadas, dominando sus herramientas y funcionalidades específicas.
            </p>
          </CardContent>
        </Card>

        <!-- ¿Qué es ChatGPT? -->
        <Card class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-green-700 dark:text-green-300">
              🤖 ¿Qué es ChatGPT?
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-green-800 dark:text-green-200 leading-relaxed">
              ChatGPT es el modelo conversacional de OpenAI, líder en capacidades de diálogo, razonamiento y generación de texto. Pionero en la democratización de la IA.
            </p>
            
            <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-green-200 dark:border-green-700">
              <h4 class="font-semibold text-green-800 dark:text-green-200 mb-3">Versiones disponibles:</h4>
              <div class="grid gap-3 md:grid-cols-2">
                <div class="bg-green-100 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-600">
                  <h5 class="font-medium text-green-900 dark:text-green-100">GPT-3.5</h5>
                  <p class="text-green-700 dark:text-green-300 text-sm">Versión gratuita, rápida y eficiente</p>
                </div>
                <div class="bg-green-100 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-600">
                  <h5 class="font-medium text-green-900 dark:text-green-100">GPT-4</h5>
                  <p class="text-green-700 dark:text-green-300 text-sm">Versión premium con mayor precisión</p>
                </div>
                <div class="bg-green-100 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-600">
                  <h5 class="font-medium text-green-900 dark:text-green-100">GPT-4 Turbo</h5>
                  <p class="text-green-700 dark:text-green-300 text-sm">Optimizado para velocidad y costo</p>
                </div>
                <div class="bg-green-100 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-600">
                  <h5 class="font-medium text-green-900 dark:text-green-100">GPT-4o</h5>
                  <p class="text-green-700 dark:text-green-300 text-sm">Multimodal con capacidades avanzadas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Herramientas avanzadas -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              🛠️ Herramientas avanzadas de ChatGPT
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Plugins y GPTs -->
            <div class="border-l-4 border-l-purple-500 pl-4">
              <h3 class="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">
                🔌 Plugins y GPTs personalizados
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Acceso a herramientas especializadas y GPTs creados específicamente para tareas legales.
              </p>
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <ul class="space-y-2 text-purple-800 dark:text-purple-200">
                  <li class="flex items-center space-x-2">
                    <span class="text-purple-600 dark:text-purple-400">•</span>
                    <span>GPTs especializados en derecho corporativo</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <span class="text-purple-600 dark:text-purple-400">•</span>
                    <span>Plugins de búsqueda jurídica</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <span class="text-purple-600 dark:text-purple-400">•</span>
                    <span>Herramientas de análisis de documentos</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Code Interpreter -->
            <div class="border-l-4 border-l-orange-500 pl-4">
              <h3 class="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3">
                📊 Advanced Data Analysis (Code Interpreter)
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Capacidad de ejecutar código, analizar datos y crear visualizaciones para casos legales.
              </p>
              <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <p class="text-orange-800 dark:text-orange-200 font-medium">Casos de uso legales:</p>
                <ul class="mt-2 space-y-1 text-orange-700 dark:text-orange-300">
                  <li>• Análisis estadístico de casos</li>
                  <li>• Procesamiento de datos de contratos</li>
                  <li>• Visualización de tendencias jurídicas</li>
                  <li>• Cálculos de daños y perjuicios</li>
                </ul>
              </div>
            </div>

            <!-- Browsing -->
            <div class="border-l-4 border-l-blue-500 pl-4">
              <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">
                🌐 Web Browsing
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Acceso a información actualizada de internet para investigación legal en tiempo real.
              </p>
              <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <p class="text-blue-800 dark:text-blue-200 font-medium">Ventajas para abogados:</p>
                <ul class="mt-2 space-y-1 text-blue-700 dark:text-blue-300">
                  <li>• Búsqueda de jurisprudencia reciente</li>
                  <li>• Verificación de cambios normativos</li>
                  <li>• Investigación de precedentes actuales</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Mejores prompts para derecho -->
        <Card class="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-amber-700 dark:text-amber-300">
              ✨ Mejores prompts para derecho
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                <h4 class="font-semibold text-amber-800 dark:text-amber-200 mb-2">🎭 Prompts de rol</h4>
                <p class="text-amber-700 dark:text-amber-300 text-sm mb-2">
                  "Actúa como un abogado especialista en [área] con 15 años de experiencia..."
                </p>
                <p class="text-amber-600 dark:text-amber-400 text-xs italic">
                  Define el rol específico para obtener respuestas más precisas
                </p>
              </div>

              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                <h4 class="font-semibold text-amber-800 dark:text-amber-200 mb-2">📋 Prompts estructurados</h4>
                <p class="text-amber-700 dark:text-amber-300 text-sm mb-2">
                  "Analiza este contrato siguiendo estos pasos: 1) Partes, 2) Objeto, 3) Riesgos..."
                </p>
                <p class="text-amber-600 dark:text-amber-400 text-xs italic">
                  Estructura clara para análisis sistemático
                </p>
              </div>

              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                <h4 class="font-semibold text-amber-800 dark:text-amber-200 mb-2">🔍 Prompts de verificación</h4>
                <p class="text-amber-700 dark:text-amber-300 text-sm mb-2">
                  "Revisa tu respuesta anterior y señala cualquier aspecto que requiera verificación legal..."
                </p>
                <p class="text-amber-600 dark:text-amber-400 text-xs italic">
                  Fomenta la autocrítica y identificación de limitaciones
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="border-l-4 border-l-emerald-500 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-emerald-700 dark:text-emerald-300">
              🧪 Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <p class="text-emerald-800 dark:text-emerald-200 font-semibold mb-4">
                Crear una conversación legal compleja usando las capacidades avanzadas de ChatGPT
              </p>

              <div class="space-y-4">
                <div class="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded border border-emerald-300 dark:border-emerald-600">
                  <p class="text-emerald-900 dark:text-emerald-100 font-medium mb-3">🎯 Escenario del ejercicio:</p>
                  <p class="text-emerald-800 dark:text-emerald-200 mb-3">
                    Eres abogado de una startup que necesita:
                  </p>
                  <ol class="space-y-1 text-emerald-800 dark:text-emerald-200 list-decimal list-inside text-sm">
                    <li>Revisar un acuerdo de inversión</li>
                    <li>Analizar riesgos de propiedad intelectual</li>
                    <li>Redactar cláusulas de protección</li>
                    <li>Crear un memo ejecutivo</li>
                  </ol>
                </div>

                <div class="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded border border-emerald-300 dark:border-emerald-600">
                  <p class="text-emerald-900 dark:text-emerald-100 font-medium mb-2">📝 Tareas específicas:</p>
                  <ul class="space-y-1 text-emerald-800 dark:text-emerald-200 text-sm">
                    <li>• Usa diferentes herramientas de ChatGPT (browsing, code interpreter)</li>
                    <li>• Aplica prompts de rol y estructurados</li>
                    <li>• Mantén una conversación iterativa refinando las respuestas</li>
                    <li>• Documenta qué herramientas funcionaron mejor para cada tarea</li>
                  </ul>
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
                Dominas las diferentes versiones y herramientas de ChatGPT
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Sabes crear prompts efectivos para tareas legales específicas
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Puedes aprovechar plugins y herramientas avanzadas
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Entiendes cuándo usar ChatGPT vs otros modelos
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Introducción a Grok</h3>
                <p class="text-green-100">
                  Explorar las capacidades del modelo de X (Twitter) para análisis legal con información en tiempo real.
                </p>
              </div>
              <Button
                @click="goToNextSession"
                class="bg-white text-green-600 hover:bg-green-50 ml-4"
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
            :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'"
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

// Verificar autenticación
onMounted(() => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (!isAuthenticated) {
    router.push('/login');
    return;
  }

  // Cargar estado de completado
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  isCompleted.value = completedMicrosessions['herramientas-utiles-5'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;

  // Guardar en localStorage
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['herramientas-utiles-5'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  // Navegar a la microsesión 6 (Grok)
  router.push('/modulo/herramientas-utiles/microsesion-6');
};
</script>

<style scoped>
/* Animaciones suaves para las transiciones */
.transition-all {
  transition: all 0.3s ease;
}

/* Hover effects para las cards */
.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Gradientes personalizados */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

/* Efectos de backdrop blur */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
}

/* Estilos para listas ordenadas */
ol {
  counter-reset: item;
}

ol > li {
  display: block;
  margin-bottom: 0.5em;
  margin-left: 1em;
}

ol > li:before {
  content: counter(item, decimal) ". ";
  counter-increment: item;
  font-weight: bold;
}
</style>
