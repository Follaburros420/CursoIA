<script setup lang="ts">
import { 
  Star, 
  Headphones, 
  Download, 
  Award,
  Clock,
  Users,
  Shield,
  Zap,
  BookOpen,
  Video
} from "lucide-vue-next";

interface Feature {
  icon: any;
  title: string;
  description: string;
  highlight?: boolean;
}

const features: Feature[] = [
  {
    icon: Star,
    title: "Contenido exclusivo y actualizado",
    description: "Material desarrollado específicamente para abogados, actualizado constantemente con las últimas tendencias en IA legal.",
    highlight: true
  },
  {
    icon: Headphones,
    title: "Soporte personalizado",
    description: "Acceso directo a nuestro equipo de expertos para resolver dudas y recibir orientación personalizada durante todo el curso."
  },
  {
    icon: Download,
    title: "Casos prácticos y material descargable",
    description: "Más de 50 casos reales, plantillas, checklists y recursos descargables que podrás usar inmediatamente en tu práctica."
  },
  {
    icon: Award,
    title: "Certificado profesional",
    description: "Certificado oficial que avala tus conocimientos en IA aplicada al derecho, reconocido por instituciones legales."
  },
  {
    icon: Clock,
    title: "Acceso de por vida",
    description: "Una vez inscrito, tendrás acceso permanente al contenido y todas las actualizaciones futuras sin costo adicional."
  },
  {
    icon: Users,
    title: "Comunidad exclusiva",
    description: "Únete a una red de abogados innovadores donde podrás compartir experiencias y crear conexiones profesionales."
  },
  {
    icon: Shield,
    title: "Garantía de satisfacción",
    description: "30 días de garantía total. Si no estás satisfecho, te devolvemos el 100% de tu inversión sin preguntas."
  },
  {
    icon: Zap,
    title: "Implementación inmediata",
    description: "Herramientas y técnicas que podrás aplicar desde el primer día para ver resultados inmediatos en tu práctica."
  },
  {
    icon: BookOpen,
    title: "Biblioteca de recursos",
    description: "Acceso a una extensa biblioteca con artículos, investigaciones y recursos adicionales sobre IA legal."
  },
  {
    icon: Video,
    title: "Contenido multimedia",
    description: "Videos HD, webinars en vivo, podcasts y material interactivo para diferentes estilos de aprendizaje."
  }
];
</script>

<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-muted/20 via-background to-muted/30">
    <div class="container">
      <div class="max-w-6xl mx-auto">
        
        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            <Star class="w-4 h-4" />
            Lo que incluye tu plan
          </div>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text">
              Todo lo que necesitas para dominar la IA legal
            </span>
          </h2>
          
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un paquete completo de recursos, herramientas y soporte diseñado para garantizar tu éxito en la implementación de IA en tu práctica legal
          </p>
        </div>

        <!-- Features grid -->
        <div class="grid md:grid-cols-2 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="group relative"
          >
            <!-- Feature card -->
            <div 
              :class="[
                'relative h-full p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1',
                feature.highlight 
                  ? 'bg-gradient-to-br from-primary/10 to-orange-500/10 border-2 border-primary/20 hover:border-primary/40' 
                  : 'bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 hover:border-border'
              ]"
            >
              
              <!-- Highlight badge -->
              <div 
                v-if="feature.highlight" 
                class="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
              >
                Destacado
              </div>

              <div class="flex items-start gap-4">
                <!-- Icon -->
                <div 
                  :class="[
                    'flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110',
                    feature.highlight 
                      ? 'bg-gradient-to-br from-primary to-orange-600 text-white' 
                      : 'bg-gradient-to-br from-primary/20 to-orange-500/20 text-primary group-hover:text-orange-600'
                  ]"
                >
                  <component 
                    :is="feature.icon" 
                    class="w-6 h-6" 
                  />
                </div>

                <!-- Content -->
                <div class="flex-1 space-y-3">
                  <h3 
                    :class="[
                      'text-lg font-bold transition-colors duration-300',
                      feature.highlight 
                        ? 'text-primary' 
                        : 'text-foreground group-hover:text-primary'
                    ]"
                  >
                    {{ feature.title }}
                  </h3>
                  
                  <p class="text-muted-foreground leading-relaxed">
                    {{ feature.description }}
                  </p>
                </div>
              </div>

              <!-- Hover glow effect -->
              <div 
                v-if="feature.highlight"
                class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA section -->
        <div class="mt-16 text-center">
          <div class="inline-block p-8 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-3xl border border-primary/20">
            <div class="space-y-4">
              <div class="flex justify-center items-center gap-2 text-primary font-semibold">
                <Award class="w-5 h-5" />
                <span>Valor total del paquete: $800.000 COP</span>
              </div>

              <div class="text-3xl font-bold text-foreground">
                Tu precio hoy:
                <span class="text-transparent bg-gradient-to-r from-primary to-orange-600 bg-clip-text">
                  $400.000 COP
                </span>
              </div>

              <p class="text-muted-foreground">
                Ahorra $400.000 COP con esta oferta especial de lanzamiento
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
</style>
