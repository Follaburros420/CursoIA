<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Wrench, 
  Search, 
  FileText, 
  Cog,
  Clock,
  Users,
  Award
} from "lucide-vue-next";

interface Module {
  id: number;
  icon: any;
  title: string;
  description: string;
  duration: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  topics: string[];
}

const modules: Module[] = [
  {
    id: 1,
    icon: Brain,
    title: "Fundamentos de IA",
    description: "Comprende los conceptos básicos de inteligencia artificial aplicados al derecho y sus implicaciones éticas.",
    duration: "4 horas",
    level: "Básico",
    topics: ["Conceptos básicos de IA", "IA en el sector legal", "Ética y responsabilidad", "Marco regulatorio"]
  },
  {
    id: 2,
    icon: Wrench,
    title: "Herramientas más útiles",
    description: "Domina las principales herramientas de IA que todo abogado moderno debe conocer y utilizar.",
    duration: "6 horas",
    level: "Intermedio",
    topics: ["ChatGPT para abogados", "Claude y Gemini", "Herramientas especializadas", "Integración de workflows"]
  },
  {
    id: 3,
    icon: Search,
    title: "Búsqueda de información jurídica",
    description: "Optimiza tus investigaciones legales usando IA para encontrar jurisprudencia y doctrina relevante.",
    duration: "5 horas",
    level: "Intermedio",
    topics: ["Búsqueda inteligente", "Análisis de jurisprudencia", "Bases de datos legales", "Verificación de fuentes"]
  },
  {
    id: 4,
    icon: FileText,
    title: "Redacción legal inteligente",
    description: "Aprende a crear documentos legales de alta calidad con asistencia de inteligencia artificial.",
    duration: "7 horas",
    level: "Avanzado",
    topics: ["Contratos inteligentes", "Escritos judiciales", "Revisión automática", "Plantillas dinámicas"]
  },
  {
    id: 5,
    icon: Cog,
    title: "Introducción a automatizaciones de IA",
    description: "Implementa automatizaciones que revolucionen tu práctica legal y mejoren tu eficiencia.",
    duration: "8 horas",
    level: "Avanzado",
    topics: ["Workflows automatizados", "APIs legales", "Integración de sistemas", "Casos de uso prácticos"]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Básico':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    case 'Intermedio':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    case 'Avanzado':
      return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  }
};
</script>

<template>
  <section class="py-16 md:py-24 bg-background">
    <div class="container">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            <Award class="w-4 h-4" />
            Programa de estudios
          </div>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text">
              5 Módulos Intensivos
            </span>
          </h2>
          
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un programa completo diseñado para llevarte desde los fundamentos hasta la implementación avanzada de IA en tu práctica legal
          </p>
        </div>

        <!-- Modules grid -->
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div 
            v-for="(module, index) in modules" 
            :key="module.id"
            :class="[
              'group relative',
              index === 4 ? 'lg:col-span-2 xl:col-span-1' : ''
            ]"
          >
            <!-- Module card -->
            <div class="relative h-full p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              
              <!-- Module number -->
              <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {{ module.id }}
              </div>

              <!-- Header -->
              <div class="flex items-start justify-between mb-6">
                <div class="flex items-center gap-4">
                  <!-- Icon -->
                  <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <component 
                      :is="module.icon" 
                      class="w-8 h-8 text-primary group-hover:text-orange-600 transition-colors duration-300" 
                    />
                  </div>
                </div>
                
                <!-- Level badge -->
                <Badge :class="getLevelColor(module.level)" class="text-xs font-medium">
                  {{ module.level }}
                </Badge>
              </div>

              <!-- Content -->
              <div class="space-y-4 mb-6">
                <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {{ module.title }}
                </h3>
                
                <p class="text-muted-foreground leading-relaxed">
                  {{ module.description }}
                </p>

                <!-- Duration -->
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock class="w-4 h-4" />
                  <span>{{ module.duration }} de contenido</span>
                </div>
              </div>

              <!-- Topics -->
              <div class="space-y-3">
                <h4 class="text-sm font-semibold text-foreground">Temas incluidos:</h4>
                <ul class="space-y-2">
                  <li 
                    v-for="topic in module.topics" 
                    :key="topic"
                    class="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {{ topic }}
                  </li>
                </ul>
              </div>

              <!-- Hover border effect -->
              <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300"></div>
              
              <!-- Glow effect -->
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        <!-- Summary stats -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center space-y-2">
            <div class="text-3xl font-bold text-primary">30+</div>
            <div class="text-sm text-muted-foreground">Horas de contenido</div>
          </div>
          
          <div class="text-center space-y-2">
            <div class="text-3xl font-bold text-primary">50+</div>
            <div class="text-sm text-muted-foreground">Casos prácticos</div>
          </div>
          
          <div class="text-center space-y-2">
            <div class="text-3xl font-bold text-primary">100%</div>
            <div class="text-sm text-muted-foreground">Contenido práctico</div>
          </div>
          
          <div class="text-center space-y-2">
            <div class="text-3xl font-bold text-primary">24/7</div>
            <div class="text-sm text-muted-foreground">Acceso al contenido</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
