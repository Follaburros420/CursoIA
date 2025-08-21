<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
    <!-- Navbar especial para curso -->
    <nav class="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
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
              Volver al Módulo
            </Button>
            <div class="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Microsesión 1: ¿Qué es la IA?
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
            Microsesión 1
          </Badge>
          <Badge variant="secondary">
            15 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎓 Microsesión 1: ¿Qué es la Inteligencia Artificial?
        </h1>
      </div>

      <!-- Contenido de la microsesión -->
      <div class="space-y-8">
        <!-- Objetivo -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Desmitificar la IA y alinear tus expectativas como abogado.
            </p>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              Vamos a separar lo que la IA realmente puede hacer... de lo que no.
            </p>
          </CardContent>
        </Card>

        <!-- Introducción -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              🧠 Introducción
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <blockquote class="border-l-4 border-blue-500 pl-4 italic text-lg text-slate-700 dark:text-slate-300 bg-blue-50 dark:bg-blue-950/30 p-4 rounded-r-lg">
              "La inteligencia artificial no piensa. Pero puede ayudarte a pensar mejor."
            </blockquote>
            
            <div class="space-y-3">
              <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                Hoy en día se habla mucho de "IA" como si fuera una caja mágica capaz de reemplazar al ser humano. Pero…
              </p>
              <ul class="space-y-2 ml-4">
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2">•</span>
                  <span class="text-slate-700 dark:text-slate-300">¿Es realmente tan inteligente?</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2">•</span>
                  <span class="text-slate-700 dark:text-slate-300">¿Puede hacer el trabajo de un abogado?</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2">•</span>
                  <span class="text-slate-700 dark:text-slate-300">¿En qué casos se vuelve útil y en cuáles no?</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <!-- ¿Qué es la IA? -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              🧩 ¿Qué es la IA?
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              La Inteligencia Artificial (IA) es un conjunto de técnicas y herramientas que permiten que las máquinas imiten ciertas capacidades humanas como:
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-lg">
                <div class="flex items-center mb-2">
                  <Brain class="w-5 h-5 text-blue-600 mr-2" />
                  <span class="font-semibold text-slate-900 dark:text-slate-100">Tomar decisiones</span>
                </div>
              </div>
              <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-lg">
                <div class="flex items-center mb-2">
                  <Puzzle class="w-5 h-5 text-green-600 mr-2" />
                  <span class="font-semibold text-slate-900 dark:text-slate-100">Resolver problemas</span>
                </div>
              </div>
              <div class="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 p-4 rounded-lg">
                <div class="flex items-center mb-2">
                  <Filter class="w-5 h-5 text-purple-600 mr-2" />
                  <span class="font-semibold text-slate-900 dark:text-slate-100">Clasificar información</span>
                </div>
              </div>
              <div class="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-4 rounded-lg">
                <div class="flex items-center mb-2">
                  <FileText class="w-5 h-5 text-orange-600 mr-2" />
                  <span class="font-semibold text-slate-900 dark:text-slate-100">Generar texto</span>
                </div>
              </div>
            </div>

            <div class="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
              <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>Pero</strong> no tiene conciencia, ni intención, ni comprensión real. La IA aprende patrones a partir de datos. No interpreta el contexto jurídico como lo haría un abogado.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- IA débil vs IA fuerte -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              🧬 IA débil vs IA fuerte
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="border-b border-slate-200 dark:border-slate-700">
                    <th class="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Tipo</th>
                    <th class="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Descripción</th>
                    <th class="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">¿Existe hoy?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-slate-100 dark:border-slate-800">
                    <td class="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">IA débil</td>
                    <td class="py-4 px-4 text-slate-700 dark:text-slate-300">Sistemas que ejecutan tareas específicas sin "entender" lo que hacen</td>
                    <td class="py-4 px-4">
                      <Badge class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        ✅ Sí
                      </Badge>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-4 px-4 font-medium text-slate-900 dark:text-slate-100">IA fuerte</td>
                    <td class="py-4 px-4 text-slate-700 dark:text-slate-300">Inteligencia general similar o superior a la humana</td>
                    <td class="py-4 px-4">
                      <Badge class="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        ❌ No
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <!-- Clasificación vs Generación -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              ⚖️ Clasificación vs Generación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="border-b border-slate-200 dark:border-slate-700">
                    <th class="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Tipo de IA</th>
                    <th class="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">¿Qué hace?</th>
                    <th class="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Ejemplo legal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-slate-100 dark:border-slate-800">
                    <td class="py-4 px-4 font-medium text-blue-600 dark:text-blue-400">Clasificación</td>
                    <td class="py-4 px-4 text-slate-700 dark:text-slate-300">Etiqueta o clasifica información</td>
                    <td class="py-4 px-4 text-slate-700 dark:text-slate-300">Detectar si una cláusula es riesgosa</td>
                  </tr>
                  <tr>
                    <td class="py-4 px-4 font-medium text-green-600 dark:text-green-400">Generación</td>
                    <td class="py-4 px-4 text-slate-700 dark:text-slate-300">Crea nuevo contenido a partir de un input</td>
                    <td class="py-4 px-4 text-slate-700 dark:text-slate-300">Redactar un contrato preliminar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <!-- Asistente vs Autor -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              👨‍⚖️ Asistente vs. Autor
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div>
              <h4 class="font-semibold text-slate-900 dark:text-slate-100 mb-3">Un asistente de IA puede ayudarte a:</h4>
              <div class="space-y-2">
                <div class="flex items-center">
                  <Check class="w-5 h-5 text-green-600 mr-3" />
                  <span class="text-slate-700 dark:text-slate-300">sintetizar conceptos jurídicos</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-5 h-5 text-green-600 mr-3" />
                  <span class="text-slate-700 dark:text-slate-300">analizar jurisprudencia</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-5 h-5 text-green-600 mr-3" />
                  <span class="text-slate-700 dark:text-slate-300">redactar borradores</span>
                </div>
              </div>
            </div>

            <div class="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-4 rounded-lg">
              <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                <strong>Pero</strong> no debe ser considerado el autor final de un documento legal.
              </p>
              <p class="text-red-700 dark:text-red-300 font-medium">
                Tú eres quien responde frente a tu cliente y la ley.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-200 dark:border-indigo-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-indigo-900 dark:text-indigo-100">
              🧪 Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div>
              <h4 class="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">
                Tarea de exploración (5 minutos)
              </h4>
              
              <div class="space-y-3 text-slate-700 dark:text-slate-300">
                <div class="flex items-start">
                  <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                  <span>Abre tu herramienta de IA (ChatGPT, Copilot, etc.).</span>
                </div>
                
                <div class="flex items-start">
                  <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                  <div>
                    <span class="block mb-2">Pregunta:</span>
                    <div class="bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-700 p-3 rounded-lg italic">
                      "¿Qué puede y qué no puede hacer la IA en un análisis jurídico?"
                    </div>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                  <span>Anota 3 limitaciones clave que identifiques.</span>
                </div>
                
                <div class="flex items-start">
                  <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                  <span>Reflexiona: ¿hay alguna de esas limitaciones que podrías mitigar tú como abogado?</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-700 p-4 rounded-lg">
              <div class="flex items-center mb-2">
                <MessageSquare class="w-5 h-5 text-indigo-600 mr-2" />
                <span class="font-medium text-indigo-900 dark:text-indigo-100">Comparte tu experiencia</span>
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-sm">
                💬 Luego, compártelo en el foro del curso o discútelo con un colega.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Lo que te llevas -->
        <Card class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-green-900 dark:text-green-100">
              🧭 Lo que te llevas de esta sesión
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div class="flex items-center">
                <Check class="w-5 h-5 text-green-600 mr-3" />
                <span class="text-green-800 dark:text-green-200">Sabes que la IA actual no es mágica</span>
              </div>
              <div class="flex items-center">
                <Check class="w-5 h-5 text-green-600 mr-3" />
                <span class="text-green-800 dark:text-green-200">Identificaste cuándo actúa como asistente y cuándo no puede ser autor</span>
              </div>
              <div class="flex items-center">
                <Check class="w-5 h-5 text-green-600 mr-3" />
                <span class="text-green-800 dark:text-green-200">Comprendes las limitaciones y riesgos de uso profesional</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Tipos de IA</h3>
                <p class="text-blue-100">
                  Vamos a entender cómo diferenciar entre un sistema basado en reglas y uno que aprende solo. Muy útil cuando quieras saber qué hay "detrás" de las herramientas que usas.
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
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  ArrowRight, 
  Home, 
  Brain, 
  Puzzle, 
  Filter, 
  FileText, 
  Check, 
  MessageSquare,
  BookOpen 
} from 'lucide-vue-next';

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
  isCompleted.value = completedMicrosessions['fundamentos-ia-1'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  
  // Guardar en localStorage
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['fundamentos-ia-1'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  // Por ahora redirigir al módulo principal, después se puede crear la siguiente microsesión
  router.push('/modulo/fundamentos-ia');
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

/* Estilos para los elementos interactivos */
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
