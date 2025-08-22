<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 dark:from-slate-900 dark:via-green-900/20 dark:to-emerald-900/20">
    <!-- Navbar -->
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button
              @click="router.push('/modulo/redaccion-legal')"
              variant="ghost"
              size="sm"
              class="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <ArrowLeft class="w-4 h-4 mr-2" />
              Volver al módulo
            </Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Microsesión 2: Mejores modelos para la redacción legal
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
            Módulo 3
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 2
          </Badge>
          <Badge variant="secondary">
            35 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🏆 Mejores modelos para la redacción legal
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">
          Identificar qué modelos destacan en coherencia, precisión y seguimiento de instrucciones
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
              Identificar y evaluar qué modelos de IA destacan en coherencia, precisión y seguimiento de instrucciones para redacción legal, conociendo sus fortalezas específicas.
            </p>
          </CardContent>
        </Card>

        <!-- Criterios de evaluación -->
        <Card class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-green-700 dark:text-green-300">
              📊 Criterios de evaluación para redacción legal
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">🎯 Precisión legal</h4>
                <p class="text-green-700 dark:text-green-300 text-sm">
                  Exactitud en terminología jurídica y conceptos legales
                </p>
              </div>
              
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">📝 Coherencia estructural</h4>
                <p class="text-green-700 dark:text-green-300 text-sm">
                  Organización lógica y flujo argumentativo
                </p>
              </div>
              
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">🎭 Adaptación de tono</h4>
                <p class="text-green-700 dark:text-green-300 text-sm">
                  Capacidad de ajustar formalidad y registro
                </p>
              </div>
              
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">📏 Seguimiento de instrucciones</h4>
                <p class="text-green-700 dark:text-green-300 text-sm">
                  Adherencia a formatos y requisitos específicos
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Comparación de modelos -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              🥇 Ranking de modelos para redacción legal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800">
                    <th class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">
                      Modelo
                    </th>
                    <th class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">
                      Fortaleza principal
                    </th>
                    <th class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">
                      Mejor para
                    </th>
                    <th class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center font-semibold text-slate-900 dark:text-slate-100">
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                      Claude 3.5 Sonnet
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      Análisis profundo y precisión
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      Contratos complejos, análisis legal
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                      <span class="text-green-600 font-bold">9.5/10</span>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                      GPT-4
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      Versatilidad y creatividad
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      Redacción general, cartas, memos
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                      <span class="text-green-600 font-bold">9.2/10</span>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                      Gemini Pro
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      Razonamiento estructurado
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      Argumentación legal, briefs
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                      <span class="text-yellow-600 font-bold">8.8/10</span>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                      Llama 3 70B
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      Privacidad y control local
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-800 dark:text-slate-200">
                      Documentos confidenciales
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                      <span class="text-yellow-600 font-bold">8.5/10</span>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                Probar 2 prompts con distinto modelo y evaluar resultados
              </p>
              
              <div class="space-y-4">
                <div class="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded border border-emerald-300 dark:border-emerald-600">
                  <p class="text-emerald-900 dark:text-emerald-100 font-medium mb-3">🎯 Pasos del ejercicio:</p>
                  <ol class="space-y-2 text-emerald-800 dark:text-emerald-200 list-decimal list-inside">
                    <li>Selecciona un prompt específico (ej. redactar una cláusula de confidencialidad)</li>
                    <li>Ejecuta el mismo prompt en Claude y GPT-4</li>
                    <li>Evalúa cada resultado según los criterios de calidad</li>
                    <li>Compara precisión legal, coherencia y seguimiento de instrucciones</li>
                    <li>Documenta cuál modelo funcionó mejor para esta tarea específica</li>
                  </ol>
                </div>
                
                <div class="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded border border-emerald-300 dark:border-emerald-600">
                  <p class="text-emerald-900 dark:text-emerald-100 font-medium">
                    📝 Crea una matriz de evaluación para futuras comparaciones.
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
                Conoces los criterios para evaluar modelos de IA para redacción legal
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Sabes qué modelo usar según el tipo de documento legal
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Puedes comparar objetivamente diferentes modelos
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Tienes una metodología para evaluar nuevos modelos
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Prompts altamente efectivos</h3>
                <p class="text-green-100">
                  Dominar técnicas avanzadas de prompting para redacción legal con estructuras y ejemplos específicos.
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

onMounted(() => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (!isAuthenticated) {
    router.push('/login');
    return;
  }

  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  isCompleted.value = completedMicrosessions['redaccion-legal-2'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['redaccion-legal-2'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  router.push('/modulo/redaccion-legal/microsesion-3');
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

table {
  @apply bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm;
}

th, td {
  @apply transition-colors duration-200;
}
</style>
