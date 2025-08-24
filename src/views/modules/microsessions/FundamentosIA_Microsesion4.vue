<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-900/20 dark:to-cyan-900/20">
    <!-- Navbar -->
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button
              @click="router.push('/modulo/fundamentos-ia')"
              variant="ghost"
              size="sm"
              class="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <ArrowLeft class="w-4 h-4 mr-2" />
              Volver al módulo
            </Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Microsesión 4: Aplicaciones de la IA en el Derecho
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
          <Badge class="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 mr-3">
            Módulo 1
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 4
          </Badge>
          <Badge variant="secondary">
            30 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎓 Microsesión 4: Aplicaciones de la IA en el Derecho
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium mb-6">
          Casos de uso prácticos de la IA en la profesión legal
        </p>

        <!-- Video de YouTube -->
        <div class="mb-8">
          <div class="relative w-full max-w-4xl mx-auto">
            <div class="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl bg-slate-100 dark:bg-slate-800">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/EOqgC9fHRIA"
                title="Aplicaciones de la IA en el Derecho"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenido de la microsesión -->
      <div class="space-y-8">
        <!-- Objetivo -->
        <Card class="border-l-4 border-l-teal-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-teal-700 dark:text-teal-300">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Conocer las principales aplicaciones prácticas de la IA en la profesión legal y cómo pueden transformar tu práctica diaria.
            </p>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              De la teoría a la práctica: casos de uso reales que puedes implementar hoy.
            </p>
          </CardContent>
        </Card>

        <!-- Panorama de aplicaciones -->
        <Card class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-blue-700 dark:text-blue-300">
              🚀 Panorama de Aplicaciones de IA en el Derecho
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-blue-800 dark:text-blue-200 leading-relaxed">
              La IA está transformando la práctica legal en múltiples áreas, desde la automatización de tareas rutinarias hasta el análisis predictivo de casos.
            </p>

            <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <p class="text-blue-800 dark:text-blue-200 font-medium mb-3">
                Principales áreas de aplicación:
              </p>
              <div class="grid gap-3 md:grid-cols-2">
                <div class="flex items-start space-x-2">
                  <span class="text-blue-600 dark:text-blue-400 mt-1">📄</span>
                  <span class="text-blue-700 dark:text-blue-300">Automatización de documentos legales</span>
                </div>
                <div class="flex items-start space-x-2">
                  <span class="text-blue-600 dark:text-blue-400 mt-1">🔍</span>
                  <span class="text-blue-700 dark:text-blue-300">Investigación jurídica inteligente</span>
                </div>
                <div class="flex items-start space-x-2">
                  <span class="text-blue-600 dark:text-blue-400 mt-1">📊</span>
                  <span class="text-blue-700 dark:text-blue-300">Análisis predictivo de casos</span>
                </div>
                <div class="flex items-start space-x-2">
                  <span class="text-blue-600 dark:text-blue-400 mt-1">🛡️</span>
                  <span class="text-blue-700 dark:text-blue-300">Compliance y gestión de riesgos</span>
                </div>
                <div class="flex items-start space-x-2">
                  <span class="text-blue-600 dark:text-blue-400 mt-1">⚖️</span>
                  <span class="text-blue-700 dark:text-blue-300">Due diligence automatizada</span>
                </div>
                <div class="flex items-start space-x-2">
                  <span class="text-blue-600 dark:text-blue-400 mt-1">💬</span>
                  <span class="text-blue-700 dark:text-blue-300">Asistentes legales virtuales</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Aplicaciones por área legal -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              ⚖️ Aplicaciones por Área Legal
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Derecho Corporativo -->
            <div class="border-l-4 border-l-orange-500 pl-4">
              <h3 class="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3">
                🏢 Derecho Corporativo
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Automatización de contratos, análisis de riesgos corporativos y due diligence en fusiones y adquisiciones.
              </p>
              <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <p class="text-orange-800 dark:text-orange-200 font-medium mb-2">Casos de uso:</p>
                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <span class="text-orange-600 dark:text-orange-400">•</span>
                    <span class="text-orange-700 dark:text-orange-300">Revisión automatizada de contratos</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-orange-600 dark:text-orange-400">•</span>
                    <span class="text-orange-700 dark:text-orange-300">Análisis de cláusulas de riesgo</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-orange-600 dark:text-orange-400">•</span>
                    <span class="text-orange-700 dark:text-orange-300">Due diligence documental</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Litigios -->
            <div class="border-l-4 border-l-purple-500 pl-4">
              <h3 class="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">
                ⚖️ Litigios y Contencioso
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Análisis predictivo de casos, investigación de precedentes y preparación automatizada de argumentos.
              </p>
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <span class="text-purple-600 dark:text-purple-400">•</span>
                    <span class="text-purple-700 dark:text-purple-300">Predicción de resultados de casos</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-purple-600 dark:text-purple-400">•</span>
                    <span class="text-purple-700 dark:text-purple-300">Búsqueda inteligente de precedentes</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-purple-600 dark:text-purple-400">•</span>
                    <span class="text-purple-700 dark:text-purple-300">Análisis de estrategias legales</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Compliance -->
            <div class="border-l-4 border-l-green-500 pl-4">
              <h3 class="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
                🛡️ Compliance y Regulatorio
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Monitoreo automático de cumplimiento normativo y detección de riesgos regulatorios.
              </p>
              <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 space-y-2">
                <div class="flex items-center space-x-2">
                  <span class="text-green-600 dark:text-green-400">•</span>
                  <span class="text-green-700 dark:text-green-300">Monitoreo de cambios normativos</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-green-600 dark:text-green-400">•</span>
                  <span class="text-green-700 dark:text-green-300">Auditorías automatizadas</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-green-600 dark:text-green-400">•</span>
                  <span class="text-green-700 dark:text-green-300">Gestión de riesgos regulatorios</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Herramientas y Tecnologías -->
        <Card class="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-amber-700 dark:text-amber-300">
              🛠️ Herramientas y Tecnologías Disponibles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                  <h4 class="font-semibold text-amber-800 dark:text-amber-200 mb-2">🤖 LLMs Generales</h4>
                  <ul class="text-sm space-y-1 text-amber-700 dark:text-amber-300">
                    <li>• ChatGPT, Claude, Gemini</li>
                    <li>• Redacción y análisis general</li>
                    <li>• Fácil implementación</li>
                  </ul>
                </div>
                <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                  <h4 class="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚖️ Herramientas Legales</h4>
                  <ul class="text-sm space-y-1 text-amber-700 dark:text-amber-300">
                    <li>• Westlaw Edge, Lexis+</li>
                    <li>• Contract analysis tools</li>
                    <li>• Specialized legal AI</li>
                  </ul>
                </div>
              </div>

              <div class="mt-4 p-4 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-600">
                <p class="text-amber-900 dark:text-amber-100 font-medium">
                  💡 <strong>Clave:</strong> La implementación exitosa requiere entender tanto las capacidades como las limitaciones de cada tecnología.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="border-l-4 border-l-cyan-500 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-cyan-700 dark:text-cyan-300">
              🧪 Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-cyan-200 dark:border-cyan-700">
              <p class="text-cyan-800 dark:text-cyan-200 font-semibold mb-4">
                Identifica 3 aplicaciones de IA que podrías implementar en tu área de práctica legal específica.
              </p>

              <div class="space-y-4">
                <div class="bg-cyan-100 dark:bg-cyan-900/30 p-4 rounded border border-cyan-300 dark:border-cyan-600">
                  <p class="text-cyan-900 dark:text-cyan-100 font-medium mb-3">🎯 Tarea:</p>
                  <ol class="space-y-2 text-cyan-800 dark:text-cyan-200 list-decimal list-inside">
                    <li>Selecciona tu área de especialización legal (corporativo, litigios, compliance, etc.)</li>
                    <li>Identifica 3 tareas repetitivas o que consumen mucho tiempo en tu práctica</li>
                    <li>Para cada tarea, propón una aplicación de IA que podría ayudar</li>
                    <li>Evalúa la viabilidad y el impacto potencial de cada aplicación</li>
                  </ol>
                </div>

                <div class="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded border border-cyan-300 dark:border-cyan-600">
                  <p class="text-cyan-900 dark:text-cyan-100 font-medium">
                    💡 <strong>Ejemplo:</strong> Si trabajas en derecho corporativo, podrías identificar: revisión de contratos (IA para análisis de cláusulas), due diligence (automatización de revisión documental), compliance (monitoreo automático de regulaciones).
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
                Conoces las principales aplicaciones de IA en diferentes áreas del derecho
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Puedes identificar oportunidades de automatización en tu práctica legal
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Entiendes las herramientas disponibles y sus capacidades específicas
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Tienes una visión clara de cómo la IA puede transformar tu práctica legal
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Sesgos y ética</h3>
                <p class="text-teal-100">
                  La IA no es neutral. A veces amplifica sesgos. ¿Cómo evitamos que eso afecte una decisión legal?
                </p>
              </div>
              <Button
                @click="goToNextSession"
                class="bg-white text-teal-600 hover:bg-teal-50 ml-4"
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
            :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-teal-600 hover:bg-teal-700'"
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
  isCompleted.value = completedMicrosessions['fundamentos-ia-4'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;

  // Guardar en localStorage
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['fundamentos-ia-4'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  // Navegar a la microsesión 5
  router.push('/modulo/fundamentos-ia/microsesion-5');
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

/* Estilos para código */
.font-mono {
  font-family: 'Courier New', Courier, monospace;
}
</style>
