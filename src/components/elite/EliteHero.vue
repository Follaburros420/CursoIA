<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Crown,
  Users,
  Calendar,
  Database,
  BookOpen,
  ArrowRight,
  Star,
  Clock
} from "lucide-vue-next";

// Technology stack icons/info
const techStack = [
  { name: "n8n", description: "Automatización visual", color: "from-red-500 to-red-600" },
  { name: "Supabase", description: "Backend legal", color: "from-green-500 to-green-600" },
  { name: "Redis", description: "Caché y colas", color: "from-red-600 to-red-700" },
  { name: "Qdrant", description: "Búsqueda semántica", color: "from-blue-500 to-blue-600" }
];

const highlights = [
  { icon: Calendar, text: "3 meses", description: "Programa intensivo" },
  { icon: BookOpen, text: "3,500+ workflows", description: "Biblioteca verificada" },
  { icon: Users, text: "Plazas limitadas", description: "Solo 30 estudiantes" },
  { icon: Crown, text: "Mentoría VIP", description: "Acceso exclusivo" }
];

const emit = defineEmits<{
  reserveSpot: []
}>();

const handleReserveSpot = () => {
  emit('reserveSpot');
};
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/10">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl"></div>
    
    <div class="container relative z-10">
      <div class="grid place-items-center lg:max-w-screen-xl gap-12 mx-auto py-16 md:py-24">
        
        <!-- VIP Badge -->
        <div class="text-center">
          <Badge class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 text-base font-bold shadow-lg">
            <Crown class="w-5 h-5 mr-2" />
            CURSO ÉLITE · ACCESO VIP
          </Badge>
        </div>

        <!-- Main headline -->
        <div class="text-center space-y-8 max-w-5xl">
          <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            <span class="block text-foreground mb-2">Sé de los primeros en</span>
            <span class="text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text">
              dominar las tecnologías
            </span>
            <span class="block text-foreground mt-2">de automatización</span>
            <span class="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
              open‑source
            </span>
            <span class="block text-foreground">para abogados</span>
          </h1>
        </div>

        <!-- Technology stack showcase -->
        <div class="w-full max-w-4xl">
          <div class="text-center mb-8">
            <p class="text-xl text-muted-foreground">
              Domina las tecnologías más avanzadas del ecosistema legal
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div 
              v-for="tech in techStack" 
              :key="tech.name"
              class="group relative"
            >
              <div class="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/80 transition-all duration-300 hover:scale-105">
                <div :class="[
                  'w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto bg-gradient-to-br',
                  tech.color
                ]">
                  <Database class="w-6 h-6 text-white" />
                </div>
                <h3 class="font-bold text-lg text-center text-foreground mb-1">{{ tech.name }}</h3>
                <p class="text-sm text-muted-foreground text-center">{{ tech.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Key highlights -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
          <div 
            v-for="highlight in highlights" 
            :key="highlight.text"
            class="text-center group"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <component :is="highlight.icon" class="w-8 h-8 text-primary" />
            </div>
            <div class="font-bold text-lg text-foreground">{{ highlight.text }}</div>
            <div class="text-sm text-muted-foreground">{{ highlight.description }}</div>
          </div>
        </div>

        <!-- Urgency indicators -->
        <div class="flex flex-wrap justify-center gap-4 text-center">
          <div class="flex items-center gap-2 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-full px-4 py-2">
            <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span class="text-sm font-medium text-red-600 dark:text-red-400">Solo 8 plazas disponibles</span>
          </div>
          
          <div class="flex items-center gap-2 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-full px-4 py-2">
            <Clock class="w-4 h-4 text-orange-500" />
            <span class="text-sm font-medium text-orange-600 dark:text-orange-400">Inicio: 15 septiembre</span>
          </div>
          
          <div class="flex items-center gap-2 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-full px-4 py-2">
            <Star class="w-4 h-4 text-green-500" />
            <span class="text-sm font-medium text-green-600 dark:text-green-400">Early Bird hasta 31 agosto</span>
          </div>
        </div>

        <!-- Main CTA -->
        <div class="text-center space-y-6">
          <Button 
            @click="handleReserveSpot"
            size="lg" 
            class="group px-12 py-6 text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            <Crown class="w-6 h-6 mr-3" />
            Reserva tu plaza VIP
            <ArrowRight class="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <p class="text-sm text-muted-foreground">
            <span class="font-semibold text-red-500">Quedan solo 8 cupos</span> de 30 disponibles
          </p>
        </div>

        <!-- Hero image/illustration -->
        <div class="relative group mt-8 w-full max-w-5xl">
          <!-- Gradient shadow -->
          <div class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[60%] bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl animate-pulse"></div>
          
          <!-- Main image container -->
          <div class="relative overflow-hidden rounded-3xl border-2 border-gradient-to-r from-purple-500/20 to-blue-500/20 bg-card/30 backdrop-blur-sm">
            <img
              src="/bot.png"
              alt="Curso Élite - Automatización Open Source para Abogados"
              class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <!-- Overlay elements -->
            <div class="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
            
            <!-- Floating tech badges -->
            <div class="absolute top-6 left-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Elite Program
            </div>
            
            <div class="absolute top-6 right-6 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-3">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-sm font-medium">Inscripciones abiertas</span>
              </div>
            </div>
            
            <div class="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <div class="text-sm">
                <div class="font-bold text-foreground">3,500+ Workflows</div>
                <div class="text-muted-foreground">Biblioteca verificada</div>
              </div>
            </div>
          </div>
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

.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}
</style>
