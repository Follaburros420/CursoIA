<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-cyan-900/20 dark:to-blue-900/20">
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
              Microsesión 8: Introducción a Perplexity
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
          <Badge class="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 mr-3">
            Módulo 2
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 8
          </Badge>
          <Badge variant="secondary">
            25 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🔍 Introducción a Perplexity
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">
          Aprovechar las capacidades de búsqueda y síntesis de información legal
        </p>
      </div>

      <!-- Contenido de la microsesión -->
      <div class="space-y-8">
        <!-- Objetivo -->
        <Card class="border-l-4 border-l-cyan-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-cyan-700 dark:text-cyan-300">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Aprovechar las capacidades únicas de Perplexity como motor de búsqueda con IA para investigación legal, síntesis de información jurídica y verificación de fuentes.
            </p>
          </CardContent>
        </Card>

        <!-- ¿Qué es Perplexity? -->
        <Card class="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-cyan-200 dark:border-cyan-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-cyan-700 dark:text-cyan-300">
              🤖 ¿Qué es Perplexity?
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-cyan-800 dark:text-cyan-200 leading-relaxed">
              Perplexity es un motor de búsqueda potenciado por IA que combina búsqueda web en tiempo real con síntesis inteligente, proporcionando respuestas con fuentes verificables.
            </p>
            
            <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-cyan-200 dark:border-cyan-700">
              <h4 class="font-semibold text-cyan-800 dark:text-cyan-200 mb-3">Características principales:</h4>
              <div class="grid gap-3">
                <div class="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded border border-cyan-300 dark:border-cyan-600">
                  <h5 class="font-medium text-cyan-900 dark:text-cyan-100">Búsqueda en tiempo real</h5>
                  <p class="text-cyan-700 dark:text-cyan-300 text-sm">Acceso a información actualizada de internet</p>
                </div>
                <div class="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded border border-cyan-300 dark:border-cyan-600">
                  <h5 class="font-medium text-cyan-900 dark:text-cyan-100">Fuentes verificables</h5>
                  <p class="text-cyan-700 dark:text-cyan-300 text-sm">Citas y enlaces a fuentes originales</p>
                </div>
                <div class="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded border border-cyan-300 dark:border-cyan-600">
                  <h5 class="font-medium text-cyan-900 dark:text-cyan-100">Síntesis inteligente</h5>
                  <p class="text-cyan-700 dark:text-cyan-300 text-sm">Combina múltiples fuentes en respuestas coherentes</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Ventajas para investigación legal -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              💪 Ventajas para investigación legal
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Verificación de fuentes -->
            <div class="border-l-4 border-l-green-500 pl-4">
              <h3 class="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
                ✅ Verificación automática de fuentes
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Cada respuesta incluye citas y enlaces directos a las fuentes originales, crucial para investigación legal.
              </p>
              <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p class="text-green-800 dark:text-green-200 font-medium">Beneficios legales:</p>
                <ul class="mt-2 space-y-1 text-green-700 dark:text-green-300">
                  <li>• Trazabilidad de información</li>
                  <li>• Verificación de precedentes</li>
                  <li>• Validación de datos normativos</li>
                </ul>
              </div>
            </div>

            <!-- Investigación actualizada -->
            <div class="border-l-4 border-l-blue-500 pl-4">
              <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">
                🔄 Investigación actualizada
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Acceso a información legal reciente, cambios normativos y jurisprudencia actualizada.
              </p>
              <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <p class="text-blue-800 dark:text-blue-200 font-medium">Casos de uso:</p>
                <ul class="mt-2 space-y-1 text-blue-700 dark:text-blue-300">
                  <li>• Seguimiento de cambios legislativos</li>
                  <li>• Búsqueda de sentencias recientes</li>
                  <li>• Monitoreo de tendencias jurídicas</li>
                </ul>
              </div>
            </div>

            <!-- Síntesis multi-fuente -->
            <div class="border-l-4 border-l-purple-500 pl-4">
              <h3 class="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">
                📊 Síntesis multi-fuente
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Combina información de múltiples fuentes legales para crear análisis comprehensivos.
              </p>
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <p class="text-purple-800 dark:text-purple-200 font-medium">Aplicaciones:</p>
                <ul class="mt-2 space-y-1 text-purple-700 dark:text-purple-300">
                  <li>• Análisis comparativo de jurisdicciones</li>
                  <li>• Síntesis de doctrina legal</li>
                  <li>• Investigación de precedentes múltiples</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-blue-700 dark:text-blue-300">
              🧪 Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <p class="text-blue-800 dark:text-blue-200 font-semibold mb-4">
                Realizar una investigación legal completa usando Perplexity y verificar fuentes
              </p>
              
              <div class="space-y-4">
                <div class="bg-blue-100 dark:bg-blue-900/30 p-4 rounded border border-blue-300 dark:border-blue-600">
                  <p class="text-blue-900 dark:text-blue-100 font-medium mb-3">🎯 Pasos del ejercicio:</p>
                  <ol class="space-y-2 text-blue-800 dark:text-blue-200 list-decimal list-inside">
                    <li>Elige un tema legal actual (ej. regulación de IA, protección de datos)</li>
                    <li>Realiza una búsqueda comprehensiva con Perplexity</li>
                    <li>Verifica todas las fuentes citadas</li>
                    <li>Crea un memo legal basado en la información encontrada</li>
                    <li>Compara con resultados de búsquedas tradicionales</li>
                  </ol>
                </div>
                
                <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded border border-blue-300 dark:border-blue-600">
                  <p class="text-blue-900 dark:text-blue-100 font-medium">
                    📝 Evalúa la calidad y confiabilidad de las fuentes proporcionadas.
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
                Dominas Perplexity como herramienta de investigación legal
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Sabes verificar y validar fuentes automáticamente
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Puedes realizar investigación legal actualizada y comprehensiva
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Entiendes cuándo usar Perplexity vs otros modelos
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Introducción a Ollama</h3>
                <p class="text-cyan-100">
                  Implementar modelos locales para máxima privacidad y control en el análisis legal.
                </p>
              </div>
              <Button 
                @click="goToNextSession"
                class="bg-white text-cyan-600 hover:bg-cyan-50 ml-4"
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
            :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-cyan-600 hover:bg-cyan-700'"
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
  isCompleted.value = completedMicrosessions['herramientas-utiles-8'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['herramientas-utiles-8'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  router.push('/modulo/herramientas-utiles/microsesion-9');
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
