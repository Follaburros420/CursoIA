<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/20">
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
              Microsesión 3: Procesamiento de Lenguaje Natural (NLP)
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
            Módulo 1
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 3
          </Badge>
          <Badge variant="secondary">
            25 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎓 Microsesión 3: Procesamiento de Lenguaje Natural (NLP)
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium mb-6">
          Cómo los modelos entienden y generan texto legal
        </p>

        <!-- Video de YouTube -->
        <div class="mb-8">
          <div class="relative w-full max-w-4xl mx-auto">
            <div class="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl bg-slate-100 dark:bg-slate-800">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/CdYjkCQuiKM"
                title="Machine Learning y Deep Learning"
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
        <Card class="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-purple-700 dark:text-purple-300">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Entender cómo los modelos de IA procesan, comprenden y generan texto legal, incluyendo conceptos clave como tokenización, embeddings y similitud semántica.
            </p>
          </CardContent>
        </Card>

        <!-- ¿Qué es NLP? -->
        <Card class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-blue-700 dark:text-blue-300">
              🔤 ¿Qué es el Procesamiento de Lenguaje Natural?
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <p class="text-blue-800 dark:text-blue-200 font-medium mb-3">
                Es la rama de la IA que permite a las máquinas entender, interpretar y generar lenguaje humano.
              </p>
              <p class="text-blue-800 dark:text-blue-200 leading-relaxed mb-3">
                En el contexto legal, NLP permite que la IA comprenda documentos jurídicos, contratos, sentencias y normativas.
              </p>
              <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded border border-blue-300 dark:border-blue-600">
                <p class="text-blue-900 dark:text-blue-100 font-medium mb-2">Aplicaciones en derecho:</p>
                <p class="text-blue-800 dark:text-blue-200 italic">
                  Análisis de contratos, extracción de cláusulas, búsqueda semántica en jurisprudencia, generación de documentos legales.
                </p>
              </div>
              <p class="text-blue-800 dark:text-blue-200 font-medium mt-3">
                Todo esto es posible gracias a técnicas como <span class="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">tokenización</span> y <span class="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">embeddings</span>.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Conceptos clave -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              📦 Conceptos clave
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Tokenización -->
            <div class="border-l-4 border-l-green-500 pl-4">
              <h3 class="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">
                🔤 Tokenización
              </h3>
              <p class="text-slate-700 dark:text-slate-300">
                Proceso de dividir el texto en unidades más pequeñas (tokens) que la IA puede procesar. En textos legales, esto incluye palabras, términos jurídicos y símbolos.
              </p>
            </div>

            <!-- Embeddings -->
            <div class="border-l-4 border-l-amber-500 pl-4">
              <h3 class="text-lg font-semibold text-amber-700 dark:text-amber-300 mb-2">
                🧠 Embeddings
              </h3>
              <p class="text-slate-700 dark:text-slate-300">
                Representaciones numéricas de palabras o frases que capturan su significado. Permiten que la IA entienda que "contrato" y "acuerdo" son conceptos similares.
              </p>
            </div>

            <!-- Similitud semántica -->
            <div class="border-l-4 border-l-red-500 pl-4">
              <h3 class="text-lg font-semibold text-red-700 dark:text-red-300 mb-2">
                🔍 Similitud semántica
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-2">
                Si entrenas con ejemplos irrelevantes o erróneos, el modelo será inútil.
              </p>
              <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-200 dark:border-red-800">
                <p class="text-red-800 dark:text-red-200 font-medium">
                  ⚠️ En derecho, esto es especialmente crítico: los errores pueden tener consecuencias reales.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Sobreajuste -->
        <Card class="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-orange-700 dark:text-orange-300">
              🧮 ¿Qué es el sobreajuste (overfitting)?
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Un modelo sobreentrenado recuerda los datos de entrenamiento… pero no generaliza bien a nuevos casos.
            </p>
            <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
              <p class="text-orange-800 dark:text-orange-200 font-medium mb-2">📌 Ejemplo:</p>
              <p class="text-orange-700 dark:text-orange-300 italic">
                Si solo entrenaste con contratos de Bogotá, puede fallar cuando reciba uno de Medellín con estructura diferente.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Generalización -->
        <Card class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-emerald-700 dark:text-emerald-300">
              📉 Generalización
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-emerald-800 dark:text-emerald-200 leading-relaxed">
              Es la capacidad de un modelo de aplicar lo aprendido a datos nuevos y distintos.
            </p>
            <p class="text-emerald-800 dark:text-emerald-200 leading-relaxed">
              Sin esto, la IA solo sería una "memorizadora".
            </p>
            <div class="bg-white/60 dark:bg-slate-800/60 p-3 rounded border border-emerald-200 dark:border-emerald-700">
              <p class="text-emerald-900 dark:text-emerald-100 font-medium">
                ✅ Un modelo bien entrenado encuentra patrones útiles, no memorias exactas.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Por qué se equivocan -->
        <Card class="border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-red-700 dark:text-red-300">
              🌫️ ¿Por qué se equivocan los modelos?
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <ul class="space-y-2 text-red-800 dark:text-red-200">
                  <li class="flex items-start space-x-2">
                    <span class="text-red-600 dark:text-red-400 font-bold">•</span>
                    <span>Porque el dato de entrada no se parece a nada que haya visto</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-red-600 dark:text-red-400 font-bold">•</span>
                    <span>Porque fue mal entrenado</span>
                  </li>
                </ul>
              </div>
              <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <ul class="space-y-2 text-red-800 dark:text-red-200">
                  <li class="flex items-start space-x-2">
                    <span class="text-red-600 dark:text-red-400 font-bold">•</span>
                    <span>Porque el prompt o la pregunta está mal formulada</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-red-600 dark:text-red-400 font-bold">•</span>
                    <span>Porque el modelo infiere mal el contexto</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p class="text-blue-800 dark:text-blue-200 font-medium">
                🧠 Como abogado, puedes mitigar errores con mejores datos, mejores prompts y supervisión humana.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="border-l-4 border-l-violet-500 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-violet-700 dark:text-violet-300">
              🧪 Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-violet-200 dark:border-violet-700">
              <p class="text-violet-800 dark:text-violet-200 font-semibold mb-4">
                Te damos un output erróneo de una IA legal (ej. sugiere una cláusula inválida en un contrato comercial).
              </p>

              <div class="space-y-4">
                <div class="bg-violet-100 dark:bg-violet-900/30 p-4 rounded border border-violet-300 dark:border-violet-600">
                  <p class="text-violet-900 dark:text-violet-100 font-medium mb-3">🎯 Tarea:</p>
                  <ol class="space-y-2 text-violet-800 dark:text-violet-200 list-decimal list-inside">
                    <li>Lee el texto generado.</li>
                    <li>Detecta el posible error.</li>
                    <li class="font-medium">Propón una hipótesis:</li>
                  </ol>
                  <div class="ml-6 mt-2 space-y-1 text-violet-700 dark:text-violet-300">
                    <p>• ¿Falló el modelo, los datos de entrenamiento, o el prompt?</p>
                  </div>
                  <ol start="4" class="mt-2 space-y-2 text-violet-800 dark:text-violet-200 list-decimal list-inside">
                    <li>Rediseña el prompt para obtener una mejor respuesta.</li>
                  </ol>
                </div>

                <div class="bg-violet-100 dark:bg-violet-900/30 p-3 rounded border border-violet-300 dark:border-violet-600">
                  <p class="text-violet-900 dark:text-violet-100 font-medium">
                    💬 Sube tu hipótesis y nuevo prompt al espacio de comentarios.
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
                Sabes cómo aprenden las IA y qué significa entrenarlas
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Puedes identificar cuándo una herramienta legal está mal entrenada
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Entiendes que los errores de IA no son aleatorios, y puedes aprender de ellos
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Procesamiento de Lenguaje Natural (NLP)</h3>
                <p class="text-purple-100">
                  ¿Cómo hace un modelo para "leer" el texto legal, entenderlo y responder algo coherente?
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

// Verificar autenticación
onMounted(() => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (!isAuthenticated) {
    router.push('/login');
    return;
  }

  // Cargar estado de completado
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  isCompleted.value = completedMicrosessions['fundamentos-ia-3'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;

  // Guardar en localStorage
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['fundamentos-ia-3'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  // Navegar a la microsesión 4
  router.push('/modulo/fundamentos-ia/microsesion-4');
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
