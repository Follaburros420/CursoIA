<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Play, 
  Database,
  Search,
  Cog,
  Shield,
  Cloud,
  BarChart3,
  FileText,
  Target,
  CheckCircle
} from "lucide-vue-next";

const curriculumSessions = [
  {
    session: 1,
    topic: "Introducción a n8n y diseño de workflows",
    objective: "Crear tu primer workflow: triggers, nodos y ejecuciones básicas.",
    icon: Cog,
    color: "from-blue-500 to-blue-600"
  },
  {
    session: 2,
    topic: "Supabase como backend legal",
    objective: "Modelar datos de clientes y documentos; autenticación y roles.",
    icon: Database,
    color: "from-green-500 to-green-600"
  },
  {
    session: 3,
    topic: "Redis para caché y colas de tareas",
    objective: "Mejorar la velocidad y fiabilidad de tus flujos.",
    icon: BarChart3,
    color: "from-red-500 to-red-600"
  },
  {
    session: 4,
    topic: "Búsqueda semántica con Qdrant",
    objective: "Implementar embeddings para consultas inteligentes de jurisprudencia.",
    icon: Search,
    color: "from-purple-500 to-purple-600"
  },
  {
    session: 5,
    topic: "Orquestación avanzada: APIs, webhooks y cron",
    objective: "Conectar servicios externos y automatizar procesos periódicos.",
    icon: Cog,
    color: "from-orange-500 to-orange-600"
  },
  {
    session: 6,
    topic: "Seguridad y buenas prácticas en producción",
    objective: "Autenticación, autorización y manejo de secretos.",
    icon: Shield,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    session: 7,
    topic: "Despliegue en la nube (Docker y kubernetes básico)",
    objective: "Asegurar alta disponibilidad y escalabilidad.",
    icon: Cloud,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    session: 8,
    topic: "Monitorización y logging con herramientas OSS",
    objective: "Detectar errores y medir el rendimiento.",
    icon: BarChart3,
    color: "from-pink-500 to-pink-600"
  },
  {
    session: 9,
    topic: "Integración con OCR y generación de reportes",
    objective: "Extraer texto de documentos y crear dashboards automáticos.",
    icon: FileText,
    color: "from-teal-500 to-teal-600"
  },
  {
    session: 10,
    topic: "Taller práctico: proyecto final paso a paso (Parte 1)",
    objective: "Diseño y planificación del proyecto automatizado.",
    icon: Target,
    color: "from-violet-500 to-violet-600"
  },
  {
    session: 11,
    topic: "Taller práctico: proyecto final paso a paso (Parte 2)",
    objective: "Implementación y desarrollo del proyecto automatizado.",
    icon: Target,
    color: "from-violet-500 to-violet-600"
  },
  {
    session: 12,
    topic: "Taller práctico: proyecto final paso a paso (Parte 3)",
    objective: "Revisión, optimización y presentación del proyecto final.",
    icon: Target,
    color: "from-violet-500 to-violet-600"
  }
];

const microleccionesTopics = [
  "Configuración avanzada de n8n",
  "Patrones de diseño para workflows legales",
  "Optimización de consultas en Supabase",
  "Estrategias de caché con Redis",
  "Embeddings y vectores en Qdrant",
  "Integración con APIs de terceros",
  "Manejo de errores y recuperación",
  "Backup y restauración de datos",
  "Monitoreo de performance",
  "Casos de uso específicos por área legal",
  "Plantillas de código reutilizable",
  "Troubleshooting común",
  "Escalabilidad y optimización",
  "Seguridad avanzada",
  "Integración con sistemas legacy",
  "Automatización de reportes",
  "Workflows para compliance",
  "Gestión de documentos automatizada"
];

const additionalFeatures = [
  {
    title: "Biblioteca de 3,500+ workflows",
    description: "Acceso completo a automatizaciones verificadas y listas para usar",
    icon: BookOpen
  },
  {
    title: "18 microlecciones grabadas",
    description: "Contenido complementario de 15-20 minutos cada una",
    icon: Play
  },
  {
    title: "2 mentorías privadas/mes",
    description: "Sesiones 1:1 personalizadas para resolver tus casos específicos",
    icon: Target
  }
];
</script>

<template>
  <section class="py-16 md:py-24 bg-background">
    <div class="container">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <Badge class="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 dark:from-purple-900/20 dark:to-blue-900/20 dark:text-purple-400 px-4 py-2 text-sm font-medium border border-purple-200 dark:border-purple-800">
            <BookOpen class="w-4 h-4 mr-2" />
            Plan de estudios
          </Badge>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-foreground">12 semanas para dominar</span>
            <span class="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text block">
              automatización legal
            </span>
            <span class="text-foreground">con tecnologías open-source</span>
          </h2>
          
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un programa estructurado que combina teoría, práctica y mentoría personalizada para transformar tu despacho
          </p>
        </div>

        <!-- Sessions table -->
        <div class="mb-16">
          <div class="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden">
            <!-- Table header -->
            <div class="bg-gradient-to-r from-primary/10 to-purple-500/10 p-6 border-b border-border/50">
              <div class="grid grid-cols-12 gap-4 font-semibold text-foreground">
                <div class="col-span-2 text-center">Sesión</div>
                <div class="col-span-5">Tema</div>
                <div class="col-span-5">Objetivo clave</div>
              </div>
            </div>

            <!-- Table body -->
            <div class="divide-y divide-border/50">
              <div 
                v-for="session in curriculumSessions" 
                :key="session.session"
                class="group hover:bg-muted/30 transition-colors duration-200"
              >
                <div class="grid grid-cols-12 gap-4 p-6 items-center">
                  <!-- Session number -->
                  <div class="col-span-2 text-center">
                    <div class="inline-flex items-center gap-3">
                      <div :class="[
                        'w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold bg-gradient-to-br group-hover:scale-110 transition-transform duration-300',
                        session.color
                      ]">
                        {{ session.session }}
                      </div>
                    </div>
                  </div>

                  <!-- Topic -->
                  <div class="col-span-5">
                    <div class="flex items-center gap-3">
                      <div :class="[
                        'w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br',
                        session.color
                      ]">
                        <component :is="session.icon" class="w-5 h-5 text-white" />
                      </div>
                      <h3 class="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {{ session.topic }}
                      </h3>
                    </div>
                  </div>

                  <!-- Objective -->
                  <div class="col-span-5">
                    <p class="text-muted-foreground">{{ session.objective }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional features -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div 
            v-for="feature in additionalFeatures" 
            :key="feature.title"
            class="group"
          >
            <div class="p-8 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <component :is="feature.icon" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {{ feature.title }}
              </h3>
              <p class="text-muted-foreground">{{ feature.description }}</p>
            </div>
          </div>
        </div>

        <!-- Microlecciones section -->
        <div class="relative">
          <!-- Background decoration -->
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl"></div>
          
          <div class="relative p-8 md:p-12">
            <div class="text-center mb-12">
              <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
                +18 microlecciones grabadas
              </h3>
              <p class="text-muted-foreground max-w-2xl mx-auto">
                Contenido complementario de 15-20 minutos para reforzar conceptos y casos de uso específicos
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div 
                v-for="(topic, index) in microleccionesTopics" 
                :key="index"
                class="flex items-center gap-3 p-4 bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl hover:bg-card/50 transition-colors duration-200"
              >
                <div class="w-8 h-8 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Play class="w-4 h-4 text-primary" />
                </div>
                <span class="text-sm text-foreground">{{ topic }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom summary -->
        <div class="mt-16 text-center">
          <div class="inline-block p-8 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl border border-primary/20">
            <div class="space-y-4">
              <div class="flex justify-center items-center gap-2 text-primary font-semibold">
                <CheckCircle class="w-5 h-5" />
                <span>Programa completo y estructurado</span>
              </div>
              
              <div class="text-3xl font-bold text-foreground">
                <span class="text-transparent bg-gradient-to-r from-primary to-purple-600 bg-clip-text">
                  12 sesiones en vivo
                </span>
                <span class="text-muted-foreground text-lg block">+ 18 microlecciones + mentoría personalizada</span>
              </div>
              
              <p class="text-muted-foreground max-w-md mx-auto">
                Todo lo que necesitas para convertirte en un experto en automatización legal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom scrollbar for table if needed */
.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: hsl(var(--muted));
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: hsl(var(--primary));
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.8);
}

@media (prefers-reduced-motion: no-preference) {
  .animate-float {
    animation: float 8s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}
</style>
