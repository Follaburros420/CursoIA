<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-green-50 dark:from-slate-900 dark:via-emerald-900/20 dark:to-green-900/20">
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
              Microsesión 6: Marco regulatorio y legal
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
          <Badge class="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 mr-3">
            Módulo 1
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 6
          </Badge>
          <Badge variant="secondary">
            40 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎓 Microsesión 6: Marco regulatorio y legal
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium mb-6">
          ¿Qué dice la ley sobre el uso de IA en la práctica jurídica?
        </p>

        <!-- Video de YouTube -->
        <div class="mb-8">
          <div class="relative w-full max-w-4xl mx-auto">
            <div class="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl bg-slate-100 dark:bg-slate-800">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/hNHP_am6IIk"
                title="Marco regulatorio y legal de IA"
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
        <Card class="border-l-4 border-l-emerald-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-emerald-700 dark:text-emerald-300">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Conocer las principales restricciones, responsabilidades y estándares de uso de IA en el ejercicio legal, tanto en Colombia como en el mundo.
            </p>
          </CardContent>
        </Card>

        <!-- Contexto colombiano -->
        <Card class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-blue-700 dark:text-blue-300">
              ⚖️ 1. Contexto colombiano
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Habeas Data -->
            <div class="border-l-4 border-l-blue-500 pl-4">
              <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">
                Habeas Data y Ley 1581 de 2012
              </h3>
              <p class="text-blue-800 dark:text-blue-200 mb-3">
                La base del marco regulatorio en Colombia. Exige que cualquier tratamiento de datos (incluso por IA) cumpla con principios de finalidad, necesidad, proporcionalidad, seguridad y confidencialidad.
              </p>
            </div>

            <!-- SIC -->
            <div class="border-l-4 border-l-cyan-500 pl-4">
              <h3 class="text-lg font-semibold text-cyan-700 dark:text-cyan-300 mb-3">
                Superintendencia de Industria y Comercio (SIC)
              </h3>
              <p class="text-cyan-800 dark:text-cyan-200 mb-3">
                Ha emitido lineamientos sobre IA, enfatizando que:
              </p>
              <div class="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
                <ul class="space-y-2 text-cyan-800 dark:text-cyan-200">
                  <li class="flex items-start space-x-2">
                    <span class="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                    <span>Los sistemas deben respetar el derecho fundamental de protección de datos.</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                    <span>Se deben hacer evaluaciones de impacto antes de implementar IA de alto riesgo.</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                    <span>La responsabilidad siempre recae en quien decide usar la herramienta, no en la máquina.</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Rama Judicial -->
            <div class="border-l-4 border-l-green-500 pl-4">
              <h3 class="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
                Rama Judicial
              </h3>
              <div class="space-y-3">
                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p class="text-green-800 dark:text-green-200 font-medium mb-2">
                    Consejo Superior de la Judicatura (Acuerdo PCSJA24-12243, 2024)
                  </p>
                  <p class="text-green-700 dark:text-green-300">
                    Señaló que la IA en justicia solo puede ser herramienta de apoyo, nunca reemplazo del razonamiento judicial.
                  </p>
                </div>
                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p class="text-green-800 dark:text-green-200 font-medium mb-2">
                    Corte Constitucional (Sentencia T-323 de 2024)
                  </p>
                  <p class="text-green-700 dark:text-green-300">
                    Validó su uso como auxiliar, pero advirtió: el juez sigue siendo responsable de la decisión final.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Tendencias internacionales -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl">
              🌍 2. Tendencias internacionales
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- Unión Europea -->
            <div class="border-l-4 border-l-purple-500 pl-4">
              <h3 class="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">
                Unión Europea – AI Act (2024)
              </h3>
              <p class="text-slate-700 dark:text-slate-300 mb-3">
                Clasifica los sistemas de IA según riesgo:
              </p>
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <ul class="space-y-2 text-purple-800 dark:text-purple-200">
                  <li class="flex items-start space-x-2">
                    <span class="text-red-600 dark:text-red-400 font-bold">🚫</span>
                    <span><strong>Prohibidos</strong> (ej. vigilancia masiva sin control)</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-orange-600 dark:text-orange-400 font-bold">⚠️</span>
                    <span><strong>Alto riesgo</strong> (ej. uso en justicia, salud, empleo)</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-green-600 dark:text-green-400 font-bold">✅</span>
                    <span><strong>Riesgo limitado/bajo</strong> (ej. chatbots informativos)</span>
                  </li>
                </ul>
                <p class="text-purple-700 dark:text-purple-300 mt-3 font-medium">
                  Exige transparencia, auditorías y explicabilidad.
                </p>
              </div>
            </div>

            <!-- Estados Unidos -->
            <div class="border-l-4 border-l-red-500 pl-4">
              <h3 class="text-lg font-semibold text-red-700 dark:text-red-300 mb-3">
                Estados Unidos
              </h3>
              <p class="text-slate-700 dark:text-slate-300">
                No hay ley única, pero agencias como la FTC y la Casa Blanca (AI Bill of Rights) han fijado guías sobre privacidad, transparencia y discriminación algorítmica.
              </p>
            </div>

            <!-- América Latina -->
            <div class="border-l-4 border-l-orange-500 pl-4">
              <h3 class="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3">
                América Latina
              </h3>
              <p class="text-slate-700 dark:text-slate-300">
                Países como Brasil, Chile y México avanzan en regulaciones similares. Colombia ya discute proyectos de ley que buscan armonizar con la UE.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Riesgos legales -->
        <Card class="border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-red-700 dark:text-red-300">
              ⚠️ 3. Riesgos legales principales para abogados
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">Confidencialidad comprometida</h4>
                <p class="text-red-700 dark:text-red-300 text-sm">
                  Subir un contrato sensible a una IA externa sin protección puede violar deberes profesionales.
                </p>
              </div>

              <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">Responsabilidad profesional</h4>
                <p class="text-red-700 dark:text-red-300 text-sm">
                  Si el abogado sigue ciegamente la recomendación de la IA, responde él, no el sistema.
                </p>
              </div>

              <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">Uso indebido de datos personales</h4>
                <p class="text-red-700 dark:text-red-300 text-sm">
                  Entrenar o alimentar IA con información de clientes sin autorización infringe el Habeas Data.
                </p>
              </div>

              <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">Transparencia y deber de informar</h4>
                <p class="text-red-700 dark:text-red-300 text-sm">
                  El cliente debe saber si se usó IA en el manejo de su caso.
                </p>
              </div>
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
              <div class="bg-violet-100 dark:bg-violet-900/30 p-4 rounded border border-violet-300 dark:border-violet-600 mb-4">
                <p class="text-violet-900 dark:text-violet-100 font-medium">
                  <strong>Caso hipotético:</strong><br>
                  Un abogado usa una IA para redactar un concepto jurídico. La IA omite un precedente relevante y el cliente pierde el caso.
                </p>
              </div>

              <div class="space-y-4">
                <div class="bg-violet-50 dark:bg-violet-900/20 p-4 rounded border border-violet-200 dark:border-violet-800">
                  <p class="text-violet-900 dark:text-violet-100 font-medium mb-3">🎯 Tareas:</p>
                  <ol class="space-y-2 text-violet-800 dark:text-violet-200 list-decimal list-inside">
                    <li>Determina quién responde: ¿la IA, el proveedor, el abogado?</li>
                    <li>Enumera los protocolos preventivos que debieron existir (ej. revisión humana, consentimiento informado del cliente, auditoría de resultados).</li>
                    <li>Redacta una cláusula de advertencia breve para incluir en tu contrato de servicios profesionales sobre uso de IA.</li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Buenas prácticas -->
        <Card class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-green-700 dark:text-green-300">
              🛡️ Buenas prácticas recomendadas
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-3">
            <div class="flex items-start space-x-3">
              <span class="text-green-600 dark:text-green-400 font-bold">•</span>
              <p class="text-green-800 dark:text-green-200">
                <span class="font-medium">Human in the loop:</span> revisión humana obligatoria de cualquier output.
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-green-600 dark:text-green-400 font-bold">•</span>
              <p class="text-green-800 dark:text-green-200">
                <span class="font-medium">Consentimiento informado:</span> comunicar al cliente si se usará IA en su caso.
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-green-600 dark:text-green-400 font-bold">•</span>
              <p class="text-green-800 dark:text-green-200">
                <span class="font-medium">Cumplimiento normativo:</span> respetar la Ley 1581 de 2012 y lineamientos SIC.
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-green-600 dark:text-green-400 font-bold">•</span>
              <p class="text-green-800 dark:text-green-200">
                <span class="font-medium">Trazabilidad y documentación:</span> guardar registro de cómo y cuándo se usó IA.
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-green-600 dark:text-green-400 font-bold">•</span>
              <p class="text-green-800 dark:text-green-200">
                <span class="font-medium">Transparencia:</span> nunca presentar un texto generado por IA como trabajo 100% propio.
              </p>
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
                Conoces los marcos regulatorios básicos en Colombia, la UE y EE.UU.
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Entiendes las responsabilidades profesionales al usar IA en derecho.
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Sabes cómo implementar protocolos de uso responsable y transparente.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Cierre del módulo -->
        <Card class="bg-gradient-to-r from-emerald-500 to-green-600 text-white">
          <CardContent class="p-6">
            <div class="text-center">
              <h3 class="text-2xl font-bold mb-4">📌 Cierre del Módulo 1</h3>
              <p class="text-emerald-100 mb-4 leading-relaxed">
                Has pasado de lo conceptual (qué es la IA y cómo funciona) a lo crítico (sesgos, ética y regulación).
              </p>
              <p class="text-emerald-100 font-medium">
                Con esto, ya estás preparado para entrar a los módulos prácticos donde veremos cómo aplicar estas herramientas en la labor jurídica cotidiana.
              </p>
              <Button
                @click="goToNextModule"
                class="bg-white text-emerald-600 hover:bg-emerald-50 mt-6"
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
            :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-emerald-600 hover:bg-emerald-700'"
            class="text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Check v-if="isCompleted" class="w-5 h-5 mr-2" />
            <BookOpen v-else class="w-5 h-5 mr-2" />
            {{ isCompleted ? 'Módulo 1 Completado' : 'Completar Módulo 1' }}
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
  isCompleted.value = completedMicrosessions['fundamentos-ia-6'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;

  // Guardar en localStorage
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['fundamentos-ia-6'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextModule = () => {
  // Ir al dashboard
  router.push('/dashboard');
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
</style>
