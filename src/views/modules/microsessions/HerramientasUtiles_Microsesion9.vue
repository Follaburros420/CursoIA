<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800">
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
              Microsesión 9: Introducción a Ollama
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
          <Badge class="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 mr-3">
            Módulo 2
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 9
          </Badge>
          <Badge variant="secondary">
            35 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🏠 Introducción a Ollama
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">
          Implementar modelos locales para máxima privacidad y control
        </p>
      </div>

      <!-- Contenido de la microsesión -->
      <div class="space-y-8">
        <!-- Objetivo -->
        <Card class="border-l-4 border-l-gray-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-gray-700 dark:text-gray-300">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Implementar modelos de IA locales usando Ollama para máxima privacidad y control, especialmente importante para el manejo de documentos legales confidenciales.
            </p>
          </CardContent>
        </Card>

        <!-- ¿Qué es Ollama? -->
        <Card class="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-gray-700 dark:text-gray-300">
              🤖 ¿Qué es Ollama?
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-gray-800 dark:text-gray-200 leading-relaxed">
              Ollama es una plataforma que permite ejecutar modelos de lenguaje grandes (LLMs) localmente en tu computadora, sin enviar datos a servidores externos.
            </p>
            
            <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-3">Modelos disponibles:</h4>
              <div class="grid gap-3 md:grid-cols-2">
                <div class="bg-gray-100 dark:bg-gray-900/30 p-3 rounded border border-gray-300 dark:border-gray-600">
                  <h5 class="font-medium text-gray-900 dark:text-gray-100">Llama 2/3</h5>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Modelos de Meta, muy capaces</p>
                </div>
                <div class="bg-gray-100 dark:bg-gray-900/30 p-3 rounded border border-gray-300 dark:border-gray-600">
                  <h5 class="font-medium text-gray-900 dark:text-gray-100">Mistral</h5>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Eficiente y rápido</p>
                </div>
                <div class="bg-gray-100 dark:bg-gray-900/30 p-3 rounded border border-gray-300 dark:border-gray-600">
                  <h5 class="font-medium text-gray-900 dark:text-gray-100">CodeLlama</h5>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Especializado en código</p>
                </div>
                <div class="bg-gray-100 dark:bg-gray-900/30 p-3 rounded border border-gray-300 dark:border-gray-600">
                  <h5 class="font-medium text-gray-900 dark:text-gray-100">Phi-3</h5>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Modelo compacto de Microsoft</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Ventajas para abogados -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              💪 Ventajas críticas para abogados
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Privacidad total -->
            <div class="border-l-4 border-l-green-500 pl-4">
              <h3 class="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
                🔒 Privacidad y confidencialidad total
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Los datos nunca salen de tu computadora, cumpliendo con los más altos estándares de confidencialidad legal.
              </p>
              <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p class="text-green-800 dark:text-green-200 font-medium">Casos de uso críticos:</p>
                <ul class="mt-2 space-y-1 text-green-700 dark:text-green-300">
                  <li>• Análisis de documentos ultra-confidenciales</li>
                  <li>• Casos de alto perfil o sensibles</li>
                  <li>• Cumplimiento de normativas estrictas</li>
                </ul>
              </div>
            </div>

            <!-- Control total -->
            <div class="border-l-4 border-l-blue-500 pl-4">
              <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">
                🎛️ Control total del modelo
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Personalización completa, fine-tuning con datos propios y control sobre el comportamiento del modelo.
              </p>
              <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <p class="text-blue-800 dark:text-blue-200 font-medium">Beneficios:</p>
                <ul class="mt-2 space-y-1 text-blue-700 dark:text-blue-300">
                  <li>• Especialización en áreas legales específicas</li>
                  <li>• Adaptación a estilo de escritura del bufete</li>
                  <li>• Integración con sistemas internos</li>
                </ul>
              </div>
            </div>

            <!-- Sin costos recurrentes -->
            <div class="border-l-4 border-l-purple-500 pl-4">
              <h3 class="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">
                💰 Sin costos recurrentes
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Una vez instalado, no hay costos por uso, tokens o suscripciones mensuales.
              </p>
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <p class="text-purple-800 dark:text-purple-200 font-medium">Ventajas económicas:</p>
                <ul class="mt-2 space-y-1 text-purple-700 dark:text-purple-300">
                  <li>• Uso ilimitado sin restricciones</li>
                  <li>• ROI predecible para bufetes</li>
                  <li>• Escalabilidad sin costos adicionales</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Instalación y configuración -->
        <Card class="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-amber-700 dark:text-amber-300">
              ⚙️ Instalación y configuración básica
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
              <h4 class="font-semibold text-amber-800 dark:text-amber-200 mb-3">Pasos básicos:</h4>
              <ol class="space-y-2 text-amber-800 dark:text-amber-200 list-decimal list-inside">
                <li>Descargar e instalar Ollama desde ollama.ai</li>
                <li>Ejecutar: <code class="bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded">ollama pull llama2</code></li>
                <li>Iniciar conversación: <code class="bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded">ollama run llama2</code></li>
                <li>Integrar con aplicaciones via API REST</li>
              </ol>
            </div>
            
            <div class="bg-amber-100 dark:bg-amber-900/30 p-3 rounded border border-amber-300 dark:border-amber-600">
              <p class="text-amber-900 dark:text-amber-100 font-medium text-sm">
                💡 Requiere hardware adecuado: mínimo 8GB RAM, recomendado 16GB+ para modelos grandes
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="border-l-4 border-l-slate-500 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-slate-700 dark:text-slate-300">
              🧪 Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <p class="text-slate-800 dark:text-slate-200 font-semibold mb-4">
                Configurar un modelo local con Ollama para análisis de documentos confidenciales
              </p>
              
              <div class="space-y-4">
                <div class="bg-slate-100 dark:bg-slate-900/30 p-4 rounded border border-slate-300 dark:border-slate-600">
                  <p class="text-slate-900 dark:text-slate-100 font-medium mb-3">🎯 Pasos del ejercicio:</p>
                  <ol class="space-y-2 text-slate-800 dark:text-slate-200 list-decimal list-inside">
                    <li>Instala Ollama en tu sistema</li>
                    <li>Descarga un modelo apropiado (ej. Llama 2 7B)</li>
                    <li>Configura un prompt específico para análisis legal</li>
                    <li>Prueba con un documento legal de ejemplo</li>
                    <li>Compara velocidad y calidad vs modelos en la nube</li>
                    <li>Evalúa los beneficios de privacidad obtenidos</li>
                  </ol>
                </div>
                
                <div class="bg-slate-100 dark:bg-slate-900/30 p-3 rounded border border-slate-300 dark:border-slate-600">
                  <p class="text-slate-900 dark:text-slate-100 font-medium">
                    📝 Documenta el proceso y evalúa la viabilidad para tu práctica legal.
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
                Sabes instalar y configurar modelos locales con Ollama
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Entiendes las ventajas críticas de privacidad para la práctica legal
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Puedes evaluar cuándo usar modelos locales vs en la nube
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Conoces las consideraciones técnicas y económicas
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Cierre del módulo -->
        <Card class="bg-gradient-to-r from-slate-500 to-gray-600 text-white">
          <CardContent class="p-6">
            <div class="text-center">
              <h3 class="text-2xl font-bold mb-4">🎉 ¡Módulo 2 Completado!</h3>
              <p class="text-slate-100 mb-4 leading-relaxed">
                Has explorado las principales herramientas de IA disponibles para abogados, desde modelos en la nube hasta soluciones locales.
              </p>
              <p class="text-slate-100 font-medium mb-6">
                Ahora tienes el conocimiento para elegir la herramienta adecuada según tus necesidades específicas de privacidad, funcionalidad y presupuesto.
              </p>
              <Button 
                @click="goToNextModule"
                class="bg-white text-slate-600 hover:bg-slate-50"
              >
                Ir al Dashboard
                <ArrowRight class="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <!-- Botón de completar microsesión -->
        <div class="flex justify-center pt-8">
          <Button
            @click="completeMicrosession"
            :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-600 hover:bg-slate-700'"
            class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Check v-if="isCompleted" class="w-5 h-5 mr-2" />
            <BookOpen v-else class="w-5 h-5 mr-2" />
            {{ isCompleted ? 'Módulo 2 Completado' : 'Completar Módulo 2' }}
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
  isCompleted.value = completedMicrosessions['herramientas-utiles-9'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['herramientas-utiles-9'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextModule = () => {
  router.push('/dashboard');
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

code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875rem;
}
</style>
