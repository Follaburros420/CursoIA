<script setup lang="ts">
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { tilt as vTilt } from "@/directives/tilt";
</script>

<template>
  <section id="contact" class="container py-24 sm:py-32 flex justify-center">
    <Card
      v-tilt
      class="bg-gray-50 relative group dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
      <div class="text-xl font-bold text-neutral-600 dark:text-white">
        Pedro Ardila
      </div>
      <p class="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Abogado Experto en IA y Legaltech
      </p>
      <div class="w-full mt-4">
        <img
          src="/yo.jpg"
          height="1000"
          width="1000"
          class="h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
          alt="Pedro Ardila" />
      </div>
      <div class="flex justify-end items-center mt-6">
        <Button class="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
          Contáctame sin compromiso
        </Button>
      </div>
    </Card>
  </section>
</template>

