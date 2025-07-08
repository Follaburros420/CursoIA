<script setup lang="ts">
import { onMounted } from 'vue'
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import ClaudeIcon from '@/icons/ClaudeIcon.vue'
import CopilotIcon from '@/icons/CopilotIcon.vue'
import OpenAIIcon from '@/icons/OpenAIIcon.vue'
import GeminiIcon from '@/icons/GeminiIcon.vue'
import MetaIconOutline from '@/icons/MetaIconOutline.vue'

// simple bounce animation using JS to stagger delays
const icons = ['icon1','icon2','icon3','icon4','icon5']

onMounted(() => {
  icons.forEach((name, idx) => {
    const el = document.querySelector<HTMLElement>(`.${name}`)
    if(el){
      el.style.animationDelay = `${idx * 0.2}s`
    }
  })
})
</script>

<template>
  <Card class="mt-8 relative overflow-hidden">
    <div class="p-8 flex justify-center gap-2 items-center">
      <ClaudeIcon class="icon1 h-8 w-8 animate-bounce-slow" />
      <CopilotIcon class="icon2 h-12 w-12 text-white dark:text-white animate-bounce-slow" />
      <OpenAIIcon class="icon3 h-8 w-8 text-white dark:text-white animate-bounce-slow" />
      <MetaIconOutline class="icon4 h-12 w-12 animate-bounce-slow" />
      <GeminiIcon class="icon5 h-8 w-8 animate-bounce-slow" />
    </div>
    <div class="absolute inset-0 pointer-events-none sparkle-container"></div>
    <CardTitle class="text-center">Herramientas destacadas</CardTitle>
    <CardDescription class="text-center">Algunas de las tecnologías que utilizarás en el curso.</CardDescription>
  </Card>
</template>

<style scoped>
@keyframes bounce-slow {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.animate-bounce-slow {
  animation: bounce-slow 1.6s infinite;
}
.sparkle-container::after {
  content: '';
  position: absolute;
  top: 0; left: 50%;
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(14,165,233,0.7), transparent);
  animation: move 4s linear infinite;
}
@keyframes move {
  from { transform: translateY(-100%); }
  to { transform: translateY(100%); }
}
</style>
