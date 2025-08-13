# Guía de Configuración - Sistema Legal IA

Esta guía te ayudará a configurar todas las funcionalidades del sistema: Vector Store de Supabase, autenticación con Google, y conexión con tus APIs personalizadas.

## 📋 Requisitos Previos

- Cuenta de Supabase
- Proyecto de Google Cloud Console
- Servidor con tu LLM personalizado
- Servidor con microservicio de anonimización PII
- Node.js 22.x

## 🔧 1. Configuración de Supabase

### 1.1 Crear proyecto en Supabase
1. Ve a [supabase.com](https://supabase.com) y crea un nuevo proyecto
2. Anota la URL del proyecto y la clave anónima

### 1.2 Configurar la base de datos
1. Ve a SQL Editor en tu dashboard de Supabase
2. Ejecuta el contenido del archivo `supabase-setup.sql`
3. Esto creará:
   - Extensión vector
   - Tablas `user_profiles` y `documents`
   - Funciones de búsqueda vectorial
   - Políticas RLS

### 1.3 Configurar autenticación
1. Ve a Authentication > Settings
2. Habilita "Enable email confirmations" si lo deseas
3. Configura la URL de redirección: `https://tu-dominio.com/auth/callback`

## 🔐 2. Configuración de Google OAuth

### 2.1 Google Cloud Console
1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la API de Google+ 
4. Ve a "Credentials" > "Create Credentials" > "OAuth 2.0 Client ID"
5. Configura:
   - Application type: Web application
   - Authorized JavaScript origins: `https://tu-dominio.com`
   - Authorized redirect URIs: `https://tu-supabase-url.supabase.co/auth/v1/callback`

### 2.2 Configurar en Supabase
1. Ve a Authentication > Settings > Auth Providers
2. Habilita Google
3. Ingresa tu Client ID y Client Secret de Google

## 🤖 3. Configuración de APIs Personalizadas

### 3.1 API del LLM
Tu servidor LLM debe exponer estos endpoints:

```
POST /complete
POST /chat
POST /analyze-document
POST /review-contract
POST /legal-research
POST /generate-document
GET /health
```

### 3.2 API de Anonimización PII
Tu microservicio Python debe exponer:

```
POST /detect
POST /anonymize
POST /deanonymize
POST /anonymize-legal
POST /batch-anonymize
POST /validate
GET /entities
GET /health
```

## 🔑 4. Variables de Entorno

Crea un archivo `.env` con estas variables:

```env
# Wompi (ya configurado)
VITE_WOMPI_PUBLIC_KEY=pub_prod_C01dSld0Z6syyGgA3u7SkF0TMqZdyQAu
WOMPI_PRIVATE_KEY=prv_prod_dc02fE63hn6RTaqwPrIYB14vKeEkw27k
WEBHOOK_INTEGRITY_SECRET=prod_integrity_vJqHB0dzaWk5ym0qxxnQYlK6ZotJjfIz
WEBHOOK_EVENTS_SECRET=prod_events_qV7dkxX6oae5AxHLETiau73hSnzxBxnH

# Supabase
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_clave_anonima
SUPABASE_SERVICE_ROLE_KEY=tu_clave_service_role

# Google OAuth
VITE_GOOGLE_CLIENT_ID=tu_google_client_id
GOOGLE_CLIENT_SECRET=tu_google_client_secret

# APIs Personalizadas
VITE_LLM_API_URL=http://tu-servidor-llm:8000
VITE_PII_ANONYMIZATION_API_URL=http://tu-servidor-pii:8001
```

## 🚀 5. Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📱 6. Uso de las Funcionalidades

### 6.1 Autenticación
- Los usuarios pueden iniciar sesión con Google
- Se crea automáticamente un perfil en `user_profiles`
- Las sesiones se manejan automáticamente

### 6.2 Vector Store
- Almacena documentos con embeddings
- Búsqueda semántica usando similitud coseno
- Políticas RLS para seguridad por usuario

### 6.3 Chat con LLM
- Interfaz de chat integrada
- Conexión con tu LLM personalizado
- Historial de conversaciones

### 6.4 Anonimización PII
- Detección automática de información personal
- Múltiples métodos de anonimización
- Validación de calidad

## 🔧 7. Personalización

### 7.1 Embeddings
Modifica `api/embeddings.js` para usar tu servicio de embeddings preferido:
- OpenAI Embeddings
- Hugging Face
- Tu modelo personalizado

### 7.2 Estilos
Los componentes usan Tailwind CSS y shadcn/ui. Personaliza en:
- `src/assets/index.css`
- Componentes individuales

## 🐛 8. Solución de Problemas

### Error: "Missing Supabase environment variables"
- Verifica que las variables VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY estén configuradas

### Error: "Failed to generate embedding"
- Verifica que tu servicio de embeddings esté funcionando
- Revisa la implementación en `api/embeddings.js`

### Error de autenticación con Google
- Verifica las URLs de redirección en Google Cloud Console
- Asegúrate de que el dominio esté autorizado

### APIs no responden
- Verifica que tus servidores estén ejecutándose
- Revisa las URLs en las variables de entorno
- Verifica CORS en tus APIs

## 📚 9. Recursos Adicionales

- [Documentación de Supabase](https://supabase.com/docs)
- [Guía de Vector/Embeddings](https://supabase.com/docs/guides/ai)
- [Configuración OAuth Google](https://supabase.com/docs/guides/auth/social-login/auth-google)

## 🆘 10. Soporte

Si tienes problemas:
1. Revisa los logs del navegador (F12)
2. Verifica las variables de entorno
3. Confirma que todos los servicios estén ejecutándose
4. Revisa la configuración de Supabase

¡Tu sistema Legal IA está listo para usar! 🎉
