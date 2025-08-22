<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50 dark:from-slate-900 dark:via-amber-900/20 dark:to-orange-900/20">
    <!-- Navbar -->
    <nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <Button
              @click="router.push('/modulo/busqueda-juridica')"
              variant="ghost"
              size="sm"
              class="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <ArrowLeft class="w-4 h-4 mr-2" />
              Volver al módulo
            </Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Microsesión 1: Fuentes del derecho
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
          <Badge class="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 mr-3">
            Módulo 4
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 1
          </Badge>
          <Badge variant="secondary">
            30 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          ⚖️ Fuentes del derecho
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">
          Distinguir tipos de fuentes jurídicas y comprender su jerarquía normativa
        </p>
      </div>

      <!-- Contenido de la microsesión -->
      <div class="space-y-8">
        <!-- Objetivo -->
        <Card class="border-l-4 border-l-amber-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-amber-700 dark:text-amber-300">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Distinguir tipos de fuentes jurídicas y comprender su jerarquía normativa para realizar búsquedas legales efectivas y fundamentadas.
            </p>
          </CardContent>
        </Card>

        <!-- Jerarquía de fuentes -->
        <Card class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-amber-700 dark:text-amber-300">
              🏛️ Jerarquía normativa
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="space-y-4">
              <!-- Constitución -->
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    1
                  </div>
                  <h4 class="font-semibold text-amber-800 dark:text-amber-200">Constitución Política</h4>
                </div>
                <p class="text-amber-700 dark:text-amber-300 text-sm">
                  Norma suprema del ordenamiento jurídico. Prevalece sobre todas las demás normas.
                </p>
              </div>

              <!-- Leyes -->
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    2
                  </div>
                  <h4 class="font-semibold text-amber-800 dark:text-amber-200">Leyes</h4>
                </div>
                <p class="text-amber-700 dark:text-amber-300 text-sm">
                  Normas expedidas por el Congreso. Incluye leyes ordinarias, estatutarias y orgánicas.
                </p>
              </div>

              <!-- Decretos -->
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    3
                  </div>
                  <h4 class="font-semibold text-amber-800 dark:text-amber-200">Decretos</h4>
                </div>
                <p class="text-amber-700 dark:text-amber-300 text-sm">
                  Normas del ejecutivo. Decretos reglamentarios, de urgencia, legislativos.
                </p>
              </div>

              <!-- Resoluciones -->
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    4
                  </div>
                  <h4 class="font-semibold text-amber-800 dark:text-amber-200">Resoluciones y Circulares</h4>
                </div>
                <p class="text-amber-700 dark:text-amber-300 text-sm">
                  Actos administrativos de entidades públicas. Menor jerarquía normativa.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Tipos de fuentes -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              📚 Tipos de fuentes jurídicas
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Fuentes primarias -->
            <div class="border-l-4 border-l-blue-500 pl-4">
              <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">
                📜 Fuentes primarias
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Normas jurídicas con fuerza vinculante directa.
              </p>
              <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <ul class="space-y-2 text-blue-800 dark:text-blue-200">
                  <li class="flex items-start space-x-2">
                    <span class="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span>Constitución y reformas constitucionales</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span>Leyes (ordinarias, estatutarias, orgánicas)</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span>Decretos con fuerza de ley</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span>Tratados internacionales ratificados</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Fuentes secundarias -->
            <div class="border-l-4 border-l-green-500 pl-4">
              <h3 class="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
                📖 Fuentes secundarias
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Interpretaciones y análisis de las fuentes primarias.
              </p>
              <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <ul class="space-y-2 text-green-800 dark:text-green-200">
                  <li class="flex items-start space-x-2">
                    <span class="text-green-600 dark:text-green-400 font-bold">•</span>
                    <span>Jurisprudencia (sentencias de altas cortes)</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-green-600 dark:text-green-400 font-bold">•</span>
                    <span>Doctrina legal (libros, artículos académicos)</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-green-600 dark:text-green-400 font-bold">•</span>
                    <span>Conceptos de entidades públicas</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-green-600 dark:text-green-400 font-bold">•</span>
                    <span>Comentarios y análisis jurídicos</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Fuentes auxiliares -->
            <div class="border-l-4 border-l-purple-500 pl-4">
              <h3 class="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">
                🔍 Fuentes auxiliares
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Herramientas de apoyo para la interpretación jurídica.
              </p>
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <ul class="space-y-2 text-purple-800 dark:text-purple-200">
                  <li class="flex items-start space-x-2">
                    <span class="text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <span>Principios generales del derecho</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <span>Derecho comparado</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <span>Costumbre jurídica</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <span>Equidad natural</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Peso jurídico -->
        <Card class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-orange-700 dark:text-orange-300">
              ⚖️ Peso jurídico y aplicación
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                <h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-2">🔴 Vinculante</h4>
                <p class="text-orange-700 dark:text-orange-300 text-sm">
                  Constitución, leyes, decretos. Aplicación obligatoria.
                </p>
              </div>
              
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                <h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-2">🟡 Persuasivo</h4>
                <p class="text-orange-700 dark:text-orange-300 text-sm">
                  Jurisprudencia, doctrina. Influencia interpretativa.
                </p>
              </div>
              
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                <h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-2">🟢 Auxiliar</h4>
                <p class="text-orange-700 dark:text-orange-300 text-sm">
                  Principios generales, equidad. Apoyo interpretativo.
                </p>
              </div>
              
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                <h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-2">⚪ Informativo</h4>
                <p class="text-orange-700 dark:text-orange-300 text-sm">
                  Derecho comparado, análisis. Referencia contextual.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-orange-700 dark:text-orange-300">
              🧪 Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
              <p class="text-orange-800 dark:text-orange-200 font-semibold mb-4">
                Clasificar un conjunto de fuentes y determinar su peso jurídico en un caso específico
              </p>
              
              <div class="space-y-4">
                <div class="bg-orange-100 dark:bg-orange-900/30 p-4 rounded border border-orange-300 dark:border-orange-600">
                  <p class="text-orange-900 dark:text-orange-100 font-medium mb-3">🎯 Pasos del ejercicio:</p>
                  <ol class="space-y-2 text-orange-800 dark:text-orange-200 list-decimal list-inside">
                    <li>Selecciona un caso legal específico (ej. protección de datos personales)</li>
                    <li>Identifica 10 fuentes diferentes relacionadas con el tema</li>
                    <li>Clasifica cada fuente según su tipo (primaria, secundaria, auxiliar)</li>
                    <li>Asigna el peso jurídico correspondiente a cada una</li>
                    <li>Ordena las fuentes por su importancia para resolver el caso</li>
                    <li>Justifica tu clasificación y jerarquización</li>
                  </ol>
                </div>
                
                <div class="bg-orange-100 dark:bg-orange-900/30 p-3 rounded border border-orange-300 dark:border-orange-600">
                  <p class="text-orange-900 dark:text-orange-100 font-medium">
                    📝 Crea una matriz de clasificación que puedas usar en casos futuros.
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
                Conoces la jerarquía normativa y su importancia en la búsqueda legal
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Distingues entre fuentes primarias, secundarias y auxiliares
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Sabes evaluar el peso jurídico de diferentes tipos de fuentes
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Puedes clasificar y jerarquizar fuentes para casos específicos
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Fundamentos de la búsqueda con IA</h3>
                <p class="text-amber-100">
                  Comprender los principios básicos de la búsqueda jurídica asistida por IA.
                </p>
              </div>
              <Button 
                @click="goToNextSession"
                class="bg-white text-amber-600 hover:bg-amber-50 ml-4"
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
            :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-amber-600 hover:bg-amber-700'"
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
  isCompleted.value = completedMicrosessions['busqueda-juridica-1'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['busqueda-juridica-1'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  router.push('/modulo/busqueda-juridica/microsesion-2');
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
