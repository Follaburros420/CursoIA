<script setup lang="ts">
import { ChevronsDown } from "lucide-vue-next";
import Separator from "./ui/separator/Separator.vue";
</script>

<template>
  <footer
    id="footer"
    class="container py-24 pb-16 sm:py-32 sm:pb-24 relative"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 rounded-3xl blur-3xl"></div>

    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl relative z-10 backdrop-blur-sm hover:bg-muted/60 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-8"
      >
        <div class="col-span-full xl:col-span-2">
          <a
            href="#"
            class="flex font-bold items-center group transition-all duration-300 hover:scale-105"
          >
            <ChevronsDown
              class="bg-gradient-to-tr from-orange-500 via-orange-600 to-orange-700 rounded-lg w-9 h-9 mr-2 border text-white transition-all duration-300 group-hover:rotate-180 group-hover:shadow-lg group-hover:shadow-orange-500/25"
            />

            <h3 class="text-2xl font-bold transition-all duration-300 group-hover:text-orange-600">Pedro Ardila</h3>
          </a>
        </div>


        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg mb-2 text-orange-600">Socials</h3>
          <div>
            <a
              href="https://www.linkedin.com/in/pedromaa/"
              target="_blank"
              class="opacity-60 hover:opacity-100 transition-all duration-300 hover:text-orange-600 hover:translate-x-2 inline-block"
            >
              📱 LinkedIn
            </a>
          </div>

          <div>
            <a
              href="https://www.youtube.com/@PedroArdila419"
              target="_blank"
              class="opacity-60 hover:opacity-100 transition-all duration-300 hover:text-orange-600 hover:translate-x-2 inline-block"
            >
              🎥 YouTube
            </a>
          </div>

          <div>
            <a
              href="https://www.instagram.com/pedromanuelardilaarmirola"
              target="_blank"
              class="opacity-60 hover:opacity-100 transition-all duration-300 hover:text-orange-600 hover:translate-x-2 inline-block"
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </div>

<div class="text-left mb-4">
  <a href="/politica-de-privacidad" class="text-orange-600 hover:underline">Política de privacidad</a>
</div>
<Separator class="my-6" />
      <section className="">
        <h3 class="">
          &copy; 2024 Designed and developed by
          <span class="text-orange-600">Pedro Ardila</span>
        </h3>
      </section>
    </div>
  </footer>
</template>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

@media (prefers-reduced-motion: no-preference) {
  .hover\:scale-\[1\.01\]:hover {
    transform: scale(1.01);
  }
}
</style>
