<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { apiService } from '@/services/api';
import { useAuthStore } from '@/stores/auth';
import {
  Send,
  X,
  Minimize2,
  Bot,
  User
} from 'lucide-vue-next';
import WhatsappIcon from "@/icons/WhatsappIcon.vue";
import { marked } from 'marked';

// Auth store
const authStore = useAuthStore();
// Verificar autenticación tanto del store como de localStorage (para Dashboard)
const isAuthenticated = computed(() => {
  // Verificar store de Supabase
  if (authStore.isAuthenticated) return true;
  
  // Verificar localStorage (sistema de autenticación del Dashboard)
  const authStatus = localStorage.getItem('isAuthenticated');
  const loginTime = localStorage.getItem('loginTime');
  
  if (authStatus === 'true' && loginTime) {
    const currentTime = Date.now();
    const sessionTime = parseInt(loginTime);
    const hoursPassed = (currentTime - sessionTime) / (1000 * 60 * 60);
    return hoursPassed < 24; // Sesión válida por 24 horas
  }
  
  return false;
});

// State management
const isExpanded = ref(false);
const isChatOpen = ref(false);
const isMinimized = ref(false);
const messages = ref<{ role: string; content: string; timestamp: Date }[]>([]);
const input = ref('');
const loading = ref(false);
const chatContainer = ref<HTMLElement>();
const hasUnreadMessages = ref(false);
const showWelcomeBubble = ref(false);

// Contact options
const contactOptions = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: WhatsappIcon,
    color: 'bg-green-500 hover:bg-green-600',
    href: 'https://wa.me/message/22XPE3IWTKONL1',
    description: 'Respuesta inmediata'
  },
  {
    id: 'chatbot',
    label: 'Robotino',
    icon: 'bot-image', // Special identifier for bot image
    color: 'bg-blue-500 hover:bg-blue-600',
    description: 'Asistente inteligente'
  }
];

// Functions
const renderMarkdown = (text: string) => {
  try {
    return marked.parse(text);
  } catch (e) {
    console.error('Error parsing markdown:', e);
    return text;
  }
};

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
  if (!isExpanded.value) {
    isChatOpen.value = false;
  }
  // Hide welcome bubble when user interacts
  showWelcomeBubble.value = false;
};

const openChat = () => {
  console.log('🤖 Opening chat...');
  isChatOpen.value = true;
  isMinimized.value = false;
  isExpanded.value = false;
  showWelcomeBubble.value = false;
  console.log('🤖 Chat state:', { isChatOpen: isChatOpen.value, isMinimized: isMinimized.value });

  // Add welcome message if no messages
  if (messages.value.length === 0) {
    setTimeout(() => {
      messages.value.push({
        role: 'bot',
        content: '¡Hola! 👋 Soy Robotino, tu asistente de IA especializado en cursos legales. ¿En qué puedo ayudarte hoy?',
        timestamp: new Date()
      });
      setTimeout(scrollToBottom, 100);
    }, 500);
  }
};

const closeChat = () => {
  isChatOpen.value = false;
};

const minimizeChat = () => {
  isMinimized.value = true;
};

const restoreChat = () => {
  isMinimized.value = false;
  hasUnreadMessages.value = false;
};

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

const sendMessage = async () => {
  if (!input.value.trim() || loading.value) return;

  const userMessage = input.value.trim();
  messages.value.push({
    role: 'user',
    content: userMessage,
    timestamp: new Date()
  });

  input.value = '';
  loading.value = true;

  // Scroll to bottom after adding user message
  setTimeout(scrollToBottom, 100);

  try {
    const response = await apiService.chatbot({ message: userMessage });
    const replyText = response.output || response.message || 'Lo siento, no pude procesar tu mensaje. ¿Podrías intentar de nuevo?';

    // Simulate typing delay for better UX
    setTimeout(() => {
      messages.value.push({
        role: 'bot',
        content: replyText,
        timestamp: new Date()
      });

      // Mark as unread if chat is minimized
      if (isMinimized.value) {
        hasUnreadMessages.value = true;
        // Subtle vibration for mobile devices
        if ('vibrate' in navigator) {
          navigator.vibrate(100);
        }
      }

      loading.value = false;
      setTimeout(scrollToBottom, 100);
    }, 1000 + Math.random() * 1000); // 1-2 seconds delay

  } catch (error) {
    setTimeout(() => {
      messages.value.push({
        role: 'bot',
        content: 'Disculpa, hay un problema de conexión. Por favor, intenta más tarde o contáctanos por WhatsApp.',
        timestamp: new Date()
      });
      loading.value = false;
      setTimeout(scrollToBottom, 100);
    }, 1000);
  }
};

const formatTime = (date: Date) => {
  return date.toLocaleTimeString('es-ES', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

// Handle click outside to close expanded menu
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.floating-contact-hub')) {
    isExpanded.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);

  // Show welcome bubble after 3 seconds (solo para usuarios autenticados)
  if (isAuthenticated.value) {
    setTimeout(() => {
      showWelcomeBubble.value = true;
    }, 3000);

    // Hide welcome bubble after 15 seconds total
    setTimeout(() => {
      showWelcomeBubble.value = false;
    }, 15000);
  }
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="floating-contact-hub">
    <!-- Welcome bubble (solo para usuarios autenticados) -->
    <Transition name="welcome-bubble">
      <div
        v-if="isAuthenticated && showWelcomeBubble && !isExpanded && !isChatOpen"
        class="fixed bottom-24 left-8 z-[60] max-w-xs"
      >
        <div class="relative bg-card/95 backdrop-blur-lg border border-border/50 rounded-2xl p-4 shadow-xl animate-breathe">
          <!-- Speech bubble tail -->
          <div class="absolute -bottom-2 right-6 w-4 h-4 bg-card/95 border-r border-b border-border/50 transform rotate-45"></div>

          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-500/20">
              <img
                src="/bot.png"
                alt="Bot Assistant"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <p class="text-sm text-foreground font-medium mb-1">
                ¡Hola! 👋 Soy Robotino
              </p>
              <p class="text-sm text-muted-foreground">
                ¿En qué puedo ayudarte hoy? 😊
              </p>
            </div>
            <button
              @click="showWelcomeBubble = false"
              class="w-5 h-5 rounded-full hover:bg-muted/50 flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="Cerrar mensaje"
            >
              <X class="w-3 h-3 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Botón de WhatsApp para usuarios NO autenticados -->
    <div v-if="!isAuthenticated" class="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/573208098523"
        target="_blank"
        class="w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsappIcon class="w-8 h-8 text-white" />
      </a>
    </div>

    <!-- Funcionalidad completa del bot para usuarios autenticados -->
    <template v-if="isAuthenticated">
    <!-- Main floating button -->
    <div class="fixed bottom-6 left-6 z-50">
      <!-- Contact options (expanded state) -->
      <Transition name="contact-options">
        <div 
          v-if="isExpanded" 
          class="absolute bottom-16 left-0 space-y-3 mb-2"
        >
          <div 
            v-for="(option, index) in contactOptions" 
            :key="option.id"
            :style="{ transitionDelay: `${index * 100}ms` }"
            class="contact-option-item"
          >
            <div class="flex items-center gap-3 group">
              <!-- Option button -->
              <button
                v-if="option.id === 'chatbot'"
                @click="() => { console.log('🔘 Chatbot button clicked!'); openChat(); }"
                class="w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-1 relative overflow-hidden"
                :aria-label="option.label"
              >
                <div class="w-full h-full rounded-full overflow-hidden bg-white/10 backdrop-blur-sm pointer-events-none">
                  <img
                    src="/bot.png"
                    alt="Chat Bot"
                    class="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              </button>
              
              <a
                v-else
                :href="option.href"
                target="_blank"
                :class="[
                  'w-12 h-12 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center',
                  option.color
                ]"
                :aria-label="option.label"
              >
                <component :is="option.icon" class="w-6 h-6" />
              </a>

              <!-- Option label -->
              <div class="bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div class="text-sm font-medium text-foreground">{{ option.label }}</div>
                <div class="text-xs text-muted-foreground">{{ option.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Main toggle button -->
      <button
        @click="toggleExpanded"
        :class="[
          'w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform flex items-center justify-center',
          isExpanded
            ? 'bg-red-500 hover:bg-red-600 rotate-45'
            : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-110',
          showWelcomeBubble && !isExpanded ? 'animate-pulse-ring' : ''
        ]"
        aria-label="Opciones de contacto"
      >
        <div v-if="!isExpanded" class="w-12 h-12 rounded-full overflow-hidden pointer-events-none">
          <img
            src="/bot.png"
            alt="Chat Assistant"
            class="w-full h-full object-cover pointer-events-none"
          />
        </div>
        <X v-else class="w-7 h-7 text-white" />
      </button>
    </div>
    </template>

    <!-- Chat window (solo para usuarios autenticados) -->
    <Transition name="chat-window">
      <div 
        v-if="isAuthenticated && isChatOpen"
        :class="[
          'fixed z-50 bg-card/95 backdrop-blur-lg border border-border/50 rounded-2xl shadow-2xl transition-all duration-300',
          isMinimized 
            ? 'bottom-6 left-24 w-80 h-16' 
            : 'bottom-6 left-6 w-96 h-[32rem] md:w-[28rem]'
        ]"
      >
        <!-- Chat header -->
        <div class="flex items-center justify-between p-4 border-b border-border/50">
          <div class="flex items-center gap-3">
            <div class="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
              <div class="w-full h-full rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
                <img
                  src="/bot.png"
                  alt="Bot Assistant"
                  class="w-full h-full object-cover"
                />
              </div>
              <!-- Unread indicator -->
              <div
                v-if="hasUnreadMessages && isMinimized"
                class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
              >
                <span class="text-xs text-white font-bold">!</span>
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-foreground">Robotino</h3>
              <p class="text-xs text-muted-foreground">
                <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                {{ loading ? 'Escribiendo...' : 'En línea' }}
              </p>
            </div>
          </div>
          
          <div class="flex items-center gap-2">
            <button
              @click="isMinimized ? restoreChat() : minimizeChat()"
              class="w-8 h-8 rounded-lg hover:bg-muted/50 flex items-center justify-center transition-colors"
              :aria-label="isMinimized ? 'Restaurar chat' : 'Minimizar chat'"
            >
              <Minimize2 class="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              @click="closeChat"
              class="w-8 h-8 rounded-lg hover:bg-muted/50 flex items-center justify-center transition-colors"
              aria-label="Cerrar chat"
            >
              <X class="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <!-- Chat content (hidden when minimized) -->
        <div v-if="!isMinimized" class="flex flex-col h-[calc(100%-5rem)]">
          <!-- Messages container -->
          <div 
            ref="chatContainer"
            class="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth"
          >
            <div
              v-for="(message, index) in messages"
              :key="index"
              :class="[
                'flex message-item',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              ]"
            >
              <div
                :class="[
                  'max-w-[80%] rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md',
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                    : 'bg-muted/50 text-foreground border border-border/50 hover:bg-muted/70'
                ]"
              >
                <div class="flex items-start gap-2 mb-1">
                  <component 
                    :is="message.role === 'user' ? User : Bot" 
                    class="w-4 h-4 mt-0.5 flex-shrink-0" 
                  />
                  <div class="flex-1">
                    <div 
                      v-if="message.role === 'bot'"
                      class="markdown-content text-sm leading-relaxed" 
                      v-html="renderMarkdown(message.content)"
                    ></div>
                    <p v-else class="text-sm leading-relaxed">{{ message.content }}</p>

                    <p 
                      :class="[
                        'text-xs mt-1',
                        message.role === 'user' ? 'text-white/70' : 'text-muted-foreground'
                      ]"
                    >
                      {{ formatTime(message.timestamp) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Loading indicator with typing animation -->
            <div v-if="loading" class="flex justify-start">
              <div class="bg-muted/50 border border-border/50 rounded-2xl px-4 py-3 shadow-sm">
                <div class="flex items-center gap-3">
                  <Bot class="w-4 h-4 text-blue-500" />
                  <div class="flex items-center gap-1">
                    <div class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                    <div class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                  </div>
                  <span class="text-sm text-muted-foreground">Escribiendo...</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Input area -->
          <div class="p-4 border-t border-border/50">
            <div class="flex items-center gap-3">
              <input
                v-model="input"
                @keyup.enter="sendMessage"
                :disabled="loading"
                placeholder="Escribe tu mensaje..."
                class="flex-1 bg-muted/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-colors"
              />
              <button
                @click="sendMessage"
                :disabled="loading || !input.trim()"
                class="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="Enviar mensaje"
              >
                <Send class="w-5 h-5" />
              </button>
            </div>
            

          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Welcome bubble animation */
.welcome-bubble-enter-active,
.welcome-bubble-leave-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.welcome-bubble-enter-from,
.welcome-bubble-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

/* Contact options animation */
.contact-options-enter-active,
.contact-options-leave-active {
  transition: all 0.3s ease;
}

.contact-options-enter-from,
.contact-options-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.contact-option-item {
  animation: slideInUp 0.4s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Chat window animation */
.chat-window-enter-active,
.chat-window-leave-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.chat-window-enter-from,
.chat-window-leave-to {
  opacity: 0;
  transform: translateY(100%) scale(0.8);
}

/* Smooth scrolling */
.scroll-smooth {
  scroll-behavior: smooth;
}

/* Message animations */
.message-item {
  animation: messageSlideIn 0.4s ease-out;
}

@keyframes messageSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Custom scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: hsl(var(--muted));
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground) / 0.3);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground) / 0.5);
}

/* Bounce animation for typing indicator */
@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

/* Breathe animation for welcome bubble */
.animate-breathe {
  animation: breathe 3s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.15);
  }
}

/* Pulse ring animation for main button */
.animate-pulse-ring {
  position: relative;
}

.animate-pulse-ring::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: linear-gradient(45deg, hsl(24.6 95% 53.1%), hsl(24.6 95% 53.1% / 0.5));
  animation: pulse-ring 2s ease-out infinite;
  z-index: -1;
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

/* Markdown Styles */
.markdown-content :deep(p) { margin-bottom: 0.5rem; }
.markdown-content :deep(p:last-child) { margin-bottom: 0; }
.markdown-content :deep(strong) { font-weight: 600; color: hsl(var(--foreground)); }
.markdown-content :deep(em) { font-style: italic; }
.markdown-content :deep(h1), .markdown-content :deep(h2), .markdown-content :deep(h3), .markdown-content :deep(h4) { font-weight: 700; margin-top: 1rem; margin-bottom: 0.5rem; color: hsl(var(--foreground)); }
.markdown-content :deep(h1) { font-size: 1.25em; }
.markdown-content :deep(h2) { font-size: 1.15em; }
.markdown-content :deep(h3) { font-size: 1.1em; }
.markdown-content :deep(ul) { list-style-type: disc; padding-left: 1.25rem; margin-bottom: 0.75rem; }
.markdown-content :deep(ol) { list-style-type: decimal; padding-left: 1.25rem; margin-bottom: 0.75rem; }
.markdown-content :deep(li) { margin-bottom: 0.25rem; }
.markdown-content :deep(blockquote) { border-left: 3px solid hsl(var(--primary) / 0.5); padding-left: 0.75rem; margin-left: 0; margin-right: 0; font-style: italic; color: hsl(var(--muted-foreground)); }
.markdown-content :deep(pre) { background-color: hsl(var(--muted)/0.5); padding: 0.5rem; border-radius: 0.5rem; overflow-x: auto; font-family: monospace; font-size: 0.9em; margin-bottom: 0.75rem; }
.markdown-content :deep(code) { background-color: hsl(var(--muted)/0.5); padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: monospace; font-size: 0.9em; }
.markdown-content :deep(table) { display: block; width: 100%; overflow-x: auto; border-collapse: collapse; margin-bottom: 1rem; font-size: 0.85em; background-color: hsl(var(--card)); border-radius: 0.5rem; border: 1px solid hsl(var(--border) / 0.5); }
.markdown-content :deep(thead) { background-color: hsl(var(--muted)); }
.markdown-content :deep(th), .markdown-content :deep(td) { border: 1px solid hsl(var(--border) / 0.5); padding: 0.5rem; text-align: left; min-width: 100px; }
.markdown-content :deep(th) { font-weight: 600; color: hsl(var(--foreground)); }
.markdown-content :deep(tr:nth-child(even)) { background-color: hsl(var(--muted) / 0.2); }
.markdown-content :deep(hr) { border: 0; border-top: 1px solid hsl(var(--border) / 0.5); margin: 1rem 0; }
.markdown-content :deep(a) { color: hsl(24.6 95% 53.1%); text-decoration: underline; text-underline-offset: 2px; }
.markdown-content :deep(a:hover) { opacity: 0.8; }
</style>
