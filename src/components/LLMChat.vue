<template>
  <div class="llm-chat-container flex flex-col h-full max-h-[600px] border border-border rounded-lg bg-card">
    <!-- Chat Header -->
    <div class="flex items-center justify-between p-4 border-b border-border">
      <div class="flex items-center gap-2">
        <Bot class="w-5 h-5 text-primary" />
        <h3 class="font-semibold">Asistente Legal IA</h3>
        <Badge 
          :variant="isConnected ? 'default' : 'destructive'" 
          class="text-xs"
        >
          {{ isConnected ? 'Conectado' : 'Desconectado' }}
        </Badge>
      </div>
      
      <Button
        @click="clearChat"
        variant="ghost"
        size="sm"
        class="text-muted-foreground hover:text-foreground"
      >
        <Trash2 class="w-4 h-4" />
      </Button>
    </div>

    <!-- Chat Messages -->
    <div 
      ref="messagesContainer"
      class="flex-1 overflow-y-auto p-4 space-y-4"
    >
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="[
          'flex gap-3',
          message.role === 'user' ? 'justify-end' : 'justify-start'
        ]"
      >
        <!-- Avatar -->
        <div
          v-if="message.role === 'assistant'"
          class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
        >
          <Bot class="w-4 h-4 text-primary" />
        </div>

        <!-- Message Content -->
        <div
          :class="[
            'max-w-[80%] p-3 rounded-lg text-sm',
            message.role === 'user'
              ? 'bg-primary text-primary-foreground ml-auto'
              : 'bg-muted text-foreground'
          ]"
        >
          <div class="whitespace-pre-wrap">{{ message.content }}</div>
          <div class="text-xs opacity-70 mt-1">
            {{ formatTime(message.timestamp) }}
          </div>
        </div>

        <!-- User Avatar -->
        <div
          v-if="message.role === 'user'"
          class="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0"
        >
          <User class="w-4 h-4" />
        </div>
      </div>

      <!-- Typing Indicator -->
      <div v-if="isTyping" class="flex gap-3 justify-start">
        <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
          <Bot class="w-4 h-4 text-primary" />
        </div>
        <div class="bg-muted p-3 rounded-lg">
          <div class="flex gap-1">
            <div class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
            <div class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
            <div class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Input -->
    <div class="p-4 border-t border-border">
      <div class="flex gap-2">
        <textarea
          v-model="currentMessage"
          placeholder="Escribe tu consulta legal aquí..."
          class="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 border border-input bg-background rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
          @keydown.enter.prevent="handleKeyDown"
          @input="adjustTextareaHeight"
          ref="textareaRef"
        ></textarea>
        
        <Button
          @click="sendMessage"
          :disabled="!currentMessage.trim() || isTyping"
          class="self-end"
        >
          <Send class="w-4 h-4" />
        </Button>
      </div>
      
      <!-- Quick Actions -->
      <div class="flex flex-wrap gap-2 mt-2">
        <Button
          v-for="action in quickActions"
          :key="action.label"
          @click="useQuickAction(action.prompt)"
          variant="outline"
          size="sm"
          class="text-xs"
        >
          {{ action.label }}
        </Button>
      </div>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="p-4 bg-destructive/10 border-t border-destructive/20">
      <div class="flex items-center gap-2 text-destructive text-sm">
        <AlertCircle class="w-4 h-4" />
        <span>{{ error }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue'
import { llmService, type ChatMessage } from '@/services/llm'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Bot, User, Send, Trash2, AlertCircle } from 'lucide-vue-next'

// State
const messages = ref<ChatMessage[]>([])
const currentMessage = ref('')
const isTyping = ref(false)
const isConnected = ref(false)
const error = ref('')
const messagesContainer = ref<HTMLElement>()
const textareaRef = ref<HTMLTextAreaElement>()

// Quick actions
const quickActions = [
  { label: 'Revisar contrato', prompt: 'Ayúdame a revisar un contrato' },
  { label: 'Análisis legal', prompt: 'Necesito un análisis legal de un documento' },
  { label: 'Investigación jurídica', prompt: 'Quiero hacer una investigación jurídica sobre' },
  { label: 'Generar documento', prompt: 'Ayúdame a generar un documento legal' }
]

// Methods
const sendMessage = async () => {
  if (!currentMessage.value.trim() || isTyping.value) return

  const userMessage: ChatMessage = {
    role: 'user',
    content: currentMessage.value,
    timestamp: new Date().toISOString()
  }

  messages.value.push(userMessage)
  currentMessage.value = ''
  
  await scrollToBottom()

  try {
    isTyping.value = true
    error.value = ''

    const response = await llmService.chat({
      messages: messages.value,
      max_tokens: 1000,
      temperature: 0.7
    })

    const assistantMessage: ChatMessage = {
      role: 'assistant',
      content: response.message.content,
      timestamp: new Date().toISOString()
    }

    messages.value.push(assistantMessage)
    await scrollToBottom()

  } catch (err) {
    console.error('Chat error:', err)
    error.value = err instanceof Error ? err.message : 'Error al enviar mensaje'
    
    // Add error message to chat
    const errorMessage: ChatMessage = {
      role: 'assistant',
      content: 'Lo siento, hubo un error al procesar tu mensaje. Por favor intenta de nuevo.',
      timestamp: new Date().toISOString()
    }
    messages.value.push(errorMessage)
  } finally {
    isTyping.value = false
    await scrollToBottom()
  }
}

const useQuickAction = (prompt: string) => {
  currentMessage.value = prompt
  nextTick(() => {
    textareaRef.value?.focus()
  })
}

const clearChat = () => {
  messages.value = []
  error.value = ''
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.shiftKey) {
    return // Allow new line with Shift+Enter
  }
  sendMessage()
}

const adjustTextareaHeight = () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
    textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px'
  }
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const formatTime = (timestamp?: string) => {
  if (!timestamp) return ''
  try {
    return new Date(timestamp).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch {
    return ''
  }
}

const checkConnection = async () => {
  try {
    await llmService.healthCheck()
    isConnected.value = true
  } catch {
    isConnected.value = false
  }
}

// Initialize
onMounted(() => {
  checkConnection()
  
  // Add welcome message
  messages.value.push({
    role: 'assistant',
    content: '¡Hola! Soy tu asistente legal de IA. Puedo ayudarte con análisis de documentos, revisión de contratos, investigación jurídica y más. ¿En qué puedo asistirte hoy?',
    timestamp: new Date().toISOString()
  })
})
</script>
