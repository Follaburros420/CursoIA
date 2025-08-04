<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users,
  Shield,
  Target,
  Lightbulb,
  BarChart3
} from "lucide-vue-next";

interface Benefit {
  icon: any;
  title: string;
  description: string;
  metric: string;
  color: string;
}

const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    title: "Aumento de productividad",
    description: "Incrementa la eficiencia de tu equipo eliminando tareas repetitivas y optimizando flujos de trabajo.",
    metric: "3x más productivo",
    color: "from-green-500 to-green-600"
  },
  {
    icon: DollarSign,
    title: "Reducción de costos operativos",
    description: "Disminuye significativamente los gastos en procesos manuales y errores administrativos.",
    metric: "40% menos costos",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Clock,
    title: "Ahorro de tiempo",
    description: "Libera hasta 85% del tiempo dedicado a tareas administrativas para enfocarte en casos complejos.",
    metric: "85% tiempo ahorrado",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Users,
    title: "Mejor experiencia del cliente",
    description: "Ofrece respuestas más rápidas y servicios más consistentes a tus clientes.",
    metric: "95% satisfacción",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Mayor precisión y compliance",
    description: "Reduce errores humanos y asegura el cumplimiento de normativas y plazos legales.",
    metric: "99% precisión",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Target,
    title: "Ventaja competitiva",
    description: "Posiciona tu despacho como líder en innovación tecnológica en el sector legal.",
    metric: "Liderazgo tecnológico",
    color: "from-indigo-500 to-indigo-600"
  }
];

const comparisonData = [
  {
    process: "Redacción de contratos",
    traditional: "4-6 horas",
    automated: "30 minutos",
    improvement: "90% más rápido"
  },
  {
    process: "Investigación jurídica",
    traditional: "8-12 horas",
    automated: "2 horas",
    improvement: "80% más rápido"
  },
  {
    process: "Gestión de plazos",
    traditional: "Manual/Propenso a errores",
    automated: "Automático/Sin errores",
    improvement: "100% confiable"
  },
  {
    process: "Comunicación con clientes",
    traditional: "Solo horario laboral",
    automated: "24/7 disponible",
    improvement: "Siempre disponible"
  }
];
</script>

<template>
  <section class="py-16 md:py-24 bg-background">
    <div class="container">
      <div class="max-w-6xl mx-auto">
        
        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <Badge class="bg-gradient-to-r from-green-100 to-primary/10 text-green-800 dark:from-green-900/20 dark:to-primary/10 dark:text-green-400 px-4 py-2 text-sm font-medium border border-green-200 dark:border-green-800">
            <Lightbulb class="w-4 h-4 mr-2" />
            Beneficios empresariales
          </Badge>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-foreground">Resultados que</span>
            <span class="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text block">
              transforman tu negocio
            </span>
          </h2>
          
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Implementar automatizaciones en tu despacho no es solo una mejora tecnológica, 
            es una transformación completa que impacta directamente en tu rentabilidad y competitividad.
          </p>
        </div>

        <!-- Benefits grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div 
            v-for="benefit in benefits" 
            :key="benefit.title"
            class="group relative p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <!-- Icon -->
            <div :class="`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`">
              <component :is="benefit.icon" class="w-6 h-6 text-white" />
            </div>
            
            <!-- Content -->
            <h3 class="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              {{ benefit.title }}
            </h3>
            
            <p class="text-muted-foreground mb-4 leading-relaxed">
              {{ benefit.description }}
            </p>
            
            <!-- Metric -->
            <div class="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              {{ benefit.metric }}
            </div>

            <!-- Hover effect -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <!-- Comparison table -->
        <div class="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
          <div class="text-center mb-8">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              <BarChart3 class="w-4 h-4" />
              Comparación de eficiencia
            </div>
            <h3 class="text-2xl font-bold text-foreground mb-2">
              Antes vs. Después de la automatización
            </h3>
            <p class="text-muted-foreground">
              Resultados reales medidos en despachos que han implementado nuestras soluciones
            </p>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-border/50">
                  <th class="text-left py-4 px-4 font-semibold text-foreground">Proceso</th>
                  <th class="text-left py-4 px-4 font-semibold text-muted-foreground">Método tradicional</th>
                  <th class="text-left py-4 px-4 font-semibold text-primary">Con automatización</th>
                  <th class="text-left py-4 px-4 font-semibold text-green-600">Mejora</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(item, index) in comparisonData" 
                  :key="item.process"
                  :class="index % 2 === 0 ? 'bg-muted/20' : ''"
                  class="hover:bg-muted/30 transition-colors duration-200"
                >
                  <td class="py-4 px-4 font-medium text-foreground">{{ item.process }}</td>
                  <td class="py-4 px-4 text-muted-foreground">{{ item.traditional }}</td>
                  <td class="py-4 px-4 text-primary font-medium">{{ item.automated }}</td>
                  <td class="py-4 px-4 text-green-600 font-semibold">{{ item.improvement }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
