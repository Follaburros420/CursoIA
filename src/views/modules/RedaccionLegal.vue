<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowLeft, Clock, Target, BookOpen, CheckCircle, Play } from "lucide-vue-next";

const router = useRouter();

onMounted(() => {
  const authStatus = localStorage.getItem('isAuthenticated');
  if (authStatus !== 'true') {
    router.push('/login');
  }
});

const microSessions = [
  {
    title: "Mejores modelos para redacción legal",
    objective: "Identificar qué modelos destacan en coherencia, precisión y seguimiento de instrucciones.",
    content: "Comparación de modelos, evaluación de capacidades específicas para textos legales.",
    exercise: "Probar 2 prompts con distinto modelo y evaluar resultados.",
    completed: false
  },
  {
    title: "Estructuras de documentos",
    objective: "Dominar plantillas para diferentes tipos de documentos legales.",
    content: "Plantillas: memo, opinión, contrato, cláusula, carta.",
    exercise: "Elegir una plantilla y pedir a la IA que la rellene parcialmente con inputs dados.",
    completed: false
  },
  {
    title: "Prompts y plantillas",
    objective: "Construir prompts efectivos para generación legal.",
    content: "Arquitectura de prompts (instrucción + contexto + ejemplo + restricción).",
    exercise: "Construir un prompt para generar una cláusula específica con tono formal y cláusulas de escape.",
    completed: false
  },
  {
    title: "Adaptar tono y estilo",
    objective: "Preservar la voz del despacho/abogado en diferentes contextos.",
    content: "Preservar la voz del despacho/abogado, ajustes formales vs. coloquiales.",
    exercise: "Generar una misma opinión en tono 'corporativo', 'amistoso' y 'urgente'.",
    completed: false
  },
  {
    title: "Detección de riesgos e inconsistencias",
    objective: "Identificar y corregir problemas en textos generados.",
    content: "Uso de prompts para interrogatorios (ej. '¿Qué supuestos implícitos hay aquí?').",
    exercise: "Hacer que la IA audite su propio texto y sugiera correcciones.",
    completed: false
  }
];

const practicalCase = {
  title: "Crear una opinión legal completa",
  description: "Ejercicio integral: recoger inputs, generar borrador, adaptar tono, detectar y corregir riesgos, anonimizar datos sensibles, y traducir resumen para un stakeholder internacional."
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
            <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <FileText class="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 class="text-lg font-bold text-foreground">Módulo 3: Redacción legal inteligente</h1>
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
        
        <!-- Module overview -->
        <Card class="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <div class="flex items-center gap-2 mb-2">
              <Target class="w-5 h-5 text-purple-600" />
              <CardTitle class="text-purple-800 dark:text-purple-400">Objetivo del módulo</CardTitle>
            </div>
            <CardDescription class="text-purple-700 dark:text-purple-300">
              Crear documentos legales de alta calidad con asistencia de IA manteniendo estándares profesionales
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
                    <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
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
          <Button @click="router.push('/modulo/herramientas-utiles')" variant="outline">
            <ArrowLeft class="w-4 h-4 mr-2" />
            Módulo Anterior
          </Button>
          
          <Button
            @click="router.push('/modulo/busqueda-juridica')"
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
