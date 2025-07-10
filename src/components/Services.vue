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
      "Comprende las bases tecnológicas y legales para aplicar IA.",
    pro: 0,
  },
  {
    title: "Automatización de documentos",
    description:
      "Aprende a generar contratos y escritos de forma automática.",
    pro: 0,
  },
  {
    title: "Análisis de jurisprudencia",
    description: "Utiliza modelos para extraer y resumir sentencias.",
    pro: 0,
  },
  {
    title: "Integración con herramientas open source",
    description: "Configura pipelines de trabajo sin pagar licencias.",
    pro: 1,
  },
];
</script>

<template>
  <section
    id="services"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Módulos del curso
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Lleva tu práctica al siguiente nivel
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Te guiamos paso a paso para incorporar IA en tu día a día profesional.
    </h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
        v-for="{ title, description, pro } in serviceList"
        :key="title"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative">
          <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -top-2 -right-3"
            >PRO</Badge
          >
        </Card>
      </div>
    </div>
  </section>
</template>
