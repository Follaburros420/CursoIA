<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Crown, 
  Clock, 
  Users,
  Calendar,
  DollarSign,
  Shield,
  Zap,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Star
} from "lucide-vue-next";

// Countdown timer state
const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

// Target date: August 31, 2025
const targetDate = new Date('2025-08-31T23:59:59').getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }
};

let countdownInterval: number;

onMounted(() => {
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});

const pricingFeatures = [
  "12 sesiones en vivo con expertos",
  "18 microlecciones grabadas",
  "2 mentorías privadas al mes",
  "Biblioteca de 3,500+ workflows",
  "Proyecto final tutorizado",
  "Acceso de por vida al contenido",
  "Comunidad exclusiva de élite",
  "Soporte técnico prioritario",
  "Certificado de especialización",
  "Actualizaciones gratuitas"
];

const urgencyIndicators = [
  {
    icon: Users,
    text: "Solo 8 plazas disponibles",
    subtext: "de 30 totales",
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    borderColor: "border-red-200 dark:border-red-800"
  },
  {
    icon: Calendar,
    text: "Inicio: 15 septiembre",
    subtext: "No hay segunda fecha",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800"
  },
  {
    icon: Clock,
    text: "Early Bird hasta 31 agosto",
    subtext: "Ahorra $400 USD",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800"
  }
];

const emit = defineEmits<{
  reserveSpot: []
}>();

const handleReserveSpot = () => {
  emit('reserveSpot');
};
</script>

<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-purple-500/5">
    <div class="container">
      <div class="max-w-6xl mx-auto">
        
        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <Badge class="bg-gradient-to-r from-red-100 to-orange-100 text-red-800 dark:from-red-900/20 dark:to-orange-900/20 dark:text-red-400 px-4 py-2 text-sm font-medium border border-red-200 dark:border-red-800">
            <AlertTriangle class="w-4 h-4 mr-2" />
            Oferta y urgencia
          </Badge>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-foreground">Asegura tu plaza</span>
            <span class="text-transparent bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text block">
              antes de que sea tarde
            </span>
          </h2>
        </div>

        <!-- Countdown timer -->
        <div class="relative mb-12">
          <div class="text-center mb-8">
            <h3 class="text-xl font-bold text-foreground mb-2">
              Tiempo restante para Early Bird
            </h3>
            <p class="text-muted-foreground">
              Ahorra $400 USD reservando antes del 31 de agosto
            </p>
          </div>

          <div class="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <span class="text-2xl font-bold text-white">{{ timeLeft.days }}</span>
              </div>
              <span class="text-sm text-muted-foreground">Días</span>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <span class="text-2xl font-bold text-white">{{ timeLeft.hours }}</span>
              </div>
              <span class="text-sm text-muted-foreground">Horas</span>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <span class="text-2xl font-bold text-white">{{ timeLeft.minutes }}</span>
              </div>
              <span class="text-sm text-muted-foreground">Min</span>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <span class="text-2xl font-bold text-white">{{ timeLeft.seconds }}</span>
              </div>
              <span class="text-sm text-muted-foreground">Seg</span>
            </div>
          </div>
        </div>

        <!-- Urgency indicators -->
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div 
            v-for="indicator in urgencyIndicators" 
            :key="indicator.text"
            :class="[
              'p-6 rounded-2xl border-2 text-center',
              indicator.bgColor,
              indicator.borderColor
            ]"
          >
            <div class="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <component :is="indicator.icon" class="w-6 h-6 text-white" />
            </div>
            <h4 :class="['font-bold text-lg mb-1', indicator.color]">{{ indicator.text }}</h4>
            <p class="text-sm text-muted-foreground">{{ indicator.subtext }}</p>
          </div>
        </div>

        <!-- Main pricing card -->
        <div class="relative max-w-4xl mx-auto">
          <!-- Popular badge -->
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <Badge class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 text-sm font-bold shadow-lg">
              <Crown class="w-4 h-4 mr-1" />
              PROGRAMA ÉLITE
            </Badge>
          </div>

          <div class="relative p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-3xl shadow-2xl">
            
            <!-- Pricing header -->
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Curso Élite de Automatización Legal
              </h3>
              
              <!-- Pricing -->
              <div class="space-y-2 mb-6">
                <!-- Regular price (crossed out) -->
                <div class="text-lg text-muted-foreground">
                  <span class="line-through">Precio regular: $1,600 USD</span>
                </div>
                
                <!-- Early bird price -->
                <div class="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-primary to-purple-600 bg-clip-text">
                  $1,200 USD
                </div>
                
                <div class="flex items-center justify-center gap-2">
                  <Badge class="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    Ahorra $400 USD
                  </Badge>
                  <span class="text-sm text-muted-foreground">Early Bird hasta 31 agosto</span>
                </div>
              </div>
            </div>

            <!-- Features list -->
            <div class="grid md:grid-cols-2 gap-4 mb-8">
              <div 
                v-for="feature in pricingFeatures" 
                :key="feature"
                class="flex items-center gap-3"
              >
                <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle class="w-4 h-4 text-white" />
                </div>
                <span class="text-sm text-foreground">{{ feature }}</span>
              </div>
            </div>

            <!-- Main CTA -->
            <div class="space-y-4 mb-8">
              <Button 
                @click="handleReserveSpot"
                size="lg"
                class="w-full py-6 text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                <Crown class="w-6 h-6 mr-3" />
                ¡Aprovecha tu descuento y asegura tu plaza!
                <ArrowRight class="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <p class="text-center text-sm text-muted-foreground">
                <span class="font-semibold text-red-500">Solo quedan 8 cupos</span> disponibles
              </p>
            </div>

            <!-- Trust indicators -->
            <div class="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground border-t border-border/50 pt-6">
              <div class="flex items-center gap-2">
                <Shield class="w-4 h-4 text-green-500" />
                <span>Garantía 7 días</span>
              </div>
              <div class="flex items-center gap-2">
                <Star class="w-4 h-4 text-yellow-500" />
                <span>500+ estudiantes</span>
              </div>
              <div class="flex items-center gap-2">
                <CheckCircle class="w-4 h-4 text-blue-500" />
                <span>Pago seguro</span>
              </div>
              <div class="flex items-center gap-2">
                <Zap class="w-4 h-4 text-purple-500" />
                <span>Acceso inmediato</span>
              </div>
            </div>

            <!-- Background decoration -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-purple-500/5 -z-10"></div>
          </div>
        </div>

        <!-- Guarantee section -->
        <div class="mt-12 text-center">
          <div class="inline-block p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl border border-green-200 dark:border-green-800">
            <div class="flex items-center justify-center gap-3 mb-3">
              <Shield class="w-8 h-8 text-green-500" />
              <h4 class="text-lg font-bold text-foreground">Garantía de satisfacción</h4>
            </div>
            <p class="text-muted-foreground max-w-md">
              <strong>Satisfacción 100% o devolución total</strong> en los primeros 7 días tras la 1ª sesión en vivo.
            </p>
          </div>
        </div>

        <!-- Final urgency reminder -->
        <div class="mt-12 text-center">
          <div class="inline-flex items-center gap-2 px-6 py-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-full">
            <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span class="text-sm font-bold text-red-600 dark:text-red-400">
              Solo 8 cupos disponibles · Inicio 15 septiembre · Early Bird hasta 31 agosto
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
