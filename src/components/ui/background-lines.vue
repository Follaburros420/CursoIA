<script setup lang="ts">
interface Props {
  class?: string
}
const props = defineProps<Props>()
</script>

<template>
  <div :class="['relative w-full overflow-hidden py-16', props.class]">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <svg class="w-full h-full animate-lines" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="lines" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 60L60 0" stroke="currentColor" stroke-width="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" class="text-neutral-300 dark:text-neutral-700"/>
      </svg>
    </div>
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@keyframes lines {
  from { transform: translateY(0); }
  to { transform: translateY(-60px); }
}
.animate-lines {
  animation: lines 30s linear infinite;
}
</style>
