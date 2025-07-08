<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";


interface sponsorsProps {
  src: string;
  name: string;
}

const sponsors: sponsorsProps[] = [

</script>

<template>
  <section
    id="sponsors"
    class="max-w-[75%] mx-auto pb-24 sm:pb-32"
  >
    <h2 class="text-lg md:text-xl text-center mb-6">Herramientas que aprenderás</h2>

    <div class="mx-auto">
      <Marquee
        class="gap-[3rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[3rem]"
      >
        <div
          v-for="{ src, name } in sponsors"
          :key="name"
        >
          <div class="flex items-center text-xl md:text-2xl font-medium">
            <img :src="src" :alt="name" class="h-8 w-8 mr-2" />
            {{ name }}
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>
