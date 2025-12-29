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
import { Badge } from "@/components/ui/badge";
import { tilt as vTilt } from "@/directives/tilt";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string;
  originalPrice?: string;
  discount?: number;
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
      "Introducción práctica a la IA legal",
    buttonText: "Comenzar gratis",
    benefitList: [
      "Acceso al primer módulo: Fundamentos de IA",
      "Ebook gratuito",
      "Acceso a comunidad global",
    ],
  },
  {
    title: "Profesional Mensual",
    popular: 0,
    price: "$49.000 COP",
    originalPrice: "$54.444 COP",
    discount: 10,
    description:
      "Integra IA en tu práctica con control",
    buttonText: "Inscribirme",
    benefitList: [
      "Curso guiado (5 módulos) con casos prácticos y plantillas avanzadas",
      "Redacción legal inteligente + validación de riesgos con IA",
      "Búsquedas jurídicas eficientes para responder consultas",
      "Pago mensual recurrente",
    ],
  },
  {
    title: "Profesional Anual",
    popular: 1,
    price: "$350.000 COP",
    originalPrice: "$653.328 COP",
    discount: 46,
    description:
      "Integra IA en tu práctica con control",
    buttonText: "Inscribirme",
    benefitList: [
      "Reduce 60–80% el tiempo de búsqueda con método + plantillas",
      "Genera documentos legales 3x más rápido sin sacrificar calidad jurídica",
      "Identifica líneas jurisprudenciales reiteradas para argumentar con mayor solidez",
      "Pago único anual - Ahorra más",
      "7 días de garantía",
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

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
      <Card
        v-tilt
        v-for="{
          title,
          popular,
          price,
          originalPrice,
          discount,
          description,
          buttonText,
          benefitList,
        } in plans"
        :key="title"
          :class="[
          'relative group bg-gray-50 dark:bg-black border-black/10 dark:border-white/20 hover:shadow-2xl transition-shadow p-6 rounded-xl',
          {
            'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[2px] border-orange-500 shadow-orange-500/20 hover:shadow-orange-500/30 lg:scale-[1.05]':
              popular === PopularPlan?.YES,
            'hover:shadow-emerald-500/10': popular === PopularPlan?.NO,
          },
        ]"
      >
        <CardHeader>
          <div class="flex items-center justify-between pb-2">
            <CardTitle>
              {{ title }}
            </CardTitle>
            <Badge 
              v-if="title === 'Profesional Anual'"
              class="bg-orange-500 text-white text-xs"
            >
              Mejor relación valor/precio
            </Badge>
          </div>

          <CardDescription class="pb-4">{{ description }}</CardDescription>

          <div class="space-y-2">
            <div v-if="originalPrice && discount" class="flex items-center gap-2">
              <span class="text-lg text-muted-foreground line-through">{{ originalPrice }}</span>
              <Badge class="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                -{{ discount }}%
              </Badge>
            </div>
            <div>
              <span class="text-3xl font-bold">{{ price }}</span>
              <span v-if="title === 'Profesional Mensual'" class="text-sm text-muted-foreground ml-2">/mes</span>
            </div>
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
            :class="[
              'w-full',
              {
                'bg-orange-500 hover:bg-orange-600 text-white': popular === PopularPlan?.YES,
              }
            ]"
            as-child
          >
            <router-link
              v-if="title === 'Profesional Mensual' || title === 'Profesional Anual'"
              to="/plan-profesional"
            >
              {{ buttonText }}
            </router-link>
            <router-link v-else-if="title === 'Básico'" to="/plan-gratuito">
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
