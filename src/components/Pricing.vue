<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check } from "lucide-vue-next";
import { tilt as vTilt } from "@/directives/tilt";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Básico",
    popular: 0,
    price: "Gratis",
    description:
      "Introducción gratuita al uso de IA en el ámbito legal.",
    buttonText: "Comenzar gratis",
    benefitList: [
      "Acceso a fundamentos de IA para el sector legal",
      "Material teórico de introducción",
      "Acceso a comunidad de apoyo",
    ],
  },
  {
    title: "Profesional",
    popular: 1,
    price: "99 USD",
    description:
      "Aprende como integrar de manera correcta y efectiva la inteligencia artificial en tu trabajo",
    buttonText: "¿Que contiene?",
    benefitList: [
      "Sesiones prácticas en vivo y ejemplos aplicados a despachos legales",
      "Soporte prioritario",
      "Precio original: 300 USD",
    ],
  },
  {
    title: "Élite",
    popular: 0,
    price: "870 USD",
    description:
      "Formación in-house y consultoría dedicada para equipos jurídicos.",
    buttonText: "Conoce más",
    benefitList: [
      "Integración a medida de IA y flujos de trabajo automáticos",
      "Acceso a actualizaciones y roadmap",
      "Formación in-house y consultoría dedicada",
    ],
  },
];
</script>

<template>
  <section class="container py-24 sm:py-32">
    <h2 class="text-lg text-orange-600 text-center mb-2 tracking-wider">
      Planes
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Elige la opción que se adapte a ti
    </h2>

    <h3
      class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14"
    >
      Accede a materiales y soporte según tus necesidades.
    </h3>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
      <Card
        v-tilt
        v-for="{
          title,
          popular,
          price,
          description,
          buttonText,
          benefitList,
        } in plans"
        :key="title"
        :class="[
          'relative group bg-gray-50 dark:bg-black border-black/10 dark:border-white/20 hover:shadow-2xl hover:shadow-emerald-500/10 transition-shadow p-6 rounded-xl',
          {
            'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-orange-500 lg:scale-[1.1]':
              popular === PopularPlan?.YES,
          },
        ]"
      >
        <CardHeader>
          <CardTitle class="pb-2">
            {{ title }}
          </CardTitle>

          <CardDescription class="pb-4">{{ description }}</CardDescription>

          <div>
            <span class="text-3xl font-bold">{{ price }}</span>
          </div>
        </CardHeader>

        <CardContent class="flex">
          <div class="space-y-4">
            <span
              v-for="benefit in benefitList"
              :key="benefit"
              class="flex"
            >
              <Check class="text-orange-600 mr-2" />
              <h3>{{ benefit }}</h3>
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            :variant="popular === PopularPlan?.NO ? 'secondary' : 'default'"
            class="w-full"
            as-child
          >
            <router-link
              v-if="title === 'Profesional'"
              to="/plan-profesional"
            >
              {{ buttonText }}
            </router-link>
            <router-link v-else-if="title === 'Básico'" to="/plan-gratuito">
              {{ buttonText }}
            </router-link>
            <router-link v-else-if="title === 'Élite'" to="/elite">
              {{ buttonText }}
            </router-link>
            <a v-else href="https://wa.me/message/22XPE3IWTKONL1" target="_blank">
              {{ buttonText }}
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
