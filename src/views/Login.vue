<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-vue-next";

const router = useRouter();
const code = ref('');
const showCode = ref(false);
const isLoading = ref(false);
const error = ref('');
const success = ref(false);

const VALID_CODES = ['000000', '484643', '141155', '424433', '768857', '664379', '251143', '955567', '252931', '359932', '434187', '719782', '836543', '598785', '271272', '986701', '332139', '243541', '757132', '338524', '128497', '839336', '714834', '398533', '094928', '401260', '276912']

const handleLogin = async () => {
  if (!code.value) {
    error.value = 'Por favor ingresa el código de acceso';
    return;
  }

  isLoading.value = true;
  error.value = '';

  // Simular validación
  setTimeout(() => {
    if (VALID_CODES.includes(code.value)) {
      success.value = true;
      // Guardar estado de autenticación
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('loginTime', Date.now().toString());
      
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } else {
      error.value = 'Código de acceso incorrecto. Inténtalo de nuevo.';
    }
    isLoading.value = false;
  }, 800);
};

const toggleShowCode = () => {
  showCode.value = !showCode.value;
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-4">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

    <div class="relative z-10 w-full max-w-md">
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Lock class="w-8 h-8 text-white" />
        </div>
        <h1 class="text-3xl font-bold text-foreground mb-2">Acceso al Curso</h1>
        <p class="text-muted-foreground">Ingresa tu código de acceso para continuar</p>
      </div>

      <!-- Login Card -->
      <Card class="backdrop-blur-sm bg-card/80 border-border/50 shadow-2xl">
        <CardHeader class="text-center">
          <CardTitle class="text-2xl">Inicio de Sesión</CardTitle>
          <CardDescription>
            Curso de IA para Abogados - Plan Profesional
          </CardDescription>
        </CardHeader>
        
        <CardContent class="space-y-6">
          <!-- Success Message -->
          <Alert v-if="success" class="border-green-200 bg-green-50 dark:bg-green-950/20">
            <CheckCircle class="w-4 h-4 text-green-600" />
            <AlertDescription class="text-green-800 dark:text-green-400">
              ¡Acceso autorizado! Redirigiendo al dashboard...
            </AlertDescription>
          </Alert>

          <!-- Error Message -->
          <Alert v-if="error" class="border-red-200 bg-red-50 dark:bg-red-950/20">
            <AlertCircle class="w-4 h-4 text-red-600" />
            <AlertDescription class="text-red-800 dark:text-red-400">
              {{ error }}
            </AlertDescription>
          </Alert>

          <!-- Code Input -->
          <div class="space-y-4">
            <div class="space-y-2">
              <label class="text-sm font-medium text-foreground">Código de acceso</label>
              <div class="relative">
                <Input
                  v-model="code"
                  :type="showCode ? 'text' : 'password'"
                  placeholder="Ingresa tu código"
                  class="pr-12 text-center font-mono text-lg tracking-widest"
                  :disabled="isLoading || success"
                  @keyup.enter="handleLogin"
                  maxlength="6"
                />
                <Button
                  @click="toggleShowCode"
                  variant="ghost"
                  size="sm"
                  class="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                  :disabled="isLoading || success"
                >
                  <Eye v-if="!showCode" class="w-4 h-4" />
                  <EyeOff v-else class="w-4 h-4" />
                </Button>
              </div>
            </div>

            <!-- Login Button -->
            <Button
              @click="handleLogin"
              :disabled="isLoading || success || !code"
              class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              <div v-if="isLoading" class="flex items-center justify-center">
                <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Verificando...
              </div>
              <span v-else>Acceder al Curso</span>
            </Button>
          </div>

          <!-- Help Text -->
          <div class="text-center text-sm text-muted-foreground">
            <p>¿No tienes código de acceso?</p>
            <Button
              @click="router.push('/plan-profesional')"
              variant="link"
              class="text-primary hover:text-primary/80 p-0 h-auto font-normal"
            >
              Adquiere el Plan Profesional
            </Button>
          </div>
        </CardContent>
      </Card>

      <!-- Back to Home -->
      <div class="text-center mt-6">
        <Button
          @click="router.push('/')"
          variant="ghost"
          class="text-muted-foreground hover:text-foreground"
        >
          ← Volver al inicio
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse-border {
  0%, 100% {
    border-color: rgba(251, 146, 60, 0.3);
  }
  50% {
    border-color: rgba(251, 146, 60, 0.6);
  }
}

.animate-pulse-border {
  animation: pulse-border 2s ease-in-out infinite;
}
</style>
