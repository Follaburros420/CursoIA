<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Necesito conocimientos previos de IA?",
    answer: "No, comenzamos desde cero y te guiamos paso a paso.",
    value: "item-1",
  },
  {
    question: "¿Las clases son en vivo?",
    answer:
      "Sí, contarás con sesiones en directo y material grabado.",
    value: "item-2",
  },
  {
    question:
      "¿Obtendré certificado al finalizar?",
    answer:
      "Sí, recibirás un certificado de aprovechamiento del curso.",
    value: "item-3",
  },
  {
    question: "¿Cómo agendo la reunión?",
    answer: "Al completar el formulario recibirás un enlace de calendario.",
    value: "item-4",
  },
  {
    question:
      "¿Puedo inscribir a mi equipo?",
    answer: "Sí, contamos con planes para empresas y despachos.",
    value: "item-5",
  },
];
</script>

<template>
  <section
    id="faq"
    class="container md:w-[700px] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">Preguntas frecuentes</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Resuelve tus dudas
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      ¿Aún tienes dudas?
      <a
        href="#contact"
        class="text-muted-foreground underline"
        >Contáctanos</a
      >
    </h3>
  </section>
</template>
