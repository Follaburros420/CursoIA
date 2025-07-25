<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();

// Navbar scroll state
const isScrolled = ref(false);

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
mode.value = "dark";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
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
import { Separator } from "@/components/ui/separator";

import { ChevronsDown, Menu } from "lucide-vue-next";
import ToggleTheme from "./ToggleTheme.vue";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  { href: "#testimonials", label: "Testimonios" },
  { href: "#contact", label: "Contacto" },
  { href: "#faq", label: "Preguntas" },
];

const featureList: FeatureProps[] = [
  {
    title: "Potencia tu práctica",
    description: "Descubre cómo la IA puede optimizar tareas legales diarias.",
  },
  {
    title: "Fortalece la confianza",
    description:
      "Aprende a usar datos y automatizaciones para ofrecer un mejor servicio.",
  },
  {
    title: "Capta nuevos clientes",
    description:
      "Implementa soluciones que atraigan y retengan clientes potenciales.",
  },
];

const isOpen = ref<boolean>(false);
</script>

<template>
  <header
    :class="[
      'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto sticky border z-50 rounded-2xl flex justify-between items-center bg-card/95 backdrop-blur-lg transition-all duration-300',
      isScrolled
        ? 'top-2 p-3 shadow-2xl bg-card/98 backdrop-blur-xl w-[95%] md:w-[80%] lg:w-[85%]'
        : 'top-5 p-2 shadow-lg hover:shadow-xl hover:scale-[1.01]',
      mode === 'light' ? 'shadow-light' : 'shadow-dark'
    ]"
  >
    <a href="/" class="font-bold text-lg flex items-center group transition-all duration-300 hover:scale-105">
      <ChevronsDown
        class="bg-gradient-to-tr from-orange-500 via-orange-600 to-orange-700 rounded-lg w-9 h-9 mr-2 border text-white transition-all duration-300 group-hover:rotate-180 group-hover:shadow-lg group-hover:shadow-orange-500/25"
      />
      <span class="transition-all duration-300 group-hover:text-orange-600">LexIA</span>
    </a>

    <!-- Mobile menu -->
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu @click="isOpen = true" class="cursor-pointer" />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
        >
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <a href="/" class="flex items-center group transition-all duration-300 hover:scale-105">
                  <ChevronsDown
                    class="bg-gradient-to-tr from-orange-500 via-orange-600 to-orange-700 rounded-lg size-9 mr-2 border text-white transition-all duration-300 group-hover:rotate-180"
                  />
                  <span class="transition-all duration-300 group-hover:text-orange-600">LexIA</span>
                </a>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <Button
                v-for="{ href, label } in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="justify-start text-base transition-all duration-200 hover:bg-orange-500/10 hover:text-orange-600 hover:translate-x-1"
              >
                <a @click="isOpen = false" :href="href">
                  {{ label }}
                </a>
              </Button>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2" />
            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop menu -->
    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-card text-base transition-all duration-200 hover:text-orange-600 hover:scale-105 hover:bg-orange-500/5">
            Características
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="grid w-[600px] grid-cols-2 gap-5 p-4">
              <img
                src="https://www.radix-vue.com/logo.svg"
                alt="Beach"
                class="h-full w-full rounded-md object-cover"
              />
              <ul class="flex flex-col gap-2">
                <li
                  v-for="{ title, description } in featureList"
                  :key="title"
                  class="rounded-md p-3 text-sm hover:bg-muted"
                >
                  <p class="mb-1 font-semibold leading-none text-foreground">
                    {{ title }}
                  </p>
                  <p class="line-clamp-2 text-muted-foreground">
                    {{ description }}
                  </p>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button
              v-for="{ href, label } in routeList"
              :key="label"
              as-child
              variant="ghost"
              class="justify-start text-base transition-all duration-200 hover:bg-orange-500/10 hover:text-orange-600 hover:scale-105"
            >
              <a :href="href">
                {{ label }}
              </a>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <div class="hidden lg:flex">
      <ToggleTheme />
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
