<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Clock, 
  Shield, 
  Zap,
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-vue-next";

interface Props {
  amount: number;
  originalAmount?: number;
  currency?: string;
  loading?: boolean;
  buttonText?: string;
  showSticky?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  currency: 'COP',
  loading: false,
  buttonText: 'Comprar ahora',
  showSticky: true
});

const emit = defineEmits<{
  checkout: [];
}>();

// State
const isSticky = ref(false);
const stickyElement = ref<HTMLElement>();
const mainElement = ref<HTMLElement>();

// Methods
const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('es-CO', { 
    style: 'currency', 
    currency: props.currency 
  });
};

const handleCheckout = () => {
  emit('checkout');
};

const handleScroll = () => {
  if (!props.showSticky || !mainElement.value) return;
  
  const rect = mainElement.value.getBoundingClientRect();
  const isElementVisible = rect.top < window.innerHeight && rect.bottom > 0;
  
  isSticky.value = !isElementVisible && window.scrollY > 100;
};

// Lifecycle
onMounted(() => {
  if (props.showSticky) {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
  }
});

onUnmounted(() => {
  if (props.showSticky) {
    window.removeEventListener('scroll', handleScroll);
  }
});

const discountPercentage = props.originalAmount 
  ? Math.round(((props.originalAmount - props.amount) / props.originalAmount) * 100)
  : 0;

const guarantees = [
  { icon: Shield, text: "30 días de garantía" },
  { icon: Zap, text: "Acceso inmediato" },
  { icon: Clock, text: "Soporte 24/7" }
];
</script>

<template>
  <div>
    <!-- Main pricing section -->
    <section ref="mainElement" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-orange-500/5">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          
          <!-- Pricing card -->
          <div class="relative p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-3xl shadow-2xl">
            
            <!-- Popular badge -->
            <div class="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge class="bg-gradient-to-r from-primary to-orange-600 text-white px-6 py-2 text-sm font-bold shadow-lg">
                <Star class="w-4 h-4 mr-1" />
                Más Popular
              </Badge>
            </div>

            <!-- Header -->
            <div class="text-center space-y-6 mb-8">
              <h2 class="text-3xl md:text-4xl font-bold text-foreground">
                Plan Profesional
              </h2>
              
              <div class="space-y-2">
                <!-- Original price (if discounted) -->
                <div v-if="originalAmount && originalAmount !== amount" class="text-lg text-muted-foreground">
                  <span class="line-through">{{ formatCurrency(originalAmount) }}</span>
                  <Badge class="ml-2 bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                    -{{ discountPercentage }}%
                  </Badge>
                </div>
                
                <!-- Current price -->
                <div class="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-primary to-orange-600 bg-clip-text">
                  {{ formatCurrency(amount) }}
                </div>
                
                <p class="text-muted-foreground">
                  Pago único • Acceso de por vida
                </p>
              </div>
            </div>

            <!-- Features highlight -->
            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <div 
                v-for="guarantee in guarantees" 
                :key="guarantee.text"
                class="flex items-center gap-3 p-4 bg-muted/30 rounded-xl"
              >
                <div class="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <component :is="guarantee.icon" class="w-5 h-5 text-primary" />
                </div>
                <span class="font-medium text-sm">{{ guarantee.text }}</span>
              </div>
            </div>

            <!-- Main CTA -->
            <div class="space-y-4">
              <Button
                @click="handleCheckout"
                :disabled="loading"
                size="lg"
                class="w-full py-6 text-xl font-bold bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] group"
              >
                <ShoppingCart class="w-6 h-6 mr-3" />
                {{ loading ? 'Procesando...' : buttonText }}
                <ArrowRight class="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <p class="text-center text-sm text-muted-foreground">
                <CheckCircle class="w-4 h-4 inline mr-1 text-green-500" />
                Compra 100% segura • SSL encriptado
              </p>
            </div>

            <!-- Trust indicators -->
            <div class="mt-8 pt-6 border-t border-border/50">
              <div class="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                <div class="flex items-center gap-2">
                  <Shield class="w-4 h-4 text-green-500" />
                  <span>Garantía 30 días</span>
                </div>
                <div class="flex items-center gap-2">
                  <Star class="w-4 h-4 text-yellow-500" />
                  <span>500+ estudiantes</span>
                </div>
                <div class="flex items-center gap-2">
                  <CheckCircle class="w-4 h-4 text-blue-500" />
                  <span>Certificado oficial</span>
                </div>
              </div>
            </div>

            <!-- Background decoration -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-orange-500/5 -z-10"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sticky CTA (mobile/desktop) -->
    <Teleport to="body">
      <div 
        v-if="showSticky && isSticky"
        ref="stickyElement"
        class="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card/95 backdrop-blur-lg border-t border-border/50 shadow-2xl animate-slide-up"
      >
        <div class="container max-w-4xl mx-auto">
          <div class="flex items-center justify-between gap-4">
            
            <!-- Price info -->
            <div class="flex-1 min-w-0">
              <div class="text-sm text-muted-foreground">Plan Profesional</div>
              <div class="text-xl font-bold text-transparent bg-gradient-to-r from-primary to-orange-600 bg-clip-text">
                {{ formatCurrency(amount) }}
              </div>
            </div>

            <!-- CTA Button -->
            <Button
              @click="handleCheckout"
              :disabled="loading"
              size="lg"
              class="px-8 py-3 bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 transition-all duration-300 shadow-lg font-bold group"
            >
              <ShoppingCart class="w-5 h-5 mr-2" />
              {{ loading ? 'Procesando...' : 'Comprar' }}
              <ArrowRight class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .animate-slide-up {
    animation: none;
  }
  
  .transform {
    transform: none !important;
  }
}
</style>
