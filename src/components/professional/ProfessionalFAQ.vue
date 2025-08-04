<script setup lang="ts">
import { ref } from 'vue';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  MessageCircle,
  Clock,
  Users,
  Shield,
  Zap,
  BookOpen
} from "lucide-vue-next";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'payment' | 'support';
  icon?: any;
  highlight?: boolean;
}

const faqs: FAQ[] = [
  {
    id: 'item-1',
    question: '¿Necesito conocimientos previos de IA para tomar este curso?',
    answer: 'No es necesario. El Plan Profesional está diseñado para abogados sin experiencia previa en IA. Comenzamos desde los fundamentos básicos y avanzamos gradualmente hacia aplicaciones prácticas específicas para el sector legal.',
    category: 'general',
    icon: BookOpen,
    highlight: true
  },
  {
    id: 'item-2',
    question: '¿Cuánto tiempo tengo para completar el curso?',
    answer: 'Tienes acceso de por vida al contenido. Puedes avanzar a tu propio ritmo. El programa está diseñado para completarse en 4-6 semanas dedicando 2-3 horas por semana, pero puedes tomarte el tiempo que necesites.',
    category: 'general',
    icon: Clock
  },
  {
    id: 'item-3',
    question: '¿Qué tipo de soporte recibiré durante el curso?',
    answer: 'Incluye soporte personalizado vía email y chat, sesiones de Q&A grupales mensuales, acceso a la comunidad exclusiva de estudiantes, y revisión de casos prácticos por parte de nuestros expertos.',
    category: 'support',
    icon: Users
  },

  {
    id: 'item-5',
    question: '¿Qué herramientas específicas aprenderé a usar?',
    answer: 'Dominarás ChatGPT, Claude, Gemini para tareas legales, herramientas de investigación jurídica con IA, software de redacción legal automatizada, y plataformas de gestión de casos con IA integrada.',
    category: 'technical',
    icon: Zap
  },
  {
    id: 'item-6',
    question: '¿Hay garantía de devolución?',
    answer: 'Ofrecemos 30 días de garantía completa. Si no estás satisfecho con el contenido o sientes que no cumple tus expectativas, te devolvemos el 100% de tu inversión sin preguntas.',
    category: 'payment',
    icon: Shield,
    highlight: true
  },
  {
    id: 'item-7',
    question: '¿Puedo aplicar lo aprendido inmediatamente en mi práctica?',
    answer: 'Absolutamente. Cada módulo incluye casos prácticos reales y herramientas que puedes implementar de inmediato. Muchos estudiantes reportan mejoras en eficiencia desde la primera semana.',
    category: 'general',
    icon: Zap
  },
  {
    id: 'item-8',
    question: '¿El curso se actualiza con nuevas herramientas de IA?',
    answer: 'Sí, el contenido se actualiza constantemente. Como estudiante de por vida, recibes automáticamente todas las actualizaciones, nuevos módulos y herramientas sin costo adicional.',
    category: 'technical',
    icon: BookOpen
  }
];

const defaultValue = ref('item-1');

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'general':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
    case 'technical':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
    case 'payment':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    case 'support':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'general': return 'General';
    case 'technical': return 'Técnico';
    case 'payment': return 'Pagos';
    case 'support': return 'Soporte';
    default: return 'Otro';
  }
};
</script>

<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-muted/20 via-background to-muted/10">
    <div class="container">
      <div class="max-w-4xl mx-auto">
        
        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            <HelpCircle class="w-4 h-4" />
            Preguntas frecuentes
          </div>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text">
              Resuelve todas tus dudas
            </span>
          </h2>
          
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Las respuestas a las preguntas más comunes sobre el Plan Profesional del Curso de IA para Abogados
          </p>
        </div>

        <!-- FAQ Accordion -->
        <div class="space-y-4">
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
                faq.highlight ? 'bg-gradient-to-br from-primary/5 to-orange-500/5 border-primary/20' : 'bg-card/50 backdrop-blur-sm'
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
                        ? 'bg-gradient-to-br from-primary to-orange-600 text-white' 
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
                    <div class="flex items-start justify-between gap-4">
                      <h3 class="text-lg font-semibold leading-tight pr-4">
                        {{ faq.question }}
                      </h3>
                      
                      <!-- Category badge -->
                      <Badge 
                        :class="getCategoryColor(faq.category)" 
                        class="text-xs font-medium flex-shrink-0"
                      >
                        {{ getCategoryLabel(faq.category) }}
                      </Badge>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <!-- Answer -->
              <AccordionContent class="px-6 pb-6">
                <div class="ml-14 space-y-4">
                  <p class="text-muted-foreground leading-relaxed">
                    {{ faq.answer }}
                  </p>
                  
                  <!-- Highlight indicator -->
                  <div v-if="faq.highlight" class="flex items-center gap-2 text-sm text-primary">
                    <div class="w-2 h-2 bg-primary rounded-full"></div>
                    <span class="font-medium">Pregunta destacada</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <!-- Contact section -->
        <div class="mt-16 text-center">
          <div class="inline-block p-8 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-3xl border border-primary/20">
            <div class="space-y-4">
              <div class="w-16 h-16 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <MessageCircle class="w-8 h-8 text-white" />
              </div>
              
              <h3 class="text-xl font-bold text-foreground">
                ¿Tienes más preguntas?
              </h3>
              
              <p class="text-muted-foreground max-w-md mx-auto">
                Nuestro equipo está aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  as-child
                  class="bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90"
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
</style>
