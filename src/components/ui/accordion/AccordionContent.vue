<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { AccordionContent, type AccordionContentProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<
  AccordionContentProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
class="overflow-hidden text-sm transition-all duration-300 ease-in-out data-[state=closed]:opacity-0 data-[state=open]:opacity-100 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
    <div
      :class="cn('pb-4 pt-0 text-muted-foreground text-[16px]', props.class)"
    >
      <slot />
    </div>
  </AccordionContent>
</template>
