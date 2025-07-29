<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-vue-next";
import WompiDirectWidget from "@/components/WompiDirectWidget.vue";

interface Props {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Transforma tu práctica legal con herramientas de inteligencia artificial.",
  description: "Aprende a automatizar procesos y ofrecer un servicio de alto impacto.",
  buttonText: "Comprar ahora"
});

const emit = defineEmits<{
  buttonClick: []
}>();

const handleButtonClick = () => {
  if (props.onButtonClick) {
    props.onButtonClick();
  } else {
    emit('buttonClick');
  }
};

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
  <section class="py-16 md:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
    <div class="container">
      <div class="max-w-6xl mx-auto">
        
        <!-- Main content -->
        <div class="text-center space-y-8 mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            <span class="text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text">
              {{ title }}
            </span>
          </h2>
          
          <p class="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {{ description }}
          </p>

          <!-- Primary CTA -->
          <div class="flex justify-center mt-8 max-w-md mx-auto">
            <WompiDirectWidget
              :amount="40000000"
              currency="COP"
              :button-text="`⚡ ${buttonText}`"
            />
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

        <!-- Secondary CTA section -->
        <div class="mt-16 text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Oferta por tiempo limitado
          </div>
          
          <p class="text-muted-foreground mb-6">
            Únete a más de <span class="font-semibold text-foreground">500+ abogados</span> que ya están transformando su práctica legal
          </p>
          
          <Button 
            @click="handleButtonClick"
            variant="outline" 
            size="lg"
            class="group border-primary/20 hover:bg-primary/5 transition-all duration-300"
          >
            Comenzar ahora
            <ArrowRight class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
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
