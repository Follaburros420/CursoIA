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
  { href: "/plan-profesional", label: "Plan Profesional" },
  { href: "/plan-empresarial", label: "Plan Empresarial" }
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
  ArrowLeft,
  Award,
  Zap
} from "lucide-vue-next";
import ToggleTheme from "./ToggleTheme.vue";
</script>

<template>
  <nav :class="navbarClasses">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        
        <!-- Left side: Logo/Back button -->
        <div class="flex items-center space-x-4">
          <!-- Back button (if enabled) -->
          <Button 
            v-if="showBackButton"
            @click="goBack"
            variant="ghost" 
            size="sm"
            class="mr-2"
          >
            <ArrowLeft class="w-4 h-4 mr-2" />
            Volver
          </Button>
          
          <!-- Logo -->
          <div 
            @click="goHome" 
            class="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <Award v-if="variant === 'professional'" class="w-5 h-5 text-white" />
              <Zap v-else class="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 :class="`text-xl font-bold ${logoClasses}`">
                {{ customTitle || 'AprenderIA' }}
              </h1>
              <p v-if="variant === 'professional'" class="text-xs text-primary/80">Professional</p>
            </div>
          </div>
        </div>

        <!-- Center: Navigation (Desktop) -->
        <div class="hidden md:flex items-center space-x-1">
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

        <!-- Right side: Theme + Mobile menu -->
        <div class="flex items-center space-x-3">
          <!-- Theme Toggle -->
          <ToggleTheme />

          <!-- Mobile Menu -->
          <Sheet v-model:open="isOpen">
            <SheetTrigger as-child>
              <Button variant="ghost" size="sm" class="md:hidden">
                <Menu class="w-5 h-5" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" class="w-80">
              <SheetHeader>
                <SheetTitle class="text-left">Navegación</SheetTitle>
              </SheetHeader>
              
              <div class="py-6 space-y-4">
                <div v-for="item in navigationItems" :key="item.href">
                  <Button
                    @click="() => { router.push(item.href); closeSheet(); }"
                    variant="ghost"
                    class="w-full justify-start"
                    :class="route.path === item.href ? 'bg-primary/10 text-primary' : ''"
                  >
                    {{ item.label }}
                  </Button>
                </div>
                
                <Separator class="my-4" />
                

              </div>
              
              <SheetFooter>
                <div class="text-center text-sm text-muted-foreground">
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
