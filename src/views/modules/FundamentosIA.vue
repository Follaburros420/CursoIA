<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCourseProgress } from '@/composables/useCourseProgress';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, ArrowLeft, Clock, Target, BookOpen, CheckCircle, Play } from "lucide-vue-next";

const router = useRouter();

// Sistema de progreso
const { 
  toggleSessionComplete, 
  togglePracticalCaseComplete, 
  isSessionCompleted, 
  isPracticalCaseCompleted 
} = useCourseProgress();

const MODULE_ID = 1;

// Verificar autenticación
onMounted(() => {
  const authStatus = localStorage.getItem('isAuthenticated');
  if (authStatus !== 'true') {
    router.push('/login');
  }
});

const microSessions = [
  {
    title: "Qué es la IA",
    objective: "Desmitificar y alinear expectativas.",
    content: "Distinción entre IA débil/fuerte, generación vs. clasificación, diferencia entre asistente y autor.",
    exercise: "Pregunta a un LLM '¿Qué puede y qué no puede hacer la IA en un análisis jurídico?' y anota 3 limitaciones clave.",
    completed: false,
    route: '/modulo/fundamentos-ia/microsesion-1'
  },
  {
    title: "Tipos de IA",
    objective: "Saber cuándo una solución es basada en reglas vs. aprendizaje.",
    content: "Sistemas basados en reglas, machine learning, deep learning, redes neuronales vs. árboles de decisión.",
    exercise: "Dado un problema legal (ej. clasificar cláusulas riesgosas), decidir si se resolvería mejor con reglas, ML o LLM y justificar.",
    completed: false,
    route: '/modulo/fundamentos-ia/microsesion-2'
  },
  {
    title: "Machine Learning y Deep Learning",
    objective: "Entender sobre entrenamiento, sobreajuste, generalización y por qué los modelos cometen errores.",
    content: "Datos de entrenamiento, etiquetas, 'garbage in garbage out', interpretabilidad.",
    exercise: "Revisar un ejemplo de output incorrecto y proponer qué pudo fallar en el entrenamiento o en el prompt.",
    completed: false,
    route: '/modulo/fundamentos-ia/microsesion-3'
  },
  {
    title: "Procesamiento de Lenguaje Natural (NLP)",
    objective: "Saber qué hace posible que los modelos entiendan y generen texto legal.",
    content: "Tokenización, embeddings, similitud semántica, resumen, extracción de entidades.",
    exercise: "Generar embeddings de dos textos similares y medir con la IA su distancia/igualdad.",
    completed: false,
    route: '/modulo/fundamentos-ia/microsesion-4'
  },
  {
    title: "Sesgos y ética",
    objective: "Reconocer y mitigar sesgos en outputs legales.",
    content: "Tipos de sesgo (de datos, confirmación, de género, cultural), impacto en decisiones jurídicas, human in the loop.",
    exercise: "Detectar un sesgo en una recomendación automatizada y reescribir el prompt para mitigarlo.",
    completed: false,
    route: '/modulo/fundamentos-ia/microsesion-5'
  },
  {
    title: "Marco regulatorio y legal",
    objective: "Conocer restricciones, responsabilidades y estándares de uso de IA en el ejercicio legal.",
    content: "Protección de datos (Habeas Data), responsabilidad profesional, uso de algoritmos en decisiones, comparación con EU/EEUU.",
    exercise: "Analizar un caso hipotético donde un abogado depende de IA y hay un error: ¿quién responde y qué protocolos previos debía tener?",
    completed: false,
    route: '/modulo/fundamentos-ia/microsesion-6'
  }
];

const practicalCase = {
  title: "Auditoría de confianza de una recomendación de IA",
  description: "Se da un borrador generado por IA (opinión legal con recomendaciones contradictorias). El alumno debe identificar errores, sesgos y supuestos no explícitos, corregir el prompt/entrada para mejorar la calidad, y escribir un short memo de por qué se puede confiar (o no) en esa recomendación."
};

const handleSessionClick = (index: number) => {
  const session = microSessions[index];
  if (session.route) {
    // Navegar a la microsesión específica
    router.push(session.route);
  } else {
    // Solo marcar como completada si no tiene ruta específica
    toggleSessionComplete(MODULE_ID, index);
  }
};

const handlePracticalCaseClick = () => {
  togglePracticalCaseComplete(MODULE_ID);
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
    <!-- Header -->
    <div class="border-b border-border/50 bg-card/30 backdrop-blur-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Back button and module info -->
          <div class="flex items-center space-x-4">
            <Button
              @click="router.push('/dashboard')"
              variant="ghost"
              size="sm"
            >
              <ArrowLeft class="w-4 h-4 mr-2" />
              Volver al Dashboard
            </Button>
            
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Brain class="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 class="text-lg font-bold text-foreground">Módulo 1: Fundamentos de IA</h1>
                <div class="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock class="w-4 h-4" />
                  <span>2 horas de contenido</span>
                  <Badge class="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs">
                    Básico
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto space-y-8">
        
        <!-- Video Section -->
        <Card class="overflow-hidden">
          <CardHeader class="text-center">
            <CardTitle class="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text">
              Video Introductorio
            </CardTitle>
            <CardDescription>
              Fundamentos de Inteligencia Artificial para Abogados
            </CardDescription>
          </CardHeader>
          <CardContent class="p-0">
            <div class="relative w-full" style="padding-bottom: 56.25%; /* 16:9 aspect ratio */">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-b-lg"
                src="https://www.youtube.com/embed/yEBKbrxs1Dg"
                title="Fundamentos de IA para Abogados"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </CardContent>
        </Card>
        
        <!-- Module overview -->
        <Card class="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <div class="flex items-center gap-2 mb-2">
              <Target class="w-5 h-5 text-blue-600" />
              <CardTitle class="text-blue-800 dark:text-blue-400">Objetivo del módulo</CardTitle>
            </div>
            <CardDescription class="text-blue-700 dark:text-blue-300">
              Desmitificar la IA y establecer bases sólidas para su aplicación ética en el derecho
            </CardDescription>
          </CardHeader>
        </Card>

        <!-- Micro-sessions -->
        <div class="space-y-6">
          <div class="flex items-center gap-2 mb-6">
            <BookOpen class="w-6 h-6 text-primary" />
            <h3 class="text-2xl font-bold text-foreground">Micro-sesiones</h3>
          </div>

          <div class="grid gap-6">
            <Card
              v-for="(session, index) in microSessions"
              :key="index"
              class="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              @click="handleSessionClick(index)"
            >
              <CardHeader>
                <div class="flex items-start justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-primary to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {{ index + 1 }}
                    </div>
                    <div>
                      <CardTitle class="text-lg group-hover:text-primary transition-colors">
                        {{ session.title }}
                      </CardTitle>
                      <p class="text-sm text-muted-foreground mt-1">
                        <strong>Objetivo:</strong> {{ session.objective }}
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex items-center space-x-2">
                                      <CheckCircle 
                    :class="[
                      'w-6 h-6 transition-colors duration-300',
                      isSessionCompleted(MODULE_ID, index) ? 'text-green-500' : 'text-muted-foreground'
                    ]"
                  />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent class="space-y-3">
                <div>
                  <h5 class="font-medium text-foreground mb-1">Contenido:</h5>
                  <p class="text-sm text-muted-foreground">{{ session.content }}</p>
                </div>
                
                <div>
                  <h5 class="font-medium text-primary mb-1">Ejercicio práctico:</h5>
                  <p class="text-sm text-muted-foreground">{{ session.exercise }}</p>
                </div>

                <Button
                  size="sm"
                  :variant="isSessionCompleted(MODULE_ID, index) ? 'secondary' : 'default'"
                  class="w-full mt-4"
                >
                  <Play class="w-4 h-4 mr-2" />
                  {{ isSessionCompleted(MODULE_ID, index) ? 'Completado' : 'Comenzar sesión' }}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <!-- Practical case -->
        <Card class="bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <div class="flex items-center gap-2 mb-2">
              <CheckCircle class="w-5 h-5 text-orange-600" />
              <CardTitle class="text-orange-800 dark:text-orange-400">Caso Práctico Final</CardTitle>
            </div>
            <CardTitle class="text-lg text-orange-700 dark:text-orange-300">
              {{ practicalCase.title }}
            </CardTitle>
            <CardDescription class="text-orange-600 dark:text-orange-400">
              {{ practicalCase.description }}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              @click="handlePracticalCaseClick"
              :class="[
                'w-full transition-all duration-300',
                isPracticalCaseCompleted(MODULE_ID)
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
              ]"
            >
              <component :is="isPracticalCaseCompleted(MODULE_ID) ? CheckCircle : Target" class="w-4 h-4 mr-2" />
              {{ isPracticalCaseCompleted(MODULE_ID) ? 'Caso Completado' : 'Resolver Caso Práctico' }}
            </Button>
          </CardContent>
        </Card>

        <!-- Navigation -->
        <div class="flex justify-between items-center pt-8">
          <Button
            @click="router.push('/dashboard')"
            variant="outline"
          >
            <ArrowLeft class="w-4 h-4 mr-2" />
            Volver al Dashboard
          </Button>
          
          <Button
            @click="router.push('/modulo/herramientas-utiles')"
            class="bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white"
          >
            Siguiente Módulo
            <ArrowLeft class="w-4 h-4 ml-2 rotate-180" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
