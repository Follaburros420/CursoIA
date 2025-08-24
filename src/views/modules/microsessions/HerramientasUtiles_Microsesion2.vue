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
                2
              </div>
              <div>
                <h1 class="text-lg font-bold text-foreground">RAG (Retrieval-Augmented Generation)</h1>
                <p class="text-sm text-muted-foreground">Módulo 2 • Microsesión 2</p>
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
              Video: RAG para Abogados
            </CardTitle>
            <CardDescription>
              Aprende a combinar conocimiento específico con generación de IA
            </CardDescription>
          </CardHeader>
          <CardContent class="p-0">
            <div class="relative w-full" style="padding-bottom: 56.25%; /* 16:9 aspect ratio */">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-b-lg"
                src="https://www.youtube.com/embed/kZTpVm7K6eA"
                title="RAG (Retrieval-Augmented Generation) para Abogados"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </CardContent>
        </Card>

        <!-- Objective -->
        <Card class="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <div class="flex items-center gap-2 mb-2">
              <Target class="w-5 h-5 text-blue-600" />
              <CardTitle class="text-blue-800 dark:text-blue-400">Objetivo de la sesión</CardTitle>
            </div>
            <CardDescription class="text-blue-700 dark:text-blue-300 text-base">
              Dominar la técnica RAG para combinar conocimiento específico de tu bufete con la capacidad generativa 
              de los LLMs, creando respuestas precisas basadas en tu documentación legal.
            </CardDescription>
          </CardHeader>
        </Card>

        <!-- Content Sections -->
        <div class="grid gap-6">
          
          <!-- ¿Qué es RAG? -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <Search class="w-5 h-5 text-primary" />
                ¿Qué es RAG (Retrieval-Augmented Generation)?
              </CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <p class="text-muted-foreground">
                RAG es una técnica que combina la búsqueda de información específica (retrieval) con la generación 
                de texto de los LLMs, permitiendo respuestas precisas basadas en documentos específicos de tu práctica legal.
              </p>
              
              <div class="bg-muted/50 p-4 rounded-lg">
                <h4 class="font-semibold mb-3 text-primary">El Pipeline RAG:</h4>
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="text-center">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Database class="w-6 h-6 text-white" />
                    </div>
                    <h5 class="font-medium text-sm">1. Vector Store</h5>
                    <p class="text-xs text-muted-foreground">Documentos convertidos en vectores</p>
                  </div>
                  <div class="text-center">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Search class="w-6 h-6 text-white" />
                    </div>
                    <h5 class="font-medium text-sm">2. Búsqueda Semántica</h5>
                    <p class="text-xs text-muted-foreground">Encuentra contenido relevante</p>
                  </div>
                  <div class="text-center">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Brain class="w-6 h-6 text-white" />
                    </div>
                    <h5 class="font-medium text-sm">3. Generación</h5>
                    <p class="text-xs text-muted-foreground">LLM genera respuesta con contexto</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Aplicaciones en Derecho -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <Scale class="w-5 h-5 text-primary" />
                Aplicaciones RAG en la Práctica Legal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div class="grid md:grid-cols-2 gap-6">
                
                <div class="space-y-4">
                  <h4 class="font-semibold text-primary">Casos de Uso Principales:</h4>
                  <div class="space-y-3">
                    <div class="flex items-start gap-3">
                      <Check class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p class="font-medium">Consulta de Precedentes</p>
                        <p class="text-sm text-muted-foreground">Buscar casos similares y generar análisis comparativo</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <Check class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p class="font-medium">Análisis Contractual</p>
                        <p class="text-sm text-muted-foreground">Revisar contratos contra base de conocimiento interna</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <Check class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p class="font-medium">Investigación Jurídica</p>
                        <p class="text-sm text-muted-foreground">Consultar normativa específica y generar resúmenes</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="space-y-4">
                  <h4 class="font-semibold text-primary">Ventajas del RAG:</h4>
                  <div class="space-y-3">
                    <div class="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                      <p class="font-medium text-green-800 dark:text-green-400 text-sm">Precisión</p>
                      <p class="text-xs text-green-700 dark:text-green-300">Respuestas basadas en documentos específicos</p>
                    </div>
                    <div class="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg">
                      <p class="font-medium text-blue-800 dark:text-blue-400 text-sm">Actualización</p>
                      <p class="text-xs text-blue-700 dark:text-blue-300">Fácil incorporación de nuevos documentos</p>
                    </div>
                    <div class="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg">
                      <p class="font-medium text-purple-800 dark:text-purple-400 text-sm">Trazabilidad</p>
                      <p class="text-xs text-purple-700 dark:text-purple-300">Cita las fuentes utilizadas</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Implementación Práctica -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <Settings class="w-5 h-5 text-primary" />
                Implementación Práctica
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                <div class="bg-muted/50 p-4 rounded-lg">
                  <h4 class="font-semibold mb-3">Pasos para implementar RAG:</h4>
                  <div class="space-y-3">
                    <div class="flex items-start gap-3">
                      <div class="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                      <div>
                        <p class="font-medium">Preparar documentos</p>
                        <p class="text-sm text-muted-foreground">Digitalizar y estructurar precedentes, contratos, normativa</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <div class="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                      <div>
                        <p class="font-medium">Crear embeddings</p>
                        <p class="text-sm text-muted-foreground">Convertir documentos en vectores para búsqueda semántica</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <div class="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                      <div>
                        <p class="font-medium">Configurar búsqueda</p>
                        <p class="text-sm text-muted-foreground">Implementar sistema de búsqueda por similitud</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <div class="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                      <div>
                        <p class="font-medium">Integrar con LLM</p>
                        <p class="text-sm text-muted-foreground">Combinar contexto recuperado con generación</p>
                      </div>
                    </div>
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
            @click="router.push('/modulo/herramientas-utiles/microsesion-1')"
            variant="outline"
          >
            <ArrowLeft class="w-4 h-4 mr-2" />
            Anterior: LLMs
          </Button>
          
          <Button
            @click="router.push('/modulo/herramientas-utiles/microsesion-3')"
            class="bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white"
          >
            Siguiente: Ingeniería de Prompting
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
  Search,
  Database,
  Brain,
  Scale,
  Settings,
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
  isCompleted.value = completedMicrosessions['herramientas-utiles-2'] || false;
});

const toggleCompletion = () => {
  isCompleted.value = !isCompleted.value;
  
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['herramientas-utiles-2'] = isCompleted.value;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
