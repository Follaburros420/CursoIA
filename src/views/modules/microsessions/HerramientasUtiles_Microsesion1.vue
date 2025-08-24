<template>
  <div class="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
    <!-- Header -->
    <div class="border-b border-border/50 bg-card/30 backdrop-blur-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <Button
              @click="router.push('/modulo/herramientas-utiles')"
              variant="ghost"
              size="sm"
            >
              <ArrowLeft class="w-4 h-4 mr-2" />
              Volver al módulo
            </Button>
            
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div>
                <h1 class="text-lg font-bold text-foreground">Introducción a los LLMs</h1>
                <p class="text-sm text-muted-foreground">Módulo 2 • Microsesión 1</p>
              </div>
            </div>
          </div>
          
          <Button
            @click="router.push('/dashboard')"
            variant="ghost"
            size="sm"
          >
            <Home class="w-4 h-4 mr-2" />
            Dashboard
          </Button>
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
              Video: Introducción a los LLMs
            </CardTitle>
            <CardDescription>
              Comprende qué son los LLMs y cómo aplicarlos en tu práctica legal
            </CardDescription>
          </CardHeader>
          <CardContent class="p-0">
            <div class="relative w-full" style="padding-bottom: 56.25%; /* 16:9 aspect ratio */">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-b-lg"
                src="https://www.youtube.com/embed/bbX405TMeXc"
                title="Introducción a los LLMs para Abogados"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </CardContent>
        </Card>

        <!-- Objective -->
        <Card class="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10 border-green-200 dark:border-green-800">
          <CardHeader>
            <div class="flex items-center gap-2 mb-2">
              <Target class="w-5 h-5 text-green-600" />
              <CardTitle class="text-green-800 dark:text-green-400">Objetivo de la sesión</CardTitle>
            </div>
            <CardDescription class="text-green-700 dark:text-green-300 text-base">
              Comprender las diferencias entre proveedores de LLMs y optimizar su uso para tareas legales específicas, 
              dominando conceptos clave como temperatura, tokens y costos de implementación.
            </CardDescription>
          </CardHeader>
        </Card>

        <!-- Content Sections -->
        <div class="grid gap-6">
          
          <!-- ¿Qué son los LLMs? -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <Brain class="w-5 h-5 text-primary" />
                ¿Qué son los Large Language Models (LLMs)?
              </CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <p class="text-muted-foreground">
                Los Large Language Models son sistemas de inteligencia artificial entrenados con enormes cantidades de texto 
                para comprender y generar lenguaje natural de manera coherente y contextual.
              </p>
              
              <div class="bg-muted/50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2 text-primary">Características principales:</h4>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Comprensión contextual:</strong> Entienden el contexto legal y pueden mantener conversaciones coherentes</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Generación de texto:</strong> Crean documentos, análisis y respuestas de calidad profesional</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Adaptabilidad:</strong> Se ajustan a diferentes estilos y formatos legales</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <!-- Diferencias entre proveedores -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <Zap class="w-5 h-5 text-primary" />
                Diferencias entre Proveedores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div class="grid md:grid-cols-2 gap-4">
                
                <!-- Open Source vs Propietarios -->
                <div class="space-y-4">
                  <div class="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 class="font-semibold text-blue-800 dark:text-blue-400 mb-2">Modelos Open Source</h4>
                    <ul class="text-sm space-y-1 text-blue-700 dark:text-blue-300">
                      <li>• Llama, Mistral, Code Llama</li>
                      <li>• Control total sobre datos</li>
                      <li>• Instalación local posible</li>
                      <li>• Costos predecibles</li>
                    </ul>
                  </div>
                  
                  <div class="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 class="font-semibold text-purple-800 dark:text-purple-400 mb-2">Modelos Propietarios</h4>
                    <ul class="text-sm space-y-1 text-purple-700 dark:text-purple-300">
                      <li>• GPT-4, Claude, Gemini</li>
                      <li>• Mayor capacidad general</li>
                      <li>• Actualizaciones constantes</li>
                      <li>• Soporte empresarial</li>
                    </ul>
                  </div>
                </div>

                <!-- Fine-tuned vs General -->
                <div class="space-y-4">
                  <div class="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 class="font-semibold text-orange-800 dark:text-orange-400 mb-2">Modelos Fine-tuned</h4>
                    <ul class="text-sm space-y-1 text-orange-700 dark:text-orange-300">
                      <li>• Especializados en derecho</li>
                      <li>• Mayor precisión en tareas específicas</li>
                      <li>• Menor versatilidad general</li>
                      <li>• Requieren datos de entrenamiento</li>
                    </ul>
                  </div>
                  
                  <div class="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 class="font-semibold text-green-800 dark:text-green-400 mb-2">Modelos Generales</h4>
                    <ul class="text-sm space-y-1 text-green-700 dark:text-green-300">
                      <li>• Amplio conocimiento general</li>
                      <li>• Versatilidad en múltiples tareas</li>
                      <li>• Fácil implementación</li>
                      <li>• Menor especialización legal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        <!-- Completion Status -->
        <Card class="border-2" :class="isCompleted ? 'border-green-500 bg-green-50 dark:bg-green-950/20' : 'border-muted'">
          <CardContent class="pt-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full flex items-center justify-center" 
                     :class="isCompleted ? 'bg-green-500 text-white' : 'bg-muted text-muted-foreground'">
                  <Check class="w-4 h-4" />
                </div>
                <div>
                  <p class="font-medium">{{ isCompleted ? 'Microsesión completada' : 'Marcar como completada' }}</p>
                  <p class="text-sm text-muted-foreground">
                    {{ isCompleted ? 'Has completado esta microsesión exitosamente' : 'Marca esta sesión como completada cuando hayas terminado' }}
                  </p>
                </div>
              </div>
              <Button 
                @click="toggleCompletion"
                :variant="isCompleted ? 'secondary' : 'default'"
              >
                {{ isCompleted ? 'Completada' : 'Completar' }}
              </Button>
            </div>
          </CardContent>
        </Card>

        <!-- Navigation -->
        <div class="flex justify-between items-center pt-8">
          <Button
            @click="router.push('/modulo/herramientas-utiles')"
            variant="outline"
          >
            <ArrowLeft class="w-4 h-4 mr-2" />
            Volver al módulo
          </Button>
          
          <Button
            @click="router.push('/modulo/herramientas-utiles/microsesion-2')"
            class="bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white"
          >
            Siguiente: RAG
            <ArrowRight class="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Home, 
  Check, 
  Target,
  Brain,
  Zap,
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
  isCompleted.value = completedMicrosessions['herramientas-utiles-1'] || false;
});

const toggleCompletion = () => {
  isCompleted.value = !isCompleted.value;
  
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['herramientas-utiles-1'] = isCompleted.value;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
