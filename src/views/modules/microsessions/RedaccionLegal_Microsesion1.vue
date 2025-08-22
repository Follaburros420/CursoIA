<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/20">
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
              Microsesión 1: Principios de la redacción legal con IA
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
            Módulo 3
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 1
          </Badge>
          <Badge variant="secondary">
            30 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          ⚖️ Principios de la redacción legal con IA
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium">
          Establecer fundamentos sólidos para la redacción legal asistida por IA
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
              Establecer fundamentos sólidos y principios éticos para la redacción legal asistida por IA, garantizando estándares de calidad y responsabilidad profesional.
            </p>
          </CardContent>
        </Card>

        <!-- Principios éticos fundamentales -->
        <Card class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-purple-700 dark:text-purple-300">
              🏛️ Principios éticos fundamentales
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Responsabilidad profesional -->
            <div class="border-l-4 border-l-blue-500 pl-4">
              <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">
                👨‍⚖️ Responsabilidad profesional
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                El abogado mantiene la responsabilidad total sobre el contenido generado, independientemente del nivel de asistencia de la IA.
              </p>
              <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <ul class="space-y-2 text-blue-800 dark:text-blue-200">
                  <li class="flex items-start space-x-2">
                    <span class="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span>Revisión crítica obligatoria de todo contenido generado</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span>Verificación de precisión legal y fáctica</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span>Responsabilidad por errores u omisiones</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Transparencia -->
            <div class="border-l-4 border-l-green-500 pl-4">
              <h3 class="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
                🔍 Transparencia y divulgación
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Informar apropiadamente sobre el uso de IA en la redacción de documentos legales.
              </p>
              <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <ul class="space-y-2 text-green-800 dark:text-green-200">
                  <li class="flex items-start space-x-2">
                    <span class="text-green-600 dark:text-green-400 font-bold">•</span>
                    <span>Divulgación al cliente cuando sea relevante</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-green-600 dark:text-green-400 font-bold">•</span>
                    <span>Documentación interna del proceso</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-green-600 dark:text-green-400 font-bold">•</span>
                    <span>Claridad sobre autoría y revisión</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Confidencialidad -->
            <div class="border-l-4 border-l-red-500 pl-4">
              <h3 class="text-lg font-semibold text-red-700 dark:text-red-300 mb-3">
                🔒 Confidencialidad y privacidad
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Protección absoluta de información confidencial del cliente y privilegio abogado-cliente.
              </p>
              <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <ul class="space-y-2 text-red-800 dark:text-red-200">
                  <li class="flex items-start space-x-2">
                    <span class="text-red-600 dark:text-red-400 font-bold">•</span>
                    <span>Anonimización de datos sensibles</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-red-600 dark:text-red-400 font-bold">•</span>
                    <span>Uso de modelos locales para casos críticos</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-red-600 dark:text-red-400 font-bold">•</span>
                    <span>Evaluación de riesgos por caso</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Estándares de calidad -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              ⭐ Estándares de calidad
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Precisión legal -->
            <div class="border-l-4 border-l-amber-500 pl-4">
              <h3 class="text-lg font-semibold text-amber-700 dark:text-amber-300 mb-3">
                🎯 Precisión legal
              </h3>
              <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                <ul class="space-y-2 text-amber-800 dark:text-amber-200">
                  <li class="flex items-start space-x-2">
                    <span class="text-amber-600 dark:text-amber-400 font-bold">✓</span>
                    <span>Verificación de citas legales y precedentes</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-amber-600 dark:text-amber-400 font-bold">✓</span>
                    <span>Consistencia con la jurisdicción aplicable</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-amber-600 dark:text-amber-400 font-bold">✓</span>
                    <span>Actualización de normativa vigente</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Coherencia y estilo -->
            <div class="border-l-4 border-l-teal-500 pl-4">
              <h3 class="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-3">
                📝 Coherencia y estilo
              </h3>
              <div class="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
                <ul class="space-y-2 text-teal-800 dark:text-teal-200">
                  <li class="flex items-start space-x-2">
                    <span class="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                    <span>Mantenimiento del tono profesional</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                    <span>Consistencia terminológica</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                    <span>Adaptación al estilo del despacho</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Mejores prácticas -->
        <Card class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-emerald-700 dark:text-emerald-300">
              ✨ Mejores prácticas
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
                <h4 class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">🔄 Proceso iterativo</h4>
                <p class="text-emerald-700 dark:text-emerald-300 text-sm">
                  Refina y mejora el contenido a través de múltiples iteraciones.
                </p>
              </div>

              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
                <h4 class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">📚 Documentación</h4>
                <p class="text-emerald-700 dark:text-emerald-300 text-sm">
                  Mantén registro del proceso y decisiones tomadas.
                </p>
              </div>

              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
                <h4 class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">🎓 Formación continua</h4>
                <p class="text-emerald-700 dark:text-emerald-300 text-sm">
                  Mantente actualizado sobre capacidades y limitaciones de la IA.
                </p>
              </div>

              <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
                <h4 class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">⚖️ Balance humano-IA</h4>
                <p class="text-emerald-700 dark:text-emerald-300 text-sm">
                  Usa IA como herramienta, no como reemplazo del juicio legal.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="border-l-4 border-l-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-indigo-700 dark:text-indigo-300">
              🧪 Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
              <p class="text-indigo-800 dark:text-indigo-200 font-semibold mb-4">
                Definir un protocolo personal de uso de IA para redacción legal
              </p>

              <div class="space-y-4">
                <div class="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded border border-indigo-300 dark:border-indigo-600">
                  <p class="text-indigo-900 dark:text-indigo-100 font-medium mb-3">🎯 Pasos del ejercicio:</p>
                  <ol class="space-y-2 text-indigo-800 dark:text-indigo-200 list-decimal list-inside">
                    <li>Define qué tipos de documentos son apropiados para asistencia de IA</li>
                    <li>Establece criterios para evaluar la sensibilidad de la información</li>
                    <li>Crea un checklist de revisión post-generación</li>
                    <li>Define cuándo y cómo divulgar el uso de IA al cliente</li>
                    <li>Establece protocolos de documentación y archivo</li>
                  </ol>
                </div>

                <div class="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded border border-indigo-300 dark:border-indigo-600">
                  <p class="text-indigo-900 dark:text-indigo-100 font-medium">
                    📝 Crea un documento de protocolo que puedas usar en tu práctica diaria.
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
                Conoces los principios éticos fundamentales para usar IA en redacción legal
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Entiendes tu responsabilidad profesional al usar herramientas de IA
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Sabes cómo mantener estándares de calidad y confidencialidad
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Tienes un protocolo personal para uso ético de IA
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Mejores modelos para la redacción legal</h3>
                <p class="text-purple-100">
                  Identificar qué modelos destacan en coherencia, precisión y seguimiento de instrucciones para textos legales.
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
  isCompleted.value = completedMicrosessions['redaccion-legal-1'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['redaccion-legal-1'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  router.push('/modulo/redaccion-legal/microsesion-2');
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
