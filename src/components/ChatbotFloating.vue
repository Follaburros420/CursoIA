<script setup lang="ts">
import { ref } from 'vue';
import { Loader2 } from 'lucide-vue-next';

const open = ref(false);
const messages = ref<{ role: string; content: string }[]>([]);
const input = ref('');
const loading = ref(false);

function toggleChat() {
  open.value = !open.value;
}

async function sendMessage() {
  if (!input.value.trim()) return;
  messages.value.push({ role: 'user', content: input.value });
  const payload = { message: input.value };
  input.value = '';
  loading.value = true;
  try {
    const res = await fetch(
      'https://webhook.asistente-legal.pro/webhook/a50b085e-d472-4185-8ed8-54c80a2067ef',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );
    const json = await res.json();
    const replyText = typeof json === 'object' && json.output
      ? json.output
      : JSON.stringify(json);
    messages.value.push({ role: 'bot', content: replyText });
  } catch (e) {
    messages.value.push({
      role: 'bot',
      content: 'Error al conectar con el chatbot.',
    });
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div>
    <!-- Chatbot button aligned with WhatsApp button -->
    <button
      @click="toggleChat"
      class="fixed bottom-20 right-6 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center z-50"
      aria-label="Abrir chat IA"
    >
<img src="/bot.png" alt="Agente IA" class="w-full h-full rounded-full" />
    </button>

    <div
      v-if="open"
      class="fixed bottom-28 right-6 w-80 h-96 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg shadow-lg flex flex-col z-50"
    >
      <div class="flex-1 p-2 overflow-y-auto space-y-2">
        <div v-for="(msg, i) in messages" :key="i">
          <div v-if="msg.role === 'user'" class="text-right">
            <span
              class="inline-block px-2 py-1 bg-blue-500 text-white rounded-lg"
            >
              {{ msg.content }}
            </span>
          </div>
          <div v-else class="text-left">
            <span
              class="inline-block px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg"
            >
              {{ msg.content }}
            </span>
          </div>
        </div>
        <div v-if="loading" class="flex items-center space-x-2">
          <Loader2 class="w-4 h-4 animate-spin text-gray-500 dark:text-gray-400" />
          <span class="text-gray-500 dark:text-gray-400">escribiendo...</span>
        </div>
      </div>
      <div class="p-2 border-t dark:border-gray-700 flex items-center space-x-2">
        <input
          v-model="input"
          @keyup.enter="sendMessage"
          placeholder="Escribe tu mensaje..."
          class="flex-1 border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
        />
        <button
          @click="sendMessage"
          class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* No additional styles */
</style>
