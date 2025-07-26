# Configuración de Vercel para Wompi

## Variables de Entorno Requeridas

Para que la pasarela de pago Wompi funcione correctamente en Vercel, necesitas configurar las siguientes variables de entorno:

### 1. En el Dashboard de Vercel:

1. Ve a tu proyecto en Vercel
2. Navega a Settings > Environment Variables
3. Agrega las siguientes variables:

```
WOMPI_PUBLIC_KEY=pub_test_tu_clave_publica_aqui
WEBHOOK_INTEGRITY_SECRET=tu_secreto_webhook_aqui
```

### 2. Para Producción:

Reemplaza `pub_test_` con `pub_prod_` para tu clave pública de producción.

### 3. Configuración de Webhooks en Wompi:

1. En tu dashboard de Wompi, configura el webhook URL como:
   ```
   https://tu-dominio.vercel.app/api/wompi/webhook
   ```

2. Asegúrate de que el webhook esté configurado para recibir eventos de:
   - `transaction.updated`
   - `transaction.created`

## Estructura de Archivos API

Las funciones serverless están ubicadas en:
- `/api/wompi/create-session.js` - Crea sesiones de pago
- `/api/wompi/webhook.js` - Maneja webhooks de Wompi
- `/api/coupons/validate.js` - Valida cupones de descuento
- `/api/chatbot.js` - Proxy para el chatbot
- `/api/ebook.js` - Maneja envío de ebook

## Testing

### Local:
```bash
npm run dev
```

### Producción:
Después de hacer deploy a Vercel, prueba:
1. Crear una sesión de pago
2. Completar el flujo de pago en Wompi
3. Verificar que el webhook se reciba correctamente

## Troubleshooting

### Error "unable to fetch":
- Verifica que las variables de entorno estén configuradas
- Revisa los logs de Vercel Functions
- Asegúrate de que las URLs de API sean correctas

### Webhook no funciona:
- Verifica la URL del webhook en Wompi
- Revisa que el secreto de integridad sea correcto
- Checa los logs de la función webhook en Vercel

### CORS Issues:
- Las funciones ya incluyen headers CORS
- Si persisten problemas, verifica el vercel.json
