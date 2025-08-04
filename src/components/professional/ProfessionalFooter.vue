<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Award, 
  Mail, 
  MessageCircle, 
  Shield, 
  Clock,
  ArrowUp,
  ExternalLink
} from "lucide-vue-next";

const router = useRouter();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const goHome = () => {
  router.push('/');
};

const contactLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/message/22XPE3IWTKONL1",
    icon: MessageCircle,
    description: "Contacto directo"
  },
  {
    label: "Email",
    href: "mailto:info@cursoiaabogados.com",
    icon: Mail,
    description: "Soporte técnico"
  }
];

const legalLinks = [
  {
    label: "Política de Privacidad",
    href: "/politica-de-privacidad"
  },
  {
    label: "Términos y Condiciones",
    href: "#"
  }
];

const guarantees = [
  {
    icon: Shield,
    title: "Garantía 30 días",
    description: "Devolución completa si no estás satisfecho"
  },
  {
    icon: Clock,
    title: "Acceso de por vida",
    description: "Sin límites de tiempo para completar el curso"
  },
  {
    icon: Award,
    title: "Certificado del curso",
    description: "¡Avala tus conocimientos en IA!"
  }
];
</script>

<template>
  <footer class="bg-gradient-to-br from-muted/30 via-background to-muted/20 border-t border-border/50">
    
    <!-- Guarantees section -->
    <section class="py-16 md:py-20">
      <div class="container">
        <div class="max-w-6xl mx-auto">
          
          <!-- Section header -->
          <div class="text-center mb-12">
            <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tu inversión está protegida
            </h2>
            <p class="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos las mejores garantías del mercado para que puedas estudiar con total tranquilidad
            </p>
          </div>

          <!-- Guarantees grid -->
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            <div 
              v-for="guarantee in guarantees" 
              :key="guarantee.title"
              class="text-center group"
            >
              <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <component :is="guarantee.icon" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-lg font-semibold text-foreground mb-2">{{ guarantee.title }}</h3>
              <p class="text-muted-foreground text-sm">{{ guarantee.description }}</p>
            </div>
          </div>

          <!-- Final CTA -->
          <div class="text-center">
            <div class="inline-block p-8 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-3xl border border-primary/20">
              <div class="space-y-4">
                <h3 class="text-xl font-bold text-foreground">
                  ¿Listo para transformar tu práctica legal?
                </h3>
                <p class="text-muted-foreground">
                  Únete a cientos de abogados que ya están usando IA en su trabajo diario
                </p>
                <Button 
                  @click="scrollToTop"
                  size="lg"
                  class="bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 shadow-lg"
                >
                  <ArrowUp class="w-5 h-5 mr-2" />
                  Comprar ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Separator />

    <!-- Footer content -->
    <section class="py-12">
      <div class="container">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-4 gap-8">
            
            <!-- Brand -->
            <div class="md:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center">
                  <Award class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="font-bold text-lg text-foreground">Curso de IA para Abogados</h3>
                  <p class="text-sm text-muted-foreground">Plan Profesional</p>
                </div>
              </div>
              <p class="text-muted-foreground text-sm leading-relaxed mb-4">
                El programa más completo para dominar la inteligencia artificial en el sector legal. 
                Aprende de expertos y transforma tu práctica profesional.
              </p>
              <Button 
                @click="goHome"
                variant="outline" 
                size="sm"
                class="border-primary/20 hover:bg-primary/5"
              >
                <ExternalLink class="w-4 h-4 mr-2" />
                Ver todos los planes
              </Button>
            </div>

            <!-- Contact -->
            <div>
              <h4 class="font-semibold text-foreground mb-4">Contacto</h4>
              <div class="space-y-3">
                <a 
                  v-for="contact in contactLinks"
                  :key="contact.label"
                  :href="contact.href"
                  target="_blank"
                  class="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <component :is="contact.icon" class="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <div class="font-medium">{{ contact.label }}</div>
                    <div class="text-xs">{{ contact.description }}</div>
                  </div>
                </a>
              </div>
            </div>

            <!-- Legal -->
            <div>
              <h4 class="font-semibold text-foreground mb-4">Legal</h4>
              <div class="space-y-2">
                <a 
                  v-for="link in legalLinks"
                  :key="link.label"
                  :href="link.href"
                  class="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {{ link.label }}
                </a>
              </div>
            </div>
          </div>

          <Separator class="my-8" />

          <!-- Bottom -->
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm text-muted-foreground">
              © {{ new Date().getFullYear() }} Curso de IA para Abogados. Todos los derechos reservados.
            </p>
            
            <div class="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Hecho con ❤️ para abogados innovadores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<style scoped>
/* Smooth animations */
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
</style>
