# Solución de Problemas - Wompi + Vercel

## Problema: "unable to fetch" en Vercel

### Síntomas:
- La pasarela de pago funciona en localhost
- En Vercel aparece error "unable to fetch"
- Las funciones API no responden

### Soluciones:

#### 1. Verificar Variables de Entorno
```bash
# En Vercel Dashboard > Settings > Environment Variables
WOMPI_PUBLIC_KEY=pub_test_tu_clave_aqui
WEBHOOK_INTEGRITY_SECRET=tu_secreto_aqui
```

#### 2. Verificar Estructura de Archivos
```
api/
├── wompi/
│   ├── create-session.js
│   └── webhook.js
├── coupons/
│   └── validate.js
├── chatbot.js
└── ebook.js
```

#### 3. Verificar vercel.json
```json
{
  "functions": {
    "api/**/*.js": {
      "runtime": "@vercel/node"
    }
  }
}
```

## Problema: CORS Errors

### Síntomas:
- Error de CORS en el navegador
- Requests bloqueados por política de origen

### Solución:
Las funciones ya incluyen headers CORS. Si persiste:

1. Verificar que el vercel.json tenga los headers correctos
2. Asegurar que las funciones respondan a OPTIONS requests

## Problema: Webhook no Funciona

### Síntomas:
- Pagos se procesan pero no se reciben webhooks
- Logs de Vercel no muestran llamadas al webhook

### Soluciones:

#### 1. Verificar URL del Webhook en Wompi
```
https://tu-dominio.vercel.app/api/wompi/webhook
```

#### 2. Verificar Secreto de Integridad
- Debe coincidir exactamente con el configurado en Wompi
- Es case-sensitive

#### 3. Verificar Headers
Wompi envía el header como `Wompi-Signature` o `integrity_hash`

## Problema: Funciones Timeout

### Síntomas:
- Error 504 Gateway Timeout
- Funciones que no responden

### Soluciones:

#### 1. Verificar Límites de Vercel
- Funciones gratuitas: 10 segundos máximo
- Funciones Pro: 60 segundos máximo

#### 2. Optimizar Código
- Reducir tiempo de procesamiento
- Usar async/await correctamente

## Testing Local vs Producción

### Local (Development):
```bash
npm run dev
# APIs disponibles en http://localhost:5174/api/*
```

### Vercel Dev (Simula Producción):
```bash
npm run vercel:dev
# Simula el entorno de Vercel localmente
```

### Testing APIs:
```bash
npm run test:api
# Ejecuta tests automatizados de las APIs
```

## Logs y Debugging

### Ver Logs de Vercel:
1. Ve a tu proyecto en Vercel Dashboard
2. Navega a Functions tab
3. Selecciona la función que falla
4. Revisa los logs en tiempo real

### Debug Local:
```javascript
// Agregar logs en las funciones
console.log('Request body:', req.body);
console.log('Environment vars:', {
  publicKey: process.env.WOMPI_PUBLIC_KEY ? 'Set' : 'Missing',
  secret: process.env.WEBHOOK_INTEGRITY_SECRET ? 'Set' : 'Missing'
});
```

## Checklist de Deployment

- [ ] Variables de entorno configuradas en Vercel
- [ ] vercel.json presente y correcto
- [ ] Funciones API en carpeta `/api/`
- [ ] Webhook URL actualizada en Wompi
- [ ] Tests locales pasando
- [ ] Build exitoso sin errores

## Contacto de Soporte

Si los problemas persisten:
1. Revisar logs de Vercel Functions
2. Verificar configuración de Wompi
3. Contactar soporte técnico con logs específicos
