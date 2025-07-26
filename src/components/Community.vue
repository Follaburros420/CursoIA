<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import WhatsappIcon from "@/icons/WhatsappIcon.vue";
</script>

<template>
  <section
    id="community"
    class="py-12"
  >
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card
          class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0"
        >
          <CardHeader>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <Component
                class="w-20 h-20 m-auto mb-4"
                :is="WhatsappIcon"
              />
              ¿Listo para unirte a nuestra
              <span
                class="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text"
              >
                comunidad?
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            Únete a nuestro grupo de WhatsApp para compartir y aprender junto a otros profesionales del derecho que ya se encuentran aprendiendo de IA.
          </CardContent>

          <CardFooter>
            <Button as-child>
              <a
                href="https://chat.whatsapp.com/KZbQbOVM5ihF9gJ215zLuT?mode=r_c"
                target="_blank"
              >
                Unirme a WhatsApp
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    <hr />
  </section>
</template>
