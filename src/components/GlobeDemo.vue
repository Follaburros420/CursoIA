<template>
  <section class="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
    <div class="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
      <div class="text-center z-20 relative">
        <h2 class="text-xl md:text-4xl font-bold text-black dark:text-white">Agenda una cita sin compromiso</h2>
        <p class="text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
          Conoce cómo la inteligencia artificial puede potenciar tu práctica legal.
        </p>
        <div class="mt-4">
          <Button as-child class="font-bold">
            <a href="#contact">Agenda tu reunión</a>
          </Button>
        </div>
      </div>
      <div class="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40"></div>
      <div class="absolute w-full -bottom-20 h-72 md:h-full z-10" ref="globeEl"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Globe from 'globe.gl';
import { Button } from '@/components/ui/button';

const globeEl = ref<HTMLDivElement | null>(null);

const colors = ['#06b6d4', '#3b82f6', '#6366f1'];

const arcs = [
  { startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[0] },
  { startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[1] },
  { startLat: -19.885592, startLng: -43.951191, endLat: -1.303396, endLng: 36.852443, arcAlt: 0.5, color: colors[2] },
  { startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[0] },
  { startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[1] },
  { startLat: -15.785493, startLng: -47.909029, endLat: 36.162809, endLng: -115.119411, arcAlt: 0.3, color: colors[2] },
  { startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[0] },
  { startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[1] },
  { startLat: -6.2088, startLng: 106.8456, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[2] }
];

onMounted(() => {
  if (globeEl.value) {
    const world = new Globe(globeEl.value)
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
      .backgroundColor('rgba(0,0,0,0)')
      .arcsData(arcs)
      .arcColor('color')
      .arcAltitude('arcAlt')
      .arcStroke(1)
      .arcDashLength(0.5)
      .arcDashGap(4)
      .arcDashInitialGap(() => Math.random() * 5)
      .arcDashAnimateTime(1000);

    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 0.5;
  }
});
</script>

<style scoped>
section {
  position: relative;
}
</style>
