<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/20">
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
              Microsesión 6: Introducción a Grok
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
          <Badge class="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mr-3">
            Módulo 2
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 6
          </Badge>
          <Badge variant="secondary">
            25 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🚀 Introducción a Grok
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">
          Explorar las capacidades del modelo de X (Twitter) para análisis legal
        </p>
      </div>

      <!-- Contenido de la microsesión -->
      <div class="space-y-8">
        <!-- Objetivo -->
        <Card class="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-purple-700 dark:text-purple-300">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Explorar las capacidades únicas del modelo Grok de X (Twitter) para análisis legal, especialmente su acceso a información en tiempo real y su enfoque conversacional distintivo.
            </p>
          </CardContent>
        </Card>

        <!-- ¿Qué es Grok? -->
        <Card class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-purple-700 dark:text-purple-300">
              🤖 ¿Qué es Grok?
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-purple-800 dark:text-purple-200 leading-relaxed">
              Grok es el modelo de IA desarrollado por xAI (Elon Musk), integrado en la plataforma X. Su principal ventaja es el acceso en tiempo real a información de la plataforma y su personalidad conversacional única.
            </p>
            
            <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
              <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-3">Características distintivas:</h4>
              <div class="grid gap-3">
                <div class="bg-purple-100 dark:bg-purple-900/30 p-3 rounded border border-purple-300 dark:border-purple-600">
                  <h5 class="font-medium text-purple-900 dark:text-purple-100">Acceso en tiempo real</h5>
                  <p class="text-purple-700 dark:text-purple-300 text-sm">Información actualizada de X y web</p>
                </div>
                <div class="bg-purple-100 dark:bg-purple-900/30 p-3 rounded border border-purple-300 dark:border-purple-600">
                  <h5 class="font-medium text-purple-900 dark:text-purple-100">Personalidad conversacional</h5>
                  <p class="text-purple-700 dark:text-purple-300 text-sm">Estilo directo y con humor</p>
                </div>
                <div class="bg-purple-100 dark:bg-purple-900/30 p-3 rounded border border-purple-300 dark:border-purple-600">
                  <h5 class="font-medium text-purple-900 dark:text-purple-100">Integración con X</h5>
                  <p class="text-purple-700 dark:text-purple-300 text-sm">Análisis de tendencias y conversaciones</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Ventajas para análisis legal -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              💪 Ventajas para análisis legal
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Información en tiempo real -->
            <div class="border-l-4 border-l-blue-500 pl-4">
              <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">
                ⚡ Información en tiempo real
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Acceso inmediato a noticias legales, cambios normativos y discusiones jurídicas actuales.
              </p>
              <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <p class="text-blue-800 dark:text-blue-200 font-medium">Casos de uso:</p>
                <ul class="mt-2 space-y-1 text-blue-700 dark:text-blue-300">
                  <li>• Seguimiento de cambios legislativos</li>
                  <li>• Monitoreo de sentencias recientes</li>
                  <li>• Análisis de tendencias legales</li>
                </ul>
              </div>
            </div>

            <!-- Análisis de opinión pública -->
            <div class="border-l-4 border-l-green-500 pl-4">
              <h3 class="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
                📊 Análisis de opinión pública
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Capacidad única de analizar la percepción pública sobre temas legales y casos específicos.
              </p>
              <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p class="text-green-800 dark:text-green-200 font-medium">Aplicaciones legales:</p>
                <ul class="mt-2 space-y-1 text-green-700 dark:text-green-300">
                  <li>• Estrategias de comunicación legal</li>
                  <li>• Análisis de reputación corporativa</li>
                  <li>• Evaluación de impacto mediático</li>
                </ul>
              </div>
            </div>

            <!-- Enfoque conversacional -->
            <div class="border-l-4 border-l-orange-500 pl-4">
              <h3 class="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3">
                💬 Enfoque conversacional directo
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Estilo de comunicación directo que puede ser útil para explicaciones legales claras y accesibles.
              </p>
              <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <p class="text-orange-800 dark:text-orange-200 font-medium">Beneficios:</p>
                <ul class="mt-2 space-y-1 text-orange-700 dark:text-orange-300">
                  <li>• Explicaciones legales simplificadas</li>
                  <li>• Comunicación con clientes no juristas</li>
                  <li>• Análisis crítico de argumentos</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="border-l-4 border-l-pink-500 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-pink-700 dark:text-pink-300">
              🧪 Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-pink-200 dark:border-pink-700">
              <p class="text-pink-800 dark:text-pink-200 font-semibold mb-4">
                Usar Grok para investigar tendencias legales recientes y generar insights
              </p>
              
              <div class="space-y-4">
                <div class="bg-pink-100 dark:bg-pink-900/30 p-4 rounded border border-pink-300 dark:border-pink-600">
                  <p class="text-pink-900 dark:text-pink-100 font-medium mb-3">🎯 Tareas del ejercicio:</p>
                  <ol class="space-y-2 text-pink-800 dark:text-pink-200 list-decimal list-inside">
                    <li>Investiga un tema legal actual (ej. regulación de IA, criptomonedas, etc.)</li>
                    <li>Analiza la conversación pública sobre el tema en X</li>
                    <li>Identifica tendencias y opiniones predominantes</li>
                    <li>Genera un brief legal con insights de la opinión pública</li>
                    <li>Compara con información de fuentes legales tradicionales</li>
                  </ol>
                </div>
                
                <div class="bg-pink-100 dark:bg-pink-900/30 p-3 rounded border border-pink-300 dark:border-pink-600">
                  <p class="text-pink-900 dark:text-pink-100 font-medium">
                    📝 Documenta qué insights únicos obtuvo Grok vs otros modelos.
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
                Conoces las capacidades únicas de Grok para información en tiempo real
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Sabes aprovechar el análisis de opinión pública para estrategias legales
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Puedes usar Grok para monitoreo de tendencias legales
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Entiendes cuándo Grok es la mejor opción vs otros modelos
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Introducción a Claude</h3>
                <p class="text-purple-100">
                  Utilizar las fortalezas de Anthropic en análisis y redacción legal con enfoque en seguridad.
                </p>
              </div>
              <Button 
                @click="goToNextSession"
                class="bg-white text-purple-600 hover:bg-purple-50 ml-4"
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
            :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'"
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
  isCompleted.value = completedMicrosessions['herramientas-utiles-6'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['herramientas-utiles-6'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  router.push('/modulo/herramientas-utiles/microsesion-7');
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
