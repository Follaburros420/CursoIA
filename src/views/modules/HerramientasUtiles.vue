<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, ArrowLeft, Clock, Target, BookOpen, CheckCircle, Play } from "lucide-vue-next";

const router = useRouter();

// Verificar autenticación
onMounted(() => {
  const authStatus = localStorage.getItem('isAuthenticated');
  if (authStatus !== 'true') {
    router.push('/login');
  }
});

const microSessions = [
  {
    title: "Introducción a los LLMs",
    objective: "Comprender diferencias entre proveedores y optimizar su uso.",
    content: "Qué son, diferencias entre proveedores (open vs. fine-tuned), temperatura, tokens, costos de uso.",
    exercise: "Comparar la misma pregunta legal en dos modelos y analizar diferencias de respuesta y consistencia.",
    completed: false
  },
  {
    title: "RAG (Retrieval-Augmented Generation)",
    objective: "Combinar conocimiento específico con generación.",
    content: "Cómo funciona el pipeline: vector store + búsqueda semántica + generación con contexto.",
    exercise: "Montar (aunque sea conceptual/manual) un RAG simple para un conjunto de precedentes y hacer una consulta.",
    completed: false
  },
  {
    title: "Bases de datos y almacenamiento de conocimiento",
    objective: "Estructurar información legal para consulta eficiente.",
    content: "Tipos: vectoriales vs. tradicionales, versionado de documentos, gestión de fuentes.",
    exercise: "Diseñar la estructura mínima para almacenar opiniones previas, precedentes y versiones de documentos.",
    completed: false
  },
  {
    title: "Integraciones prácticas y conectores",
    objective: "Conectar herramientas con sistemas existentes.",
    content: "Conectar LLM con Google Docs / Notion / sistema interno. Automatizar ingestion (scanning, OCR, extracción).",
    exercise: "Esquematizar cómo entra un documento nuevo y termina como un insight en el sistema.",
    completed: false
  }
];

const practicalCase = {
  title: "Construir un asistente de consulta legal",
  description: "El alumno debe diseñar e implementar un flujo RAG donde se ingieren 10 documentos normativos/precedentes, una pregunta del cliente se responde combinando esos documentos con un resumen generado, incluyendo evaluación de confianza y explicación para el cliente."
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
          <Button
            @click="router.push('/dashboard')"
            variant="ghost"
            size="sm"
          >
            <ArrowLeft class="w-4 h-4 mr-2" />
            Dashboard
          </Button>
          
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Database class="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 class="text-lg font-bold text-foreground">Módulo 2: Herramientas más útiles</h1>
              <div class="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock class="w-4 h-4" />
                <span>2 horas de contenido</span>
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
            <CardTitle class="text-2xl font-bold text-transparent bg-gradient-to-r from-green-500 to-green-600 bg-clip-text">
              Video Introductorio
            </CardTitle>
            <CardDescription>
              Herramientas más útiles: LLMs, RAG y bases de datos
            </CardDescription>
          </CardHeader>
          <CardContent class="p-0">
            <div class="relative w-full" style="padding-bottom: 56.25%; /* 16:9 aspect ratio */">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-b-lg"
                src="https://www.youtube.com/embed/f4oTllU1-yQ"
                title="Herramientas más útiles para Abogados"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </CardContent>
        </Card>
        
        <!-- Module overview -->
        <Card class="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10 border-green-200 dark:border-green-800">
          <CardHeader>
            <div class="flex items-center gap-2 mb-2">
              <Target class="w-5 h-5 text-green-600" />
              <CardTitle class="text-green-800 dark:text-green-400">Objetivo del módulo</CardTitle>
            </div>
            <CardDescription class="text-green-700 dark:text-green-300">
              Dominar las herramientas fundamentales para implementar IA en la práctica legal
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
                    <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
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
            <Button class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
              <Target class="w-4 h-4 mr-2" />
              Resolver Caso Práctico
            </Button>
          </CardContent>
        </Card>

        <!-- Navigation -->
        <div class="flex justify-between items-center pt-8">
          <Button
            @click="router.push('/modulo/fundamentos-ia')"
            variant="outline"
          >
            <ArrowLeft class="w-4 h-4 mr-2" />
            Módulo Anterior
          </Button>
          
          <Button
            @click="router.push('/modulo/redaccion-legal')"
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
