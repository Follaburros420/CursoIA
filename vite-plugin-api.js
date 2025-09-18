// Vite plugin para simular las funciones API en desarrollo
import { readFileSync } from 'fs';
import { resolve } from 'path';

export function apiPlugin() {
  return {
    name: 'api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/chatbot', async (req, res, next) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method not allowed');
          return;
        }

        try {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });

          req.on('end', async () => {
            try {
              const data = JSON.parse(body);
              console.log('🤖 API call received:', data);

              // Simular la lógica del chatbot
              const response = await simulateChatbotResponse(data.message);
              
              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.end(JSON.stringify(response));
            } catch (error) {
              console.error('❌ API error:', error);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: error.message }));
            }
          });
        } catch (error) {
          console.error('❌ API middleware error:', error);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: error.message }));
        }
      });
    }
  };
}

async function simulateChatbotResponse(message) {
  console.log('🔄 Processing message:', message);
  
  // Intentar enviar a los webhooks de n8n
  const webhooks = [
    'https://appn8n.aprenderia.site/webhook-test/c686333a-8931-4cce-b290-ce9efbfee338',
    'https://webhook.aprenderia.site/webhook/c686333a-8931-4cce-b290-ce9efbfee338'
  ];

  for (const webhookUrl of webhooks) {
    try {
      console.log('🔄 Trying webhook:', webhookUrl);
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'CursoIA-Chatbot/1.0',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          message: message,
          timestamp: new Date().toISOString(),
          source: 'robotino-chat'
        })
      });

      console.log('📡 Webhook response status:', response.status);

      if (response.ok) {
        const responseText = await response.text();
        console.log('📥 Webhook response:', responseText);

        let data;
        try {
          data = JSON.parse(responseText);
        } catch (parseError) {
          data = { output: responseText };
        }

        return {
          success: true,
          output: data.output || data.message || data.response || responseText || 'Mensaje procesado correctamente.',
          timestamp: new Date().toISOString(),
          webhookStatus: 'success'
        };
      }
    } catch (error) {
      console.error('❌ Webhook error:', error.message);
    }
  }

  // Si todos los webhooks fallan, usar respuesta de respaldo
  const fallbackResponses = [
    '¡Hola! Soy Robotino, tu asistente de IA. Estoy aquí para ayudarte con información sobre nuestros cursos de IA para abogados. ¿En qué puedo asistirte?',
    'Gracias por tu mensaje. Puedo ayudarte con información sobre nuestros cursos, precios, inscripciones y más. ¿Qué te gustaría saber?',
    '¡Perfecto! Soy especialista en cursos de IA legal. Puedo ayudarte con preguntas sobre nuestros programas, metodología o proceso de inscripción.',
    'Excelente, estoy aquí para ayudarte. ¿Te interesa conocer más sobre nuestros cursos de IA aplicada al derecho?',
    '¡Hola! Soy Robotino. Puedo ayudarte con información sobre nuestros cursos, precios, descuentos disponibles y proceso de inscripción.'
  ];
  
  const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  
  return {
    success: true,
    output: randomResponse,
    timestamp: new Date().toISOString(),
    webhookStatus: 'fallback',
    note: 'Webhooks no disponibles, usando respuesta local'
  };
}
