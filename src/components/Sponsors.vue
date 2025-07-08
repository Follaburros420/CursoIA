<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

import N8nIcon from "@/icons/N8nIcon.vue";
import QdrantIcon from "@/icons/QdrantIcon.vue";
import SupabaseIcon from "@/icons/SupabaseIcon.vue";
import ChatwootIcon from "@/icons/ChatwootIcon.vue";
import RedisIcon from "@/icons/RedisIcon.vue";

interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  { icon: "n8n", name: "n8n" },
  { icon: "qdrant", name: "qdrant" },
  { icon: "supabase", name: "supabase" },
  { icon: "chatwoot", name: "chatwoot" },
  { icon: "redis", name: "redis" },
];

const iconMap: Record<string, any> = {
  n8n: N8nIcon,
  qdrant: QdrantIcon,
  supabase: SupabaseIcon,
  chatwoot: ChatwootIcon,
  redis: RedisIcon,
};
</script>

<template>
  <section
    id="sponsors"
    class="max-w-[75%] mx-auto pb-24 sm:pb-32"
  >
    <h2 class="text-lg md:text-xl text-center mb-6">Herramientas que aprenderás</h2>

    <div class="mx-auto">
      <Marquee
        class="gap-[3rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[3rem]"
      >
        <div
          v-for="{ icon, name } in sponsors"
          :key="name"
        >
          <div class="flex items-center text-xl md:text-2xl font-medium">
            <component
              :is="iconMap[icon]"
              class="mr-2"
            />
            {{ name }}
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>
