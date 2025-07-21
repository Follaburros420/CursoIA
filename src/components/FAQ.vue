<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Scale } from "lucide-vue-next";
</script>

<template>
  <section id="faq" class="w-full max-w-lg mx-auto py-16 sm:py-24 px-4">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary mb-2 tracking-wider">
        Preguntas frecuentes
      </h2>
      <h2 class="text-3xl md:text-4xl font-bold">
        Resuelve tus dudas
      </h2>
    </div>

    <Accordion type="single" collapsible class="space-y-6">
      <AccordionItem
        value="item-1"
        class="relative border border-primary/30 bg-gradient-to-br from-primary/80 to-primary/60 p-6 pt-12 rounded-lg shadow-lg"
      >
        <div
          class="absolute -top-4 left-4 md:left-6 bg-primary text-white p-2 rounded-full shadow-md transition-transform duration-300 ease-in-out animate-fade-in-up"
        >
          <Scale class="w-5 h-5" />
        </div>
        <AccordionTrigger class="text-white pl-10 md:pl-12 [&>svg]:hidden">
          <strong>¿Necesito conocimientos previos de IA?</strong>
        </AccordionTrigger>
        <AccordionContent class="text-white/80 pt-2">
          No, arrancamos desde los fundamentos: entenderás qué es la IA y cómo aplicarla al derecho antes de pasar a integraciones prácticas y automatizaciones.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-2"
        class="relative border border-primary/30 bg-gradient-to-br from-primary/80 to-primary/60 p-6 pt-12 rounded-lg shadow-lg"
      >
        <div
          class="absolute -top-4 left-4 md:left-6 bg-primary text-white p-2 rounded-full shadow-md transition-transform duration-300 ease-in-out animate-fade-in-up"
        >
          <Scale class="w-5 h-5" />
        </div>
        <AccordionTrigger class="text-white pl-10 md:pl-12 [&>svg]:hidden">
          <strong>¿El curso está diseñado para verlo a mi ritmo?</strong>
        </AccordionTrigger>
        <AccordionContent class="text-white/80 pt-2">
          Sí. Todo el contenido está disponible on-demand, para que avances cuando quieras, sin clases en vivo ni horarios fijos.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-3"
        class="relative border border-primary/30 bg-gradient-to-br from-primary/80 to-primary/60 p-6 pt-12 rounded-lg shadow-lg"
      >
        <div
          class="absolute -top-4 left-4 md:left-6 bg-primary text-white p-2 rounded-full shadow-md transition-transform duration-300 ease-in-out animate-fade-in-up"
        >
          <Scale class="w-5 h-5" />
        </div>
        <AccordionTrigger class="text-white pl-10 md:pl-12 [&>svg]:hidden">
          <strong>¿Qué herramientas aprenderé?</strong>
        </AccordionTrigger>
        <AccordionContent class="text-white/80 pt-2">
          Trabajaremos con soluciones <strong>open-source</strong>, escalables y ampliamente usadas en la industria legal (p. ej. Supabase, n8n, Qdrant), para que puedas implementarlas en tu despacho sin costos de licencia.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-4"
        class="relative border border-primary/30 bg-gradient-to-br from-primary/80 to-primary/60 p-6 pt-12 rounded-lg shadow-lg"
      >
        <div
          class="absolute -top-4 left-4 md:left-6 bg-primary text-white p-2 rounded-full shadow-md transition-transform duration-300 ease-in-out animate-fade-in-up"
        >
          <Scale class="w-5 h-5" />
        </div>
        <AccordionTrigger class="text-white pl-10 md:pl-12 [&>svg]:hidden">
          <strong>¿Cómo potenciará mi práctica como abogado?</strong>
        </AccordionTrigger>
        <AccordionContent class="text-white/80 pt-2">
          Con flujos de trabajo automatizados que liberan tiempo de tareas repetitivas (búsqueda de información, generación de borradores, seguimiento de plazos), mejorarás tu eficiencia y tendrás más espacio para trabajo estratégico.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-5"
        class="relative border border-primary/30 bg-gradient-to-br from-primary/80 to-primary/60 p-6 pt-12 rounded-lg shadow-lg"
      >
        <div
          class="absolute -top-4 left-4 md:left-6 bg-primary text-white p-2 rounded-full shadow-md transition-transform duration-300 ease-in-out animate-fade-in-up"
        >
          <Scale class="w-5 h-5" />
        </div>
        <AccordionTrigger class="text-white pl-10 md:pl-12 [&>svg]:hidden">
          <strong>¿Puedo inscribir a mi equipo?</strong>
        </AccordionTrigger>
        <AccordionContent class="text-white/80 pt-2">
          Sí. El <strong>Plan Empresarial</strong> está diseñado para despachos y áreas legales: incluye integración a medida, consultoría dedicada y acceso colaborativo para todo tu equipo.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <p class="font-medium mt-6">
      ¿Aún tienes dudas?
      <a href="#contacto" class="text-primary underline">Contáctanos</a>
    </p>
  </section>
</template>
