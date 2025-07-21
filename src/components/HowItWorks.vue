<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "1",
    title: "Solicita tu entrevista",
    description:
      "Agenda una reunión de 20 minutos para evaluar tu perfil y objetivos.",
    image: "roboto.png",
  },
  {
    badgeTitle: "2",
    title: "Aprende las bases",
    description:
      "Domina los conceptos esenciales de IA aplicados al derecho.",
    image: "runner.png",
  },
  {
    badgeTitle: "3",
    title: "Implementa automatizaciones",
    description:
      "Crea flujos de trabajo automáticos con herramientas open source.",
    image: "pacheco.png",
  },
  {
    badgeTitle: "4",
    title: "Aplica en tu despacho",
    description:
      "Recibe acompañamiento para llevar la IA a tu práctica profesional.",
    image: "gamestation.png",
  },
];
</script>

<template>
  <section id="features" class="container py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        ¿Cómo funciona?
      </h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Proceso del curso
      </h2>
    </div>

<div class="w-full px-4 lg:w-[80%] mx-auto relative overflow-hidden">
      <div
        v-for="({ badgeTitle, title, description, image }, index) in HowItWorksList"
        :key="title"
        :class="[
          'flex flex-col items-center mb-8',
          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        ]"
      >
        <Card class="h-full bg-transparent border-0 shadow-none w-full md:w-1/2">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>
            <CardTitle class="text-xl font-semibold">
              {{ title }}
            </CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>

        <img
          :src="image"
          :alt="'Illustration for ' + title"
class="max-w-full w-[150px] md:w-[250px] lg:w-[300px] mx-auto md:mx-0 -scale-x-100 mt-4 md:mt-0"
        />

        <div
          :class="[
            '-z-10 absolute right-0 w-44 h-72 lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl',
            { 'left-0': index % 2 !== 0 }
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>
