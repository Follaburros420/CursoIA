# 🔍 Instrucciones de Diagnóstico - Widget de Wompi

## 🎯 Componentes de Diagnóstico Agregados

He agregado componentes de diagnóstico temporales a la página del plan profesional para identificar el problema del widget de Wompi.

### 📍 Ubicación: http://localhost:5174/plan-profesional

## 🧪 Componentes de Diagnóstico

### 1. **Environment Variables Test** 🔍
**Qué hace:** Verifica si las variables de entorno están configuradas correctamente
**Qué buscar:**
- ✅ "Wompi Public Key: Configured" = Variables OK
- ❌ "Wompi Public Key: Not Set" = Variables faltantes

### 2. **Wompi Integration Test** 🧪
**Botones disponibles:**

#### 🔍 Test Environment
- Muestra información del entorno de desarrollo
- Verifica modo (development/production)
- Muestra estado de la clave pública

#### 🔧 Test API
- Prueba la API `/api/wompi/generate-signature`
- Verifica si el servidor puede generar firmas
- Muestra respuesta completa de la API

#### 🎯 Test Widget
- Intenta crear un widget de Wompi directamente
- Verifica si el script de Wompi se carga
- Muestra datos que se enviarían al widget

### 3. **Debug Info del WompiButton** 📊
**Información mostrada:**
- Public Key (primeros 20 caracteres)
- Reference generada
- Signature generada
- Amount y Currency
- Estado Ready

## 🔧 Pasos de Diagnóstico

### Paso 1: Verificar Variables de Entorno
1. Ve a http://localhost:5174/plan-profesional
2. Busca "Environment Variables Test"
3. Verifica que muestre "✅ Configured"

**Si muestra "❌ Not Set":**
```bash
# Verificar que .env existe
ls -la .env

# Verificar contenido
cat .env

# Debe contener:
VITE_WOMPI_PUBLIC_KEY=pub_prod_C01dSld0Z6syyGgA3u7SkF0TMqZdyQAu
WEBHOOK_INTEGRITY_SECRET=prod_integrity_vJqHB0dzaWk5ym0qxxnQYlK6ZotJjfIz

# Reiniciar servidor
npm run dev
```

### Paso 2: Probar API
1. Haz clic en "🔧 Test API"
2. Verifica la respuesta

**Respuesta exitosa:**
```json
{
  "signature": "a1b2c3d4e5f6...",
  "reference": "TEST_1234567890",
  "amount": 5000000,
  "currency": "COP",
  "success": true
}
```

**Si hay error:**
- Verificar variables de entorno en servidor
- Revisar logs de consola
- Verificar que la API esté funcionando

### Paso 3: Probar Widget
1. Haz clic en "🎯 Test Widget"
2. Verifica que se cree el widget en el contenedor
3. Revisa la consola del navegador (F12)

### Paso 4: Revisar Debug Info
1. Busca "Debug Info" en el WompiButton
2. Verifica que todos los campos tengan valores:
   - Public Key: pub_prod_C01d... (no "NOT_SET")
   - Reference: REF_1234567890... (no vacío)
   - Signature: a1b2c3d4e5f6... (no "NOT_SET")
   - Ready: true

## 🚨 Problemas Comunes y Soluciones

### Problema 1: Variables de Entorno No Configuradas
**Síntoma:** Environment Test muestra "❌ Not Set"
**Solución:**
```bash
# Crear/editar .env
echo "VITE_WOMPI_PUBLIC_KEY=pub_prod_C01dSld0Z6syyGgA3u7SkF0TMqZdyQAu" > .env
echo "WEBHOOK_INTEGRITY_SECRET=prod_integrity_vJqHB0dzaWk5ym0qxxnQYlK6ZotJjfIz" >> .env

# Reiniciar servidor
npm run dev
```

### Problema 2: API No Responde
**Síntoma:** Test API muestra error de red o 500
**Solución:**
```bash
# Verificar que el servidor esté corriendo
curl http://localhost:5174/api/wompi/generate-signature

# Verificar variables en servidor
echo $WEBHOOK_INTEGRITY_SECRET
```

### Problema 3: Widget No Se Carga
**Síntoma:** Test Widget no muestra botón de Wompi
**Posibles causas:**
- Bloqueador de anuncios
- Problema de conectividad
- Script de Wompi no accesible
- Datos inválidos

### Problema 4: Signature No Se Genera
**Síntoma:** Debug Info muestra "Signature: NOT_SET"
**Verificar:**
- API responde correctamente
- Variables de entorno configuradas
- No hay errores en consola

## 📋 Información a Reportar

Si el problema persiste, reporta la siguiente información:

### 1. Environment Variables Test
- ¿Muestra "Configured" o "Not Set"?
- ¿Qué variables aparecen en "All VITE_ Environment Variables"?

### 2. API Test Result
- ¿Qué respuesta muestra el "Test API"?
- ¿Hay errores en la consola?

### 3. Debug Info del WompiButton
- ¿Qué valores muestra cada campo?
- ¿Ready es true o false?

### 4. Consola del Navegador (F12)
- ¿Hay errores en rojo?
- ¿Qué logs aparecen con 🔧, ✅, ❌?

### 5. Network Tab (F12 > Network)
- ¿El request a `/api/wompi/generate-signature` es exitoso?
- ¿Qué status code devuelve?

## 🎯 Próximos Pasos

1. **Ejecutar diagnósticos** en http://localhost:5174/plan-profesional
2. **Identificar el problema** usando los tests
3. **Aplicar la solución** correspondiente
4. **Verificar que funcione** probando el widget real
5. **Remover componentes de debug** una vez solucionado

Con esta información podremos identificar exactamente dónde está el problema y aplicar la solución correcta.
