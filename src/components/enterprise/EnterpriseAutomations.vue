<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Search,
  Users,
  Calendar,
  Database,
  MessageSquare,
  BarChart3,
  Clock,
  Zap
} from "lucide-vue-next";

interface Automation {
  icon: any;
  title: string;
  description: string;
  benefits: string[];
  timeReduction: string;
}

const automations: Automation[] = [
  {
    icon: FileText,
    title: "Generación automática de documentos",
    description: "Crea contratos, escritos y documentos legales de forma automática basándose en plantillas inteligentes.",
    benefits: [
      "Contratos personalizados en minutos",
      "Consistencia en documentación",
      "Reducción de errores humanos"
    ],
    timeReduction: "80%"
  },
  {
    icon: Search,
    title: "Investigación jurídica inteligente",
    description: "Búsqueda automatizada de jurisprudencia, normativa y precedentes relevantes para cada caso.",
    benefits: [
      "Búsqueda en múltiples bases de datos",
      "Análisis de relevancia automático",
      "Resúmenes ejecutivos generados"
    ],
    timeReduction: "70%"
  },
  {
    icon: Users,
    title: "Gestión de clientes automatizada",
    description: "Sistema integral para onboarding, seguimiento y comunicación automatizada con clientes.",
    benefits: [
      "Onboarding automático de clientes",
      "Seguimiento de casos en tiempo real",
      "Comunicación programada"
    ],
    timeReduction: "60%"
  },
  {
    icon: Calendar,
    title: "Gestión de plazos y recordatorios",
    description: "Monitoreo automático de fechas límite, audiencias y vencimientos con alertas inteligentes.",
    benefits: [
      "Alertas automáticas de vencimientos",
      "Sincronización con calendarios",
      "Reportes de cumplimiento"
    ],
    timeReduction: "90%"
  },
  {
    icon: Database,
    title: "Análisis de datos legales",
    description: "Procesamiento automático de grandes volúmenes de información legal para insights estratégicos.",
    benefits: [
      "Análisis predictivo de casos",
      "Identificación de patrones",
      "Dashboards ejecutivos"
    ],
    timeReduction: "85%"
  },
  {
    icon: MessageSquare,
    title: "Comunicación automatizada",
    description: "Respuestas automáticas, seguimiento de consultas y gestión de comunicaciones con clientes.",
    benefits: [
      "Respuestas 24/7 a consultas básicas",
      "Clasificación automática de urgencia",
      "Escalamiento inteligente"
    ],
    timeReduction: "75%"
  }
];
</script>

<template>
  <section class="py-16 md:py-24 bg-muted/30">
    <div class="container">
      <div class="max-w-6xl mx-auto">
        
        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <Badge class="bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary px-4 py-2 text-sm font-medium border border-primary/20">
            <Zap class="w-4 h-4 mr-2" />
            Automatizaciones disponibles
          </Badge>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-foreground">Transforma cada proceso</span>
            <span class="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text block">
              de tu despacho
            </span>
          </h2>
          
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Implementamos automatizaciones específicas para las necesidades de tu despacho, 
            optimizando cada flujo de trabajo con inteligencia artificial.
          </p>
        </div>

        <!-- Automations grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            v-for="automation in automations" 
            :key="automation.title"
            class="group relative bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader class="pb-4">
              <!-- Icon and time reduction -->
              <div class="flex items-start justify-between mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <component :is="automation.icon" class="w-6 h-6 text-primary" />
                </div>
                
                <div class="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-full text-xs font-medium">
                  <Clock class="w-3 h-3" />
                  -{{ automation.timeReduction }}
                </div>
              </div>
              
              <CardTitle class="text-lg group-hover:text-primary transition-colors duration-300">
                {{ automation.title }}
              </CardTitle>
              
              <CardDescription class="text-muted-foreground">
                {{ automation.description }}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div class="space-y-3">
                <h4 class="text-sm font-semibold text-foreground">Beneficios clave:</h4>
                <ul class="space-y-2">
                  <li 
                    v-for="benefit in automation.benefits" 
                    :key="benefit"
                    class="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <div class="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    {{ benefit }}
                  </li>
                </ul>
              </div>
            </CardContent>

            <!-- Hover effect -->
            <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Card>
        </div>

        <!-- Bottom CTA -->
        <div class="text-center mt-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <BarChart3 class="w-4 h-4" />
            Resultados comprobados
          </div>
          
          <p class="text-muted-foreground mb-6">
            Nuestros clientes han logrado reducir hasta un <span class="font-semibold text-foreground">85% del tiempo</span> 
            en tareas administrativas, permitiendo enfocar más recursos en trabajo estratégico de alto valor.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
