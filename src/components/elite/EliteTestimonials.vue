<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { 
  Quote, 
  Star,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  User
} from "lucide-vue-next";

const testimonials = [
  {
    quote: "Gracias a este curso, automatizamos el flujo de revisión de contratos y reducimos un 70% el tiempo de entrega.",
    author: "Laura Pérez",
    position: "Socia",
    company: "Pérez & Asociados",
    avatar: "/yo.jpg", // Using existing avatar
    impact: "70% reducción tiempo",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    quote: "El proyecto final me permitió demostrar internamente el ROI de legaltech y cerrar 3 nuevos clientes.",
    author: "Carlos Ramírez",
    position: "CEO",
    company: "Ramírez Abogados",
    avatar: "/pacheco.png", // Using existing avatar
    impact: "3 nuevos clientes",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800"
  }
];

const additionalTestimonials = [
  {
    quote: "La biblioteca de workflows nos ahorró meses de desarrollo. Implementamos automatización de due diligence en solo 2 semanas.",
    author: "María González",
    position: "Directora de Innovación",
    company: "LegalTech Solutions",
    metric: "2 semanas implementación"
  },
  {
    quote: "Las mentorías personalizadas fueron clave. Resolvimos problemas específicos de nuestro despacho que no encontrábamos en otros cursos.",
    author: "Roberto Silva",
    position: "Socio Fundador",
    company: "Silva & Partners",
    metric: "Soluciones personalizadas"
  },
  {
    quote: "Después del curso, nuestro despacho se posicionó como líder en legaltech. Incrementamos tarifas un 40% por servicios premium.",
    author: "Ana Martínez",
    position: "Managing Partner",
    company: "Martínez Law Firm",
    metric: "+40% tarifas premium"
  },
  {
    quote: "La combinación de tecnologías open-source nos dio independencia total. No dependemos de licencias costosas.",
    author: "Diego López",
    position: "CTO Legal",
    company: "InnovaLaw",
    metric: "0% costes licencias"
  }
];

const socialProofStats = [
  {
    number: "+200",
    label: "Abogados formados",
    icon: Users,
    description: "Profesionales que han transformado su práctica"
  },
  {
    number: "85%",
    label: "Incremento promedio ROI",
    icon: TrendingUp,
    description: "Retorno de inversión medible en 3 meses"
  },
  {
    number: "12h",
    label: "Ahorro semanal promedio",
    icon: Clock,
    description: "Tiempo recuperado para actividades estratégicas"
  },
  {
    number: "98%",
    label: "Tasa de satisfacción",
    icon: CheckCircle,
    description: "Estudiantes que recomiendan el programa"
  }
];

const companyLogos = [
  { name: "Pérez & Asociados", logo: "/profesional.png" },
  { name: "Ramírez Abogados", logo: "/ebook.png" },
  { name: "LegalTech Solutions", logo: "/bot.png" },
  { name: "Silva & Partners", logo: "/gamestation.png" }
];
</script>

<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-muted/20 via-background to-muted/30">
    <div class="container">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <Badge class="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 dark:from-yellow-900/20 dark:to-orange-900/20 dark:text-yellow-400 px-4 py-2 text-sm font-medium border border-yellow-200 dark:border-yellow-800">
            <Star class="w-4 h-4 mr-2" />
            Prueba social
          </Badge>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-foreground">Lo que dicen nuestros</span>
            <span class="text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text block">
              estudiantes elite
            </span>
          </h2>
          
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reales de abogados que han transformado sus despachos con automatización open-source
          </p>
        </div>

        <!-- Featured testimonials -->
        <div class="grid lg:grid-cols-2 gap-8 mb-16">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="group relative"
          >
            <!-- Testimonial card -->
            <div :class="[
              'relative h-full p-8 rounded-3xl border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl',
              testimonial.bgColor,
              testimonial.borderColor
            ]">
              
              <!-- Quote icon -->
              <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Quote class="w-6 h-6 text-white" />
              </div>

              <!-- Impact badge -->
              <div class="absolute -top-2 -right-2 px-4 py-2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-full">
                <span class="text-xs font-bold text-primary">{{ testimonial.impact }}</span>
              </div>

              <!-- Quote -->
              <div class="mb-8 pt-4">
                <p class="text-lg text-foreground leading-relaxed italic">
                  "{{ testimonial.quote }}"
                </p>
              </div>

              <!-- Author info -->
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                  <img 
                    :src="testimonial.avatar" 
                    :alt="testimonial.author"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 class="font-bold text-foreground">{{ testimonial.author }}</h4>
                  <p class="text-sm text-primary font-medium">{{ testimonial.position }}</p>
                  <p class="text-sm text-muted-foreground">{{ testimonial.company }}</p>
                </div>
              </div>

              <!-- Star rating -->
              <div class="flex items-center gap-1 mt-4">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>

        <!-- Social proof stats -->
        <div class="relative mb-16">
          <!-- Background decoration -->
          <div class="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-3xl"></div>
          
          <div class="relative p-8 md:p-12">
            <div class="text-center mb-12">
              <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Resultados que hablan por sí solos
              </h3>
              <p class="text-muted-foreground max-w-2xl mx-auto">
                Métricas reales de impacto en despachos que han completado el programa elite
              </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div 
                v-for="stat in socialProofStats" 
                :key="stat.label"
                class="text-center group"
              >
                <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <component :is="stat.icon" class="w-8 h-8 text-primary" />
                </div>
                <div class="text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-orange-600 bg-clip-text mb-2">
                  {{ stat.number }}
                </div>
                <div class="text-sm font-semibold text-foreground mb-1">{{ stat.label }}</div>
                <div class="text-xs text-muted-foreground">{{ stat.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional testimonials grid -->
        <div class="grid md:grid-cols-2 gap-6 mb-16">
          <div 
            v-for="(testimonial, index) in additionalTestimonials" 
            :key="index"
            class="group"
          >
            <div class="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <!-- Quote -->
              <div class="mb-4">
                <Quote class="w-6 h-6 text-primary mb-3" />
                <p class="text-foreground leading-relaxed">
                  "{{ testimonial.quote }}"
                </p>
              </div>

              <!-- Author and metric -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full flex items-center justify-center">
                    <User class="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 class="font-semibold text-foreground text-sm">{{ testimonial.author }}</h5>
                    <p class="text-xs text-muted-foreground">{{ testimonial.position }}, {{ testimonial.company }}</p>
                  </div>
                </div>
                
                <Badge class="bg-primary/10 text-primary border-primary/20 text-xs">
                  {{ testimonial.metric }}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <!-- Company logos -->
        <div class="text-center">
          <h3 class="text-lg font-semibold text-muted-foreground mb-8">
            Despachos que confían en nuestro programa
          </h3>
          
          <div class="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div 
              v-for="company in companyLogos" 
              :key="company.name"
              class="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                :src="company.logo" 
                :alt="company.name"
                class="h-12 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="mt-16 text-center">
          <div class="inline-block p-8 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-3xl border border-primary/20">
            <div class="space-y-4">
              <div class="flex justify-center items-center gap-2 text-primary font-semibold">
                <Star class="w-5 h-5" />
                <span>Únete a la comunidad de élite</span>
              </div>
              
              <div class="text-3xl font-bold text-foreground">
                Sé el próximo 
                <span class="text-transparent bg-gradient-to-r from-primary to-orange-600 bg-clip-text">
                  caso de éxito
                </span>
              </div>
              
              <p class="text-muted-foreground max-w-md mx-auto">
                Transforma tu despacho como lo han hecho cientos de abogados antes que tú
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

.grayscale {
  filter: grayscale(100%);
}

.grayscale-0 {
  filter: grayscale(0%);
}
</style>
