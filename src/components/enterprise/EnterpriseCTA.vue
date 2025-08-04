<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  MessageSquare, 
  Phone,
  Mail,
  CheckCircle,
  Clock,
  Users,
  Zap
} from "lucide-vue-next";

const contactMethods = [
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Respuesta inmediata",
    action: "Enviar mensaje",
    href: "https://wa.me/message/22XPE3IWTKONL1",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Phone,
    title: "Llamada telefónica",
    description: "Conversación directa",
    action: "Programar llamada",
    href: "https://wa.me/message/22XPE3IWTKONL1",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Información detallada",
    action: "Enviar email",
    href: "mailto:info@cursoiaabogados.com",
    color: "from-purple-500 to-purple-600"
  }
];

const consultationIncludes = [
  "Análisis gratuito de tu despacho",
  "Identificación de oportunidades de automatización",
  "Estimación de ROI y tiempo de implementación",
  "Propuesta personalizada sin compromiso",
  "Roadmap detallado de transformación digital"
];

const urgencyReasons = [
  {
    icon: Clock,
    text: "Cada día sin automatizar pierdes productividad"
  },
  {
    icon: Users,
    text: "Tus competidores ya están implementando IA"
  },
  {
    icon: Zap,
    text: "Los primeros en adoptar obtienen mayor ventaja"
  }
];
</script>

<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-blue-500/5 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    
    <div class="container relative z-10">
      <div class="max-w-6xl mx-auto">
        
        <!-- Main CTA Section -->
        <div class="text-center space-y-8 mb-16">
          <Badge class="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 dark:from-orange-900/20 dark:to-red-900/20 dark:text-orange-400 px-6 py-3 text-sm font-medium border border-orange-200 dark:border-orange-800">
            <Calendar class="w-4 h-4 mr-2" />
            Consulta gratuita disponible
          </Badge>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-foreground">¿Listo para transformar</span>
            <span class="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text block">
              tu despacho jurídico?
            </span>
          </h2>
          
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agenda una consulta gratuita de 30 minutos donde analizaremos tu despacho 
            y te mostraremos exactamente cómo las automatizaciones pueden transformar tu negocio.
          </p>

          <!-- Urgency indicators -->
          <div class="flex flex-wrap justify-center gap-6 mt-8">
            <div 
              v-for="reason in urgencyReasons" 
              :key="reason.text"
              class="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full"
            >
              <component :is="reason.icon" class="w-4 h-4 text-orange-600" />
              <span class="text-sm font-medium text-muted-foreground">{{ reason.text }}</span>
            </div>
          </div>
        </div>

        <!-- Contact methods and consultation details -->
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          
          <!-- Contact methods -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-foreground mb-6">
              Elige cómo prefieres contactarnos
            </h3>
            
            <div class="space-y-4">
              <Card 
                v-for="method in contactMethods" 
                :key="method.title"
                class="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent class="p-6">
                  <div class="flex items-center gap-4">
                    <div :class="`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`">
                      <component :is="method.icon" class="w-6 h-6 text-white" />
                    </div>
                    
                    <div class="flex-1">
                      <h4 class="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {{ method.title }}
                      </h4>
                      <p class="text-sm text-muted-foreground">{{ method.description }}</p>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      class="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      as-child
                    >
                      <a :href="method.href" target="_blank">
                        {{ method.action }}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <!-- Primary CTA -->
            <div class="mt-8">
              <Button 
                size="lg" 
                class="w-full px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                as-child
              >
                <a href="https://wa.me/message/22XPE3IWTKONL1" target="_blank">
                  <Calendar class="w-5 h-5 mr-2" />
                  Agendar consulta gratuita ahora
                </a>
              </Button>
              
              <p class="text-center text-sm text-muted-foreground mt-3">
                Sin compromiso • Respuesta en menos de 2 horas • Consulta de 30 minutos
              </p>
            </div>
          </div>

          <!-- Consultation details -->
          <div class="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-foreground mb-6">
              Qué incluye tu consulta gratuita
            </h3>
            
            <div class="space-y-4 mb-8">
              <div 
                v-for="item in consultationIncludes" 
                :key="item"
                class="flex items-start gap-3"
              >
                <CheckCircle class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span class="text-muted-foreground">{{ item }}</span>
              </div>
            </div>

            <!-- Guarantee -->
            <div class="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-green-800 dark:text-green-400 mb-2">
                    Garantía de valor
                  </h4>
                  <p class="text-sm text-green-700 dark:text-green-300">
                    Si después de la consulta no ves el potencial de mejora en tu despacho, 
                    te regalamos una auditoría completa de procesos valorada en $500 USD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom testimonial -->
        <div class="text-center mt-16 p-8 bg-card/20 backdrop-blur-sm border border-border/50 rounded-2xl">
          <blockquote class="text-lg italic text-muted-foreground mb-4">
            "En solo 3 meses redujimos 70% del tiempo en tareas administrativas. 
            Ahora podemos atender 40% más clientes con el mismo equipo."
          </blockquote>
          <cite class="text-sm font-semibold text-foreground">
            — María González, Socia Fundadora, Despacho González & Asociados
          </cite>
        </div>
      </div>
    </div>
  </section>
</template>
