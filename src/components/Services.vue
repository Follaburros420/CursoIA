<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Fundamentos de IA",
    description:
      "Comprende las bases tecnológicas para usar IA con criterio jurídico y evitar errores que pueden costarte reputación o clientes.",
    pro: 0,
  },
  {
    title: "Automatización de documentos",
    description:
      "Aprende a generar contratos y escritos de forma automática para producir más sin aumentar horas ni sacrificar calidad jurídica.",
    pro: 0,
  },
  {
    title: "Análisis de jurisprudencia",
    description: "Utiliza modelos para identificar líneas jurisprudenciales reiteradas y argumentar con mayor solidez, Potenciando el as bajo la manga del jurista colombiano, la doctrina probable.",
    pro: 0,
  },
  {
    title: "Integración con herramientas open source",
    description: "Configura soluciones de grado corporativo que hoy usan firmas y equipos legales avanzados.",
    pro: 1,
  },
];
</script>

<template>
  <section
    id="services"
    class="container py-24 sm:py-32 relative overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 rounded-3xl blur-3xl"></div>

    <div class="relative z-10">
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4 animate-fade-in-up" style="animation-delay: 0.2s;">
        Dos tipos de abogados en los próximos años
      </h2>
      
      <div class="flex justify-center mb-6 animate-fade-in-up" style="animation-delay: 0.3s;">
        <img 
          src="/comparativa.jpg" 
          alt="Comparativa entre abogado tradicional y abogado del futuro" 
          class="max-w-[75%] h-auto rounded-lg shadow-lg"
        />
      </div>
      
      <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8 animate-fade-in-up" style="animation-delay: 0.4s;">
        Te guiamos para que no seas el abogado que pierde competitividad mientras otros producen más, mejor y con menos esfuerzo.
      </h3>

      <h2 class="text-lg text-orange-600 text-center mb-2 tracking-wider animate-fade-in-up" style="animation-delay: 0.5s;">
        Módulos del curso
      </h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto relative z-10"
    >
      <div
        v-for="({ title, description, pro }, index) in serviceList"
        :key="title"
        class="animate-fade-in-up"
        :style="`animation-delay: ${0.6 + index * 0.2}s;`"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-muted/80 group cursor-pointer">
          <CardHeader>
            <CardTitle class="group-hover:text-orange-600 transition-colors duration-300">{{ title }}</CardTitle>
            <CardDescription class="group-hover:text-foreground transition-colors duration-300">{{ description }}</CardDescription>
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -top-2 -right-3 animate-pulse"
            >PRO</Badge
          >
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Fade in up animation */
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .hover\:scale-105:hover {
    transform: none;
  }
}
</style>
