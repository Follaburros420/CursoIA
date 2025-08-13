<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <header class="border-b border-border bg-card">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <h1 class="text-2xl font-bold">Dashboard Legal IA</h1>
            <Badge variant="outline">Beta</Badge>
          </div>
          
          <div class="flex items-center gap-4">
            <LoginButton />
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Welcome Section -->
      <div v-if="!isAuthenticated" class="text-center py-12">
        <div class="max-w-md mx-auto space-y-4">
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Shield class="w-8 h-8 text-primary" />
          </div>
          <h2 class="text-2xl font-bold">Bienvenido al Dashboard Legal IA</h2>
          <p class="text-muted-foreground">
            Inicia sesión para acceder a todas las herramientas de inteligencia artificial para abogados
          </p>
          <LoginButton />
        </div>
      </div>

      <!-- Dashboard Content -->
      <div v-else class="space-y-8">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="p-6 border border-border rounded-lg bg-card">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Search class="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div class="text-2xl font-bold">{{ stats.searches }}</div>
                <div class="text-sm text-muted-foreground">Búsquedas realizadas</div>
              </div>
            </div>
          </div>

          <div class="p-6 border border-border rounded-lg bg-card">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageSquare class="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div class="text-2xl font-bold">{{ stats.chats }}</div>
                <div class="text-sm text-muted-foreground">Conversaciones IA</div>
              </div>
            </div>
          </div>

          <div class="p-6 border border-border rounded-lg bg-card">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText class="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div class="text-2xl font-bold">{{ stats.documents }}</div>
                <div class="text-sm text-muted-foreground">Documentos procesados</div>
              </div>
            </div>
          </div>

          <div class="p-6 border border-border rounded-lg bg-card">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Shield class="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div class="text-2xl font-bold">{{ stats.anonymizations }}</div>
                <div class="text-sm text-muted-foreground">Anonimizaciones PII</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Vector Search -->
          <div class="border border-border rounded-lg bg-card">
            <div class="p-6 border-b border-border">
              <div class="flex items-center gap-3">
                <Search class="w-5 h-5 text-primary" />
                <h3 class="text-lg font-semibold">Búsqueda Vectorial</h3>
              </div>
              <p class="text-sm text-muted-foreground mt-1">
                Busca documentos similares usando IA semántica
              </p>
            </div>
            <div class="p-6">
              <VectorSearch />
            </div>
          </div>

          <!-- LLM Chat -->
          <div class="border border-border rounded-lg bg-card">
            <div class="p-6 border-b border-border">
              <div class="flex items-center gap-3">
                <MessageSquare class="w-5 h-5 text-primary" />
                <h3 class="text-lg font-semibold">Chat con IA Legal</h3>
              </div>
              <p class="text-sm text-muted-foreground mt-1">
                Consulta con tu asistente legal especializado
              </p>
            </div>
            <div class="p-6">
              <LLMChat />
            </div>
          </div>
        </div>

        <!-- PII Anonymizer -->
        <div class="border border-border rounded-lg bg-card">
          <div class="p-6 border-b border-border">
            <div class="flex items-center gap-3">
              <Shield class="w-5 h-5 text-primary" />
              <h3 class="text-lg font-semibold">Anonimizador de PII</h3>
            </div>
            <p class="text-sm text-muted-foreground mt-1">
              Protege información personal en documentos legales
            </p>
          </div>
          <div class="p-6">
            <PIIAnonymizer />
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="border border-border rounded-lg bg-card">
          <div class="p-6 border-b border-border">
            <h3 class="text-lg font-semibold">Actividad Reciente</h3>
          </div>
          <div class="p-6">
            <div v-if="recentActivity.length === 0" class="text-center py-8 text-muted-foreground">
              <Clock class="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No hay actividad reciente</p>
            </div>
            <div v-else class="space-y-3">
              <div
                v-for="(activity, index) in recentActivity"
                :key="index"
                class="flex items-center gap-3 p-3 border border-border rounded-lg"
              >
                <div class="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <component :is="getActivityIcon(activity.type)" class="w-4 h-4" />
                </div>
                <div class="flex-1">
                  <div class="text-sm font-medium">{{ activity.title }}</div>
                  <div class="text-xs text-muted-foreground">{{ activity.description }}</div>
                </div>
                <div class="text-xs text-muted-foreground">
                  {{ formatTime(activity.timestamp) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import LoginButton from './auth/LoginButton.vue'
import VectorSearch from './VectorSearch.vue'
import LLMChat from './LLMChat.vue'
import PIIAnonymizer from './PIIAnonymizer.vue'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  Search,
  MessageSquare,
  FileText,
  Clock,
  Bot
} from 'lucide-vue-next'

// Store
const authStore = useAuthStore()

// State
const stats = ref({
  searches: 0,
  chats: 0,
  documents: 0,
  anonymizations: 0
})

const recentActivity = ref<Array<{
  type: string
  title: string
  description: string
  timestamp: string
}>>([])

// Computed
const isAuthenticated = computed(() => authStore.isAuthenticated)

// Methods
const getActivityIcon = (type: string) => {
  const icons: Record<string, any> = {
    search: Search,
    chat: MessageSquare,
    document: FileText,
    anonymize: Shield,
    login: Bot
  }
  return icons[type] || Clock
}

const formatTime = (timestamp: string) => {
  try {
    return new Date(timestamp).toLocaleString('es-ES', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch {
    return 'Fecha desconocida'
  }
}

const loadStats = () => {
  // Load user statistics from localStorage or API
  const savedStats = localStorage.getItem('dashboard_stats')
  if (savedStats) {
    stats.value = JSON.parse(savedStats)
  }
}

const loadRecentActivity = () => {
  // Load recent activity from localStorage or API
  const savedActivity = localStorage.getItem('recent_activity')
  if (savedActivity) {
    recentActivity.value = JSON.parse(savedActivity)
  }
}

// Initialize
onMounted(() => {
  if (isAuthenticated.value) {
    loadStats()
    loadRecentActivity()
  }
})
</script>
