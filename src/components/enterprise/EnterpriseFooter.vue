<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  Mail, 
  MessageCircle, 
  Shield,
  Clock,
  ArrowUp,
  ExternalLink,
  Users,
  Zap
} from "lucide-vue-next";

const router = useRouter();

const goHome = () => {
  router.push('/');
};

const contactLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/message/22XPE3IWTKONL1",
    icon: MessageCircle,
    description: "Consultas inmediatas"
  },
  {
    label: "Email",
    href: "mailto:info@cursoiaabogados.com",
    icon: Mail,
    description: "Soporte especializado"
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

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "Garantía de resultados",
    description: "Mejoras medibles en 30 días o trabajamos gratis"
  },
  {
    icon: Clock,
    title: "Soporte 24/7",
    description: "Equipo técnico disponible siempre"
  },
  {
    icon: Users,
    title: "Implementación dedicada",
    description: "Equipo especializado para tu despacho"
  }
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <footer class="bg-gradient-to-br from-muted/50 via-background to-muted/30 border-t border-border/50">
    <div class="container">
      
      <!-- Main footer content -->
      <div class="py-16 space-y-12">
        
        <!-- Header section -->
        <div class="text-center space-y-6">
          <Badge class="bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary px-4 py-2 text-sm font-medium border border-primary/20">
            <Building2 class="w-4 h-4 mr-2" />
            Plan Empresarial
          </Badge>
          
          <h2 class="text-2xl md:text-3xl font-bold text-foreground">
            Transforma tu despacho con automatizaciones inteligentes
          </h2>
          
          <p class="text-muted-foreground max-w-2xl mx-auto">
            Únete a los despachos más innovadores que ya están aprovechando 
            el poder de la inteligencia artificial para optimizar sus procesos.
          </p>
        </div>

        <!-- Enterprise features -->
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="feature in enterpriseFeatures" 
            :key="feature.title"
            class="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/50 transition-all duration-300"
          >
            <div class="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <component :is="feature.icon" class="w-6 h-6 text-primary" />
            </div>
            
            <h3 class="font-semibold text-foreground mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-muted-foreground">{{ feature.description }}</p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl p-8 border border-primary/20">
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-bold text-foreground mb-2">
                ¿Listo para comenzar la transformación?
              </h3>
              <p class="text-muted-foreground">
                Agenda tu consulta gratuita y descubre el potencial de automatización de tu despacho
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                class="px-8 py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300"
                as-child
              >
                <a href="https://wa.me/message/22XPE3IWTKONL1" target="_blank">
                  <MessageCircle class="w-5 h-5 mr-2" />
                  Agendar consulta gratuita
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                class="px-8 py-3 border-primary/20 hover:bg-primary/5"
                @click="goHome"
              >
                Ver otros planes
              </Button>
            </div>
          </div>
        </div>

        <!-- Contact and links -->
        <div class="grid md:grid-cols-2 gap-12">
          
          <!-- Contact information -->
          <div class="space-y-6">
            <h3 class="text-lg font-semibold text-foreground">Contacto directo</h3>
            
            <div class="space-y-4">
              <div 
                v-for="contact in contactLinks" 
                :key="contact.label"
                class="flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/50 transition-colors duration-300"
              >
                <div class="w-10 h-10 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <component :is="contact.icon" class="w-5 h-5 text-primary" />
                </div>
                
                <div class="flex-1">
                  <h4 class="font-medium text-foreground">{{ contact.label }}</h4>
                  <p class="text-sm text-muted-foreground">{{ contact.description }}</p>
                </div>
                
                <Button variant="ghost" size="sm" as-child>
                  <a :href="contact.href" target="_blank">
                    <ExternalLink class="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <!-- Quick stats -->
          <div class="space-y-6">
            <h3 class="text-lg font-semibold text-foreground">Resultados comprobados</h3>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl">
                <div class="text-2xl font-bold text-primary mb-1">85%</div>
                <div class="text-sm text-muted-foreground">Reducción en tareas repetitivas</div>
              </div>
              
              <div class="text-center p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl">
                <div class="text-2xl font-bold text-primary mb-1">3x</div>
                <div class="text-sm text-muted-foreground">Aumento en productividad</div>
              </div>
              
              <div class="text-center p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl">
                <div class="text-2xl font-bold text-primary mb-1">30</div>
                <div class="text-sm text-muted-foreground">Días para ver resultados</div>
              </div>
              
              <div class="text-center p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl">
                <div class="text-2xl font-bold text-primary mb-1">24/7</div>
                <div class="text-sm text-muted-foreground">Soporte especializado</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator class="opacity-50" />

      <!-- Bottom section -->
      <div class="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <!-- Logo and copyright -->
        <div class="flex items-center gap-4">
          <div 
            @click="goHome" 
            class="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
              <Zap class="w-5 h-5 text-white" />
            </div>
            <span class="font-bold text-foreground">AprenderIA</span>
          </div>
          
          <span class="text-sm text-muted-foreground">
            © 2024 Todos los derechos reservados
          </span>
        </div>

        <!-- Legal links and scroll to top -->
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-4">
            <a 
              v-for="link in legalLinks" 
              :key="link.label"
              :href="link.href"
              class="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {{ link.label }}
            </a>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            @click="scrollToTop"
            class="hover:bg-primary/10"
          >
            <ArrowUp class="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </footer>
</template>
