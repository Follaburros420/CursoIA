<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-cyan-900/20">
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
              Microsesión 3: Prompts altamente efectivos
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
            Módulo 3
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 3
          </Badge>
          <Badge variant="secondary">
            40 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          ⚡ Prompts altamente efectivos
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">
          Dominar técnicas avanzadas de prompting para redacción legal
        </p>
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
              Dominar técnicas avanzadas de prompting para redacción legal, incluyendo estructuras efectivas, técnicas de refinamiento y ejemplos específicos para diferentes tipos de documentos jurídicos.
            </p>
          </CardContent>
        </Card>

        <!-- Anatomía de un prompt efectivo -->
        <Card class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-blue-700 dark:text-blue-300">
              🧬 Anatomía de un prompt efectivo
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="grid gap-4">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">1. 🎭 Rol y contexto</h4>
                <p class="text-blue-700 dark:text-blue-300 text-sm mb-2">
                  "Actúa como un abogado especialista en derecho corporativo con 15 años de experiencia..."
                </p>
                <p class="text-blue-600 dark:text-blue-400 text-xs italic">
                  Define la perspectiva y expertise requerida
                </p>
              </div>
              
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">2. 📋 Tarea específica</h4>
                <p class="text-blue-700 dark:text-blue-300 text-sm mb-2">
                  "Redacta una cláusula de confidencialidad que incluya..."
                </p>
                <p class="text-blue-600 dark:text-blue-400 text-xs italic">
                  Instrucción clara y específica sobre qué hacer
                </p>
              </div>
              
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">3. 📊 Formato y estructura</h4>
                <p class="text-blue-700 dark:text-blue-300 text-sm mb-2">
                  "Organiza el contenido en secciones numeradas con subtítulos..."
                </p>
                <p class="text-blue-600 dark:text-blue-400 text-xs italic">
                  Especificaciones sobre cómo presentar el resultado
                </p>
              </div>
              
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">4. ⚖️ Restricciones y consideraciones</h4>
                <p class="text-blue-700 dark:text-blue-300 text-sm mb-2">
                  "Asegúrate de cumplir con la legislación colombiana y evita..."
                </p>
                <p class="text-blue-600 dark:text-blue-400 text-xs italic">
                  Limitaciones y requisitos específicos
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Técnicas avanzadas -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              🚀 Técnicas avanzadas de prompting
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Chain of Thought -->
            <div class="border-l-4 border-l-purple-500 pl-4">
              <h3 class="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">
                🔗 Chain of Thought (Cadena de razonamiento)
              </h3>
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <p class="text-purple-800 dark:text-purple-200 font-medium mb-2">Ejemplo:</p>
                <p class="text-purple-700 dark:text-purple-300 text-sm italic">
                  "Analiza este contrato paso a paso: 1) Identifica las partes, 2) Extrae las obligaciones principales, 3) Evalúa los riesgos potenciales, 4) Sugiere mejoras específicas."
                </p>
              </div>
            </div>

            <!-- Few-shot prompting -->
            <div class="border-l-4 border-l-green-500 pl-4">
              <h3 class="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
                📚 Few-shot prompting (Ejemplos guía)
              </h3>
              <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p class="text-green-800 dark:text-green-200 font-medium mb-2">Técnica:</p>
                <p class="text-green-700 dark:text-green-300 text-sm">
                  Proporciona 2-3 ejemplos del formato deseado antes de la tarea principal
                </p>
              </div>
            </div>

            <!-- Prompts iterativos -->
            <div class="border-l-4 border-l-orange-500 pl-4">
              <h3 class="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3">
                🔄 Prompts iterativos
              </h3>
              <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <p class="text-orange-800 dark:text-orange-200 font-medium mb-2">Proceso:</p>
                <p class="text-orange-700 dark:text-orange-300 text-sm">
                  Refina el resultado a través de prompts de seguimiento específicos
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Biblioteca de prompts -->
        <Card class="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-amber-700 dark:text-amber-300">
              📚 Biblioteca de prompts legales
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                <h4 class="font-semibold text-amber-800 dark:text-amber-200 mb-2">📄 Para contratos</h4>
                <p class="text-amber-700 dark:text-amber-300 text-sm">
                  "Redacta una cláusula de [tipo] que proteja los intereses de [parte] considerando [riesgos específicos]..."
                </p>
              </div>
              
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                <h4 class="font-semibold text-amber-800 dark:text-amber-200 mb-2">📝 Para memos legales</h4>
                <p class="text-amber-700 dark:text-amber-300 text-sm">
                  "Elabora un memo legal sobre [tema] dirigido a [audiencia] que incluya análisis, conclusiones y recomendaciones..."
                </p>
              </div>
              
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                <h4 class="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚖️ Para argumentación</h4>
                <p class="text-amber-700 dark:text-amber-300 text-sm">
                  "Desarrolla un argumento legal sólido para [posición] basado en [precedentes] y [normativa aplicable]..."
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
                Crear una biblioteca personal de prompts para diferentes tipos de documentos
              </p>
              
              <div class="space-y-4">
                <div class="bg-cyan-100 dark:bg-cyan-900/30 p-4 rounded border border-cyan-300 dark:border-cyan-600">
                  <p class="text-cyan-900 dark:text-cyan-100 font-medium mb-3">🎯 Pasos del ejercicio:</p>
                  <ol class="space-y-2 text-cyan-800 dark:text-cyan-200 list-decimal list-inside">
                    <li>Identifica 5 tipos de documentos que redactas frecuentemente</li>
                    <li>Crea un prompt base para cada tipo usando la estructura de 4 componentes</li>
                    <li>Prueba cada prompt con un caso real</li>
                    <li>Refina los prompts basándote en los resultados</li>
                    <li>Documenta variaciones para diferentes contextos</li>
                  </ol>
                </div>
                
                <div class="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded border border-cyan-300 dark:border-cyan-600">
                  <p class="text-cyan-900 dark:text-cyan-100 font-medium">
                    📝 Crea un documento de referencia rápida con tus mejores prompts.
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
                Dominas la estructura de 4 componentes para prompts efectivos
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Conoces técnicas avanzadas como Chain of Thought y Few-shot prompting
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Tienes una biblioteca personal de prompts para documentos legales
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Sabes cómo refinar y mejorar prompts iterativamente
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Estructuración de documentos jurídicos</h3>
                <p class="text-blue-100">
                  Dominar plantillas y estructuras para diferentes tipos de documentos legales.
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

onMounted(() => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (!isAuthenticated) {
    router.push('/login');
    return;
  }

  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  isCompleted.value = completedMicrosessions['redaccion-legal-3'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['redaccion-legal-3'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  router.push('/modulo/redaccion-legal/microsesion-4');
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
