<script setup lang="ts">
import { Zap, Target, TrendingUp } from "lucide-vue-next";

interface Props {
  title?: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Transforma tu práctica legal con herramientas de inteligencia artificial.",
  description: "Aprende a automatizar procesos y ofrecer un servicio de alto impacto."
});

const benefits = [
  {
    icon: Zap,
    title: "Automatización inteligente",
    description: "Reduce el tiempo en tareas repetitivas hasta en un 70%"
  },
  {
    icon: Target,
    title: "Precisión mejorada",
    description: "Minimiza errores y mejora la calidad de tus documentos legales"
  },
  {
    icon: TrendingUp,
    title: "Ventaja competitiva",
    description: "Diferénciate en el mercado con tecnología de vanguardia"
  }
];
</script>

<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

    <div class="container relative z-10">
      <div class="max-w-7xl mx-auto">

        <!-- Main content with image -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">

          <!-- Text content -->
          <div class="space-y-8">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span class="text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text">
                {{ props.title }}
              </span>
            </h2>

            <p class="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {{ props.description }}
            </p>

            <!-- Quick stats -->
            <div class="grid grid-cols-2 gap-6 pt-4">
              <div class="text-center lg:text-left">
                <div class="text-2xl font-bold text-primary">12+</div>
                <div class="text-sm text-muted-foreground">Horas de contenido</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-2xl font-bold text-primary">5</div>
                <div class="text-sm text-muted-foreground">Módulos intensivos</div>
              </div>
            </div>
          </div>

          <!-- Decorative image -->
          <div class="relative group order-first lg:order-last">
            <!-- Subtle background glow -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-3xl blur-2xl opacity-50"></div>

            <!-- Image container -->
            <div class="relative overflow-hidden rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm shadow-lg">
              <img
                src="/profesional.png"
                alt="Curso IA para Abogados - Plan Profesional"
                class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />

              <!-- Subtle overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent"></div>

              <!-- Small floating badge -->
              <div class="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Plan Profesional
              </div>
            </div>
          </div>
        </div>

        <!-- Benefits grid -->
        <div class="grid md:grid-cols-3 gap-8 mt-16">
          <div 
            v-for="(benefit, index) in benefits" 
            :key="index"
            class="group relative"
          >
            <!-- Card -->
            <div class="relative h-full p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/80 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
              
              <!-- Icon -->
              <div class="relative mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <component 
                    :is="benefit.icon" 
                    class="w-8 h-8 text-primary group-hover:text-orange-600 transition-colors duration-300" 
                  />
                </div>
                
                <!-- Glow effect -->
                <div class="absolute inset-0 w-16 h-16 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Content -->
              <div class="space-y-4">
                <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {{ benefit.title }}
                </h3>
                
                <p class="text-muted-foreground leading-relaxed">
                  {{ benefit.description }}
                </p>
              </div>

              <!-- Hover border effect -->
              <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300"></div>
            </div>
          </div>
        </div>

        <!-- Stats section -->
        <div class="mt-16 text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Programa intensivo y práctico
          </div>

          <p class="text-muted-foreground">
            Únete a más de <span class="font-semibold text-foreground">+200 abogados</span> que ya están transformando su práctica legal
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>
