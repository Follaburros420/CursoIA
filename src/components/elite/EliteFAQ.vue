<script setup lang="ts">
import { ref } from 'vue';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  MessageCircle, 
  Code,
  Video,
  Users,
  Laptop,
  Clock,
  Crown
} from "lucide-vue-next";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  icon?: any;
  highlight?: boolean;
}

const faqs: FAQ[] = [
  {
    id: 'item-1',
    question: '¿Necesito conocimientos previos de programación?',
    answer: 'No. Cubrimos desde lo más básico, con ejemplos guiados paso a paso. El programa está diseñado para abogados sin experiencia técnica previa.',
    icon: Code,
    highlight: true
  },
  {
    id: 'item-2',
    question: '¿Puedo ver las grabaciones si no asisto en vivo?',
    answer: 'Sí, todas las sesiones se graban y quedan disponibles en la plataforma. Tendrás acceso de por vida a todo el contenido.',
    icon: Video
  },
  {
    id: 'item-3',
    question: '¿Cuál es el compromiso semanal real?',
    answer: '1 hora de sesión en vivo + 2-3 horas de microlecciones y prácticas. Total: 3-4 horas semanales durante 12 semanas.',
    icon: Clock
  },
  {
    id: 'item-4',
    question: '¿Qué requisitos técnicos necesito?',
    answer: 'Un laptop con conexión a Internet; el resto de herramientas son open-source y se instalarán de forma guiada durante el curso.',
    icon: Laptop
  },
  {
    id: 'item-5',
    question: '¿Cómo funciona la mentoría 1:1?',
    answer: 'Sesiones de 30 minutos con un experto para revisar tu avance y solventar dudas específicas de tu despacho. 2 sesiones por mes.',
    icon: Users,
    highlight: true
  }
];

const defaultValue = ref('item-1');

const emit = defineEmits<{
  reserveSpot: []
}>();

const handleReserveSpot = () => {
  emit('reserveSpot');
};
</script>

<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-muted/20 via-background to-muted/10">
    <div class="container">
      <div class="max-w-4xl mx-auto">
        
        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <Badge class="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 dark:from-blue-900/20 dark:to-purple-900/20 dark:text-blue-400 px-4 py-2 text-sm font-medium border border-blue-200 dark:border-blue-800">
            <HelpCircle class="w-4 h-4 mr-2" />
            Preguntas frecuentes
          </Badge>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text">
              Resuelve todas tus dudas
            </span>
          </h2>
          
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Las respuestas a las preguntas más comunes sobre el Curso Élite de Automatización Legal
          </p>
        </div>

        <!-- FAQ Accordion -->
        <div class="space-y-4 mb-16">
          <Accordion 
            type="single" 
            collapsible 
            class="w-full space-y-4" 
            :default-value="defaultValue"
          >
            <AccordionItem
              v-for="faq in faqs"
              :key="faq.id"
              :value="faq.id"
              :class="[
                'group border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30',
                faq.highlight ? 'bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20' : 'bg-card/50 backdrop-blur-sm'
              ]"
            >
              <!-- Question -->
              <AccordionTrigger 
                class="px-6 py-6 text-left hover:no-underline hover:bg-muted/30 transition-colors duration-200 group-hover:text-primary [&[data-state=open]]:text-primary"
              >
                <div class="flex items-start gap-4 w-full">
                  <!-- Icon -->
                  <div 
                    :class="[
                      'flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200',
                      faq.highlight 
                        ? 'bg-gradient-to-br from-primary to-purple-600 text-white' 
                        : 'bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white'
                    ]"
                  >
                    <component 
                      :is="faq.icon || HelpCircle" 
                      class="w-5 h-5" 
                    />
                  </div>

                  <!-- Question content -->
                  <div class="flex-1 min-w-0">
                    <h3 class="text-lg font-semibold leading-tight pr-4">
                      {{ faq.question }}
                    </h3>
                    
                    <!-- Highlight indicator -->
                    <div v-if="faq.highlight" class="flex items-center gap-2 mt-2">
                      <div class="w-2 h-2 bg-primary rounded-full"></div>
                      <span class="text-xs font-medium text-primary">Pregunta destacada</span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <!-- Answer -->
              <AccordionContent class="px-6 pb-6">
                <div class="ml-14">
                  <p class="text-muted-foreground leading-relaxed">
                    {{ faq.answer }}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <!-- Contact section -->
        <div class="text-center">
          <div class="inline-block p-8 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl border border-primary/20">
            <div class="space-y-6">
              <div class="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                <MessageCircle class="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 class="text-xl font-bold text-foreground mb-2">
                  ¿Tienes más preguntas?
                </h3>
                <p class="text-muted-foreground max-w-md mx-auto mb-6">
                  Nuestro equipo está aquí para ayudarte. Resolvemos todas tus dudas antes de que reserves tu plaza.
                </p>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  as-child
                  class="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                >
                  <a href="https://wa.me/message/22XPE3IWTKONL1" target="_blank">
                    <MessageCircle class="w-4 h-4 mr-2" />
                    Contactar por WhatsApp
                  </a>
                </Button>
                
                <Button variant="outline" as-child>
                  <a href="mailto:info@cursoiaabogados.com">
                    Enviar email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- Final CTA -->
        <div class="mt-16 text-center">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-foreground">
              ¿Listo para unirte a la élite?
            </h3>
            
            <Button 
              @click="handleReserveSpot"
              size="lg"
              class="px-12 py-4 text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
            >
              <Crown class="w-5 h-5 mr-3" />
              Reserva tu plaza VIP ahora
              <MessageCircle class="w-5 h-5 ml-3" />
            </Button>
            
            <div class="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span>Solo 8 cupos disponibles · Inicio 15 septiembre · Early Bird hasta 31 agosto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom accordion animations */
[data-state="open"] {
  animation: accordion-down 0.3s ease-out;
}

[data-state="closed"] {
  animation: accordion-up 0.3s ease-out;
}

@keyframes accordion-down {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
