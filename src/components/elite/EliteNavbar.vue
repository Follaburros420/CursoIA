<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { 
  Crown, 
  Menu, 
  ArrowLeft, 
  Users,
  BookOpen,
  HelpCircle,
  DollarSign,
  Clock,
  Zap
} from "lucide-vue-next";
import ToggleTheme from "../ToggleTheme.vue";

interface NavItem {
  id: string;
  label: string;
  icon?: any;
  description?: string;
}

// Navigation items específicos para la página elite
const eliteNavItems: NavItem[] = [
  { 
    id: "solution", 
    label: "Solución", 
    icon: Zap,
    description: "Programa completo"
  },
  { 
    id: "benefits", 
    label: "Beneficios", 
    icon: BookOpen,
    description: "Resultados medibles"
  },
  { 
    id: "curriculum", 
    label: "Currículum", 
    icon: BookOpen,
    description: "12 semanas de contenido"
  },
  { 
    id: "pricing", 
    label: "Precio", 
    icon: DollarSign,
    description: "Early Bird $1,200"
  },
  { 
    id: "faq", 
    label: "FAQ", 
    icon: HelpCircle,
    description: "Preguntas frecuentes"
  }
];

// Otros planes disponibles
const otherPlans = [
  {
    href: "/plan-gratuito",
    label: "Plan Gratuito",
    description: "Introducción básica a IA legal",
    badge: "Gratis"
  },
  {
    href: "/plan-profesional",
    label: "Plan Profesional",
    description: "Curso completo con certificación",
    badge: "Popular"
  }
];

const emit = defineEmits<{
  reserveSpot: []
}>();

const handleReserveSpot = () => {
  emit('reserveSpot');
};

const isOpen = ref<boolean>(false);
const isScrolled = ref<boolean>(false);

// Función para scroll suave a secciones
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 80;
    const elementPosition = element.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
  isOpen.value = false;
};

// Función para ir a otros planes
const navigateToPlan = (href: string) => {
  router.push(href);
  isOpen.value = false;
};

// Función para volver al inicio
const goHome = () => {
  router.push('/');
};

// Detectar scroll para cambiar el estilo de la navbar
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-card/95 backdrop-blur-lg border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
    ]"
  >
    <div class="container">
      <div class="flex justify-between items-center py-4">
        
        <!-- Logo y título -->
        <div class="flex items-center gap-4">
          <button 
            @click="goHome"
            class="flex items-center gap-2 group hover:opacity-80 transition-opacity"
          >
            <ArrowLeft class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span class="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Volver al inicio
            </span>
          </button>
          
          <Separator orientation="vertical" class="h-6" />
          
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Crown class="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 class="font-bold text-lg text-foreground">Curso Élite</h1>
              <p class="text-xs text-muted-foreground">Automatización Open-Source</p>
            </div>
          </div>
        </div>

        <!-- Mobile menu -->
        <div class="flex items-center gap-3 lg:hidden">
          <Badge class="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800">
            <Clock class="w-3 h-3 mr-1" />
            8 plazas
          </Badge>
          
          <Sheet v-model:open="isOpen">
            <SheetTrigger as-child>
              <Button variant="ghost" size="sm">
                <Menu class="w-5 h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              class="flex flex-col justify-between rounded-tl-2xl rounded-bl-2xl bg-card w-80"
            >
              <div>
                <SheetHeader class="mb-6">
                  <SheetTitle class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Crown class="w-5 h-5 text-white" />
                    </div>
                    Curso Élite
                  </SheetTitle>
                </SheetHeader>

                <!-- Navegación de secciones -->
                <div class="space-y-2 mb-6">
                  <h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Contenido de la página
                  </h3>
                  <Button
                    v-for="item in eliteNavItems"
                    :key="item.id"
                    @click="scrollToSection(item.id)"
                    variant="ghost"
                    class="w-full justify-start text-left h-auto p-3"
                  >
                    <component :is="item.icon" class="w-5 h-5 mr-3 text-primary" />
                    <div>
                      <div class="font-medium">{{ item.label }}</div>
                      <div class="text-xs text-muted-foreground">{{ item.description }}</div>
                    </div>
                  </Button>
                </div>

                <Separator class="my-4" />

                <!-- Otros planes -->
                <div class="space-y-2">
                  <h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Otros planes
                  </h3>
                  <Button
                    v-for="plan in otherPlans"
                    :key="plan.href"
                    @click="navigateToPlan(plan.href)"
                    variant="ghost"
                    class="w-full justify-start text-left h-auto p-3"
                  >
                    <div class="flex-1">
                      <div class="flex items-center gap-2">
                        <span class="font-medium">{{ plan.label }}</span>
                        <Badge 
                          :class="plan.badge === 'Gratis' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                            : 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'"
                          class="text-xs"
                        >
                          {{ plan.badge }}
                        </Badge>
                      </div>
                      <div class="text-xs text-muted-foreground">{{ plan.description }}</div>
                    </div>
                  </Button>
                </div>
              </div>

              <SheetFooter class="flex-col sm:flex-col justify-start items-start">
                <Separator class="mb-4" />
                <div class="w-full space-y-3">
                  <ToggleTheme />
                  <Button
                    @click="handleReserveSpot"
                    class="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <Crown class="w-4 h-4 mr-2" />
                    Reservar plaza
                  </Button>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <!-- Desktop menu -->
        <div class="hidden lg:flex items-center gap-6">
          
          <!-- Navegación de secciones -->
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger class="bg-transparent text-base">
                  Programa Élite
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div class="grid w-[500px] gap-3 p-4">
                    <div 
                      v-for="item in eliteNavItems"
                      :key="item.id"
                      @click="scrollToSection(item.id)"
                      class="group cursor-pointer rounded-lg p-3 hover:bg-muted transition-colors"
                    >
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <component :is="item.icon" class="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p class="font-semibold text-foreground">{{ item.label }}</p>
                          <p class="text-sm text-muted-foreground">{{ item.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger class="bg-transparent text-base">
                  Otros planes
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div class="grid w-[400px] gap-3 p-4">
                    <div 
                      v-for="plan in otherPlans"
                      :key="plan.href"
                      @click="navigateToPlan(plan.href)"
                      class="group cursor-pointer rounded-lg p-3 hover:bg-muted transition-colors"
                    >
                      <div class="flex items-center justify-between">
                        <div>
                          <div class="flex items-center gap-2 mb-1">
                            <p class="font-semibold text-foreground">{{ plan.label }}</p>
                            <Badge 
                              :class="plan.badge === 'Gratis' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                                : 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'"
                              class="text-xs"
                            >
                              {{ plan.badge }}
                            </Badge>
                          </div>
                          <p class="text-sm text-muted-foreground">{{ plan.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <!-- CTA y tema -->
          <div class="flex items-center gap-3">
            <Badge class="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800">
              <Users class="w-3 h-3 mr-1" />
              Solo 8 plazas
            </Badge>
            
            <ToggleTheme />
            
            <Button
              @click="handleReserveSpot"
              class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg"
            >
              <Crown class="w-4 h-4 mr-2" />
              Reservar plaza
            </Button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Smooth transitions for navbar */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
