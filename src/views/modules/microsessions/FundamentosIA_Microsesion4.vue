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
              Microsesión 4: Procesamiento de Lenguaje Natural (NLP)
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
          🎓 Microsesión 4: Procesamiento de Lenguaje Natural (NLP)
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium mb-6">
          ¿Cómo entienden el lenguaje los modelos de IA?
        </p>

        <!-- Video de YouTube -->
        <div class="mb-8">
          <div class="relative w-full max-w-4xl mx-auto">
            <div class="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl bg-slate-100 dark:bg-slate-800">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/EOqgC9fHRIA"
                title="Procesamiento de Lenguaje Natural (NLP)"
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
              Comprender qué mecanismos hacen posible que la IA procese, entienda y genere texto jurídico.
            </p>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              Ya no hablamos de magia, hablamos de estructuras matemáticas muy bien diseñadas.
            </p>
          </CardContent>
        </Card>

        <!-- Qué es el NLP -->
        <Card class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-blue-700 dark:text-blue-300">
              📘 ¿Qué es el NLP?
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-blue-800 dark:text-blue-200 leading-relaxed">
              Procesamiento de Lenguaje Natural (Natural Language Processing) es la rama de la IA que permite a las máquinas trabajar con texto y lenguaje humano.
            </p>
            
            <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <p class="text-blue-800 dark:text-blue-200 font-medium mb-3">
                Gracias al NLP, hoy una IA puede:
              </p>
              <div class="grid gap-2 md:grid-cols-2">
                <div class="flex items-center space-x-2">
                  <span class="text-blue-600 dark:text-blue-400">•</span>
                  <span class="text-blue-700 dark:text-blue-300">Detectar cláusulas en un contrato</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-blue-600 dark:text-blue-400">•</span>
                  <span class="text-blue-700 dark:text-blue-300">Resumir una sentencia</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-blue-600 dark:text-blue-400">•</span>
                  <span class="text-blue-700 dark:text-blue-300">Traducir leyes</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-blue-600 dark:text-blue-400">•</span>
                  <span class="text-blue-700 dark:text-blue-300">Clasificar textos jurídicos</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-blue-600 dark:text-blue-400">•</span>
                  <span class="text-blue-700 dark:text-blue-300">Extraer fechas, nombres o riesgos</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Los ladrillos del lenguaje -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              🧱 Los ladrillos del lenguaje para la IA
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Tokenización -->
            <div class="border-l-4 border-l-orange-500 pl-4">
              <h3 class="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3">
                1. ✂️ Tokenización
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                El texto se divide en unidades mínimas (palabras, sílabas o hasta partes de palabra).
              </p>
              <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <p class="text-orange-800 dark:text-orange-200 font-medium mb-2">Ejemplo:</p>
                <div class="font-mono text-sm bg-white dark:bg-slate-800 p-3 rounded border">
                  <p class="text-slate-700 dark:text-slate-300">"El contrato terminó." →</p>
                  <p class="text-orange-600 dark:text-orange-400">["El", "contr", "ato", "termin", "ó", "."]</p>
                </div>
              </div>
              <div class="bg-orange-100 dark:bg-orange-900/30 p-3 rounded border border-orange-300 dark:border-orange-600 mt-3">
                <p class="text-orange-900 dark:text-orange-100 font-medium">
                  🔍 Todo lo que hace un modelo parte de esos fragmentos llamados tokens.
                </p>
              </div>
            </div>

            <!-- Embeddings -->
            <div class="border-l-4 border-l-purple-500 pl-4">
              <h3 class="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">
                2. 🧭 Embeddings
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Cada token o conjunto de tokens se convierte en un vector numérico, que representa su significado en un espacio multidimensional.
              </p>
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <p class="text-purple-800 dark:text-purple-200 font-medium">
                  💡 Así, el modelo no compara palabras, compara vectores, como si fueran puntos en un mapa del significado.
                </p>
              </div>
            </div>

            <!-- Similitud semántica -->
            <div class="border-l-4 border-l-green-500 pl-4">
              <h3 class="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
                3. 🔍 Similitud semántica
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Gracias a los embeddings, una IA puede detectar que:
              </p>
              <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 space-y-2">
                <div class="flex items-center space-x-2">
                  <span class="text-green-600 dark:text-green-400 font-bold">✅</span>
                  <span class="text-green-800 dark:text-green-200">"contrato" y "acuerdo" están cerca</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-red-600 dark:text-red-400 font-bold">❌</span>
                  <span class="text-green-800 dark:text-green-200">"demanda" y "oración" no, aunque en español pueden parecer iguales</span>
                </div>
              </div>
              <div class="bg-green-100 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-600 mt-3">
                <p class="text-green-900 dark:text-green-100 font-medium">
                  Esto es clave para que el modelo no se confunda con ambigüedades legales.
                </p>
              </div>
            </div>

            <!-- Resumen y extracción -->
            <div class="border-l-4 border-l-indigo-500 pl-4">
              <h3 class="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
                4. 🧾 Resumen y extracción
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                A través de NLP, los modelos pueden:
              </p>
              <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <div class="grid gap-2 md:grid-cols-2">
                  <div class="flex items-center space-x-2">
                    <span class="text-indigo-600 dark:text-indigo-400">•</span>
                    <span class="text-indigo-800 dark:text-indigo-200">Resumir textos largos</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-indigo-600 dark:text-indigo-400">•</span>
                    <span class="text-indigo-800 dark:text-indigo-200">Detectar entidades: nombres, fechas, montos, lugares, etc.</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-indigo-600 dark:text-indigo-400">•</span>
                    <span class="text-indigo-800 dark:text-indigo-200">Clasificar tipos de documentos</span>
                  </div>
                </div>
              </div>
              <div class="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded border border-indigo-300 dark:border-indigo-600 mt-3">
                <p class="text-indigo-900 dark:text-indigo-100 font-medium">
                  🎯 Todo esto con potencial aplicación en derecho corporativo, litigio, propiedad intelectual y más.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Aplicación al trabajo legal -->
        <Card class="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-amber-700 dark:text-amber-300">
              👨‍⚖️ Aplicación al trabajo legal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-amber-100 dark:bg-amber-900/30">
                    <th class="border border-amber-300 dark:border-amber-600 px-4 py-3 text-left font-semibold text-amber-900 dark:text-amber-100">
                      Tarea jurídica
                    </th>
                    <th class="border border-amber-300 dark:border-amber-600 px-4 py-3 text-left font-semibold text-amber-900 dark:text-amber-100">
                      ¿Cómo lo hace la IA?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-amber-50 dark:hover:bg-amber-900/10">
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 font-medium text-amber-900 dark:text-amber-100">
                      Resumir una sentencia
                    </td>
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 text-amber-800 dark:text-amber-200">
                      Detecta ideas centrales vía embeddings
                    </td>
                  </tr>
                  <tr class="hover:bg-amber-50 dark:hover:bg-amber-900/10">
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 font-medium text-amber-900 dark:text-amber-100">
                      Clasificar cláusulas peligrosas
                    </td>
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 text-amber-800 dark:text-amber-200">
                      Usa vectores para medir riesgo semántico
                    </td>
                  </tr>
                  <tr class="hover:bg-amber-50 dark:hover:bg-amber-900/10">
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 font-medium text-amber-900 dark:text-amber-100">
                      Redactar un borrador de contrato
                    </td>
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 text-amber-800 dark:text-amber-200">
                      Predice tokens jurídicos coherentes
                    </td>
                  </tr>
                  <tr class="hover:bg-amber-50 dark:hover:bg-amber-900/10">
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 font-medium text-amber-900 dark:text-amber-100">
                      Buscar jurisprudencia similar
                    </td>
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 text-amber-800 dark:text-amber-200">
                      Compara vectores de casos previamente vistos
                    </td>
                  </tr>
                </tbody>
              </table>
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
                Te damos dos fragmentos de texto legal muy similares en contenido pero escritos de forma distinta.
              </p>

              <div class="space-y-4">
                <div class="bg-cyan-100 dark:bg-cyan-900/30 p-4 rounded border border-cyan-300 dark:border-cyan-600">
                  <p class="text-cyan-900 dark:text-cyan-100 font-medium mb-3">🎯 Tarea:</p>
                  <ol class="space-y-2 text-cyan-800 dark:text-cyan-200 list-decimal list-inside">
                    <li>Genera los embeddings de ambos textos usando una herramienta de IA (puede ser OpenAI, Hugging Face, etc.).</li>
                    <li>Mide la distancia semántica entre ellos (la IA te puede dar un número de similitud).</li>
                    <li class="font-medium">Reflexiona:</li>
                  </ol>
                  <div class="ml-6 mt-2 space-y-1 text-cyan-700 dark:text-cyan-300">
                    <p>• ¿Qué tan parecidos son realmente, según el modelo?</p>
                    <p>• ¿Coincide con tu percepción como abogado?</p>
                  </div>
                </div>

                <div class="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded border border-cyan-300 dark:border-cyan-600">
                  <p class="text-cyan-900 dark:text-cyan-100 font-medium">
                    💬 Sube tu análisis al espacio de comentarios.
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
                Entiendes cómo la IA convierte texto legal en vectores comparables
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Sabes qué procesos permiten que la IA resuma, clasifique o extraiga datos
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Puedes prever cuándo una herramienta basada en NLP será útil o no
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
