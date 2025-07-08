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

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Básico",
    popular: 0,
    price: 0,
    description:
      "Acceso limitado a recursos gratuitos y comunidad.",
    buttonText: "Comenzar gratis",
    benefitList: [
      "1 usuario",
      "Material de introducción",
      "Acceso a comunidad",
    ],
  },
  {
    title: "Profesional",
    popular: 1,
    price: 45,
    description:
      "Curso completo con sesiones en vivo y tutorías.",
    buttonText: "Inscribirme",
    benefitList: [
      "Acceso total al contenido",
      "Soporte prioritario",
      "Ejemplos prácticos",
    ],
  },
  {
    title: "Empresarial",
    popular: 0,
    price: 120,
    description:
      "Formación personalizada para equipos de trabajo.",
    buttonText: "Contáctanos",
    benefitList: [
      "Capacitación in-house",
      "Consultoría dedicada",
      "Acceso a actualizaciones",
    ],
  },
];
</script>

<template>
  <section class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
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
        v-for="{
          title,
          popular,
          price,
          description,
          buttonText,
          benefitList,
        } in plans"
        :key="title"
        :class="{
          'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]':
            popular === PopularPlan?.YES,
        }"
      >
        <CardHeader>
          <CardTitle class="pb-2">
            {{ title }}
          </CardTitle>

          <CardDescription class="pb-4">{{ description }}</CardDescription>

          <div>
            <span class="text-3xl font-bold">${{ price }}</span>
            <span class="text-muted-foreground"> /month</span>
          </div>
        </CardHeader>

        <CardContent class="flex">
          <div class="space-y-4">
            <span
              v-for="benefit in benefitList"
              :key="benefit"
              class="flex"
            >
              <Check class="text-primary mr-2" />
              <h3>{{ benefit }}</h3>
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            :variant="popular === PopularPlan?.NO ? 'secondary' : 'default'"
            class="w-full"
          >
            {{ buttonText }}
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
