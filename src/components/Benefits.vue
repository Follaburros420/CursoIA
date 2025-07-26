<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Sparkle,
  Tag,
  Paintbrush,
  Blocks,
  LineChart,
  Wallet,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "blocks",
    title: "Ahorra tiempo valioso",
    description:
      "Automatiza tareas repetitivas y dedica tus esfuerzos a casos estratégicos.",
  },
  {
    icon: "lineChart",
    title: "Mejora la productividad",
    description:
      "Implementa flujos de trabajo eficientes apoyados en IA.",
  },
  {
    icon: "wallet",
    title: "Reduce costos",
    description:
      "Utiliza herramientas open source sin invertir en licencias costosas.",
  },
  {
    icon: "sparkle",
    title: "Diferénciate en el mercado",
    description:
      "Ofrece servicios innovadores basados en inteligencia artificial.",
  },
];

const iconMap: Record<
  string,
  | typeof Sparkle
  | typeof Tag
  | typeof Paintbrush
  | typeof Blocks
  | typeof LineChart
  | typeof Wallet
> = {
  sparkle: Sparkle,
  tag: Tag,
  paintbrush: Paintbrush,
  blocks: Blocks,
  lineChart: LineChart,
  wallet: Wallet,
};
</script>

<template>
  <section
    id="benefits"
    class="container py-24 sm:py-32"
  >
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-orange-600 mb-2 tracking-wider">Beneficios</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ventajas de unirte
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          Conoce cómo la inteligencia artificial puede impulsar tu desarrollo profesional en el campo legal.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component
                class="size-8 mb-6 text-orange-600"
                :is="iconMap[icon]"
              />

              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
