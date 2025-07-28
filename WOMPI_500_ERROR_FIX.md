# 🔧 Solución para Error 500 de Wompi API

## 🚨 Problema Identificado

**Error:** "Error del servidor: 500 - A server error has occurred FUNCTION_INVOCATION_FAILED"
**Causa:** Problema en la función serverless `/api/wompi/generate-signature`

## ✅ Soluciones Implementadas

### 1. **API Mejorada con Mejor Manejo de Errores**
**Archivo:** `api/wompi/generate-signature.js`

**Mejoras implementadas:**
- ✅ Validación exhaustiva de parámetros
- ✅ Logs detallados para debugging
- ✅ Manejo robusto de errores
- ✅ Verificación de variables de entorno
- ✅ Respuestas de error más informativas

### 2. **API Simple de Respaldo**
**Archivo:** `api/wompi/generate-signature-simple.js`

**Características:**
- ✅ Implementación minimalista
- ✅ Menos puntos de fallo
- ✅ Logs básicos pero efectivos
- ✅ Validación esencial únicamente

### 3. **Componente de Test Mejorado**
**Botones de prueba:**
- 🔧 **Test API**: Prueba la API principal
- 🔧 **Test Simple API**: Prueba la API de respaldo
- 🔍 **Test Environment**: Verifica variables de entorno

## 🧪 Pasos de Diagnóstico

### Paso 1: Probar API Simple
1. Ve a http://localhost:5174/plan-profesional
2. Haz clic en "🔧 Test Simple API"
3. Verifica si funciona correctamente

**Si la API simple funciona:**
- El problema está en la API principal
- Usar API simple como solución temporal

**Si la API simple también falla:**
- El problema son las variables de entorno
- Verificar configuración del servidor

### Paso 2: Verificar Variables de Entorno
```bash
# En desarrollo local
echo $WEBHOOK_INTEGRITY_SECRET

# En Vercel (logs)
# Buscar en logs: "Environment check"
```

### Paso 3: Revisar Logs de Vercel
```bash
# Ver logs en tiempo real
vercel logs tu-deployment-url --follow

# Buscar errores específicos
vercel logs tu-deployment-url | grep "ERROR"
```

## 🔧 Soluciones Específicas

### Solución 1: Variables de Entorno Faltantes
**Síntoma:** API devuelve "Server configuration error"

**En Desarrollo Local:**
```bash
# Verificar .env
cat .env

# Debe contener:
WEBHOOK_INTEGRITY_SECRET=prod_integrity_vJqHB0dzaWk5ym0qxxnQYlK6ZotJjfIz

# Reiniciar servidor
npm run dev
```

**En Vercel:**
1. Ve a Vercel Dashboard > tu-proyecto > Settings > Environment Variables
2. Agrega: `WEBHOOK_INTEGRITY_SECRET=prod_integrity_vJqHB0dzaWk5ym0qxxnQYlK6ZotJjfIz`
3. Redeploy: `vercel --prod`

### Solución 2: Usar API Simple Temporalmente
**Si la API principal falla, usar la simple:**

```javascript
// En WompiButton.vue, cambiar la URL:
const response = await fetch('/api/wompi/generate-signature-simple', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    reference: reference.value,
    amount: props.amount,
    currency: props.currency
  })
});
```

### Solución 3: Debugging Avanzado
**Agregar logs temporales:**

```javascript
// En el componente WompiButton
console.log('🔧 About to call API with:', {
  reference: reference.value,
  amount: props.amount,
  currency: props.currency,
  url: '/api/wompi/generate-signature'
});
```

## 🚀 Implementación de la Solución

### Opción A: Usar API Simple (Rápido)
1. **Cambiar URL en WompiButton.vue:**
```javascript
// Línea ~45 en setupWidget()
const response = await fetch('/api/wompi/generate-signature-simple', {
```

2. **Probar funcionamiento**
3. **Si funciona, mantener temporalmente**

### Opción B: Arreglar API Principal (Completo)
1. **Verificar variables de entorno en Vercel**
2. **Revisar logs de la función**
3. **Corregir configuración específica**
4. **Redeploy y probar**

### Opción C: Debugging Completo
1. **Usar componentes de test**
2. **Revisar logs detallados**
3. **Identificar causa exacta**
4. **Aplicar solución específica**

## 📋 Checklist de Verificación

### Variables de Entorno:
- [ ] `WEBHOOK_INTEGRITY_SECRET` configurada en .env (local)
- [ ] `WEBHOOK_INTEGRITY_SECRET` configurada en Vercel
- [ ] Servidor reiniciado después de cambios
- [ ] Deployment actualizado en Vercel

### APIs:
- [ ] `/api/wompi/generate-signature` responde
- [ ] `/api/wompi/generate-signature-simple` responde
- [ ] Logs muestran información detallada
- [ ] No hay errores de sintaxis en las funciones

### Frontend:
- [ ] Componente WompiButton hace request correcto
- [ ] Variables de entorno accesibles en frontend
- [ ] No hay errores en consola del navegador
- [ ] Tests de diagnóstico funcionan

## 🎯 Resultado Esperado

Después de aplicar las soluciones:

### ✅ API Funcionando:
```json
{
  "signature": "a1b2c3d4e5f6...",
  "reference": "REF_1234567890",
  "amount": 5000000,
  "currency": "COP",
  "success": true
}
```

### ✅ Widget Operativo:
- Botón de Wompi se carga correctamente
- Al hacer clic, abre el widget de pago
- Proceso de pago funciona sin errores

### ✅ Logs Limpios:
```
🔧 Generate signature request received
✅ Signature generated successfully
```

## 🚨 Si el Problema Persiste

**Reportar la siguiente información:**

1. **Resultado de "Test Simple API"**
2. **Logs de Vercel** (últimos 10 minutos)
3. **Variables de entorno** configuradas
4. **Consola del navegador** (errores)
5. **Network tab** (requests fallidos)

Con esta información podremos identificar la causa exacta y aplicar la solución definitiva.
