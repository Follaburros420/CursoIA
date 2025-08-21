<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20">
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
              Microsesión 4: Introducción a Gemini
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
          <Badge class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mr-3">
            Módulo 2
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 4
          </Badge>
          <Badge variant="secondary">
            25 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🤖 Introducción a Gemini
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">
          Dominar el modelo de Google para tareas legales específicas
        </p>
      </div>

      <!-- Contenido de la microsesión -->
      <div class="space-y-8">
        <!-- Objetivo -->
        <Card class="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-blue-700 dark:text-blue-300">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Dominar el modelo de Google Gemini para tareas legales específicas, aprovechando sus fortalezas únicas en razonamiento y su integración con el ecosistema Google.
            </p>
          </CardContent>
        </Card>

        <!-- ¿Qué es Gemini? -->
        <Card class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-blue-700 dark:text-blue-300">
              🧠 ¿Qué es Gemini?
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-blue-800 dark:text-blue-200 leading-relaxed">
              Gemini es la familia de modelos de IA más avanzada de Google, diseñada para ser multimodal (texto, imágenes, código) y optimizada para razonamiento complejo.
            </p>
            
            <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-3">Versiones disponibles:</h4>
              <div class="grid gap-3 md:grid-cols-2">
                <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded border border-blue-300 dark:border-blue-600">
                  <h5 class="font-medium text-blue-900 dark:text-blue-100">Gemini Pro</h5>
                  <p class="text-blue-700 dark:text-blue-300 text-sm">Versión estándar para la mayoría de tareas</p>
                </div>
                <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded border border-blue-300 dark:border-blue-600">
                  <h5 class="font-medium text-blue-900 dark:text-blue-100">Gemini Ultra</h5>
                  <p class="text-blue-700 dark:text-blue-300 text-sm">Versión más potente para tareas complejas</p>
                </div>
                <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded border border-blue-300 dark:border-blue-600">
                  <h5 class="font-medium text-blue-900 dark:text-blue-100">Gemini Flash</h5>
                  <p class="text-blue-700 dark:text-blue-300 text-sm">Versión rápida y eficiente</p>
                </div>
                <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded border border-blue-300 dark:border-blue-600">
                  <h5 class="font-medium text-blue-900 dark:text-blue-100">Gemini Vision</h5>
                  <p class="text-blue-700 dark:text-blue-300 text-sm">Especializado en análisis de imágenes</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Fortalezas de Gemini -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              💪 Fortalezas de Gemini para el derecho
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Razonamiento complejo -->
            <div class="border-l-4 border-l-green-500 pl-4">
              <h3 class="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
                🧮 Razonamiento complejo
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Gemini destaca en tareas que requieren múltiples pasos de razonamiento, ideal para análisis jurídicos complejos.
              </p>
              <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p class="text-green-800 dark:text-green-200 font-medium">Ejemplo de uso:</p>
                <p class="text-green-700 dark:text-green-300 italic">
                  "Analiza este contrato paso a paso: 1) Identifica las partes, 2) Extrae obligaciones principales, 3) Evalúa riesgos potenciales, 4) Sugiere mejoras específicas"
                </p>
              </div>
            </div>

            <!-- Integración Google Workspace -->
            <div class="border-l-4 border-l-purple-500 pl-4">
              <h3 class="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">
                📊 Integración con Google Workspace
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Funciona nativamente con Google Docs, Sheets, Gmail y Drive, facilitando flujos de trabajo legales.
              </p>
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <ul class="space-y-2 text-purple-800 dark:text-purple-200">
                  <li class="flex items-center space-x-2">
                    <span class="text-purple-600 dark:text-purple-400">•</span>
                    <span>Redacción colaborativa en Google Docs</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <span class="text-purple-600 dark:text-purple-400">•</span>
                    <span>Análisis de datos en Google Sheets</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <span class="text-purple-600 dark:text-purple-400">•</span>
                    <span>Búsqueda inteligente en Drive</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Capacidades multimodales -->
            <div class="border-l-4 border-l-orange-500 pl-4">
              <h3 class="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3">
                🖼️ Capacidades multimodales
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Puede analizar documentos escaneados, diagramas, gráficos y combinar información visual con textual.
              </p>
              <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <p class="text-orange-800 dark:text-orange-200 font-medium">Casos de uso legales:</p>
                <ul class="mt-2 space-y-1 text-orange-700 dark:text-orange-300">
                  <li>• Análisis de contratos escaneados</li>
                  <li>• Interpretación de diagramas organizacionales</li>
                  <li>• Extracción de datos de formularios</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Mejores prácticas -->
        <Card class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-emerald-700 dark:text-emerald-300">
              ✨ Mejores prácticas con Gemini
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
                <h4 class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">📝 Prompts estructurados</h4>
                <p class="text-emerald-700 dark:text-emerald-300 text-sm">
                  Usa instrucciones paso a paso y formatos específicos para obtener mejores resultados.
                </p>
              </div>

              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
                <h4 class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">🔄 Iteración colaborativa</h4>
                <p class="text-emerald-700 dark:text-emerald-300 text-sm">
                  Aprovecha la capacidad conversacional para refinar y mejorar las respuestas.
                </p>
              </div>

              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
                <h4 class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">📊 Contexto específico</h4>
                <p class="text-emerald-700 dark:text-emerald-300 text-sm">
                  Proporciona contexto legal específico y jurisdicción para respuestas más precisas.
                </p>
              </div>

              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
                <h4 class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">🔍 Verificación cruzada</h4>
                <p class="text-emerald-700 dark:text-emerald-300 text-sm">
                  Siempre verifica las respuestas con fuentes legales confiables.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Casos de uso específicos -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              🎯 Casos de uso específicos en derecho
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800">
                    <th class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">
                      Tarea legal
                    </th>
                    <th class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">
                      Cómo usar Gemini
                    </th>
                    <th class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">
                      Ventaja específica
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                      Análisis de contratos
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      Análisis paso a paso con razonamiento explícito
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      Razonamiento transparente y verificable
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                      Redacción colaborativa
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      Integración directa con Google Docs
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      Flujo de trabajo sin interrupciones
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                      Análisis de documentos escaneados
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      Capacidades multimodales nativas
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      No requiere OCR previo
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="border-l-4 border-l-indigo-500 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-indigo-700 dark:text-indigo-300">
              🧪 Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
              <p class="text-indigo-800 dark:text-indigo-200 font-semibold mb-4">
                Usar Gemini para analizar un contrato y comparar con otros modelos
              </p>

              <div class="space-y-4">
                <div class="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded border border-indigo-300 dark:border-indigo-600">
                  <p class="text-indigo-900 dark:text-indigo-100 font-medium mb-3">🎯 Pasos del ejercicio:</p>
                  <ol class="space-y-2 text-indigo-800 dark:text-indigo-200 list-decimal list-inside">
                    <li>Selecciona un contrato de ejemplo (puede ser un NDA o contrato de servicios)</li>
                    <li>Crea un prompt estructurado para análisis paso a paso</li>
                    <li>Ejecuta el mismo prompt en Gemini y al menos otro modelo (ChatGPT, Claude)</li>
                    <li>Compara la calidad del razonamiento y la estructura de las respuestas</li>
                    <li>Identifica las fortalezas específicas de cada modelo</li>
                  </ol>
                </div>

                <div class="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded border border-indigo-300 dark:border-indigo-600">
                  <p class="text-indigo-900 dark:text-indigo-100 font-medium">
                    📝 Documenta tus hallazgos y compártelos en el foro del curso.
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
                Conoces las versiones y capacidades específicas de Gemini
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Sabes aprovechar sus fortalezas en razonamiento complejo
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Puedes integrar Gemini en flujos de trabajo con Google Workspace
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Entiendes cuándo usar Gemini vs otros modelos según la tarea
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Introducción a ChatGPT</h3>
                <p class="text-blue-100">
                  Aprovechar las capacidades conversacionales y de razonamiento de OpenAI para tareas legales avanzadas.
                </p>
              </div>
              <Button
                @click="goToNextSession"
                class="bg-white text-blue-600 hover:bg-blue-50 ml-4"
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
            :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'"
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
  isCompleted.value = completedMicrosessions['herramientas-utiles-4'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;

  // Guardar en localStorage
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['herramientas-utiles-4'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  // Navegar a la microsesión 5 (ChatGPT)
  router.push('/modulo/herramientas-utiles/microsesion-5');
};
</script>

<style scoped>
/* Animaciones suaves para las transiciones */
.transition-all {
  transition: all 0.3s ease;
}

/* Estilos para las tablas */
table {
  @apply bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm;
}

th, td {
  @apply transition-colors duration-200;
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
