<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, ArrowLeft, Clock, Target, BookOpen, CheckCircle, Play } from "lucide-vue-next";

const router = useRouter();

onMounted(() => {
  const authStatus = localStorage.getItem('isAuthenticated');
  if (authStatus !== 'true') {
    router.push('/login');
  }
});

const microSessions = [
  {
    title: "Principios de automatización legal",
    objective: "Establecer criterios para automatizar procesos legales.",
    content: "Qué automatizar, qué no, fallbacks, control humano.",
    exercise: "Evaluar procesos del despacho y determinar candidatos para automatización.",
    completed: false
  },
  {
    title: "Automatización 1: Onboarding de cliente",
    objective: "Automatizar la captación y procesamiento inicial de clientes.",
    content: "Flujo: formulario → resumen de necesidades → borrador inicial → revisión.",
    exercise: "Diseñar un flujo de onboarding automatizado para un tipo de cliente específico.",
    completed: false
  },
  {
    title: "Automatización 2: Monitoreo normativo",
    objective: "Crear sistemas de alerta para cambios normativos relevantes.",
    content: "Flujo: fuentes ingestas → comparación con base anterior → notificación de cambio relevante.",
    exercise: "Configurar un sistema de monitoreo para una área legal específica.",
    completed: false
  },
  {
    title: "Automatización 3: Auditoría de riesgos contractuales",
    objective: "Automatizar la evaluación inicial de riesgos en contratos.",
    content: "Flujo: upload contrato → análisis de cláusulas clave → score de riesgo + recomendaciones.",
    exercise: "Crear un sistema de scoring automático para contratos de un tipo específico.",
    completed: false
  }
];

const practicalCase = {
  title: "Implementar una automatización completa",
  description: "Elegir una de las tres automatizaciones estudiadas e implementar un prototipo funcional que incluya: ingesta de datos, procesamiento con IA, validación humana, y entrega de resultados. Acceso a biblioteca de 5,000+ workflows verificados para adaptación."
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
            <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <Cog class="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 class="text-lg font-bold text-foreground">Módulo 5: Automatizaciones en acción</h1>
              <div class="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock class="w-4 h-4" />
                <span>+3 horas de contenido</span>
                <Badge class="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 text-xs">
                  Avanzado
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
            <CardTitle class="text-2xl font-bold text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text">
              Video Introductorio
            </CardTitle>
            <CardDescription>
              Automatizaciones en acción para la práctica legal
            </CardDescription>
          </CardHeader>
          <CardContent class="p-0">
            <div class="relative w-full" style="padding-bottom: 56.25%; /* 16:9 aspect ratio */">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-b-lg"
                src="https://www.youtube.com/embed/NQWYeaKcKP0"
                title="Automatizaciones en acción para Abogados"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </CardContent>
        </Card>
        
        <!-- Module overview -->
        <Card class="bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-950/20 dark:to-red-900/10 border-red-200 dark:border-red-800">
          <CardHeader>
            <div class="flex items-center gap-2 mb-2">
              <Target class="w-5 h-5 text-red-600" />
              <CardTitle class="text-red-800 dark:text-red-400">Objetivo del módulo</CardTitle>
            </div>
            <CardDescription class="text-red-700 dark:text-red-300">
              Implementar automatizaciones que transformen la eficiencia del despacho
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
                    <div class="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
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
        <Card class="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <div class="flex items-center gap-2 mb-2">
              <CheckCircle class="w-5 h-5 text-purple-600" />
              <CardTitle class="text-purple-800 dark:text-purple-400">Caso Práctico Final</CardTitle>
            </div>
            <CardTitle class="text-lg text-purple-700 dark:text-purple-300">
              {{ practicalCase.title }}
            </CardTitle>
            <CardDescription class="text-purple-600 dark:text-purple-400">
              {{ practicalCase.description }}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button class="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
              <Target class="w-4 h-4 mr-2" />
              Resolver Caso Práctico
            </Button>
          </CardContent>
        </Card>

        <!-- Navigation -->
        <div class="flex justify-between items-center pt-8">
          <Button @click="router.push('/modulo/busqueda-juridica')" variant="outline">
            <ArrowLeft class="w-4 h-4 mr-2" />
            Módulo Anterior
          </Button>
          
          <Button
            @click="router.push('/dashboard')"
            class="bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white"
          >
            Finalizar Curso
            <CheckCircle class="w-4 h-4 ml-2" />
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
