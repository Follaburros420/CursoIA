<script setup lang="ts">
import { ChevronsDown } from "lucide-vue-next";
import Separator from "./ui/separator/Separator.vue";
</script>

<template>
  <footer
    id="footer"
    class="container py-24 pb-16 sm:py-32 sm:pb-24"
  >
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-8"
      >
        <div class="col-span-full xl:col-span-2">
          <a
            href="#"
            class="flex font-bold items-center"
          >
            <ChevronsDown
              class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
            />

            <h3 class="text-2xl font-bold">Pedro Ardila</h3>
          </a>
        </div>


        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Socials</h3>
          <div>
            <a
              href="https://www.linkedin.com/in/pedromaa/"
              target="_blank"
              class="opacity-60 hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>

          <div>
            <a
              href="https://www.youtube.com/@PedroArdila419"
              target="_blank"
              class="opacity-60 hover:opacity-100"
            >
              YouTube
            </a>
          </div>

          <div>
            <a
              href="https://www.instagram.com/pedromanuelardilaarmirola"
              target="_blank"
              class="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <Separator class="my-6" />
      <section className="">
        <h3 class="">
          &copy; 2024 Designed and developed by
          <span class="text-primary">Pedro Ardila</span>
        </h3>
      </section>
    </div>
  </footer>
</template>
