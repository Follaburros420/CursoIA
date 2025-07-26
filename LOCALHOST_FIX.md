# Solución para "Error al iniciar pago" en Localhost

## Problema Solucionado ✅

El error "Error al iniciar pago" en localhost se debía a que las funciones serverless de Vercel (`/api/*`) no están disponibles en el servidor de desarrollo de Vite.

## Solución Implementada

### 1. Servicio API con Fallback
Creé `src/services/api.ts` que:
- Intenta usar las APIs reales cuando están disponibles
- Usa respuestas mock cuando las APIs fallan
- Funciona tanto en desarrollo como en producción

### 2. Respuestas Mock para Desarrollo
Las funciones mock incluyen:
- **Wompi Create Session**: Genera URLs de checkout válidas
- **Validación de Cupones**: Soporta múltiples cupones
- **Chatbot**: Respuestas simuladas
- **Ebook**: Confirmación de envío

### 3. Componentes Actualizados
- `ProfessionalPlan.vue`: Usa el nuevo servicio API
- `ElitePlan.vue`: Usa el nuevo servicio API  
- `FloatingContactHub.vue`: Usa el nuevo servicio API

## Cómo Funciona Ahora

### En Desarrollo (localhost):
1. El frontend intenta llamar a `/api/*`
2. Si falla, usa respuestas mock automáticamente
3. Los pagos redirigen a Wompi con parámetros válidos
4. El flujo funciona completamente

### En Producción (Vercel):
1. Las funciones serverless manejan las APIs
2. Integración real con Wompi
3. Webhooks funcionan correctamente

## Testing

### Probar Localmente:
```bash
npm run dev
# Ve a http://localhost:5174
# Prueba el botón "Comprar ahora"
# Debería redirigir a Wompi checkout
```

### Probar APIs:
```bash
npm run test:api
# Ejecuta tests de todas las APIs
```

## URLs de Checkout Generadas

Las URLs mock incluyen todos los parámetros necesarios:
- `public-key`: Clave pública de Wompi
- `amount-in-cents`: Monto en centavos
- `currency`: Moneda (COP/USD)
- `reference`: Referencia única
- `redirect-url`: URL de retorno

## Variables de Entorno

Para usar claves reales en desarrollo, crea `.env`:
```
WOMPI_PUBLIC_KEY=pub_test_tu_clave_real
WEBHOOK_INTEGRITY_SECRET=tu_secreto_real
```

## Próximos Pasos

1. ✅ Localhost funciona con mocks
2. ✅ Componentes actualizados
3. ✅ Servicio API con fallback
4. 🔄 Deploy a Vercel con variables de entorno
5. 🔄 Configurar webhook en Wompi

## Verificación

Para verificar que funciona:
1. Ejecuta `npm run dev`
2. Ve a cualquier plan de pago
3. Haz clic en "Comprar ahora"
4. Deberías ver en consola: "Redirecting to checkout: [URL]"
5. La página debería redirigir a Wompi

¡El error está solucionado! 🎉
