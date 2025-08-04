<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Search, 
  Settings, 
  Rocket,
  CheckCircle,
  Clock,
  Users,
  Target
} from "lucide-vue-next";

interface ProcessStep {
  number: string;
  icon: any;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulta inicial gratuita",
    description: "Analizamos tu despacho, identificamos oportunidades de automatización y definimos objetivos específicos.",
    duration: "1 semana",
    deliverables: [
      "Diagnóstico completo del despacho",
      "Identificación de procesos automatizables",
      "Propuesta personalizada",
      "Roadmap de implementación"
    ]
  },
  {
    number: "02",
    icon: Search,
    title: "Análisis y diseño",
    description: "Diseñamos las automatizaciones específicas para tu despacho, considerando tus sistemas actuales y necesidades.",
    duration: "2-3 semanas",
    deliverables: [
      "Arquitectura técnica detallada",
      "Flujos de trabajo optimizados",
      "Integraciones con sistemas existentes",
      "Plan de migración de datos"
    ]
  },
  {
    number: "03",
    icon: Settings,
    title: "Desarrollo e implementación",
    description: "Desarrollamos y configuramos todas las automatizaciones, realizando pruebas exhaustivas antes del lanzamiento.",
    duration: "4-6 semanas",
    deliverables: [
      "Automatizaciones desarrolladas",
      "Integraciones completadas",
      "Pruebas de calidad realizadas",
      "Documentación técnica"
    ]
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento y capacitación",
    description: "Ponemos en marcha las automatizaciones y capacitamos a tu equipo para maximizar su aprovechamiento.",
    duration: "1-2 semanas",
    deliverables: [
      "Sistema en producción",
      "Equipo capacitado",
      "Manuales de usuario",
      "Soporte inicial intensivo"
    ]
  }
];

const supportFeatures = [
  {
    icon: CheckCircle,
    title: "Garantía de resultados",
    description: "Si no ves mejoras medibles en 30 días, trabajamos gratis hasta lograrlo"
  },
  {
    icon: Clock,
    title: "Soporte 24/7",
    description: "Equipo técnico disponible para resolver cualquier incidencia"
  },
  {
    icon: Users,
    title: "Capacitación continua",
    description: "Actualizaciones y entrenamientos regulares para tu equipo"
  },
  {
    icon: Target,
    title: "Optimización continua",
    description: "Monitoreo y mejoras constantes basadas en métricas de rendimiento"
  }
];
</script>

<template>
  <section class="py-16 md:py-24 bg-muted/30">
    <div class="container">
      <div class="max-w-6xl mx-auto">
        
        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <Badge class="bg-gradient-to-r from-blue-100 to-primary/10 text-blue-800 dark:from-blue-900/20 dark:to-primary/10 dark:text-blue-400 px-4 py-2 text-sm font-medium border border-blue-200 dark:border-blue-800">
            <Target class="w-4 h-4 mr-2" />
            Proceso de implementación
          </Badge>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-foreground">De la consulta</span>
            <span class="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text block">
              a la transformación
            </span>
          </h2>
          
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso estructurado y probado que garantiza una implementación exitosa 
            de automatizaciones en tu despacho, con resultados medibles desde el primer mes.
          </p>
        </div>

        <!-- Process steps -->
        <div class="space-y-8 mb-16">
          <div 
            v-for="(step, index) in processSteps" 
            :key="step.number"
            class="group relative"
          >
            <div class="flex flex-col lg:flex-row gap-8 items-start">
              
              <!-- Step number and icon -->
              <div class="flex-shrink-0 flex items-center gap-4">
                <div class="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {{ step.number }}
                </div>
                
                <div class="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <component :is="step.icon" class="w-6 h-6 text-primary" />
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 group-hover:bg-card/80 transition-all duration-300 hover:shadow-lg">
                <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 class="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {{ step.title }}
                    </h3>
                    <p class="text-muted-foreground leading-relaxed">
                      {{ step.description }}
                    </p>
                  </div>
                  
                  <div class="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium whitespace-nowrap">
                    <Clock class="w-4 h-4" />
                    {{ step.duration }}
                  </div>
                </div>

                <!-- Deliverables -->
                <div>
                  <h4 class="text-sm font-semibold text-foreground mb-3">Entregables:</h4>
                  <div class="grid md:grid-cols-2 gap-2">
                    <div 
                      v-for="deliverable in step.deliverables" 
                      :key="deliverable"
                      class="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle class="w-4 h-4 text-green-600 flex-shrink-0" />
                      {{ deliverable }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Connector line (except for last item) -->
            <div 
              v-if="index < processSteps.length - 1"
              class="hidden lg:block absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent"
            ></div>
          </div>
        </div>

        <!-- Support features -->
        <div class="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-foreground mb-2">
              Soporte y garantías incluidas
            </h3>
            <p class="text-muted-foreground">
              Tu éxito es nuestro compromiso. Por eso incluimos estas garantías en cada implementación.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="feature in supportFeatures" 
              :key="feature.title"
              class="text-center p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors duration-300"
            >
              <div class="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <component :is="feature.icon" class="w-6 h-6 text-green-600" />
              </div>
              
              <h4 class="font-semibold text-foreground mb-2">{{ feature.title }}</h4>
              <p class="text-sm text-muted-foreground">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
