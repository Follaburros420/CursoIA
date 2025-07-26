<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Clock, 
  TrendingUp, 
  Shield,
  Zap,
  Target,
  BarChart3,
  CheckCircle,
  Star
} from "lucide-vue-next";

const keyBenefits = [
  {
    icon: Rocket,
    title: "Automatiza +80% de tus tareas rutinarias",
    description: "Elimina el trabajo manual repetitivo y enfócate en lo que realmente importa: la estrategia legal y la atención al cliente.",
    metric: "+80%",
    metricLabel: "Automatización",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    icon: Clock,
    title: "Ahorra hasta 10 horas/semana y úsalas en estrategia y captación",
    description: "Recupera tiempo valioso que puedes invertir en actividades de alto valor: desarrollo de negocio y casos complejos.",
    metric: "10h",
    metricLabel: "Semanales ahorradas",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800"
  },
  {
    icon: TrendingUp,
    title: "Incrementa tu facturación al ofrecer servicios premium de legaltech",
    description: "Diferénciate en el mercado ofreciendo servicios tecnológicos avanzados que justifican tarifas premium.",
    metric: "+40%",
    metricLabel: "Incremento facturación",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800"
  },
  {
    icon: Shield,
    title: "Reduce riesgos con soluciones seguras y mantenibles",
    description: "Implementa sistemas robustos con tecnologías open-source probadas que minimizan errores y vulnerabilidades.",
    metric: "99.9%",
    metricLabel: "Confiabilidad",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    borderColor: "border-red-200 dark:border-red-800"
  },
  {
    icon: Zap,
    title: "Velocidad de implementación: aprovecha los 3,500+ workflows",
    description: "No empiezas desde cero. Accede a una biblioteca masiva de automatizaciones probadas y adaptables.",
    metric: "3,500+",
    metricLabel: "Workflows listos",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800"
  }
];

const additionalBenefits = [
  {
    icon: Target,
    title: "ROI medible desde el primer mes",
    description: "Implementaciones que generan resultados cuantificables inmediatamente"
  },
  {
    icon: BarChart3,
    title: "Ventaja competitiva sostenible",
    description: "Tecnologías que te posicionan como líder en innovación legal"
  },
  {
    icon: CheckCircle,
    title: "Escalabilidad sin límites",
    description: "Soluciones que crecen con tu despacho sin costes adicionales"
  }
];

const successMetrics = [
  { number: "80%", label: "Reducción en tareas manuales", icon: Rocket },
  { number: "10h", label: "Horas ahorradas por semana", icon: Clock },
  { number: "40%", label: "Incremento en facturación", icon: TrendingUp },
  { number: "3,500+", label: "Workflows disponibles", icon: Zap }
];
</script>

<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
    <div class="container">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <Badge class="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 dark:from-green-900/20 dark:to-blue-900/20 dark:text-green-400 px-4 py-2 text-sm font-medium border border-green-200 dark:border-green-800">
            <Star class="w-4 h-4 mr-2" />
            Beneficios clave
          </Badge>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-foreground">Transforma tu despacho con</span>
            <span class="text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text block">
              resultados medibles
            </span>
            <span class="text-foreground">desde el primer día</span>
          </h2>
          
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            No es solo aprender tecnología, es revolucionar tu práctica legal con impacto inmediato y sostenible
          </p>
        </div>

        <!-- Key benefits grid -->
        <div class="grid lg:grid-cols-2 gap-8 mb-16">
          <div 
            v-for="(benefit, index) in keyBenefits" 
            :key="index"
            class="group relative"
          >
            <!-- Benefit card -->
            <div :class="[
              'relative h-full p-8 rounded-3xl border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl',
              benefit.bgColor,
              benefit.borderColor
            ]">
              
              <!-- Header with icon and metric -->
              <div class="flex items-start justify-between mb-6">
                <div :class="[
                  'w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br',
                  benefit.color
                ]">
                  <component :is="benefit.icon" class="w-8 h-8 text-white" />
                </div>
                
                <!-- Metric badge -->
                <div class="text-right">
                  <div class="text-2xl font-bold text-foreground">{{ benefit.metric }}</div>
                  <div class="text-xs text-muted-foreground">{{ benefit.metricLabel }}</div>
                </div>
              </div>

              <!-- Content -->
              <div class="space-y-4">
                <h3 class="text-xl font-bold text-foreground leading-tight">
                  {{ benefit.title }}
                </h3>
                
                <p class="text-muted-foreground leading-relaxed">
                  {{ benefit.description }}
                </p>
              </div>

              <!-- Decorative elements -->
              <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm"></div>
              <div class="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>

        <!-- Success metrics -->
        <div class="relative mb-16">
          <!-- Background decoration -->
          <div class="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-3xl"></div>
          
          <div class="relative p-8 md:p-12">
            <div class="text-center mb-12">
              <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Resultados que puedes esperar
              </h3>
              <p class="text-muted-foreground max-w-2xl mx-auto">
                Métricas reales basadas en la experiencia de nuestros estudiantes elite
              </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div 
                v-for="metric in successMetrics" 
                :key="metric.label"
                class="text-center group"
              >
                <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <component :is="metric.icon" class="w-8 h-8 text-primary" />
                </div>
                <div class="text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text mb-2">
                  {{ metric.number }}
                </div>
                <div class="text-sm text-muted-foreground">{{ metric.label }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional benefits -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div 
            v-for="benefit in additionalBenefits" 
            :key="benefit.title"
            class="group text-center"
          >
            <div class="p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <component :is="benefit.icon" class="w-8 h-8 text-primary" />
              </div>
              <h4 class="text-lg font-bold text-foreground mb-3">{{ benefit.title }}</h4>
              <p class="text-muted-foreground text-sm">{{ benefit.description }}</p>
            </div>
          </div>
        </div>

        <!-- Bottom CTA section -->
        <div class="text-center">
          <div class="inline-block p-8 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-3xl border border-primary/20">
            <div class="space-y-4">
              <div class="flex justify-center items-center gap-2 text-primary font-semibold">
                <CheckCircle class="w-5 h-5" />
                <span>Garantía de resultados medibles</span>
              </div>
              
              <div class="text-3xl font-bold text-foreground">
                Transforma tu práctica legal en 
                <span class="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">
                  12 semanas
                </span>
              </div>
              
              <p class="text-muted-foreground max-w-md mx-auto">
                Únete a los abogados más innovadores que ya están liderando la revolución legal con IA
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
