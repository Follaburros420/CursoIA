<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AiToolsCard from "./AiToolsCard.vue";

import {
  Paintbrush,
  MessageCircle,
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  MousePointerClick,
  Newspaper,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Aplicaciones prácticas",
    description:
      "Ejemplos reales de IA aplicada a casos y procesos legales.",
  },
  {
    icon: "badgeCheck",
    title: "Casos de éxito",
    description:
      "Analiza proyectos jurídicos que han mejorado con IA.",
  },
  {
    icon: "goal",
    title: "Automatización",
    description:
      "Aprende a diseñar flujos automáticos para tu despacho.",
  },
  {
    icon: "pictureInPicture",
    title: "Recursos abiertos",
    description:
      "Utiliza herramientas y librerías open source sin costo.",
  },
  {
    icon: "mousePointerClick",
    title: "Asesoría personalizada",
    description:
      "Guiamos tu proceso de adopción de IA paso a paso.",
  },
  {
    icon: "newspaper",
    title: "Actualización constante",
    description:
      "Mantente al día con las últimas tendencias en IA y derecho.",
  },
];

const iconMap: Record<
  string,
  | typeof TabletSmartphone
  | typeof BadgeCheck
  | typeof Goal
  | typeof PictureInPicture
  | typeof Paintbrush
  | typeof MousePointerClick
  | typeof MessageCircle
  | typeof Newspaper
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  pictureInPicture: PictureInPicture,
  paintbrush: Paintbrush,
  mousePointerClick: MousePointerClick,
  messageCircle: MessageCircle,
  newspaper: Newspaper,
};
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Contenido del curso
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Todo lo que aprenderás
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Desde conceptos básicos de IA hasta la automatización de flujos legales.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>

    <div class="mt-12 flex justify-center">
      <AiToolsCard />
    </div>
  </section>
</template>

<style lang="less" scoped></style>
