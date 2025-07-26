<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-vue-next";

interface Props {
  title: string;
  subtitle: string;
  features: string[];
}

const props = withDefaults(defineProps<Props>(), {
  title: "CURSO DE IA PARA ABOGADOS – PLAN PROFESIONAL",
  subtitle: "⚖️ Aprende a utilizar la IA en el mundo jurídico y diferénciate en tu ejercicio profesional.",
  features: () => ['5 módulos intensivos', 'Certificado oficial', 'Contenido 100% práctico']
});
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
    
    <div class="container relative z-10">
      <div class="grid place-items-center lg:max-w-screen-xl gap-12 mx-auto py-16 md:py-24">
        
        <!-- Badge -->
        <div class="text-center">
          <Badge variant="outline" class="text-sm py-2 px-4 border-primary/20 bg-primary/5">
            <span class="mr-2 text-primary">
              <Badge class="bg-primary text-primary-foreground">Profesional</Badge>
            </span>
            <span>Plan más popular</span>
          </Badge>
        </div>

        <!-- Main content -->
        <div class="text-center space-y-8 max-w-4xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span class="text-transparent bg-gradient-to-r from-foreground via-primary to-orange-600 bg-clip-text">
              {{ title }}
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {{ subtitle }}
          </p>

          <!-- Features list -->
          <div class="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 hover:bg-card/80 transition-all duration-300"
            >
              <CheckCircle class="w-5 h-5 text-primary" />
              <span class="text-sm md:text-base font-medium">{{ feature }}</span>
            </div>
          </div>
        </div>

        <!-- Hero image -->
        <div class="relative group mt-8 w-full max-w-4xl">
          <!-- Gradient shadow -->
          <div class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[60%] bg-primary/30 blur-3xl rounded-full animate-pulse"></div>
          
          <!-- Main image -->
          <div class="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
            <img
              src="/profesional.png"
              alt="Curso IA para Abogados - Plan Profesional"
              class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
            
            <!-- Floating elements -->
            <div class="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              Plan Profesional
            </div>
            
            <div class="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg p-3">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-sm font-medium">Disponible ahora</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mt-8">
          <Button 
            size="lg" 
            class="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Comprar ahora
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            class="px-8 py-4 text-lg font-semibold border-primary/20 hover:bg-primary/5 transition-all duration-300"
          >
            Ver detalles
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

@media (prefers-reduced-motion: no-preference) {
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float 6s ease-in-out infinite;
    animation-delay: 2s;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
