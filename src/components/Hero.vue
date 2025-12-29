<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import WhatsappIcon from "@/icons/WhatsappIcon.vue";

// Video ID de YouTube
const videoId = '1dPhWNbfZ6I';
</script>

<template>
  <section class="container relative overflow-hidden w-full max-w-full">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>

    <div
      class="grid lg:grid-cols-2 lg:max-w-screen-xl gap-4 sm:gap-6 md:gap-8 lg:gap-12 mx-auto py-6 sm:py-8 md:py-12 lg:py-20 xl:py-32 relative z-10 items-start lg:items-center px-3 sm:px-4 md:px-6 w-full max-w-full"
    >
      <!-- Badge - Arriba en móvil, dentro de la columna izquierda en desktop -->
      <div class="text-center lg:hidden order-1 mb-3 sm:mb-4 w-full px-1 sm:px-2">
        <Badge
          variant="outline"
          class="text-xs sm:text-sm py-2 px-2 sm:px-3 md:px-4 hover:scale-105 transition-all duration-300 cursor-pointer border-orange-500/30 bg-orange-500/5 inline-block w-full max-w-full box-border"
        >
          <span class="text-orange-600 font-semibold break-words block w-full">
            +350 abogados ya aplican la IA en su profesión ¿piensas quedarte atrás?
          </span>
        </Badge>
      </div>

      <!-- Columna izquierda: Texto -->
      <div class="text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 order-3 lg:order-1 px-1 sm:px-2 md:px-0 w-full max-w-full box-border">
        <!-- Badge solo visible en desktop dentro de esta columna -->
        <Badge
          variant="outline"
          class="hidden lg:inline-block text-sm py-2 px-4 hover:scale-105 transition-all duration-300 cursor-pointer border-orange-500/30 bg-orange-500/5"
        >
          <span class="text-orange-600 font-semibold">
            +350 abogados ya aplican la IA en su profesión ¿piensas quedarte atrás?
          </span>
        </Badge>

        <div
          class="w-full max-w-full mx-auto lg:mx-0 text-center lg:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold box-border"
        >
          <h1 class="leading-tight break-words">
            <span class="inline animate-fade-in-up" style="animation-delay: 0.2s;">Los </span>
            <span
              class="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text inline animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style="animation-delay: 0.3s;"
              >Abogados
            </span>
            <span class="inline animate-fade-in-up" style="animation-delay: 0.4s;"> que no integren </span>
            <span
              class="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text inline animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style="animation-delay: 0.5s;"
              >IA
            </span>
            <span class="inline animate-fade-in-up" style="animation-delay: 0.6s;"> en su práctica perderán competitividad en los próximos </span>
            <span class="block animate-fade-in-up" style="animation-delay: 0.8s;">12–24 meses.</span>
          </h1>
        </div>

        <p class="w-full max-w-full mx-auto lg:mx-0 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground animate-fade-in-up break-words box-border" style="animation-delay: 1s;">
          Automatiza documentos, mejora tu criterio jurídico con IA y adquiere habilidades de alto valor que ya son indispensables en firmas y departamentos legales.
        </p>

        <div class="mt-3 sm:mt-4 md:mt-6 lg:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 animate-fade-in-up w-full max-w-full box-border" style="animation-delay: 1.2s;">
          <Button class="w-full sm:w-auto sm:min-w-[240px] md:min-w-[280px] px-3 sm:px-4 md:px-6 font-bold group/arrow flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base box-border" as-child>
            <a href="https://wa.me/message/22XPE3IWTKONL1" class="flex items-center justify-center w-full" target="_blank">
              <WhatsappIcon class="size-4 sm:size-5 md:size-7 mr-1.5 sm:mr-2 md:mr-3 group-hover/arrow:scale-110 transition-transform flex-shrink-0" />
              <span class="text-center break-words">Quiero saber mas...</span>
            </a>
            <ArrowRight
              class="size-3 sm:size-4 md:size-5 ml-1.5 sm:ml-2 group-hover/arrow:translate-x-1 transition-transform flex-shrink-0"
            />
          </Button>

          <Button
            as-child
            variant="secondary"
            class="w-full sm:w-auto sm:min-w-[200px] md:w-60 font-bold hover:scale-105 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-600 text-xs sm:text-sm md:text-base box-border"
          >
            <a href="#features" class="break-words">Ver cómo funciona el programa</a>
          </Button>
        </div>
      </div>

      <!-- Columna derecha: Video -->
      <div class="relative group w-full flex justify-center items-center order-2 lg:order-2 mt-2 sm:mt-3 md:mt-4 lg:mt-0 px-1 sm:px-2 md:px-4 lg:px-0 max-w-full">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-2 sm:right-4 md:right-12 w-[85%] sm:w-[90%] h-12 lg:h-[80%] bg-orange-500/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <!-- Video Preview Container - Formato Horizontal 16:9 -->
        <div class="video-container-hero rounded-lg border-2 border-orange-500/50 overflow-hidden bg-black shadow-2xl w-full max-w-full box-border">
          <iframe
            class="video-iframe"
            :src="`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&controls=1&fs=1`"
            title="Curso de IA para Abogados - Preview"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="eager"
          ></iframe>
        </div>

        <!-- gradient effect overlay -->
        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg pointer-events-none"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    border-top-color: hsl(24.6 95% 53.1% / 0.1);
  }

  to {
    border-top-color: hsl(24.6 95% 53.1% / 0.6);
  }
}

/* Fade in up animation */
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Background grid pattern */
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Video container - FORMATO HORIZONTAL 16:9 */
.video-container-hero {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  position: relative !important;
  z-index: 10 !important;
  aspect-ratio: 16/9 !important;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 auto !important;
  min-height: 180px !important;
  box-sizing: border-box !important;
}

.video-iframe {
  border: none !important;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  background: #000 !important;
  width: 100% !important;
  height: 100% !important;
  min-height: 180px !important;
  z-index: 5 !important;
  position: relative !important;
  box-sizing: border-box !important;
}

/* Responsive adjustments for mobile */
@media (max-width: 640px) {
  .video-container-hero {
    width: 100% !important;
    max-width: 100% !important;
    aspect-ratio: 16/9 !important;
    min-height: 180px !important;
    padding: 0 !important;
  }
  
  section.container {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}

@media (min-width: 641px) and (max-width: 1023px) {
  .video-container-hero {
    width: 100% !important;
    max-width: 100% !important;
    min-height: 220px !important;
  }
}

@media (min-width: 1024px) {
  .video-container-hero {
    width: 100% !important;
    max-width: 100% !important;
    min-height: 300px !important;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
