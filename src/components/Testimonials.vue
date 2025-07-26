<script setup lang="ts">
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Star, User } from "lucide-vue-next";

interface ReviewProps {
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    name: "Camila Rodríguez",
    userName: "Abogada de familia",
    comment: "El contenido fue claro y fácil de aplicar en mi práctica diaria.",
    rating: 4.9,
  },
  {
    name: "Juan Carlos Gómez",
    userName: "Abogado penalista",
    comment: "Las explicaciones sencillas permiten ver resultados de inmediato.",
    rating: 5.0,
  },
  {
    name: "Valentina Torres",
    userName: "Abogada constitucionalista",
    comment: "Material conciso y práctico que integré en casos constitucionales.",
    rating: 4.8,
  },
  {
    name: "Andrés Pérez",
    userName: "Abogado laboral",
    comment: "Los ejemplos fueron útiles y directos para mi trabajo diario.",
    rating: 4.9,
  },
  {
    name: "Laura Martínez",
    userName: "Abogada civil",
    comment: "La metodología me ayuda a implementar la IA en mis procesos.",
    rating: 5.0,
  },
  {
    name: "Carlos Hernández",
    userName: "Abogado administrativo",
    comment: "Todo está bien estructurado y sencillo de poner en práctica.",
    rating: 4.9,
  },
];
</script>

<template>
  <section
    id="testimonials"
    class="container py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-orange-600 text-center mb-2 tracking-wider">
        Testimonios
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        Lo que opinan nuestros alumnos
      </h2>
    </div>

    <Carousel
      :opts="{
        align: 'start',
      }"
      class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
    >
      <CarouselContent>
        <CarouselItem
          v-for="review in reviewList"
          :key="review.name"
          class="md:basis-1/2 lg:basis-1/3"
        >
          <Card class="bg-muted/50 dark:bg-card">
            <CardContent class="pt-6 pb-0">
              <div class="flex gap-1 pb-6">
                <Star class="size-4 fill-orange-500 text-orange-500" />
                <Star class="size-4 fill-orange-500 text-orange-500" />
                <Star class="size-4 fill-orange-500 text-orange-500" />
                <Star class="size-4 fill-orange-500 text-orange-500" />
                <Star class="size-4 fill-orange-500 text-orange-500" />
              </div>

              "{{ review.comment }}"
            </CardContent>

            <CardHeader>
              <div class="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarFallback>
                    <User class="size-6" />
                  </AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <CardTitle class="text-lg">{{ review.name }}</CardTitle>
                  <CardDescription>{{ review.userName }}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
</template>
