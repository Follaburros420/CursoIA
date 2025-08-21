<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowLeft, Clock, Target, BookOpen, CheckCircle, Play } from "lucide-vue-next";

const router = useRouter();

onMounted(() => {
  const authStatus = localStorage.getItem('isAuthenticated');
  if (authStatus !== 'true') {
    router.push('/login');
  }
});

const microSessions = [
  {
    title: "Fuentes primarias, secundarias y doctrina",
    objective: "Distinguir tipos de fuentes y cuándo usar cada una.",
    content: "Jerarquía normativa, qué tiene peso, cómo se interpreta. Fuentes primarias vs. secundarias.",
    exercise: "Clasificar un conjunto de fuentes y determinar su peso jurídico.",
    completed: false
  },
  {
    title: "Mejores modelos y herramientas de búsqueda",
    objective: "Seleccionar herramientas optimizadas para recuperación legal.",
    content: "Modelos optimizados para recuperación, comparadores de motores semánticos.",
    exercise: "Comparar resultados de búsqueda entre diferentes herramientas.",
    completed: false
  },
  {
    title: "Técnicas avanzadas de búsqueda",
    objective: "Aplicar técnicas sofisticadas para búsquedas precisas.",
    content: "Chain-of-thought para refinar búsquedas, reformulación automática, expansión de consultas.",
    exercise: "Refinar una consulta compleja usando técnicas de reformulación.",
    completed: false
  },
  {
    title: "Filtrado y validación de información",
    objective: "Asegurar calidad y vigencia de la información encontrada.",
    content: "Verificación cruzada, scoring de credibilidad, fechas de vigencia.",
    exercise: "Validar un conjunto de fuentes y asignar scores de confiabilidad.",
    completed: false
  }
];

const practicalCase = {
  title: "Resolver una pregunta compleja con respaldo documental",
  description: "Escenario: '¿Qué obligaciones contractuales tiene una empresa colombiana bajo una cláusula de fuerza mayor en contratos con contraparte extranjera durante una crisis sanitaria?' Formular estrategia de búsqueda, recolectar fuentes, validar y filtrar, entregar brief con citas correctas y resumen ejecutivo."
};

const toggleSessionComplete = (index: number) => {
  microSessions[index].completed = !microSessions[index].completed;
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
    <!-- Header -->
    <div class="border-b border-border/50 bg-card/30 backdrop-blur-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center space-x-4">
          <Button @click="router.push('/dashboard')" variant="ghost" size="sm">
            <ArrowLeft class="w-4 h-4 mr-2" />
            Dashboard
          </Button>
          
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Search class="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 class="text-lg font-bold text-foreground">Módulo 4: Búsqueda de información jurídica</h1>
              <div class="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock class="w-4 h-4" />
                <span>+2 horas de contenido</span>
                <Badge class="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 text-xs">
                  Intermedio
                </Badge>
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
            <CardTitle class="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">
              Video Introductorio
            </CardTitle>
            <CardDescription>
              Búsqueda de información jurídica con IA
            </CardDescription>
          </CardHeader>
          <CardContent class="p-0">
            <div class="relative w-full" style="padding-bottom: 56.25%; /* 16:9 aspect ratio */">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-b-lg"
                src="https://www.youtube.com/embed/9pep5qRCEM4"
                title="Búsqueda de información jurídica con IA"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </CardContent>
        </Card>
        
        <!-- Module overview -->
        <Card class="bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <div class="flex items-center gap-2 mb-2">
              <Target class="w-5 h-5 text-orange-600" />
              <CardTitle class="text-orange-800 dark:text-orange-400">Objetivo del módulo</CardTitle>
            </div>
            <CardDescription class="text-orange-700 dark:text-orange-300">
              Optimizar la investigación legal con herramientas de IA manteniendo rigor académico
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
              @click="toggleSessionComplete(index)"
            >
              <CardHeader>
                <div class="flex items-start justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
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
                  
                  <CheckCircle 
                    :class="[
                      'w-6 h-6 transition-colors duration-300',
                      session.completed ? 'text-green-500' : 'text-muted-foreground'
                    ]"
                  />
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
                  :variant="session.completed ? 'secondary' : 'default'"
                  class="w-full mt-4"
                >
                  <Play class="w-4 h-4 mr-2" />
                  {{ session.completed ? 'Completado' : 'Comenzar sesión' }}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <!-- Practical case -->
        <Card class="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <div class="flex items-center gap-2 mb-2">
              <CheckCircle class="w-5 h-5 text-blue-600" />
              <CardTitle class="text-blue-800 dark:text-blue-400">Caso Práctico Final</CardTitle>
            </div>
            <CardTitle class="text-lg text-blue-700 dark:text-blue-300">
              {{ practicalCase.title }}
            </CardTitle>
            <CardDescription class="text-blue-600 dark:text-blue-400">
              {{ practicalCase.description }}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button class="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
              <Target class="w-4 h-4 mr-2" />
              Resolver Caso Práctico
            </Button>
          </CardContent>
        </Card>

        <!-- Navigation -->
        <div class="flex justify-between items-center pt-8">
          <Button @click="router.push('/modulo/redaccion-legal')" variant="outline">
            <ArrowLeft class="w-4 h-4 mr-2" />
            Módulo Anterior
          </Button>
          
          <Button
            @click="router.push('/modulo/automatizaciones')"
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
