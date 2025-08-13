import axios from 'axios'

const PII_API_URL = import.meta.env.VITE_PII_ANONYMIZATION_API_URL || 'http://localhost:8001'

// Create axios instance for PII Anonymization API
const piiApi = axios.create({
  baseURL: PII_API_URL,
  timeout: 15000, // 15 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  }
})

// Request interceptor
piiApi.interceptors.request.use(
  (config) => {
    // Add any authentication headers here if needed
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
piiApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('PII Anonymization API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export interface PIIEntity {
  text: string
  label: string
  start: number
  end: number
  confidence: number
}

export interface AnonymizationRequest {
  text: string
  entities_to_anonymize?: string[]
  anonymization_method?: 'mask' | 'replace' | 'redact' | 'synthetic'
  preserve_structure?: boolean
  language?: string
}

export interface AnonymizationResponse {
  original_text: string
  anonymized_text: string
  entities_found: PIIEntity[]
  entities_anonymized: PIIEntity[]
  anonymization_map?: Record<string, string>
  processing_time?: number
}

export interface DetectionRequest {
  text: string
  entities_to_detect?: string[]
  confidence_threshold?: number
  language?: string
}

export interface DetectionResponse {
  text: string
  entities: PIIEntity[]
  processing_time?: number
}

export interface DeAnonymizationRequest {
  anonymized_text: string
  anonymization_map: Record<string, string>
}

export interface DeAnonymizationResponse {
  original_text: string
  success: boolean
  processing_time?: number
}

// PII Anonymization Service
export const piiService = {
  // Detect PII entities in text
  async detectPII(request: DetectionRequest): Promise<DetectionResponse> {
    try {
      const response = await piiApi.post('/detect', request)
      return response.data
    } catch (error) {
      console.error('Error detecting PII:', error)
      throw error
    }
  },

  // Anonymize text by removing/masking PII
  async anonymizeText(request: AnonymizationRequest): Promise<AnonymizationResponse> {
    try {
      const response = await piiApi.post('/anonymize', request)
      return response.data
    } catch (error) {
      console.error('Error anonymizing text:', error)
      throw error
    }
  },

  // De-anonymize text (restore original PII)
  async deAnonymizeText(request: DeAnonymizationRequest): Promise<DeAnonymizationResponse> {
    try {
      const response = await piiApi.post('/deanonymize', request)
      return response.data
    } catch (error) {
      console.error('Error de-anonymizing text:', error)
      throw error
    }
  },

  // Anonymize legal document
  async anonymizeLegalDocument(
    document: string, 
    preserveStructure: boolean = true,
    method: 'mask' | 'replace' | 'redact' | 'synthetic' = 'replace'
  ): Promise<AnonymizationResponse> {
    try {
      const response = await piiApi.post('/anonymize-legal', {
        text: document,
        anonymization_method: method,
        preserve_structure: preserveStructure,
        entities_to_anonymize: [
          'PERSON',
          'EMAIL',
          'PHONE',
          'ADDRESS',
          'SSN',
          'CREDIT_CARD',
          'BANK_ACCOUNT',
          'DATE_OF_BIRTH',
          'PASSPORT',
          'DRIVER_LICENSE'
        ]
      })
      return response.data
    } catch (error) {
      console.error('Error anonymizing legal document:', error)
      throw error
    }
  },

  // Batch anonymization for multiple documents
  async batchAnonymize(
    documents: string[],
    options: Partial<AnonymizationRequest> = {}
  ): Promise<AnonymizationResponse[]> {
    try {
      const response = await piiApi.post('/batch-anonymize', {
        documents,
        ...options
      })
      return response.data
    } catch (error) {
      console.error('Error in batch anonymization:', error)
      throw error
    }
  },

  // Get supported entity types
  async getSupportedEntities(): Promise<{ entities: string[]; languages: string[] }> {
    try {
      const response = await piiApi.get('/entities')
      return response.data
    } catch (error) {
      console.error('Error getting supported entities:', error)
      throw error
    }
  },

  // Validate anonymization quality
  async validateAnonymization(
    originalText: string,
    anonymizedText: string
  ): Promise<{ 
    is_valid: boolean; 
    remaining_pii: PIIEntity[]; 
    quality_score: number;
    recommendations: string[] 
  }> {
    try {
      const response = await piiApi.post('/validate', {
        original_text: originalText,
        anonymized_text: anonymizedText
      })
      return response.data
    } catch (error) {
      console.error('Error validating anonymization:', error)
      throw error
    }
  },

  // Health check
  async healthCheck(): Promise<{ status: string; version?: string; supported_languages?: string[] }> {
    try {
      const response = await piiApi.get('/health')
      return response.data
    } catch (error) {
      console.error('Error in PII service health check:', error)
      throw error
    }
  }
}
