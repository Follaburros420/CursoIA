<template>
  <div class="auth-container">
    <!-- Login Button -->
    <Button
      v-if="!isAuthenticated"
      @click="handleGoogleLogin"
      :disabled="loading"
      class="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
    >
      <svg v-if="!loading" class="w-5 h-5" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      <div v-else class="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
      <span>{{ loading ? 'Iniciando sesión...' : 'Continuar con Google' }}</span>
    </Button>

    <!-- User Profile -->
    <div v-else class="flex items-center gap-3">
      <Avatar class="h-8 w-8">
        <AvatarImage :src="userAvatar" :alt="userName" />
        <AvatarFallback>{{ userName.charAt(0).toUpperCase() }}</AvatarFallback>
      </Avatar>
      
      <div class="flex flex-col">
        <span class="text-sm font-medium">{{ userName }}</span>
        <span class="text-xs text-muted-foreground">{{ userEmail }}</span>
      </div>

      <Button
        @click="handleLogout"
        variant="ghost"
        size="sm"
        class="ml-2"
      >
        Salir
      </Button>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="mt-2 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

// Props
interface Props {
  redirectTo?: string
}

const props = withDefaults(defineProps<Props>(), {
  redirectTo: '/'
})

// Store
const authStore = useAuthStore()

// State
const loading = ref(false)
const error = ref('')

// Computed
const isAuthenticated = computed(() => authStore.isAuthenticated)
const userName = computed(() => authStore.userName)
const userEmail = computed(() => authStore.userEmail)
const userAvatar = computed(() => authStore.userAvatar)

// Methods
const handleGoogleLogin = async () => {
  try {
    loading.value = true
    error.value = ''
    
    await authStore.signInWithGoogle()
    
    // The redirect will be handled by Supabase OAuth flow
  } catch (err) {
    console.error('Login error:', err)
    error.value = err instanceof Error ? err.message : 'Error al iniciar sesión'
  } finally {
    loading.value = false
  }
}

const handleLogout = async () => {
  try {
    loading.value = true
    error.value = ''
    
    await authStore.signOut()
    
    // Optionally redirect after logout
    if (props.redirectTo !== '/') {
      window.location.href = props.redirectTo
    }
  } catch (err) {
    console.error('Logout error:', err)
    error.value = err instanceof Error ? err.message : 'Error al cerrar sesión'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
