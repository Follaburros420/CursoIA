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
                3
              </div>
              <div>
                <h1 class="text-lg font-bold text-foreground">Fundamentos de Ingeniería de Prompting</h1>
                <p class="text-sm text-muted-foreground">Módulo 2 • Microsesión 3</p>
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
              Video: Ingeniería de Prompting para Abogados
            </CardTitle>
            <CardDescription>
              Domina el arte de crear prompts efectivos para tareas legales
            </CardDescription>
          </CardHeader>
          <CardContent class="p-0">
            <div class="relative w-full" style="padding-bottom: 56.25%; /* 16:9 aspect ratio */">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-b-lg"
                src="https://www.youtube.com/embed/pIAns1btmHQ"
                title="Fundamentos de Ingeniería de Prompting para Abogados"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </CardContent>
        </Card>

        <!-- Objective -->
        <Card class="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <div class="flex items-center gap-2 mb-2">
              <Target class="w-5 h-5 text-purple-600" />
              <CardTitle class="text-purple-800 dark:text-purple-400">Objetivo de la sesión</CardTitle>
            </div>
            <CardDescription class="text-purple-700 dark:text-purple-300 text-base">
              Dominar las técnicas fundamentales de ingeniería de prompting para maximizar la efectividad 
              de los LLMs en tareas legales específicas, creando instrucciones precisas y consistentes.
            </CardDescription>
          </CardHeader>
        </Card>

        <!-- Content Sections -->
        <div class="grid gap-6">
          
          <!-- ¿Qué es Prompt Engineering? -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <MessageSquare class="w-5 h-5 text-primary" />
                ¿Qué es la Ingeniería de Prompting?
              </CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <p class="text-muted-foreground">
                La ingeniería de prompting es el arte y ciencia de diseñar instrucciones efectivas para que 
                los LLMs produzcan resultados precisos, consistentes y útiles para tareas legales específicas.
              </p>
              
              <div class="bg-muted/50 p-4 rounded-lg">
                <h4 class="font-semibold mb-3 text-primary">Componentes de un Prompt Efectivo:</h4>
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span class="font-medium text-sm">Contexto</span>
                    </div>
                    <p class="text-xs text-muted-foreground ml-5">Información de fondo relevante</p>
                  </div>
                  <div class="space-y-2">
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span class="font-medium text-sm">Instrucción</span>
                    </div>
                    <p class="text-xs text-muted-foreground ml-5">Tarea específica a realizar</p>
                  </div>
                  <div class="space-y-2">
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span class="font-medium text-sm">Formato</span>
                    </div>
                    <p class="text-xs text-muted-foreground ml-5">Estructura deseada de la respuesta</p>
                  </div>
                  <div class="space-y-2">
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span class="font-medium text-sm">Ejemplos</span>
                    </div>
                    <p class="text-xs text-muted-foreground ml-5">Casos de referencia (few-shot)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Técnicas Fundamentales -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <Lightbulb class="w-5 h-5 text-primary" />
                Técnicas Fundamentales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-6">
                
                <!-- Zero-shot vs Few-shot -->
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 class="font-semibold text-blue-800 dark:text-blue-400 mb-2">Zero-shot Prompting</h4>
                    <p class="text-sm text-blue-700 dark:text-blue-300 mb-3">
                      Instrucciones directas sin ejemplos
                    </p>
                    <div class="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-xs">
                      <strong>Ejemplo:</strong><br/>
                      "Analiza este contrato y identifica las cláusulas de riesgo más importantes."
                    </div>
                  </div>
                  
                  <div class="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 class="font-semibold text-green-800 dark:text-green-400 mb-2">Few-shot Prompting</h4>
                    <p class="text-sm text-green-700 dark:text-green-300 mb-3">
                      Incluye ejemplos para guiar la respuesta
                    </p>
                    <div class="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs">
                      <strong>Ejemplo:</strong><br/>
                      "Analiza contratos como estos ejemplos: [Ejemplo 1], [Ejemplo 2]..."
                    </div>
                  </div>
                </div>

                <!-- Chain of Thought -->
                <div class="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 class="font-semibold text-purple-800 dark:text-purple-400 mb-2">Chain of Thought (CoT)</h4>
                  <p class="text-sm text-purple-700 dark:text-purple-300 mb-3">
                    Solicitar razonamiento paso a paso para decisiones complejas
                  </p>
                  <div class="bg-purple-100 dark:bg-purple-900/30 p-3 rounded text-xs">
                    <strong>Ejemplo:</strong><br/>
                    "Analiza este caso paso a paso: 1) Identifica los hechos relevantes, 2) Determina la normativa aplicable, 
                    3) Evalúa los precedentes, 4) Concluye con tu recomendación legal."
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Prompts para Abogados -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <Scale class="w-5 h-5 text-primary" />
                Prompts Especializados para Abogados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                
                <div class="grid gap-4">
                  <!-- Análisis Contractual -->
                  <div class="border rounded-lg p-4">
                    <h4 class="font-semibold text-primary mb-2">Análisis Contractual</h4>
                    <div class="bg-muted/50 p-3 rounded text-sm font-mono">
                      "Actúa como un abogado especialista en derecho contractual. Analiza el siguiente contrato y proporciona:
                      <br/>1. Resumen ejecutivo de términos clave
                      <br/>2. Identificación de cláusulas de riesgo
                      <br/>3. Recomendaciones de modificación
                      <br/>4. Nivel de riesgo (Alto/Medio/Bajo) con justificación
                      <br/><br/>Contrato: [INSERTAR TEXTO]"
                    </div>
                  </div>

                  <!-- Investigación Jurídica -->
                  <div class="border rounded-lg p-4">
                    <h4 class="font-semibold text-primary mb-2">Investigación Jurídica</h4>
                    <div class="bg-muted/50 p-3 rounded text-sm font-mono">
                      "Como experto en investigación jurídica, necesito que:
                      <br/>1. Identifiques la normativa aplicable al caso: [DESCRIPCIÓN]
                      <br/>2. Busques precedentes relevantes
                      <br/>3. Analices la jurisprudencia reciente
                      <br/>4. Proporciones una estrategia legal recomendada
                      <br/><br/>Incluye citas y referencias específicas."
                    </div>
                  </div>

                  <!-- Redacción Legal -->
                  <div class="border rounded-lg p-4">
                    <h4 class="font-semibold text-primary mb-2">Redacción Legal</h4>
                    <div class="bg-muted/50 p-3 rounded text-sm font-mono">
                      "Redacta un [TIPO DE DOCUMENTO] que cumpla con:
                      <br/>- Jurisdicción: [PAÍS/ESTADO]
                      <br/>- Partes involucradas: [DESCRIPCIÓN]
                      <br/>- Objetivo: [PROPÓSITO ESPECÍFICO]
                      <br/>- Cláusulas especiales requeridas: [LISTA]
                      <br/><br/>Utiliza lenguaje jurídico apropiado y estructura profesional."
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Mejores Prácticas -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <CheckCircle class="w-5 h-5 text-primary" />
                Mejores Prácticas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold text-green-600 mb-3">✅ Hacer</h4>
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <Check class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Ser específico y claro en las instrucciones</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Check class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Definir el rol del AI (abogado especialista)</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Check class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Especificar formato de respuesta deseado</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Check class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Incluir contexto legal relevante</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Check class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Iterar y refinar prompts</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-semibold text-red-600 mb-3">❌ Evitar</h4>
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <X class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Instrucciones vagas o ambiguas</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <X class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Prompts excesivamente largos</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <X class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Asumir conocimiento implícito</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <X class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>No especificar jurisdicción</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <X class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Confiar ciegamente sin verificar</span>
                    </li>
                  </ul>
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
            @click="router.push('/modulo/herramientas-utiles/microsesion-2')"
            variant="outline"
          >
            <ArrowLeft class="w-4 h-4 mr-2" />
            Anterior: RAG
          </Button>
          
          <Button
            @click="router.push('/modulo/herramientas-utiles')"
            class="bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white"
          >
            Volver al Módulo
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
  MessageSquare,
  Lightbulb,
  Scale,
  CheckCircle,
  X,
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
  isCompleted.value = completedMicrosessions['herramientas-utiles-3'] || false;
});

const toggleCompletion = () => {
  isCompleted.value = !isCompleted.value;
  
  const completedMicrosessions = JSON.parse(localStorage.getItem('completedMicrosessions') || '{}');
  completedMicrosessions['herramientas-utiles-3'] = isCompleted.value;
  localStorage.setItem('completedMicrosessions', JSON.stringify(completedMicrosessions));
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
