<script setup lang="ts">
import { tilt as vTilt } from "@/directives/tilt";

const props = defineProps<{
  title?: string;
  href?: string;
}>();
</script>

<template>
  <a
    :href="props.href"
    target="_blank"
    class="group relative inline-block"
    v-tilt
  >
    <div
      class="relative rounded-xl overflow-hidden bg-gray-50 dark:bg-black border border-white/20 group-hover:shadow-2xl transition-shadow"
    >
      <slot />
    </div>
  </a>
</template>

