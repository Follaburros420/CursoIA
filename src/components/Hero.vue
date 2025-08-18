<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import WhatsappIcon from "@/icons/WhatsappIcon.vue";
import { ref, onMounted } from 'vue';

// Video ID de YouTube
const videoId = '1dPhWNbfZ6I';
const videoLoaded = ref(false);
const showFallback = ref(false);

// Función para manejar la carga del video
const handleVideoLoad = () => {
  videoLoaded.value = true;
};

// Función para manejar errores del video
const handleVideoError = () => {
  showFallback.value = true;
};

// Verificar si el video se carga correctamente después de un tiempo
onMounted(() => {
  setTimeout(() => {
    if (!videoLoaded.value) {
      showFallback.value = true;
    }
  }, 5000); // 5 segundos de timeout
});
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

        <!-- Video container with responsive aspect ratio -->
        <div class="video-wrapper w-full max-w-4xl mx-auto rounded-lg relative border border-t-2 border-t-orange-500/30 img-border-animation overflow-hidden">
          <!-- Loading placeholder -->
          <div 
            v-if="!videoLoaded && !showFallback" 
            class="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg"
          >
            <div class="flex flex-col items-center space-y-4">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
              <p class="text-white text-sm">Cargando video...</p>
            </div>
          </div>

          <!-- Video thumbnail fallback -->
          <div 
            v-if="showFallback" 
            class="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg cursor-pointer"
            @click="showFallback = false; videoLoaded = false"
          >
            <div class="flex flex-col items-center space-y-4 text-center p-8">
              <img 
                :src="`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`"
                :alt="'Thumbnail del video'"
                class="w-full h-auto rounded-lg opacity-80"
                @error="$event.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors">
                  <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
              </div>
              <p class="text-white text-sm mt-4">Haz clic para reproducir el video</p>
            </div>
          </div>

          <!-- YouTube iframe -->
          <iframe
            v-show="!showFallback"
            width="100%"
            height="100%"
            :src="`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&controls=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0&enablejsapi=1`"
            title="Curso de IA para Abogados - Video Preview"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="rounded-lg"
            loading="eager"
            @load="handleVideoLoad"
            @error="handleVideoError"
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

/* Video wrapper for responsive aspect ratio */
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  background: #000; /* Fondo negro mientras carga el video */
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
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
