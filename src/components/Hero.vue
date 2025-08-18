<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import WhatsappIcon from "@/icons/WhatsappIcon.vue";

// Video ID de YouTube
const videoId = '1dPhWNbfZ6I';
</script>

<template>
  <section class="container relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>

    <div
      class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 relative z-10"
    >
      <div class="text-center space-y-8">
        <Badge
          variant="outline"
          class="text-sm py-2 px-4 hover:scale-105 transition-all duration-300 cursor-pointer border-orange-500/30 bg-orange-500/5"
        >
          <span class="text-orange-600 font-semibold">
            +200 abogados ya aplican la IA en su profesión ¿piensas quedarte atrás?
          </span>
        </Badge>

        <div
          class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"
        >
          <h1 class="leading-tight">
            <span class="inline-block animate-fade-in-up" style="animation-delay: 0.2s;">Domina la</span>
            <span
              class="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text inline-block animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style="animation-delay: 0.4s;"
              >Inteligencia Artificial
            </span>
            <span class="inline-block animate-fade-in-up" style="animation-delay: 0.6s;">para abogados</span>
            <span class="block animate-fade-in-up" style="animation-delay: 0.8s;">de cero a experto</span>
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground animate-fade-in-up" style="animation-delay: 1s;">
          Aprende desde los fundamentos hasta implementar automatizaciones legales con herramientas open source.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style="animation-delay: 1.2s;">
          <Button class="w-60 font-bold group/arrow flex items-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" as-child>
            <a href="https://wa.me/message/22XPE3IWTKONL1" class="flex items-center" target="_blank">
              <WhatsappIcon class="size-5 mr-2 group-hover/arrow:scale-110 transition-transform" />
              Agenda tu reunión
            </a>
            <ArrowRight
              class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
            />
          </Button>

          <Button
            as-child
            variant="secondary"
            class="w-60 font-bold hover:scale-105 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-600"
          >
            <a href="#features">Ver programa</a>
          </Button>
        </div>
      </div>

      <div class="relative group mt-14">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-orange-500/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <!-- Video Preview Container - DEFINITIVO -->
        <div class="video-container-hero w-full max-w-5xl mx-auto rounded-lg border-2 border-orange-500/50 overflow-hidden bg-black p-1 shadow-2xl">
          <!-- Texto de debug temporal -->
          <div class="text-white text-center py-2 text-sm bg-orange-600">
            📹 Video: Curso de IA para Abogados
          </div>
          
          <iframe
            class="video-iframe w-full rounded-lg"
            width="100%"
            height="350"
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

/* Video container - FORZAR VISIBILIDAD TOTAL */
.video-container-hero {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  min-height: 380px !important;
  position: relative !important;
  z-index: 10 !important;
}

.video-iframe {
  border: none !important;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  min-height: 350px !important;
  background: #000 !important;
  position: relative !important;
  z-index: 5 !important;
}

/* Responsive video heights */
@media (min-width: 768px) {
  .video-iframe {
    height: 400px !important;
    min-height: 400px !important;
  }
  .video-container-hero {
    min-height: 430px !important;
  }
}

@media (min-width: 1024px) {
  .video-iframe {
    height: 450px !important;
    min-height: 450px !important;
  }
  .video-container-hero {
    min-height: 480px !important;
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
