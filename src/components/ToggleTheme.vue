<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-vue-next";
</script>

<template>
  <Button
    @click="mode = mode === 'dark' ? 'light' : 'dark'"
    size="sm"
    variant="ghost"
    class="w-10 h-10 p-0"
  >
    <div
      v-if="mode == 'light'"
      class="flex items-center justify-center"
    >
      <Moon class="size-5" />
    </div>

    <div
      v-else="mode == 'dark'"
      class="flex items-center justify-center"
    >
      <Sun class="size-5" />
    </div>

    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
