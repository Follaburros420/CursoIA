<script setup lang="ts">
import ChatGPTIcon from '@/icons/ChatGPTIcon.vue';
import { defineComponent, h } from 'vue';

// Logo de Meta con ID único
const MetaIconOutline = defineComponent({
  name: 'MetaIconOutline',
  props: { class: { type: String, default: '' } },
  setup(props) {
    const uniqueId = `meta-${Math.random().toString(36).substr(2, 9)}`;
    return () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 287.56 191',
      class: props.class
    }, [
      h('defs', [
        h('linearGradient', {
          id: `meta-gradient-${uniqueId}`,
          x1: '62.34',
          y1: '101.45',
          x2: '260.34',
          y2: '91.45',
          gradientTransform: 'matrix(1, 0, 0, -1, 0, 192)',
          gradientUnits: 'userSpaceOnUse'
        }, [
          h('stop', { offset: '0', 'stop-color': '#0064e1' }),
          h('stop', { offset: '0.4', 'stop-color': '#0064e1' }),
          h('stop', { offset: '0.83', 'stop-color': '#0073ee' }),
          h('stop', { offset: '1', 'stop-color': '#0082fb' })
        ]),
        h('linearGradient', {
          id: `meta-gradient-2-${uniqueId}`,
          x1: '41.42',
          y1: '53',
          x2: '41.42',
          y2: '126',
          gradientTransform: 'matrix(1, 0, 0, -1, 0, 192)',
          gradientUnits: 'userSpaceOnUse'
        }, [
          h('stop', { offset: '0', 'stop-color': '#0082fb' }),
          h('stop', { offset: '1', 'stop-color': '#0064e0' })
        ])
      ]),
      h('path', {
        fill: '#0081fb',
        d: 'M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,53.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-52l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z'
      }),
      h('path', {
        fill: `url(#meta-gradient-${uniqueId})`,
        d: 'M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z'
      }),
      h('path', {
        fill: `url(#meta-gradient-2-${uniqueId})`,
        d: 'M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z'
      })
    ]);
  }
});

// Logo de n8n con color original (rojo)
const N8nIconColored = defineComponent({
  name: 'N8nIconColored',
  props: { class: { type: String, default: '' } },
  setup(props) {
    return () => h('svg', {
      width: '20px',
      height: '20px',
      class: props.class,
      role: 'img',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', {
        d: 'M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632',
        fill: '#FF6D5A'
      })
    ]);
  }
});

// Logo de Chatwoot con color original (azul)
const ChatwootIconColored = defineComponent({
  name: 'ChatwootIconColored',
  props: { class: { type: String, default: '' } },
  setup(props) {
    return () => h('svg', {
      width: '20px',
      height: '20px',
      class: props.class,
      role: 'img',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', {
        d: 'M0 12c0 6.629 5.371 12 12 12s12-5.371 12-12S18.629 0 12 0 0 5.371 0 12m17.008 5.29H11.44a5.57 5.57 0 0 1-5.562-5.567A5.57 5.57 0 0 1 11.44 6.16a5.57 5.57 0 0 1 5.567 5.563Z',
        fill: '#1F93FF'
      })
    ]);
  }
});

// Logo de Supabase con color original (verde)
const SupabaseIconColored = defineComponent({
  name: 'SupabaseIconColored',
  props: { class: { type: String, default: '' } },
  setup(props) {
    return () => h('svg', {
      width: '20px',
      height: '20px',
      class: props.class,
      role: 'img',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', {
        d: 'M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z',
        fill: '#3ECF8E'
      })
    ]);
  }
});

// Logo de Ollama usando imagen de public
const OllamaIconColored = defineComponent({
  name: 'OllamaIconColored',
  props: { class: { type: String, default: '' } },
  setup(props) {
    return () => h('img', {
      src: '/ollama.png',
      alt: 'Ollama',
      class: props.class,
      style: 'object-fit: contain;'
    });
  }
});

// Logo de ComfyUI usando imagen de public
const ComfyUIIcon = defineComponent({
  name: 'ComfyUIIcon',
  props: { class: { type: String, default: '' } },
  setup(props) {
    return () => h('img', {
      src: '/comfy.jpg',
      alt: 'ComfyUI',
      class: props.class,
      style: 'object-fit: contain;'
    });
  }
});

// Logo de MCP usando imagen de public
const MCPIcon = defineComponent({
  name: 'MCPIcon',
  props: { class: { type: String, default: '' } },
  setup(props) {
    return () => h('img', {
      src: '/mcp.png',
      alt: 'MCP',
      class: props.class,
      style: 'object-fit: contain;'
    });
  }
});

// Herramientas con sus componentes de iconos y descripciones
const tools = [
  { 
    name: 'ChatGPT', 
    icon: ChatGPTIcon,
    description: 'Redacción y análisis jurídico asistido (más calidad, menos tiempo).'
  },
  { 
    name: 'n8n', 
    icon: N8nIconColored,
    description: 'Automatización de procesos legales que hoy te quitan horas.'
  },
  { 
    name: 'Chatwoot', 
    icon: ChatwootIconColored,
    description: 'Atención al cliente organizada como firma profesional.'
  },
  { 
    name: 'Meta Ads', 
    icon: MetaIconOutline,
    description: 'Captación predecible de clientes (no depender solo de referidos).'
  },
  { 
    name: 'Supabase', 
    icon: SupabaseIconColored,
    description: 'Base de datos y backend seguro para aplicaciones legales.'
  },
  { 
    name: 'Ollama (IA privada)', 
    icon: OllamaIconColored,
    description: 'Manejo de información sensible sin exponer datos de clientes.'
  },
  { 
    name: 'ComfyUI', 
    icon: ComfyUIIcon,
    description: 'Imagen profesional y autoridad digital sin contratar agencia.'
  },
  { 
    name: 'MCP', 
    icon: MCPIcon,
    description: 'Integración avanzada de modelos de IA en tu flujo de trabajo.'
  }
];

// Duplicar el array para el efecto de scroll infinito
const duplicatedTools = [...tools, ...tools];
</script>

<template>
  <section id="sponsors" class="max-w-[75%] mx-auto pb-12 sm:pb-16">
    <h2 class="text-center text-lg font-semibold mb-8 text-muted-foreground">
      Las habilidades que diferencian al abogado tradicional del <span class="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">Abogado del Futuro</span>:
    </h2>
    <div class="overflow-hidden relative">
      <div class="flex animate-scroll gap-12 items-center">
        <div
          v-for="(tool, index) in duplicatedTools"
          :key="`${tool.name}-${index}`"
          class="flex flex-col items-center gap-2 px-6 py-4 min-w-[200px] group"
        >
          <div class="flex items-center gap-3">
            <component 
              :is="tool.icon" 
              class="h-6 w-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
            />
            <span class="text-lg font-medium text-foreground whitespace-nowrap">{{ tool.name }}</span>
          </div>
          <p class="text-sm text-muted-foreground text-center leading-tight max-w-[180px]">
            {{ tool.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
  display: flex;
  width: fit-content;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
