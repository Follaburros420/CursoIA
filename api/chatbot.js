export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('🤖 Chatbot webhook called');

  try {
    const { message } = req.body || {};

    if (!message) {
      console.error('❌ No message received');
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log('📥 Message received:', message);

    // Primary webhook URL
    const primaryWebhookUrl = 'https://webhook.asistente-legal.pro/webhook/a50b085e-d472-4185-8ed8-54c80a2067ef';
    // Backup webhook URL
    const backupWebhookUrl = 'https://webhook.aprenderia.site/webhook/c686333a-8931-4cce-b290-ce9efbfee338';

    console.log('🔄 Attempting to send to primary webhook:', primaryWebhookUrl);
    console.log('📤 Payload:', { message });

    let webhookUrl = primaryWebhookUrl;
    let webhookError = null;

    try {
      // Create AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 360000); // 6 minute timeout

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
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      console.log('📡 Webhook response status:', response.status);
      console.log('📡 Webhook response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Webhook error response:', errorText);
        throw new Error(`Webhook responded with status: ${response.status} - ${errorText}`);
      }

      const responseText = await response.text();
      console.log('📥 Raw webhook response:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.log('⚠️ Response is not JSON, using as text:', responseText);
        data = { output: responseText };
      }

      console.log('✅ Parsed webhook response:', data);

      // Return the response from the external webhook
      return res.status(200).json({
        success: true,
        output: data.output || data.message || data.response || responseText || 'Mensaje procesado correctamente.',
        timestamp: new Date().toISOString(),
        webhookStatus: 'success'
      });

    } catch (webhookError) {
      console.error('❌ Primary webhook error details:', {
        message: webhookError.message,
        name: webhookError.name,
        stack: webhookError.stack
      });

      webhookError = webhookError;

      // Try backup webhook
      console.log('🔄 Trying backup webhook:', backupWebhookUrl);
      try {
        const backupController = new AbortController();
        const backupTimeoutId = setTimeout(() => backupController.abort(), 360000);

        const backupResponse = await fetch(backupWebhookUrl, {
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
          }),
          signal: backupController.signal
        });

        clearTimeout(backupTimeoutId);

        console.log('📡 Backup webhook response status:', backupResponse.status);

        if (backupResponse.ok) {
          const backupResponseText = await backupResponse.text();
          console.log('📥 Backup webhook response:', backupResponseText);

          let backupData;
          try {
            backupData = JSON.parse(backupResponseText);
          } catch (parseError) {
            backupData = { output: backupResponseText };
          }

          return res.status(200).json({
            success: true,
            output: backupData.output || backupData.message || backupData.response || backupResponseText || 'Mensaje procesado correctamente.',
            timestamp: new Date().toISOString(),
            webhookStatus: 'backup-success'
          });
        }
      } catch (backupError) {
        console.error('❌ Backup webhook also failed:', backupError.message);
      }

      // Check if it's a timeout error
      if (webhookError.name === 'AbortError') {
        console.error('⏰ Webhook timeout after 10 seconds');
      }

      // Fallback response if both webhooks fail
      const fallbackResponses = [
        '¡Hola! Soy Robotino, tu asistente de IA. Estoy aquí para ayudarte con información sobre nuestros cursos de IA para abogados. ¿En qué puedo asistirte?',
        'Gracias por tu mensaje. Puedo ayudarte con información sobre nuestros cursos, precios, inscripciones y más. ¿Qué te gustaría saber?',
        '¡Perfecto! Soy especialista en cursos de IA legal. Puedo ayudarte con preguntas sobre nuestros programas, metodología o proceso de inscripción.',
        'Excelente, estoy aquí para ayudarte. ¿Te interesa conocer más sobre nuestros cursos de IA aplicada al derecho?',
        '¡Hola! Soy Robotino. Puedo ayudarte con información sobre nuestros cursos, precios, descuentos disponibles y proceso de inscripción.'
      ];

      const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];

      return res.status(200).json({
        success: true,
        output: randomResponse,
        timestamp: new Date().toISOString(),
        webhookStatus: 'fallback',
        note: 'Webhooks no disponibles, usando respuesta local'
      });
    }

  } catch (error) {
    console.error('❌ Chatbot error:', error.message);
    return res.status(500).json({
      error: 'Server error',
      output: 'Lo siento, hay un problema de conexión. Por favor, intenta más tarde.',
      message: error.message
    });
  }
}
