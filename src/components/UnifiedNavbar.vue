<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useColorMode } from "@vueuse/core";

const mode = useColorMode();
const route = useRoute();
const router = useRouter();

// Props para personalización
interface Props {
  variant?: 'default' | 'professional';
  showBackButton?: boolean;
  customTitle?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  showBackButton: false,
  customTitle: ''
});

// Navbar scroll state
const isScrolled = ref(false);
const isOpen = ref(false);

// Handle scroll for navbar background
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Set dark mode
mode.value = "dark";

// Computed properties for styling based on variant
const navbarClasses = computed(() => {
  const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
  const scrollClasses = isScrolled.value 
    ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg" 
    : "bg-transparent";
  
  let variantClasses = "";
  switch (props.variant) {
    case 'professional':
      variantClasses = "border-b-2 border-primary/20";
      break;
    default:
      variantClasses = "";
  }
  
  return `${baseClasses} ${scrollClasses} ${variantClasses}`;
});

const logoClasses = computed(() => {
  switch (props.variant) {
    case 'professional':
      return "text-primary";
    default:
      return "text-foreground";
  }
});

// Navigation items
const navigationItems = [
  { href: "/", label: "Inicio" },
  { href: "/plan-gratuito", label: "Plan Gratuito" },
  { href: "/plan-profesional", label: "Plan Profesional" }
];

// Methods
const goHome = () => {
  router.push('/');
};

const goBack = () => {
  router.go(-1);
};

const closeSheet = () => {
  isOpen.value = false;
};

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
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
import { Separator } from "@/components/ui/separator";

import {
  Menu,
  ArrowLeft
} from "lucide-vue-next";
import ToggleTheme from "./ToggleTheme.vue";
</script>

<template>
  <nav :class="navbarClasses">
    <div class="container mx-auto px-3 sm:px-4 md:px-6">
      <div class="flex items-center justify-between h-14 md:h-16 gap-2 sm:gap-3">
        
        <!-- Left side: Logo/Back button -->
        <div class="flex items-center space-x-2 sm:space-x-3 md:space-x-4 min-w-0 flex-shrink-0">
          <!-- Back button (if enabled) -->
          <Button 
            v-if="showBackButton"
            @click="goBack"
            variant="ghost" 
            size="sm"
            class="mr-1 sm:mr-2 hidden sm:flex"
          >
            <ArrowLeft class="w-4 h-4 sm:mr-2" />
            <span class="hidden md:inline">Volver</span>
          </Button>
          
          <!-- Logo -->
          <div 
            @click="goHome" 
            class="flex items-center space-x-1.5 sm:space-x-2 cursor-pointer hover:opacity-80 transition-opacity min-w-0"
          >
            <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src="/bot.png" 
                alt="Logo" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="min-w-0">
              <h1 :class="`text-base sm:text-lg md:text-xl font-bold ${logoClasses} truncate`">
                {{ customTitle || 'AprenderIA' }}
              </h1>
              <p v-if="variant === 'professional'" class="text-xs text-primary/80 hidden sm:block">Professional</p>
            </div>
          </div>
        </div>

        <!-- Center: Navigation (Desktop) -->
        <div class="hidden md:flex items-center space-x-1 lg:space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem v-for="item in navigationItems" :key="item.href">
                <Button
                  @click="router.push(item.href)"
                  variant="ghost"
                  size="sm"
                  :class="route.path === item.href ? 'bg-primary/10 text-primary' : ''"
                >
                  {{ item.label }}
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <!-- Right side: Login + Theme (Desktop) + Mobile menu -->
        <div class="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <!-- Login Button (Desktop) -->
          <Button
            @click="router.push('/login')"
            class="hidden sm:flex bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium px-3 md:px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm md:text-base"
          >
            Inicia sesión
          </Button>
          
          <!-- Theme Toggle (Desktop only) -->
          <div class="hidden md:flex">
            <ToggleTheme />
          </div>

          <!-- Mobile Menu -->
          <Sheet v-model:open="isOpen">
            <SheetTrigger as-child>
              <Button variant="ghost" size="sm" class="md:hidden w-10 h-10 p-0">
                <Menu class="w-5 h-5" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" class="w-[85vw] sm:w-80">
              <SheetHeader class="pb-4">
                <SheetTitle class="text-left text-xl">Navegación</SheetTitle>
              </SheetHeader>
              
              <div class="py-4 space-y-3">
                <div v-for="item in navigationItems" :key="item.href" class="space-y-1">
                  <Button
                    @click="() => { router.push(item.href); closeSheet(); }"
                    variant="ghost"
                    class="w-full justify-start h-12 text-base"
                    :class="route.path === item.href ? 'bg-primary/10 text-primary' : ''"
                  >
                    {{ item.label }}
                  </Button>
                </div>
                
                <Separator class="my-4" />
                
                <!-- Theme Toggle Mobile -->
                <div class="flex items-center justify-between px-2 py-3">
                  <span class="text-sm font-medium text-foreground">Tema</span>
                  <ToggleTheme />
                </div>
                
                <Separator class="my-4" />
                
                <!-- Login Button Mobile -->
                <Button
                  @click="() => { router.push('/login'); closeSheet(); }"
                  class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium h-12 text-base"
                >
                  Inicia sesión
                </Button>

              </div>
              
              <SheetFooter class="pt-4 border-t">
                <div class="text-center text-xs sm:text-sm text-muted-foreground w-full space-y-1">
                  <p>© 2024 AprenderIA</p>
                  <p>Todos los derechos reservados</p>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
