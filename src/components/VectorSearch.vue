<template>
  <div class="vector-search-container space-y-6">
    <!-- Search Input -->
    <div class="space-y-2">
      <label for="search-query" class="text-sm font-medium">
        Buscar en documentos
      </label>
      <div class="flex gap-2">
        <input
          id="search-query"
          v-model="searchQuery"
          type="text"
          placeholder="Escribe tu consulta aquí..."
          class="flex-1 px-3 py-2 border border-input bg-background rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          @keyup.enter="performSearch"
        />
        <Button 
          @click="performSearch" 
          :disabled="!searchQuery.trim() || searching"
          class="px-4"
        >
          <Search class="w-4 h-4 mr-2" />
          {{ searching ? 'Buscando...' : 'Buscar' }}
        </Button>
      </div>
    </div>

    <!-- Search Options -->
    <div class="flex flex-wrap gap-4 text-sm">
      <div class="flex items-center gap-2">
        <label for="match-threshold">Precisión:</label>
        <select
          id="match-threshold"
          v-model="matchThreshold"
          class="px-2 py-1 border border-input bg-background rounded text-sm"
        >
          <option value="0.5">Baja (0.5)</option>
          <option value="0.7">Media (0.7)</option>
          <option value="0.8">Alta (0.8)</option>
          <option value="0.9">Muy Alta (0.9)</option>
        </select>
      </div>
      
      <div class="flex items-center gap-2">
        <label for="match-count">Resultados:</label>
        <select
          id="match-count"
          v-model="matchCount"
          class="px-2 py-1 border border-input bg-background rounded text-sm"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>

    <!-- Search Results -->
    <div v-if="searchResults.length > 0" class="space-y-4">
      <h3 class="text-lg font-semibold">
        Resultados de búsqueda ({{ searchResults.length }})
      </h3>
      
      <div class="space-y-3">
        <div
          v-for="(result, index) in searchResults"
          :key="index"
          class="p-4 border border-border rounded-lg bg-card hover:bg-accent/50 transition-colors"
        >
          <div class="flex justify-between items-start mb-2">
            <div class="flex items-center gap-2">
              <FileText class="w-4 h-4 text-muted-foreground" />
              <span class="font-medium text-sm">
                {{ result.metadata?.title || `Documento ${index + 1}` }}
              </span>
            </div>
            <Badge variant="secondary" class="text-xs">
              {{ Math.round(result.similarity * 100) }}% similar
            </Badge>
          </div>
          
          <p class="text-sm text-muted-foreground mb-2 line-clamp-3">
            {{ result.content }}
          </p>
          
          <div class="flex justify-between items-center text-xs text-muted-foreground">
            <span>
              {{ result.metadata?.source || 'Fuente desconocida' }}
            </span>
            <span>
              {{ formatDate(result.created_at) }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- No Results -->
    <div v-else-if="hasSearched && !searching" class="text-center py-8">
      <FileX class="w-12 h-12 text-muted-foreground mx-auto mb-4" />
      <h3 class="text-lg font-medium mb-2">No se encontraron resultados</h3>
      <p class="text-muted-foreground">
        Intenta con términos diferentes o reduce la precisión de búsqueda
      </p>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
      <div class="flex items-center gap-2 text-destructive">
        <AlertCircle class="w-4 h-4" />
        <span class="font-medium">Error en la búsqueda</span>
      </div>
      <p class="text-sm text-destructive/80 mt-1">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { searchSimilarDocuments } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, FileText, FileX, AlertCircle } from 'lucide-vue-next'

// State
const searchQuery = ref('')
const searchResults = ref<any[]>([])
const searching = ref(false)
const hasSearched = ref(false)
const error = ref('')

// Search options
const matchThreshold = ref(0.7)
const matchCount = ref(10)

// Methods
const performSearch = async () => {
  if (!searchQuery.value.trim()) return

  try {
    searching.value = true
    error.value = ''
    
    const results = await searchSimilarDocuments(
      searchQuery.value,
      matchThreshold.value,
      matchCount.value
    )
    
    searchResults.value = results || []
    hasSearched.value = true
    
    console.log('Search results:', results)
  } catch (err) {
    console.error('Search error:', err)
    error.value = err instanceof Error ? err.message : 'Error en la búsqueda'
    searchResults.value = []
  } finally {
    searching.value = false
  }
}

const formatDate = (dateString: string) => {
  try {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch {
    return 'Fecha desconocida'
  }
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
