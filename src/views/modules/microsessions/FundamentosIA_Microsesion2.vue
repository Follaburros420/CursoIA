<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
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
              Microsesión 2: Tipos de Inteligencia Artificial
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
            Módulo 1
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 2
          </Badge>
          <Badge variant="secondary">
            20 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎓 Microsesión 2: Tipos de Inteligencia Artificial
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium mb-6">
          Clasificación y características de diferentes tipos de IA
        </p>

        <!-- Video de YouTube -->
        <div class="mb-8">
          <div class="relative w-full max-w-4xl mx-auto">
            <div class="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl bg-slate-100 dark:bg-slate-800">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/ZcBkH57Bwmw"
                title="Tipos de Inteligencia Artificial"
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
        <Card class="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-blue-700 dark:text-blue-300">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Que puedas identificar si una herramienta legal se basa en reglas, aprendizaje automático o redes neuronales profundas.
            </p>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              Esto te ayudará a elegir con criterio la tecnología que vas a usar (¡y a no sobrevalorarla!).
            </p>
          </CardContent>
        </Card>

        <!-- Introducción -->
        <Card class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-amber-800 dark:text-amber-200">
              ⚙️ Tres formas de "inteligencia" en las máquinas
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-amber-800 dark:text-amber-200 leading-relaxed">
              No toda la IA funciona igual. Antes de confiar en una herramienta, vale la pena preguntarse:
            </p>
            <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
              <p class="text-amber-900 dark:text-amber-100 font-medium">
                ¿Está tomando decisiones según reglas explícitas que alguien programó?
              </p>
              <p class="text-amber-900 dark:text-amber-100 font-medium mt-2">
                ¿O está aprendiendo a partir de datos?
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Tipo 1: Sistemas basados en reglas -->
        <Card class="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-green-700 dark:text-green-300">
              1. 🧾 Sistemas basados en reglas
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <p class="text-green-800 dark:text-green-200 font-medium mb-3">
                🔍 Funcionan como un gran "si pasa esto, haz aquello".
              </p>
              
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <span class="text-green-600 dark:text-green-400 font-bold">✅</span>
                  <div>
                    <p class="text-green-800 dark:text-green-200 font-medium">Muy útiles en derecho cuando hay reglas fijas:</p>
                    <p class="text-green-700 dark:text-green-300 italic mt-1">
                      Ej. "Si el valor del contrato supera X monto, aplicar cláusula de arbitramento".
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <span class="text-red-600 dark:text-red-400 font-bold">❌</span>
                  <p class="text-green-800 dark:text-green-200">
                    Pero no se adaptan a casos complejos ni a lenguaje ambiguo.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Tipo 2: Machine Learning -->
        <Card class="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-purple-700 dark:text-purple-300">
              2. 🧠 Machine Learning (Aprendizaje automático)
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <p class="text-purple-800 dark:text-purple-200 font-medium mb-3">
                🎯 Aprende a partir de ejemplos. No le damos reglas: le damos datos etiquetados.
              </p>
              
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <span class="text-green-600 dark:text-green-400 font-bold">✅</span>
                  <div>
                    <p class="text-purple-800 dark:text-purple-200 font-medium">Ejemplo legal:</p>
                    <p class="text-purple-700 dark:text-purple-300 italic mt-1">
                      Entrenar un modelo con 1.000 contratos y sus riesgos detectados para que clasifique nuevos contratos como seguros o peligrosos.
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <span class="text-red-600 dark:text-red-400 font-bold">❌</span>
                  <p class="text-purple-800 dark:text-purple-200">
                    Si los datos están mal o sesgados, el modelo también lo estará.
                  </p>
                </div>
                
                <div class="bg-white/60 dark:bg-slate-800/60 p-3 rounded border border-purple-200 dark:border-purple-700">
                  <p class="text-purple-900 dark:text-purple-100 text-sm">
                    📌 Árboles de decisión, SVM, regresiones logísticas… todos son tipos de ML clásico.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Tipo 3: Deep Learning -->
        <Card class="border-l-4 border-l-indigo-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-indigo-700 dark:text-indigo-300">
              3. 🧬 Deep Learning (Aprendizaje profundo)
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <p class="text-indigo-800 dark:text-indigo-200 font-medium mb-3">
                💡 Inspirado en el cerebro humano: usa redes neuronales con múltiples capas.
              </p>
              
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <span class="text-green-600 dark:text-green-400 font-bold">✅</span>
                  <div>
                    <p class="text-indigo-800 dark:text-indigo-200">Es la base de modelos como ChatGPT y Copilot.</p>
                    <p class="text-indigo-800 dark:text-indigo-200 mt-1">Permite procesar lenguaje natural, imágenes, audios, etc.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <span class="text-amber-600 dark:text-amber-400 font-bold">⚖️</span>
                  <p class="text-indigo-800 dark:text-indigo-200">
                    Potente, pero opaco: muchas veces no sabemos con certeza por qué toma ciertas decisiones.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- LLM Explicación -->
        <Card class="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-cyan-200 dark:border-cyan-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-cyan-800 dark:text-cyan-200">
              🤔 ¿Y los LLM como ChatGPT?
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="space-y-3">
              <p class="text-cyan-800 dark:text-cyan-200 leading-relaxed">
                Son modelos de deep learning entrenados con enormes cantidades de texto para predecir la siguiente palabra.
              </p>
              <p class="text-cyan-800 dark:text-cyan-200 leading-relaxed font-medium">
                No entienden el derecho, pero sí pueden imitar cómo suena un texto jurídico.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Tabla comparativa -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              📌 Comparativo rápido
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800">
                    <th class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">
                      Tipo de IA
                    </th>
                    <th class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center font-semibold text-slate-900 dark:text-slate-100">
                      ¿Aprende de datos?
                    </th>
                    <th class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center font-semibold text-slate-900 dark:text-slate-100">
                      ¿Se adapta?
                    </th>
                    <th class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center font-semibold text-slate-900 dark:text-slate-100">
                      ¿Explica sus decisiones?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                      Reglas programadas
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                      <span class="text-red-600 dark:text-red-400 font-bold">❌ No</span>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                      <span class="text-red-600 dark:text-red-400 font-bold">❌ No</span>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                      <span class="text-green-600 dark:text-green-400 font-bold">✅ Sí</span>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                      Machine Learning
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                      <span class="text-green-600 dark:text-green-400 font-bold">✅ Sí</span>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                      <span class="text-green-600 dark:text-green-400 font-bold">✅ Sí</span>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                      <span class="text-amber-600 dark:text-amber-400 font-bold">✅ Parcialmente</span>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                      Deep Learning / LLM
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                      <span class="text-green-600 dark:text-green-400 font-bold">✅ Muchísimo</span>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                      <span class="text-green-600 dark:text-green-400 font-bold">✅ Mucho</span>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                      <span class="text-red-600 dark:text-red-400 font-bold">❌ Poco interpretable</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-orange-700 dark:text-orange-300">
              🧪 Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
              <p class="text-orange-800 dark:text-orange-200 font-semibold mb-3">
                Caso: Tienes que construir una herramienta que detecte cláusulas riesgosas en contratos de arrendamiento.
              </p>

              <div class="space-y-4">
                <div class="bg-orange-100 dark:bg-orange-900/30 p-3 rounded border border-orange-300 dark:border-orange-600">
                  <p class="text-orange-900 dark:text-orange-100 font-medium mb-2">🎯 Decide:</p>
                  <ul class="space-y-2 text-orange-800 dark:text-orange-200">
                    <li>• ¿Usarías un sistema de reglas?</li>
                    <li>• ¿Un modelo de ML entrenado con contratos previos?</li>
                    <li>• ¿Un LLM como ChatGPT con un buen prompt?</li>
                  </ul>
                </div>

                <div class="bg-orange-100 dark:bg-orange-900/30 p-3 rounded border border-orange-300 dark:border-orange-600">
                  <p class="text-orange-900 dark:text-orange-100 font-medium mb-2">📝 Escribe tu decisión y justifícala brevemente.</p>
                  <p class="text-orange-800 dark:text-orange-200">¿Por qué elegiste esa opción? ¿Qué ventaja legal te ofrece?</p>
                </div>

                <div class="bg-orange-100 dark:bg-orange-900/30 p-3 rounded border border-orange-300 dark:border-orange-600">
                  <p class="text-orange-900 dark:text-orange-100 font-medium">💬 Luego, comenta la decisión de otro estudiante en el foro o en clase.</p>
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
                Sabes que no toda IA es igual: unas siguen reglas, otras aprenden
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Identificas qué tipo de IA hay detrás de una herramienta legal
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Puedes elegir con mayor criterio qué solución es mejor para tu necesidad
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Machine Learning y Deep Learning</h3>
                <p class="text-blue-100">
                  Vamos a profundizar en cómo aprenden los modelos, por qué cometen errores y cómo evitarlos.
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
  isCompleted.value = completedMicrosessions['fundamentos-ia-2'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;

  // Guardar en localStorage
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['fundamentos-ia-2'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  // Navegar a la microsesión 3
  router.push('/modulo/fundamentos-ia/microsesion-3');
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
</style>
