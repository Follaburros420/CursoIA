import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type { User, Session } from '@supabase/supabase-js'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null)
  const session = ref<Session | null>(null)
  const loading = ref(true)

  // Getters
  const isAuthenticated = computed(() => !!user.value)
  const userEmail = computed(() => user.value?.email || '')
  const userName = computed(() => user.value?.user_metadata?.full_name || user.value?.email || '')
  const userAvatar = computed(() => user.value?.user_metadata?.avatar_url || '')

  // Actions
  const initialize = async () => {
    try {
      loading.value = true
      
      // Skip auth initialization if Supabase is not configured
      if (!isSupabaseConfigured) {
        console.warn('Supabase not configured, skipping auth initialization')
        return
      }
      
      // Get initial session
      const { data: { session: initialSession } } = await supabase.auth.getSession()
      
      if (initialSession) {
        session.value = initialSession
        user.value = initialSession.user
      }

      // Listen for auth changes
      supabase.auth.onAuthStateChange(async (event, newSession) => {
        console.log('Auth state changed:', event, newSession?.user?.email)
        
        session.value = newSession
        user.value = newSession?.user || null

        if (event === 'SIGNED_IN' && newSession?.user) {
          await createOrUpdateUserProfile(newSession.user)
        }
      })
    } catch (error) {
      console.error('Error initializing auth:', error)
    } finally {
      loading.value = false
    }
  }

  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) {
        console.error('Error signing in with Google:', error)
        throw error
      }

      return data
    } catch (error) {
      console.error('Error in signInWithGoogle:', error)
      throw error
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        console.error('Error signing out:', error)
        throw error
      }

      user.value = null
      session.value = null
    } catch (error) {
      console.error('Error in signOut:', error)
      throw error
    }
  }

  const createOrUpdateUserProfile = async (authUser: User) => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .upsert({
          id: authUser.id,
          email: authUser.email,
          full_name: authUser.user_metadata?.full_name,
          avatar_url: authUser.user_metadata?.avatar_url,
          updated_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) {
        console.error('Error creating/updating user profile:', error)
        // Don't throw here as this is not critical for auth flow
      }

      return data
    } catch (error) {
      console.error('Error in createOrUpdateUserProfile:', error)
    }
  }

  return {
    // State
    user,
    session,
    loading,
    
    // Getters
    isAuthenticated,
    userEmail,
    userName,
    userAvatar,
    
    // Actions
    initialize,
    signInWithGoogle,
    signOut
  }
})
