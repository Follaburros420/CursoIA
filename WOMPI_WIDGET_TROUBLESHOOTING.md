# 🔧 Troubleshooting: Widget de Wompi No Abre

## 🚨 Problema Identificado

**Error:** "No se pudo cargar la información del undefined"
**Síntoma:** El widget de Wompi no abre al hacer clic en los botones de pago

## 🔍 Diagnóstico Implementado

### ✅ Componentes de Debug Agregados:

1. **`EnvTest.vue`** - Verifica variables de entorno
2. **Debug info en WompiButton** - Muestra estado interno del componente
3. **Logs mejorados** - En API y componente
4. **Validaciones adicionales** - En setupWidget()

### 🧪 Información de Debug Visible:

- **Variables de entorno**: VITE_WOMPI_PUBLIC_KEY
- **Estado del componente**: reference, signature, amount, currency
- **Logs de consola**: Setup process y errores
- **API response**: Generación de firma de integridad

## 🔧 Posibles Causas y Soluciones

### 1. ✅ Variables de Entorno No Configuradas

**Síntoma:** Public Key muestra "NOT_SET"
**Solución:**
```bash
# Verificar que .env existe y contiene:
VITE_WOMPI_PUBLIC_KEY=pub_prod_C01dSld0Z6syyGgA3u7SkF0TMqZdyQAu
WEBHOOK_INTEGRITY_SECRET=prod_integrity_vJqHB0dzaWk5ym0qxxnQYlK6ZotJjfIz
```

**Reiniciar servidor después de cambios:**
```bash
# Detener servidor (Ctrl+C)
npm run dev
```

### 2. ✅ Error en Generación de Firma

**Síntoma:** Signature muestra "NOT_SET" o error en API
**Verificar:**
- API `/api/wompi/generate-signature` responde correctamente
- Variables de entorno en servidor configuradas
- Logs de consola muestran errores específicos

**Test manual:**
```bash
curl -X POST http://localhost:5174/api/wompi/generate-signature \
  -H "Content-Type: application/json" \
  -d '{"reference":"TEST_123","amount":5000000,"currency":"COP"}'
```

### 3. ✅ Script de Wompi No Carga

**Síntoma:** Widget no se renderiza después de tener todos los datos
**Verificar:**
- Conexión a internet
- URL del script: `https://checkout.wompi.co/widget.js`
- Consola del navegador para errores de red
- Bloqueadores de anuncios o extensiones

### 4. ✅ Datos Inválidos

**Síntoma:** Widget se carga pero no abre
**Verificar:**
- Amount > 0 y es número
- Currency válida (COP, USD)
- Reference única
- Public key válida

### 5. ✅ CORS o Problemas de Red

**Síntoma:** Error de red al generar firma
**Verificar:**
- API accesible desde frontend
- Headers CORS configurados
- Firewall o proxy no bloquea requests

## 🧪 Pasos de Diagnóstico

### 1. Verificar Variables de Entorno
```javascript
// En consola del navegador:
console.log('VITE_WOMPI_PUBLIC_KEY:', import.meta.env.VITE_WOMPI_PUBLIC_KEY);
```

### 2. Verificar API de Firma
```javascript
// En consola del navegador:
fetch('/api/wompi/generate-signature', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    reference: 'TEST_' + Date.now(),
    amount: 5000000,
    currency: 'COP'
  })
}).then(r => r.json()).then(console.log);
```

### 3. Verificar Logs de Consola
- Buscar mensajes que empiecen con 🔧, ✅, ❌
- Verificar errores de red o JavaScript
- Comprobar warnings de Wompi

### 4. Verificar Network Tab
- Request a `/api/wompi/generate-signature` exitoso
- Response contiene `signature` válida
- No hay errores 404, 500, etc.

## 🔧 Soluciones Específicas

### Si Public Key es undefined:
```bash
# 1. Verificar .env
cat .env

# 2. Reiniciar servidor
npm run dev

# 3. Verificar en navegador
console.log(import.meta.env.VITE_WOMPI_PUBLIC_KEY)
```

### Si API falla:
```bash
# 1. Verificar variables en servidor
echo $WEBHOOK_INTEGRITY_SECRET

# 2. Verificar logs de API
# Buscar en consola: "Generate signature request"

# 3. Test directo
curl -X POST http://localhost:5174/api/wompi/generate-signature \
  -H "Content-Type: application/json" \
  -d '{"reference":"TEST","amount":100,"currency":"COP"}'
```

### Si Widget no abre:
```javascript
// 1. Verificar datos en consola
console.log('Widget data:', {
  publicKey: import.meta.env.VITE_WOMPI_PUBLIC_KEY,
  amount: 5000000,
  currency: 'COP',
  reference: 'TEST_123'
});

// 2. Verificar script cargado
console.log('Wompi script loaded:', !!window.WidgetCheckout);
```

## 🚀 Próximos Pasos

### 1. Revisar Debug Info
- Abrir http://localhost:5174/plan-profesional
- Verificar información en "Environment Variables Test"
- Revisar "Debug Info" del WompiButton

### 2. Verificar Consola
- Abrir DevTools (F12)
- Buscar logs de setup y errores
- Verificar Network tab para requests fallidos

### 3. Test Manual
- Probar API de firma directamente
- Verificar variables de entorno
- Comprobar conectividad a Wompi

### 4. Solución Basada en Hallazgos
- Configurar variables faltantes
- Corregir errores de API
- Ajustar configuración de red

## 📋 Checklist de Verificación

- [ ] Variables de entorno configuradas en .env
- [ ] Servidor reiniciado después de cambios
- [ ] API `/api/wompi/generate-signature` responde
- [ ] Public key visible en debug info
- [ ] Signature se genera correctamente
- [ ] No hay errores en consola del navegador
- [ ] Script de Wompi se carga sin errores
- [ ] Datos del widget son válidos

Una vez identificada la causa específica, podemos implementar la solución correcta.
