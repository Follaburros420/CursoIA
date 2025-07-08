<script setup lang="ts">
import { PinContainer } from './ui/3d-pin'
import { Button } from './ui/button'
</script>

<template>
  <div class="w-full flex items-center justify-center">
    <PinContainer title="/ui.aceternity.com" href="#">
      <div
        class="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[22rem]"
      >
        <h3 class="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
          Pedro Ardila
        </h3>
        <div class="text-base m-0 p-0 font-normal">
          <span class="text-slate-500">Abogado Experto en IA y Legaltech</span>
        </div>
        <div class="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
          <img
            src="/yo.jpg"
            alt="Pedro Ardila"
            class="h-40 w-full object-cover rounded-lg"
          />
        </div>
        <div class="flex justify-end items-center mt-4">
          <Button class="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Contáctame sin compromiso
          </Button>
        </div>
      </div>
    </PinContainer>
  </div>
</template>

