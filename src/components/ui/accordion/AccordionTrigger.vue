<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from "radix-vue";
import { Plus } from "lucide-vue-next";
import { cn } from "@/lib/utils";

const props = defineProps<
  AccordionTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
'flex flex-1 gap-4 items-center justify-between py-4 font-medium transition-colors duration-300 ease-in-out hover:underline hover:text-primary [&[data-state=open]>svg]:rotate-[135deg]',
          props.class
        )
      "
    >
      <slot />
      <slot name="icon">
        <Plus class="h-4 w-4 shrink-0 transition-transform duration-200" />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
