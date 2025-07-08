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
    userName: "Ingeniera de datos",
    comment: "El curso fue más de lo que esperaba, aprendí muchísimo.",
    rating: 5.0,
  },
  {
    name: "Juan Carlos Gómez",
    userName: "Desarrollador de software",
    comment: "Superó todas mis expectativas, lo recomiendo completamente.",
    rating: 5.0,
  },
  {
    name: "Valentina Torres",
    userName: "Analista de negocios",
    comment: "Aprendí más de lo que imaginaba, excelente contenido.",
    rating: 4.8,
  },
  {
    name: "Andrés Pérez",
    userName: "Emprendedor",
    comment: "Más de lo que esperaba, me abrió muchas puertas.",
    rating: 4.9,
  },
  {
    name: "Laura Martínez",
    userName: "Estudiante de ingeniería",
    comment: "Me encantó, es justo lo que necesitaba para entender la IA.",
    rating: 5.0,
  },
  {
    name: "Carlos Hernández",
    userName: "Especialista en marketing",
    comment: "El curso superó mis expectativas, muy completo.",
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
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
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
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
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
