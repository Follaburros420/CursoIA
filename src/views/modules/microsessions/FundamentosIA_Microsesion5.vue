<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-slate-900 dark:via-rose-900/20 dark:to-red-900/20">
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
              Microsesión 5: Sesgos y Ética
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
          <Badge class="bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200 mr-3">
            Módulo 1
          </Badge>
          <Badge variant="outline" class="mr-3">
            Microsesión 5
          </Badge>
          <Badge variant="secondary">
            35 min
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎓 Microsesión 5: Sesgos y Ética
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-medium mb-6">
          La IA no es neutral. ¿Cómo usamos una herramienta poderosa… con criterio humano?
        </p>

        <!-- Video de YouTube -->
        <div class="mb-8">
          <div class="relative w-full max-w-4xl mx-auto">
            <div class="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl bg-slate-100 dark:bg-slate-800">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/FO7RRdX4SyQ"
                title="Sesgos y Ética en IA"
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
        <Card class="border-l-4 border-l-rose-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-rose-700 dark:text-rose-300">
              🎯 Objetivo de la sesión
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Entender que los sistemas de IA no son imparciales ni infalibles, y que su uso responsable requiere pensamiento crítico, supervisión humana y principios éticos claros.
            </p>
          </CardContent>
        </Card>

        <!-- El mito de la objetividad -->
        <Card class="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-red-700 dark:text-red-300">
              🧠 El mito de la "objetividad"
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-red-800 dark:text-red-200 leading-relaxed">
              Muchos piensan que una IA "toma decisiones frías, racionales y objetivas".
            </p>
            
            <div class="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-red-200 dark:border-red-700">
              <p class="text-red-800 dark:text-red-200 font-medium mb-3">
                🔍 Pero lo cierto es que la IA aprende de datos humanos, y eso la hace susceptible a reproducir:
              </p>
              <div class="grid gap-2 md:grid-cols-2">
                <div class="flex items-center space-x-2">
                  <span class="text-red-600 dark:text-red-400">•</span>
                  <span class="text-red-700 dark:text-red-300">Estereotipos</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-red-600 dark:text-red-400">•</span>
                  <span class="text-red-700 dark:text-red-300">Discriminaciones históricas</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-red-600 dark:text-red-400">•</span>
                  <span class="text-red-700 dark:text-red-300">Falencias del lenguaje</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-red-600 dark:text-red-400">•</span>
                  <span class="text-red-700 dark:text-red-300">Sesgos culturales y de clase</span>
                </div>
              </div>
            </div>
            
            <div class="bg-red-100 dark:bg-red-900/30 p-4 rounded border border-red-300 dark:border-red-600">
              <p class="text-red-900 dark:text-red-100 font-medium">
                Un algoritmo no tiene prejuicios propios… pero sí puede amplificar los nuestros.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Tipos de sesgo -->
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-amber-700 dark:text-amber-300">
              ⚠️ Tipos comunes de sesgo en IA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-amber-100 dark:bg-amber-900/30">
                    <th class="border border-amber-300 dark:border-amber-600 px-4 py-3 text-left font-semibold text-amber-900 dark:text-amber-100">
                      Tipo de sesgo
                    </th>
                    <th class="border border-amber-300 dark:border-amber-600 px-4 py-3 text-left font-semibold text-amber-900 dark:text-amber-100">
                      Ejemplo en contexto legal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-amber-50 dark:hover:bg-amber-900/10">
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 font-medium text-amber-900 dark:text-amber-100">
                      De datos
                    </td>
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 text-amber-800 dark:text-amber-200">
                      Si el modelo fue entrenado solo con sentencias urbanas, fallará en contextos rurales.
                    </td>
                  </tr>
                  <tr class="hover:bg-amber-50 dark:hover:bg-amber-900/10">
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 font-medium text-amber-900 dark:text-amber-100">
                      De confirmación
                    </td>
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 text-amber-800 dark:text-amber-200">
                      Si el sistema tiende a reforzar patrones ya vistos, ignorará casos atípicos valiosos.
                    </td>
                  </tr>
                  <tr class="hover:bg-amber-50 dark:hover:bg-amber-900/10">
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 font-medium text-amber-900 dark:text-amber-100">
                      De género o raza
                    </td>
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 text-amber-800 dark:text-amber-200">
                      Puede generar textos que invisibilicen ciertos grupos o los asocien con roles negativos.
                    </td>
                  </tr>
                  <tr class="hover:bg-amber-50 dark:hover:bg-amber-900/10">
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 font-medium text-amber-900 dark:text-amber-100">
                      Cultural o lingüístico
                    </td>
                    <td class="border border-amber-300 dark:border-amber-600 px-4 py-3 text-amber-800 dark:text-amber-200">
                      Modelos entrenados fuera del país pueden malinterpretar expresiones o conceptos jurídicos locales.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <!-- Dilemas éticos -->
        <Card class="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-purple-700 dark:text-purple-300">
              🧩 Dilemas éticos reales del uso de IA
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">¿Quién asume la responsabilidad si la IA se equivoca?</h4>
                <p class="text-purple-700 dark:text-purple-300 text-sm">¿El abogado que la usó? ¿El proveedor del sistema?</p>
              </div>
              
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">¿Está el cliente al tanto de que su caso fue analizado por una máquina?</h4>
                <p class="text-purple-700 dark:text-purple-300 text-sm">¿Se le informó? ¿Se pidió consentimiento?</p>
              </div>
              
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">¿Podemos confiar en una herramienta que no explica cómo llega a sus conclusiones?</h4>
                <p class="text-purple-700 dark:text-purple-300 text-sm">¿Cómo auditar un resultado si no sabemos cómo lo generó?</p>
              </div>
              
              <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">¿Puede la IA reforzar desigualdades si se entrena con datos sesgados?</h4>
                <p class="text-purple-700 dark:text-purple-300 text-sm">¿Estamos automatizando la discriminación sin darnos cuenta?</p>
              </div>
            </div>
            
            <div class="bg-purple-100 dark:bg-purple-900/30 p-4 rounded border border-purple-300 dark:border-purple-600">
              <h4 class="font-semibold text-purple-900 dark:text-purple-100 mb-2">💬 Reflexión central</h4>
              <p class="text-purple-800 dark:text-purple-200">
                No basta con saber usar la herramienta. Hay que saber cuándo no usarla, o cuándo detenerse a revisar críticamente lo que propone.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Ejercicio práctico -->
        <Card class="border-l-4 border-l-indigo-500 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-indigo-700 dark:text-indigo-300">
              🧪 Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
              <p class="text-indigo-800 dark:text-indigo-200 font-semibold mb-4">
                Te damos esta situación:
              </p>

              <div class="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded border border-indigo-300 dark:border-indigo-600 mb-4">
                <p class="text-indigo-900 dark:text-indigo-100 font-medium">
                  📝 Un asistente de IA legal recomienda no incluir una cláusula de confidencialidad en un contrato. Te parece raro.
                </p>
              </div>

              <div class="space-y-4">
                <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded border border-indigo-200 dark:border-indigo-800">
                  <p class="text-indigo-900 dark:text-indigo-100 font-medium mb-3">🎯 Tarea:</p>
                  <ol class="space-y-2 text-indigo-800 dark:text-indigo-200 list-decimal list-inside">
                    <li>Detecta qué tipo de sesgo pudo haber influido (de datos, de entrenamiento, cultural, etc.).</li>
                    <li>Redacta una nueva instrucción (prompt) que ayude al modelo a considerar mejor el contexto.</li>
                    <li>Escribe una recomendación final: ¿usarías la respuesta del modelo? ¿bajo qué condiciones?</li>
                  </ol>
                </div>

                <div class="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded border border-indigo-300 dark:border-indigo-600">
                  <p class="text-indigo-900 dark:text-indigo-100 font-medium">
                    💬 Comparte tu razonamiento en el foro o en clase.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Buenas prácticas -->
        <Card class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle class="flex items-center text-xl text-green-700 dark:text-green-300">
              🛡️ Buenas prácticas para el uso ético
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-3">
            <div class="flex items-start space-x-3">
              <span class="text-green-600 dark:text-green-400 font-bold">•</span>
              <p class="text-green-800 dark:text-green-200">
                <span class="font-medium">Usa IA como herramienta de apoyo, nunca de reemplazo.</span>
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-green-600 dark:text-green-400 font-bold">•</span>
              <p class="text-green-800 dark:text-green-200">
                <span class="font-medium">Revisa críticamente sus outputs:</span> no confíes ciegamente.
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-green-600 dark:text-green-400 font-bold">•</span>
              <p class="text-green-800 dark:text-green-200">
                <span class="font-medium">Sé transparente</span> con clientes o colegas cuando uses IA.
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-green-600 dark:text-green-400 font-bold">•</span>
              <p class="text-green-800 dark:text-green-200">
                <span class="font-medium">Detecta y documenta sesgos:</span> si algo te suena raro, probablemente lo es.
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-green-600 dark:text-green-400 font-bold">•</span>
              <p class="text-green-800 dark:text-green-200">
                <span class="font-medium">Supervisión humana obligatoria:</span> la última palabra debe ser tuya.
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
                Sabes que la IA no es neutral ni imparcial por defecto
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Reconoces tipos comunes de sesgos y dilemas éticos reales
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Puedes actuar con responsabilidad y criterio profesional al usar IA
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">✅</span>
              <p class="text-emerald-800 dark:text-emerald-200">
                Entiendes que la ética no es un accesorio: es una capa de seguridad para ti, tus clientes y tus decisiones
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Siguiente sesión -->
        <Card class="bg-gradient-to-r from-rose-500 to-red-600 text-white">
          <CardContent class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold mb-2">⏭️ Siguiente microsesión: Marco legal y regulatorio</h3>
                <p class="text-rose-100">
                  ¿Qué normas existen en Colombia y el mundo para controlar estos riesgos? ¿Qué puede y no puede hacer un abogado con IA según la ley?
                </p>
              </div>
              <Button
                @click="goToNextSession"
                class="bg-white text-rose-600 hover:bg-rose-50 ml-4"
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
            :class="isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-rose-600 hover:bg-rose-700'"
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
  isCompleted.value = completedMicrosessions['fundamentos-ia-5'] || false;
});

const completeMicrosession = () => {
  isCompleted.value = true;

  // Guardar en localStorage
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['fundamentos-ia-5'] = true;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};

const goToNextSession = () => {
  // Navegar a la microsesión 6
  router.push('/modulo/fundamentos-ia/microsesion-6');
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
