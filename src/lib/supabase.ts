import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Fallback values for development or when env vars are missing
const defaultUrl = 'https://placeholder.supabase.co'
const defaultKey = 'placeholder-key'

export const supabase = createClient(
  supabaseUrl || defaultUrl, 
  supabaseAnonKey || defaultKey, 
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
)

// Check if Supabase is properly configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey)

// Types for our database
export interface Document {
  id: string
  content: string
  metadata: Record<string, any>
  embedding?: number[]
  created_at: string
  updated_at: string
}

export interface UserProfile {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface Customer {
  id: string
  email: string
  phone?: string
  access_code?: string
  plan_type?: 'mensual' | 'vitalicio'
  payment_source_id?: string
  subscription_status?: 'activa' | 'cancelada' | 'vencida' | 'pendiente'
  subscription_expires_at?: string | null
  wompi_transaction_id?: string
  wompi_reference?: string
  amount_paid?: number
  currency?: string
  created_at: string
  updated_at: string
}

// Vector search function
export async function searchSimilarDocuments(
  query: string, 
  matchThreshold: number = 0.7, 
  matchCount: number = 10
) {
  try {
    // First, get the embedding for the query
    const queryEmbedding = await getEmbedding(query)
    
    // Then search for similar documents
    const { data, error } = await supabase.rpc('match_documents', {
      query_embedding: queryEmbedding,
      match_threshold: matchThreshold,
      match_count: matchCount
    })

    if (error) {
      console.error('Error searching documents:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in searchSimilarDocuments:', error)
    throw error
  }
}

// Function to get embedding (you'll need to implement this based on your embedding service)
async function getEmbedding(text: string): Promise<number[]> {
  // This is a placeholder - you'll need to implement this based on your embedding service
  // For example, using OpenAI embeddings or your custom embedding API
  
  try {
    const response = await fetch('/api/embeddings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text })
    })

    if (!response.ok) {
      throw new Error('Failed to get embedding')
    }

    const { embedding } = await response.json()
    return embedding
  } catch (error) {
    console.error('Error getting embedding:', error)
    throw error
  }
}

// Function to store document with embedding
export async function storeDocument(content: string, metadata: Record<string, any> = {}) {
  try {
    // Get embedding for the content
    const embedding = await getEmbedding(content)
    
    // Store the document
    const { data, error } = await supabase
      .from('documents')
      .insert({
        content,
        metadata,
        embedding
      })
      .select()
      .single()

    if (error) {
      console.error('Error storing document:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in storeDocument:', error)
    throw error
  }
}

// Function to validate access code
export async function validateAccessCode(code: string): Promise<{ valid: boolean; customer?: Customer; error?: string }> {
  try {
    if (!code || code.length !== 6) {
      return { valid: false, error: 'Código inválido' }
    }

    // Query customer by access_code
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .eq('access_code', code)
      .single()

    if (error) {
      // If no record found, code is invalid
      if (error.code === 'PGRST116') {
        return { valid: false, error: 'Código de acceso no encontrado' }
      }
      console.error('Error validating access code:', error)
      return { valid: false, error: 'Error al validar el código' }
    }

    if (!data) {
      return { valid: false, error: 'Código de acceso no encontrado' }
    }

    const customer = data as Customer

    // Check if subscription is active
    // TEMPORAL: Se permite acceso a cualquiera con código registrado
    /*
    if (customer.subscription_status !== 'activa') {
      return { 
        valid: false, 
        error: customer.subscription_status === 'vencida' 
          ? 'Tu suscripción ha vencido. Por favor, renueva tu plan.' 
          : 'Tu suscripción no está activa.' 
      }
    }

    // For monthly plans, check expiration date
    if (customer.plan_type === 'mensual' && customer.subscription_expires_at) {
      const expiresAt = new Date(customer.subscription_expires_at)
      const now = new Date()
      
      if (expiresAt < now) {
        return { 
          valid: false, 
          error: 'Tu suscripción mensual ha vencido. Por favor, renueva tu plan.' 
        }
      }
    }
    */

    return { valid: true, customer }
  } catch (error) {
    console.error('Error in validateAccessCode:', error)
    return { valid: false, error: 'Error al validar el código' }
  }
}
