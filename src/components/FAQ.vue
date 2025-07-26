<script setup lang="ts">
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
</script>

<template>
  <section id="faq" class="w-full max-w-lg mx-auto py-16 sm:py-24 px-4">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary mb-2 tracking-wider">Preguntas frecuentes</h2>
      <h2 class="text-3xl md:text-4xl font-bold">Resuelve tus dudas</h2>
    </div>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>¿Necesito conocimientos previos de IA?</AccordionTrigger>
        <AccordionContent>
          No, arrancamos desde los fundamentos: entenderás qué es la IA y cómo aplicarla al derecho antes de pasar a integraciones prácticas y automatizaciones.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>¿Cómo está diseñado el curso?</AccordionTrigger>
        <AccordionContent>
          El curso combina sesiones presenciales programadas según tu disponibilidad con retroalimentación detallada al día siguiente para reforzar lo aprendido, asistencia 24/7 vía chat para resolver dudas en tiempo real y una completa biblioteca de materiales (guías, vídeos y plantillas) que te permitirán aplicar la inteligencia artificial de manera práctica en tu carrera de abogado.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>¿Qué herramientas aprenderé?</AccordionTrigger>
        <AccordionContent>
          Conocerás cómo sacarle máximo provecho a las herramientas más poderosas actualmente disponibles en el mercado, además conocerás soluciones open-source, escalables y ampliamente usadas en la industria legal (p. ej. Olama, Supabase, n8n, Qdrant, etc.), para que puedas implementarlas fácilmente en tu despacho y sin costos de licencia.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>¿Cómo potenciará mi práctica como abogado?</AccordionTrigger>
        <AccordionContent>
          Con el conocimiento adecuado sacarás máximo provecho a la inteligencia artificial, además podrás implementar flujos de trabajo automatizados que liberan tiempo de tareas repetitivas (búsqueda de información, generación de borradores, seguimiento de plazos), mejorarás tu eficiencia y tendrás más espacio para trabajo estratégico.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>¿Puedo inscribir a mi equipo?</AccordionTrigger>
        <AccordionContent>
          Sí. El Plan Empresarial está diseñado para despachos y áreas legales: incluye integración a medida, consultoría dedicada y acceso colaborativo para todo tu equipo.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <p class="font-medium mt-6">
      ¿Aún tienes dudas?
      <a href="#contacto" class="text-primary underline">Contáctanos</a>
    </p>
  </section>
</template>

<style scoped>
/* No custom background, transparent styling allows theme to apply */
</style>
