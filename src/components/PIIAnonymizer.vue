<template>
  <div class="pii-anonymizer-container space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-bold">Anonimizador de PII</h2>
        <p class="text-muted-foreground">
          Protege información personal identificable en documentos legales
        </p>
      </div>
      
      <Badge 
        :variant="isConnected ? 'default' : 'destructive'" 
        class="text-xs"
      >
        {{ isConnected ? 'Servicio activo' : 'Servicio inactivo' }}
      </Badge>
    </div>

    <!-- Input Section -->
    <div class="space-y-4">
      <div class="space-y-2">
        <label for="document-text" class="text-sm font-medium">
          Documento a anonimizar
        </label>
        <textarea
          id="document-text"
          v-model="inputText"
          placeholder="Pega aquí el texto del documento que contiene información personal..."
          class="w-full min-h-[200px] px-3 py-2 border border-input bg-background rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-vertical"
        ></textarea>
      </div>

      <!-- Options -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="space-y-2">
          <label for="anonymization-method" class="text-sm font-medium">
            Método de anonimización
          </label>
          <select
            id="anonymization-method"
            v-model="anonymizationMethod"
            class="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
          >
            <option value="replace">Reemplazar con placeholders</option>
            <option value="mask">Enmascarar con asteriscos</option>
            <option value="redact">Redactar (eliminar)</option>
            <option value="synthetic">Datos sintéticos</option>
          </select>
        </div>

        <div class="flex items-center space-x-2 pt-6">
          <input
            id="preserve-structure"
            v-model="preserveStructure"
            type="checkbox"
            class="rounded border-input"
          />
          <label for="preserve-structure" class="text-sm">
            Preservar estructura del documento
          </label>
        </div>

        <div class="pt-6">
          <Button
            @click="anonymizeText"
            :disabled="!inputText.trim() || processing"
            class="w-full"
          >
            <Shield class="w-4 h-4 mr-2" />
            {{ processing ? 'Anonimizando...' : 'Anonimizar' }}
          </Button>
        </div>
      </div>
    </div>

    <!-- Results Section -->
    <div v-if="result" class="space-y-4">
      <!-- Anonymized Text -->
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <label class="text-sm font-medium">Texto anonimizado</label>
          <Button
            @click="copyToClipboard(result.anonymized_text)"
            variant="outline"
            size="sm"
          >
            <Copy class="w-4 h-4 mr-2" />
            Copiar
          </Button>
        </div>
        <textarea
          :value="result.anonymized_text"
          readonly
          class="w-full min-h-[200px] px-3 py-2 border border-input bg-muted rounded-md text-sm resize-vertical"
        ></textarea>
      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 border border-border rounded-lg bg-card">
          <div class="text-2xl font-bold text-primary">{{ result.entities_found.length }}</div>
          <div class="text-sm text-muted-foreground">Entidades detectadas</div>
        </div>
        
        <div class="p-4 border border-border rounded-lg bg-card">
          <div class="text-2xl font-bold text-green-600">{{ result.entities_anonymized.length }}</div>
          <div class="text-sm text-muted-foreground">Entidades anonimizadas</div>
        </div>
        
        <div class="p-4 border border-border rounded-lg bg-card">
          <div class="text-2xl font-bold text-blue-600">{{ result.processing_time?.toFixed(2) }}s</div>
          <div class="text-sm text-muted-foreground">Tiempo de procesamiento</div>
        </div>
      </div>

      <!-- Detected Entities -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Entidades detectadas</h3>
        <div class="space-y-2 max-h-[300px] overflow-y-auto">
          <div
            v-for="(entity, index) in result.entities_found"
            :key="index"
            class="flex items-center justify-between p-3 border border-border rounded-lg bg-card"
          >
            <div class="flex items-center gap-3">
              <Badge :variant="getEntityVariant(entity.label)">
                {{ entity.label }}
              </Badge>
              <span class="font-mono text-sm bg-muted px-2 py-1 rounded">
                {{ entity.text }}
              </span>
            </div>
            <div class="text-sm text-muted-foreground">
              {{ Math.round(entity.confidence * 100) }}% confianza
            </div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex gap-2">
        <Button
          @click="validateAnonymization"
          variant="outline"
          :disabled="validating"
        >
          <CheckCircle class="w-4 h-4 mr-2" />
          {{ validating ? 'Validando...' : 'Validar anonimización' }}
        </Button>
        
        <Button
          v-if="result.anonymization_map"
          @click="showDeAnonymization = !showDeAnonymization"
          variant="outline"
        >
          <Eye class="w-4 h-4 mr-2" />
          {{ showDeAnonymization ? 'Ocultar' : 'Ver' }} mapeo
        </Button>
      </div>

      <!-- De-anonymization Map -->
      <div v-if="showDeAnonymization && result.anonymization_map" class="space-y-2">
        <h3 class="text-lg font-semibold">Mapeo de anonimización</h3>
        <div class="p-4 border border-border rounded-lg bg-muted font-mono text-sm max-h-[200px] overflow-y-auto">
          <pre>{{ JSON.stringify(result.anonymization_map, null, 2) }}</pre>
        </div>
      </div>
    </div>

    <!-- Validation Results -->
    <div v-if="validationResult" class="space-y-2">
      <h3 class="text-lg font-semibold">Resultado de validación</h3>
      <div class="p-4 border border-border rounded-lg bg-card">
        <div class="flex items-center gap-2 mb-2">
          <CheckCircle v-if="validationResult.is_valid" class="w-5 h-5 text-green-600" />
          <AlertCircle v-else class="w-5 h-5 text-red-600" />
          <span class="font-medium">
            {{ validationResult.is_valid ? 'Anonimización válida' : 'Anonimización incompleta' }}
          </span>
          <Badge variant="outline">
            {{ Math.round(validationResult.quality_score * 100) }}% calidad
          </Badge>
        </div>
        
        <div v-if="validationResult.remaining_pii.length > 0" class="space-y-2">
          <p class="text-sm text-muted-foreground">PII restante detectado:</p>
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="(pii, index) in validationResult.remaining_pii"
              :key="index"
              variant="destructive"
              class="text-xs"
            >
              {{ pii.text }} ({{ pii.label }})
            </Badge>
          </div>
        </div>
        
        <div v-if="validationResult.recommendations.length > 0" class="mt-3">
          <p class="text-sm font-medium mb-1">Recomendaciones:</p>
          <ul class="text-sm text-muted-foreground space-y-1">
            <li v-for="(rec, index) in validationResult.recommendations" :key="index">
              • {{ rec }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
      <div class="flex items-center gap-2 text-destructive">
        <AlertCircle class="w-4 h-4" />
        <span class="font-medium">Error</span>
      </div>
      <p class="text-sm text-destructive/80 mt-1">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { piiService, type AnonymizationResponse } from '@/services/pii-anonymization'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Shield, Copy, CheckCircle, Eye, AlertCircle } from 'lucide-vue-next'

// State
const inputText = ref('')
const result = ref<AnonymizationResponse | null>(null)
const validationResult = ref<any>(null)
const processing = ref(false)
const validating = ref(false)
const isConnected = ref(false)
const error = ref('')
const showDeAnonymization = ref(false)

// Options
const anonymizationMethod = ref<'mask' | 'replace' | 'redact' | 'synthetic'>('replace')
const preserveStructure = ref(true)

// Methods
const anonymizeText = async () => {
  if (!inputText.value.trim()) return

  try {
    processing.value = true
    error.value = ''
    result.value = null
    validationResult.value = null

    const response = await piiService.anonymizeLegalDocument(
      inputText.value,
      preserveStructure.value,
      anonymizationMethod.value
    )

    result.value = response
  } catch (err) {
    console.error('Anonymization error:', err)
    error.value = err instanceof Error ? err.message : 'Error en la anonimización'
  } finally {
    processing.value = false
  }
}

const validateAnonymization = async () => {
  if (!result.value) return

  try {
    validating.value = true
    
    const validation = await piiService.validateAnonymization(
      result.value.original_text,
      result.value.anonymized_text
    )

    validationResult.value = validation
  } catch (err) {
    console.error('Validation error:', err)
    error.value = err instanceof Error ? err.message : 'Error en la validación'
  } finally {
    validating.value = false
  }
}

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    // You could add a toast notification here
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const getEntityVariant = (label: string): "default" | "destructive" | "outline" | "secondary" => {
  const variants: Record<string, "default" | "destructive" | "outline" | "secondary"> = {
    'PERSON': 'default',
    'EMAIL': 'secondary',
    'PHONE': 'outline',
    'ADDRESS': 'destructive',
    'SSN': 'destructive',
    'CREDIT_CARD': 'destructive',
    'BANK_ACCOUNT': 'destructive'
  }
  return variants[label] || 'outline'
}

const checkConnection = async () => {
  try {
    await piiService.healthCheck()
    isConnected.value = true
  } catch {
    isConnected.value = false
  }
}

// Initialize
onMounted(() => {
  checkConnection()
})
</script>
