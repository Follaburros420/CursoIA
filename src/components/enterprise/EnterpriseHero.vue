<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  Zap, 
  TrendingUp,
  Clock,
  Shield
} from "lucide-vue-next";

const features = [
  { icon: Building2, text: "Despachos jurídicos" },
  { icon: Users, text: "Equipos legales" },
  { icon: Zap, text: "Automatizaciones a medida" }
];

const stats = [
  { number: "85%", label: "Reducción en tareas repetitivas", icon: Clock },
  { number: "3x", label: "Aumento en productividad", icon: TrendingUp },
  { number: "24/7", label: "Soporte especializado", icon: Shield }
];
</script>

<template>
  <section class="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    
    <div class="container relative z-10">
      <div class="max-w-6xl mx-auto">
        
        <!-- Main content -->
        <div class="text-center space-y-8 mb-16">
          <!-- Badge -->
          <Badge class="bg-gradient-to-r from-blue-100 to-primary/10 text-blue-800 dark:from-blue-900/20 dark:to-primary/10 dark:text-blue-400 px-6 py-3 text-sm font-medium border border-blue-200 dark:border-blue-800">
            <Building2 class="w-4 h-4 mr-2" />
            Plan Empresarial
          </Badge>
          
          <!-- Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span class="text-foreground">Automatiza tu</span>
            <span class="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text block">
              despacho jurídico
            </span>
            <span class="text-foreground">con IA</span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Implementamos automatizaciones personalizadas que transforman la eficiencia de tu equipo legal, 
            reduciendo tareas repetitivas y maximizando el valor estratégico.
          </p>

          <!-- Features -->
          <div class="flex flex-wrap justify-center gap-6 mt-8">
            <div 
              v-for="feature in features" 
              :key="feature.text"
              class="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full"
            >
              <component :is="feature.icon" class="w-4 h-4 text-primary" />
              <span class="text-sm font-medium">{{ feature.text }}</span>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              size="lg" 
              class="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              as-child
            >
              <a href="https://wa.me/message/22XPE3IWTKONL1" target="_blank">
                Agendar consulta gratuita
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              class="px-8 py-4 text-lg font-semibold border-primary/20 hover:bg-primary/5 transition-all duration-300"
            >
              Ver automatizaciones
            </Button>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid md:grid-cols-3 gap-8 mt-16">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/50 transition-all duration-300"
          >
            <div class="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <component :is="stat.icon" class="w-6 h-6 text-primary" />
            </div>
            <div class="text-3xl font-bold text-foreground mb-2">{{ stat.number }}</div>
            <div class="text-sm text-muted-foreground">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
