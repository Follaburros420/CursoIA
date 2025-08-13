import axios from 'axios'

const LLM_API_URL = import.meta.env.VITE_LLM_API_URL || 'http://localhost:8000'

// Create axios instance for LLM API
const llmApi = axios.create({
  baseURL: LLM_API_URL,
  timeout: 30000, // 30 seconds timeout for LLM responses
  headers: {
    'Content-Type': 'application/json',
  }
})

// Request interceptor to add auth token if needed
llmApi.interceptors.request.use(
  (config) => {
    // Add any authentication headers here if needed
    // const token = getAuthToken()
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
llmApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('LLM API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export interface LLMRequest {
  prompt: string
  context?: string
  max_tokens?: number
  temperature?: number
  system_prompt?: string
}

export interface LLMResponse {
  response: string
  tokens_used?: number
  model?: string
  processing_time?: number
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp?: string
}

export interface ChatRequest {
  messages: ChatMessage[]
  max_tokens?: number
  temperature?: number
  stream?: boolean
}

export interface ChatResponse {
  message: ChatMessage
  tokens_used?: number
  model?: string
  processing_time?: number
}

// LLM Service functions
export const llmService = {
  // Simple completion
  async complete(request: LLMRequest): Promise<LLMResponse> {
    try {
      const response = await llmApi.post('/complete', request)
      return response.data
    } catch (error) {
      console.error('Error in LLM completion:', error)
      throw error
    }
  },

  // Chat completion
  async chat(request: ChatRequest): Promise<ChatResponse> {
    try {
      const response = await llmApi.post('/chat', request)
      return response.data
    } catch (error) {
      console.error('Error in LLM chat:', error)
      throw error
    }
  },

  // Legal document analysis
  async analyzeDocument(document: string, analysisType: string = 'general'): Promise<LLMResponse> {
    try {
      const response = await llmApi.post('/analyze-document', {
        document,
        analysis_type: analysisType,
        system_prompt: 'You are a legal AI assistant specialized in document analysis. Provide detailed, accurate legal insights.'
      })
      return response.data
    } catch (error) {
      console.error('Error in document analysis:', error)
      throw error
    }
  },

  // Contract review
  async reviewContract(contract: string, reviewType: string = 'comprehensive'): Promise<LLMResponse> {
    try {
      const response = await llmApi.post('/review-contract', {
        contract,
        review_type: reviewType,
        system_prompt: 'You are a legal AI assistant specialized in contract review. Identify risks, missing clauses, and provide recommendations.'
      })
      return response.data
    } catch (error) {
      console.error('Error in contract review:', error)
      throw error
    }
  },

  // Legal research
  async legalResearch(query: string, jurisdiction: string = 'general'): Promise<LLMResponse> {
    try {
      const response = await llmApi.post('/legal-research', {
        query,
        jurisdiction,
        system_prompt: 'You are a legal research AI assistant. Provide accurate legal information with proper citations and disclaimers.'
      })
      return response.data
    } catch (error) {
      console.error('Error in legal research:', error)
      throw error
    }
  },

  // Generate legal document
  async generateDocument(documentType: string, parameters: Record<string, any>): Promise<LLMResponse> {
    try {
      const response = await llmApi.post('/generate-document', {
        document_type: documentType,
        parameters,
        system_prompt: 'You are a legal document generation AI. Create professional, legally sound documents based on the provided parameters.'
      })
      return response.data
    } catch (error) {
      console.error('Error in document generation:', error)
      throw error
    }
  },

  // Health check
  async healthCheck(): Promise<{ status: string; model?: string; version?: string }> {
    try {
      const response = await llmApi.get('/health')
      return response.data
    } catch (error) {
      console.error('Error in LLM health check:', error)
      throw error
    }
  }
}
