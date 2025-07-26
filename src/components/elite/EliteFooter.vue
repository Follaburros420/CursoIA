<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Crown, 
  Mail, 
  MessageCircle, 
  Shield, 
  Clock,
  ArrowUp,
  ExternalLink,
  Users,
  Calendar,
  CheckCircle
} from "lucide-vue-next";

const router = useRouter();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const goHome = () => {
  router.push('/');
};

const emit = defineEmits<{
  reserveSpot: []
}>();

const handleReserveSpot = () => {
  emit('reserveSpot');
};

const contactLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/message/22XPE3IWTKONL1",
    icon: MessageCircle,
    description: "Consultas inmediatas"
  },
  {
    label: "Email",
    href: "mailto:info@cursoiaabogados.com",
    icon: Mail,
    description: "Soporte especializado"
  }
];

const legalLinks = [
  {
    label: "Política de Privacidad",
    href: "/politica-de-privacidad"
  },
  {
    label: "Términos y Condiciones",
    href: "#"
  }
];

const eliteFeatures = [
  {
    icon: Shield,
    title: "Garantía 7 días",
    description: "Devolución completa tras la primera sesión"
  },
  {
    icon: Clock,
    title: "Acceso de por vida",
    description: "Todo el contenido disponible para siempre"
  },
  {
    icon: Crown,
    title: "Programa exclusivo",
    description: "Solo 30 estudiantes por cohorte"
  }
];

const urgencyStats = [
  { number: "8", label: "Plazas restantes", color: "text-red-500" },
  { number: "15", label: "Sept inicio", color: "text-orange-500" },
  { number: "31", label: "Agosto Early Bird", color: "text-green-500" }
];
</script>

<template>
  <footer class="bg-gradient-to-br from-muted/30 via-background to-muted/20 border-t border-border/50">
    
    <!-- Elite features section -->
    <section class="py-16 md:py-20">
      <div class="container">
        <div class="max-w-6xl mx-auto">
          
          <!-- Section header -->
          <div class="text-center mb-12">
            <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tu plaza en el programa más exclusivo
            </h2>
            <p class="text-muted-foreground max-w-2xl mx-auto">
              Únete a la élite de abogados que están liderando la transformación digital del sector legal
            </p>
          </div>

          <!-- Features grid -->
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            <div 
              v-for="feature in eliteFeatures" 
              :key="feature.title"
              class="text-center group"
            >
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <component :is="feature.icon" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-lg font-semibold text-foreground mb-2">{{ feature.title }}</h3>
              <p class="text-muted-foreground text-sm">{{ feature.description }}</p>
            </div>
          </div>

          <!-- Urgency reminder -->
          <div class="relative mb-12">
            <div class="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-3xl"></div>
            
            <div class="relative p-8 text-center">
              <div class="grid grid-cols-3 gap-8 mb-6">
                <div 
                  v-for="stat in urgencyStats" 
                  :key="stat.label"
                  class="text-center"
                >
                  <div :class="['text-3xl font-bold mb-1', stat.color]">{{ stat.number }}</div>
                  <div class="text-sm text-muted-foreground">{{ stat.label }}</div>
                </div>
              </div>
              
              <h3 class="text-xl font-bold text-foreground mb-4">
                No dejes pasar esta oportunidad única
              </h3>
              <p class="text-muted-foreground mb-6">
                El próximo programa élite no será hasta 2026. Asegura tu plaza ahora.
              </p>
              
              <Button 
                @click="handleReserveSpot"
                size="lg"
                class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg"
              >
                <Crown class="w-5 h-5 mr-2" />
                Reservar mi plaza VIP
                <ArrowUp class="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Separator />

    <!-- Footer content -->
    <section class="py-12">
      <div class="container">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-4 gap-8">
            
            <!-- Brand -->
            <div class="md:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Crown class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="font-bold text-lg text-foreground">Curso Élite</h3>
                  <p class="text-sm text-muted-foreground">Automatización Open-Source para Abogados</p>
                </div>
              </div>
              <p class="text-muted-foreground text-sm leading-relaxed mb-4">
                El programa más avanzado y exclusivo para dominar tecnologías de automatización 
                open-source en el sector legal. Solo para abogados visionarios.
              </p>
              <Button 
                @click="goHome"
                variant="outline" 
                size="sm"
                class="border-primary/20 hover:bg-primary/5"
              >
                <ExternalLink class="w-4 h-4 mr-2" />
                Ver todos los planes
              </Button>
            </div>

            <!-- Contact -->
            <div>
              <h4 class="font-semibold text-foreground mb-4">Contacto VIP</h4>
              <div class="space-y-3">
                <a 
                  v-for="contact in contactLinks"
                  :key="contact.label"
                  :href="contact.href"
                  target="_blank"
                  class="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <component :is="contact.icon" class="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <div class="font-medium">{{ contact.label }}</div>
                    <div class="text-xs">{{ contact.description }}</div>
                  </div>
                </a>
              </div>
            </div>

            <!-- Legal -->
            <div>
              <h4 class="font-semibold text-foreground mb-4">Legal</h4>
              <div class="space-y-2">
                <a 
                  v-for="link in legalLinks"
                  :key="link.label"
                  :href="link.href"
                  class="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {{ link.label }}
                </a>
              </div>
              
              <!-- Elite badge -->
              <div class="mt-4">
                <Badge class="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 dark:from-purple-900/20 dark:to-blue-900/20 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                  <Crown class="w-3 h-3 mr-1" />
                  Programa Élite
                </Badge>
              </div>
            </div>
          </div>

          <Separator class="my-8" />

          <!-- Bottom -->
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm text-muted-foreground">
              © {{ new Date().getFullYear() }} Curso Élite de Automatización Legal. Todos los derechos reservados.
            </p>
            
            <div class="flex items-center gap-4 text-sm text-muted-foreground">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span>Solo 8 plazas disponibles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<style scoped>
/* Smooth animations */
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

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
</style>
