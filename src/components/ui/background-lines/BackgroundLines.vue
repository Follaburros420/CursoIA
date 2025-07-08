<script setup lang="ts">
const props = defineProps<{ class?: string }>()
</script>

<template>
  <div :class="['relative overflow-hidden', props.class]">
    <div class="absolute inset-0 -z-10 bg-lines"></div>
    <slot />
  </div>
</template>

<style scoped>
.bg-lines {
  background-image: repeating-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px,
    transparent 50px
  );
  animation: move-lines 10s linear infinite;
}
:global(.dark) .bg-lines {
  background-image: repeating-linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1) 0,
    rgba(255, 255, 255, 0.1) 1px,
    transparent 1px,
    transparent 50px
  );
}
@keyframes move-lines {
  from { background-position-y: 0; }
  to { background-position-y: 50px; }
}
</style>
