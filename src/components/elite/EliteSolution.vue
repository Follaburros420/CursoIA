<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import WompiPaymentButton from "@/components/WompiPaymentButton.vue";
import {
  CheckCircle,
  Video,
  Play,
  Users,
  BookOpen,
  Target,
  Lightbulb,
  Crown,
  Clock
} from "lucide-vue-next";

const solutionFeatures = [
  {
    icon: Video,
    title: "12 sesiones en vivo",
    subtitle: "(1 por semana)",
    description: "Teoría aplicada y resolución de casos reales con expertos en automatización legal.",
    highlight: "Interacción directa",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Play,
    title: "18 microlecciones grabadas",
    subtitle: "(15–20 min)",
    description: "Refuerza conceptos a tu ritmo con contenido específico y casos de uso prácticos.",
    highlight: "Flexibilidad total",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Users,
    title: "2 mentorías privadas al mes",
    subtitle: "Orientación personalizada",
    description: "Sesiones 1:1 para revisar tus workflows específicos y resolver dudas técnicas.",
    highlight: "Atención VIP",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: BookOpen,
    title: "Biblioteca de 3,500+ workflows",
    subtitle: "Verificados y listos",
    description: "Acceso inmediato a automatizaciones probadas, listas para adaptar a tu despacho.",
    highlight: "Implementación rápida",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Target,
    title: "Proyecto final tutorizado",
    subtitle: "Caso real de tu bufete",
    description: "Automatiza un proceso real de tu despacho y demuestra el impacto medible.",
    highlight: "ROI demostrable",
    color: "from-red-500 to-red-600"
  }
];

const programStructure = [
  {
    phase: "Fase 1",
    title: "Fundamentos y Setup",
    weeks: "Semanas 1-4",
    description: "Instalación, configuración y primeros workflows básicos"
  },
  {
    phase: "Fase 2", 
    title: "Automatizaciones Avanzadas",
    weeks: "Semanas 5-8",
    description: "Integración de APIs, bases de datos y sistemas complejos"
  },
  {
    phase: "Fase 3",
    title: "Proyecto Final",
    weeks: "Semanas 9-12", 
    description: "Implementación completa de automatización en tu despacho"
  }
];

const emit = defineEmits<{
  getStarted: []
}>();

// Removed unused function - now using WompiPaymentButton directly
</script>

<template>
  <section class="py-16 md:py-24 bg-background">
    <div class="container">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <Badge class="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 dark:from-blue-900/20 dark:to-purple-900/20 dark:text-blue-400 px-4 py-2 text-sm font-medium border border-blue-200 dark:border-blue-800">
            <Lightbulb class="w-4 h-4 mr-2" />
            La solución
          </Badge>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-foreground">Este Curso Élite te guía</span>
            <span class="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text block">
              paso a paso
            </span>
            <span class="text-foreground">para diseñar, desplegar y mantener</span>
            <span class="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              automatizaciones open‑source
            </span>
            <span class="text-foreground">que transformen tu práctica legal</span>
          </h2>
        </div>

        <!-- Solution features grid -->
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          <div 
            v-for="(feature, index) in solutionFeatures" 
            :key="index"
            :class="[
              'group relative',
              index === 4 ? 'lg:col-span-2 xl:col-span-1' : ''
            ]"
          >
            <!-- Feature card -->
            <div class="relative h-full p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              
              <!-- Icon and highlight -->
              <div class="flex items-start justify-between mb-6">
                <div :class="[
                  'w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br',
                  feature.color
                ]">
                  <component :is="feature.icon" class="w-8 h-8 text-white" />
                </div>
                
                <Badge class="bg-primary/10 text-primary border-primary/20 text-xs">
                  {{ feature.highlight }}
                </Badge>
              </div>

              <!-- Content -->
              <div class="space-y-4">
                <div>
                  <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {{ feature.title }}
                  </h3>
                  <p class="text-sm text-primary font-medium">{{ feature.subtitle }}</p>
                </div>
                
                <p class="text-muted-foreground leading-relaxed">
                  {{ feature.description }}
                </p>
              </div>

              <!-- Hover glow effect -->
              <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        <!-- Program structure -->
        <div class="relative mb-16">
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Estructura del programa
            </h3>
            <p class="text-muted-foreground max-w-2xl mx-auto">
              Un recorrido estructurado de 12 semanas que te lleva desde los fundamentos hasta la implementación completa
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div 
              v-for="(phase, index) in programStructure" 
              :key="index"
              class="relative group"
            >
              <!-- Connection line (except for last item) -->
              <div 
                v-if="index < programStructure.length - 1"
                class="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-purple-500 z-10"
              ></div>
              
              <div class="relative p-8 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/80 transition-all duration-300 hover:scale-105">
                <!-- Phase number -->
                <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {{ index + 1 }}
                </div>

                <div class="space-y-4">
                  <div>
                    <Badge class="bg-primary/10 text-primary border-primary/20 mb-2">
                      {{ phase.phase }}
                    </Badge>
                    <h4 class="text-lg font-bold text-foreground">{{ phase.title }}</h4>
                    <p class="text-sm text-primary font-medium">{{ phase.weeks }}</p>
                  </div>
                  
                  <p class="text-muted-foreground text-sm">{{ phase.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key differentiators -->
        <div class="relative">
          <!-- Background decoration -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
          
          <div class="relative p-8 md:p-12">
            <div class="text-center mb-12">
              <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Lo que hace único a este programa
              </h3>
              <p class="text-muted-foreground max-w-2xl mx-auto">
                No es solo teoría. Es implementación real con herramientas open-source de nivel empresarial
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 items-center">
              <!-- Left side - Benefits -->
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle class="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 class="font-bold text-foreground mb-1">Tecnologías open-source</h4>
                    <p class="text-muted-foreground text-sm">Sin licencias costosas, máximo control y flexibilidad</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle class="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 class="font-bold text-foreground mb-1">Implementación inmediata</h4>
                    <p class="text-muted-foreground text-sm">3,500+ workflows listos para usar desde el día 1</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle class="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 class="font-bold text-foreground mb-1">Mentoría personalizada</h4>
                    <p class="text-muted-foreground text-sm">Orientación directa para tus casos específicos</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle class="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 class="font-bold text-foreground mb-1">Proyecto real</h4>
                    <p class="text-muted-foreground text-sm">Automatiza un proceso de tu despacho durante el curso</p>
                  </div>
                </div>
              </div>

              <!-- Right side - CTA -->
              <div class="text-center">
                <div class="inline-block p-8 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl border border-primary/20">
                  <div class="space-y-6">
                    <div class="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-3xl flex items-center justify-center mx-auto">
                      <Crown class="w-10 h-10 text-white" />
                    </div>
                    
                    <div>
                      <h3 class="text-xl font-bold text-foreground mb-2">
                        ¿Listo para liderar la transformación?
                      </h3>
                      <p class="text-muted-foreground mb-6">
                        Únete a los abogados más innovadores y domina las tecnologías del futuro legal
                      </p>
                    </div>
                    
                    <WompiPaymentButton
                      :amount="120000000"
                      currency="USD"
                      button-text="Reservar mi plaza"
                    />
                    
                    <div class="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Clock class="w-4 h-4" />
                      <span>Solo quedan 8 plazas disponibles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
