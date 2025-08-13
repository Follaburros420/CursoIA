<template>
  <div class="min-h-screen flex items-center justify-center bg-background">
    <div class="max-w-md w-full mx-auto p-6">
      <div class="text-center">
        <!-- Loading State -->
        <div v-if="loading" class="space-y-4">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <h2 class="text-xl font-semibold">Completando inicio de sesión...</h2>
          <p class="text-muted-foreground">Por favor espera un momento</p>
        </div>

        <!-- Success State -->
        <div v-else-if="success" class="space-y-4">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-green-600">¡Inicio de sesión exitoso!</h2>
          <p class="text-muted-foreground">Redirigiendo...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="space-y-4">
          <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-red-600">Error en el inicio de sesión</h2>
          <p class="text-muted-foreground">{{ error }}</p>
          <Button @click="goHome" class="mt-4">
            Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'

const router = useRouter()

const loading = ref(true)
const success = ref(false)
const error = ref('')

const goHome = () => {
  router.push('/')
}

onMounted(async () => {
  try {
    // Handle the OAuth callback
    const { data, error: authError } = await supabase.auth.getSession()
    
    if (authError) {
      throw authError
    }

    if (data.session) {
      success.value = true
      
      // Wait a moment to show success message
      setTimeout(() => {
        // Get redirect URL from localStorage or default to home
        const redirectTo = localStorage.getItem('auth_redirect_to') || '/'
        localStorage.removeItem('auth_redirect_to')
        
        router.push(redirectTo)
      }, 2000)
    } else {
      throw new Error('No se pudo completar el inicio de sesión')
    }
  } catch (err) {
    console.error('Auth callback error:', err)
    error.value = err instanceof Error ? err.message : 'Error desconocido'
  } finally {
    loading.value = false
  }
})
</script>
