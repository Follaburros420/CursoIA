<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  AlertTriangle, 
  DollarSign,
  FileText,
  Target,
  TrendingDown,
  Zap
} from "lucide-vue-next";

const painPoints = [
  {
    icon: Clock,
    title: "Horas perdidas revisando y clasificando documentos manualmente",
    description: "Los abogados dedican hasta 40% de su tiempo a tareas repetitivas que no aportan valor estratégico al cliente ni al despacho.",
    impact: "10-15 horas/semana perdidas",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    borderColor: "border-red-200 dark:border-red-800",
    textColor: "text-red-600 dark:text-red-400"
  },
  {
    icon: AlertTriangle,
    title: "Errores humanos en procesos críticos que ponen en riesgo casos y reputación",
    description: "La fatiga y la presión temporal generan errores costosos en documentos legales, fechas límite y seguimiento de casos.",
    impact: "25% de errores evitables",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    textColor: "text-orange-600 dark:text-orange-400"
  },
  {
    icon: DollarSign,
    title: "Costes ocultos de procesos ineficientes que pesan sobre la rentabilidad",
    description: "Los procesos manuales incrementan los costes operativos y reducen la capacidad de escalar el negocio de manera rentable.",
    impact: "30% menos rentabilidad",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    textColor: "text-yellow-600 dark:text-yellow-400"
  }
];

const consequences = [
  {
    icon: TrendingDown,
    title: "Pérdida de competitividad",
    description: "Mientras otros despachos automatizan, los procesos manuales te dejan atrás"
  },
  {
    icon: Target,
    title: "Menor satisfacción del cliente",
    description: "Tiempos de respuesta lentos y errores afectan la experiencia del cliente"
  },
  {
    icon: Zap,
    title: "Burnout del equipo",
    description: "Las tareas repetitivas desmotivan y agotan a los profesionales más talentosos"
  }
];
</script>

<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-muted/20 via-background to-muted/10">
    <div class="container">
      <div class="max-w-6xl mx-auto">
        
        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <Badge class="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 px-4 py-2 text-sm font-medium">
            <AlertTriangle class="w-4 h-4 mr-2" />
            El dolor hoy
          </Badge>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-foreground">Los abogados dedican</span>
            <span class="text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text block">
              demasiado tiempo
            </span>
            <span class="text-foreground">a tareas repetitivas que no aportan</span>
            <span class="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
              valor estratégico
            </span>
          </h2>
          
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            La falta de automatización está limitando el potencial de tu despacho y afectando tu rentabilidad
          </p>
        </div>

        <!-- Pain points grid -->
        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          <div 
            v-for="(pain, index) in painPoints" 
            :key="index"
            class="group relative"
          >
            <!-- Pain point card -->
            <div :class="[
              'relative h-full p-8 rounded-3xl border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl',
              pain.bgColor,
              pain.borderColor
            ]">
              
              <!-- Icon -->
              <div class="relative mb-6">
                <div :class="[
                  'w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br',
                  pain.color
                ]">
                  <component :is="pain.icon" class="w-10 h-10 text-white" />
                </div>
                
                <!-- Impact badge -->
                <div :class="[
                  'absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold',
                  pain.bgColor,
                  pain.textColor,
                  'border',
                  pain.borderColor
                ]">
                  {{ pain.impact }}
                </div>
              </div>

              <!-- Content -->
              <div class="space-y-4">
                <h3 class="text-xl font-bold text-foreground leading-tight">
                  {{ pain.title }}
                </h3>
                
                <p class="text-muted-foreground leading-relaxed">
                  {{ pain.description }}
                </p>
              </div>

              <!-- Decorative elements -->
              <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm"></div>
              <div class="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>

        <!-- Consequences section -->
        <div class="relative">
          <!-- Background decoration -->
          <div class="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-3xl"></div>
          
          <div class="relative p-8 md:p-12">
            <div class="text-center mb-12">
              <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Las consecuencias son evidentes
              </h3>
              <p class="text-muted-foreground max-w-2xl mx-auto">
                Cada día que pasa sin automatizar, tu despacho pierde oportunidades y competitividad
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
              <div 
                v-for="consequence in consequences" 
                :key="consequence.title"
                class="text-center group"
              >
                <div class="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <component :is="consequence.icon" class="w-8 h-8 text-red-500" />
                </div>
                <h4 class="text-lg font-bold text-foreground mb-2">{{ consequence.title }}</h4>
                <p class="text-muted-foreground text-sm">{{ consequence.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to action -->
        <div class="mt-16 text-center">
          <div class="inline-block p-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-3xl border-2 border-red-200 dark:border-red-800">
            <div class="space-y-4">
              <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                <Zap class="w-8 h-8 text-white" />
              </div>
              
              <h3 class="text-xl font-bold text-foreground">
                Es hora de cambiar el paradigma
              </h3>
              
              <p class="text-muted-foreground max-w-md mx-auto">
                Los despachos más exitosos ya están automatizando. No te quedes atrás.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .animate-pulse-slow {
    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
