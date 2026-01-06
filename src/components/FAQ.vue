<script setup lang="ts">
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { tilt as vTilt } from "@/directives/tilt";
</script>

<template>
  <section id="faq" class="container py-16 sm:py-24">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-lg text-orange-600 mb-2 tracking-wider">Preguntas frecuentes</h2>
      <h2 class="text-3xl md:text-4xl font-bold">Resuelve tus dudas</h2>
    </div>

    <!-- Main Content Grid: Horizontal on large screens, vertical on small -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">

      <!-- FAQ Section -->
      <div class="w-full">
        <Accordion type="single" collapsible class="space-y-4">
          <AccordionItem value="item-1" class="border border-border/50 rounded-lg px-6 py-2 hover:bg-muted/30 transition-colors">
            <AccordionTrigger class="hover:no-underline">¿Necesito conocimientos previos de IA?</AccordionTrigger>
            <AccordionContent class="text-muted-foreground">
              No, arrancamos desde los fundamentos: entenderás qué es la IA y cómo aplicarla al derecho antes de pasar a integraciones prácticas y automatizaciones.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" class="border border-border/50 rounded-lg px-6 py-2 hover:bg-muted/30 transition-colors">
            <AccordionTrigger class="hover:no-underline">¿Cómo está diseñado el curso?</AccordionTrigger>
            <AccordionContent class="text-muted-foreground">
              El curso combina sesiones presenciales programadas según tu disponibilidad con retroalimentación detallada al día siguiente para reforzar lo aprendido, asistencia 24/7 vía chat para resolver dudas en tiempo real y una completa biblioteca de materiales (guías, vídeos y plantillas) que te permitirán aplicar la inteligencia artificial de manera práctica en tu carrera de abogado.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" class="border border-border/50 rounded-lg px-6 py-2 hover:bg-muted/30 transition-colors">
            <AccordionTrigger class="hover:no-underline">¿Qué herramientas aprenderé?</AccordionTrigger>
            <AccordionContent class="text-muted-foreground">
              Conocerás cómo sacarle máximo provecho a las herramientas más poderosas actualmente disponibles en el mercado, además conocerás soluciones open-source, escalables y ampliamente usadas en la industria legal (p. ej. Olama, Supabase, n8n, Qdrant, etc.), para que puedas implementarlas fácilmente en tu despacho y sin costos de licencia.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" class="border border-border/50 rounded-lg px-6 py-2 hover:bg-muted/30 transition-colors">
            <AccordionTrigger class="hover:no-underline">¿Cómo potenciará mi práctica como abogado?</AccordionTrigger>
            <AccordionContent class="text-muted-foreground">
              Con el conocimiento adecuado sacarás máximo provecho a la inteligencia artificial, además podrás implementar flujos de trabajo automatizados que liberan tiempo de tareas repetitivas (búsqueda de información, generación de borradores, seguimiento de plazos), mejorarás tu eficiencia y tendrás más espacio para trabajo estratégico.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" class="border border-border/50 rounded-lg px-6 py-2 hover:bg-muted/30 transition-colors">
            <AccordionTrigger class="hover:no-underline">¿Puedo inscribir a mi equipo?</AccordionTrigger>
            <AccordionContent class="text-muted-foreground">
              Sí. El Plan Empresarial está diseñado para despachos y áreas legales: incluye integración a medida, consultoría dedicada y acceso colaborativo para todo tu equipo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p class="font-medium mt-6 text-center lg:text-left">
          ¿Aún tienes dudas?
          <a href="#contacto" class="text-orange-600 underline hover:text-orange-700 transition-colors">Contáctanos</a>
        </p>
      </div>

      <!-- Pedro Ardila Presentation Card -->
      <div class="flex justify-center lg:justify-end">
        <Card
          v-tilt
          class="bg-gray-50 relative group dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-md h-auto rounded-xl p-6 border hover:shadow-xl transition-all duration-300"
        >
          <div class="text-xl font-bold text-neutral-600 dark:text-white">
            Pedro Ardila
          </div>
          <p class="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Abogado Experto en IA y Legaltech
          </p>

          <!-- Profile Image -->
          <div class="w-full mt-4">
            <img
              src="/yo.jpg"
              height="1000"
              width="1000"
              class="h-60 w-full object-cover rounded-xl group-hover:shadow-xl transition-shadow duration-300"
              alt="Pedro Ardila"
            />
          </div>

          <!-- Contact Button -->
          <div class="flex justify-end items-center mt-6">
            <Button
              class="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:scale-105 transition-transform duration-200"
              as-child
            >
              <a href="https://wa.me/message/22XPE3IWTKONL1" target="_blank">
                resuelve tus dudas con un experto
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Enhanced accordion styling */
[data-state="open"] {
  animation: accordion-down 0.3s ease-out;
}

[data-state="closed"] {
  animation: accordion-up 0.3s ease-out;
}

@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
