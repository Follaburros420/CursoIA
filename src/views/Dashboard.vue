<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCourseProgress } from '@/composables/useCourseProgress';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { 
  Brain, 
  Database, 
  FileText, 
  Search, 
  Cog, 
  Clock, 
  Award, 
  LogOut,
  User,
  CheckCircle,
  Play,
  Download,
  Trophy
} from "lucide-vue-next";

const router = useRouter();
const isAuthenticated = ref(false);

// Sistema de progreso
const { 
  getModuleProgress, 
  isModuleCompleted, 
  areAllModulesCompleted
} = useCourseProgress();

// Verificar autenticación al montar el componente
onMounted(() => {
  const authStatus = localStorage.getItem('isAuthenticated');
  const loginTime = localStorage.getItem('loginTime');
  
  // Verificar si está autenticado y la sesión no ha expirado (24 horas)
  if (authStatus === 'true' && loginTime) {
    const currentTime = Date.now();
    const sessionTime = parseInt(loginTime);
    const hoursPassed = (currentTime - sessionTime) / (1000 * 60 * 60);
    
    if (hoursPassed < 24) {
      isAuthenticated.value = true;
    } else {
      // Sesión expirada
      handleLogout();
    }
  } else {
    // No autenticado, redirigir al login
    router.push('/login');
  }
});

const handleLogout = () => {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('loginTime');
  router.push('/');
};

const modules = [
  {
    id: 1,
    icon: Brain,
    title: "Fundamentos de IA",
    description: "Desmitificar la IA y establecer bases sólidas para su aplicación ética en el derecho",
    duration: "2 horas",
    level: "Básico",
    route: "/modulo/fundamentos-ia",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    id: 2,
    icon: Database,
    title: "Herramientas más útiles",
    description: "Dominar las herramientas fundamentales para implementar IA en la práctica legal",
    duration: "2 horas",
    level: "Intermedio",
    route: "/modulo/herramientas-utiles",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800"
  },
  {
    id: 3,
    icon: FileText,
    title: "Redacción legal inteligente",
    description: "Crear documentos legales de alta calidad con asistencia de IA manteniendo estándares profesionales",
    duration: "+3 horas",
    level: "Avanzado",
    route: "/modulo/redaccion-legal",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800"
  },
  {
    id: 4,
    icon: Search,
    title: "Búsqueda de información jurídica",
    description: "Optimizar la investigación legal con herramientas de IA manteniendo rigor académico",
    duration: "+2 horas",
    level: "Intermedio",
    route: "/modulo/busqueda-juridica",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800"
  },
  {
    id: 5,
    icon: Cog,
    title: "Automatizaciones en acción",
    description: "Implementar automatizaciones que transformen la eficiencia del despacho",
    duration: "+3 horas",
    level: "Avanzado",
    route: "/modulo/automatizaciones",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    borderColor: "border-red-200 dark:border-red-800"
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Básico':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    case 'Intermedio':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    case 'Avanzado':
      return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  }
};

const goToModule = (route: string) => {
  router.push(route);
};

const generateCertificate = () => {
  // Aquí se implementaría la lógica para generar el certificado
  alert('¡Certificado generado exitosamente! Se descargará en breve.');
  // TODO: Implementar generación real del certificado PDF
};
</script>

<template>
  <div v-if="isAuthenticated" class="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

    <!-- Header -->
    <div class="relative z-10 border-b border-border/50 bg-card/30 backdrop-blur-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo and title -->
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center">
              <Award class="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 class="text-xl font-bold text-foreground">Dashboard del Curso</h1>
              <p class="text-sm text-muted-foreground">Plan Profesional - IA para Abogados</p>
            </div>
          </div>

          <!-- User info and logout -->
          <div class="flex items-center space-x-3">
            <div class="hidden sm:flex items-center space-x-2 px-3 py-2 bg-muted/50 rounded-lg">
              <User class="w-4 h-4 text-primary" />
              <span class="text-sm font-medium">Estudiante</span>
            </div>
            <Button
              @click="handleLogout"
              variant="outline"
              size="sm"
              class="text-muted-foreground hover:text-foreground"
            >
              <LogOut class="w-4 h-4 mr-2" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 container mx-auto px-4 py-8">
      <!-- Welcome section -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text mb-4">
          ¡Bienvenido al Curso!
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          Selecciona un módulo para comenzar tu aprendizaje en inteligencia artificial aplicada al derecho
        </p>
      </div>

      <!-- Image -->
      <div class="flex justify-center mb-12">
        <img src="/crew.png" alt="Crew" class="rounded-lg shadow-lg">
      </div>

      <!-- Stats overview -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div class="text-center p-4 bg-card/50 rounded-xl border border-border/50">
          <div class="text-2xl font-bold text-primary">12+</div>
          <div class="text-sm text-muted-foreground">Horas de contenido</div>
        </div>
        <div class="text-center p-4 bg-card/50 rounded-xl border border-border/50">
          <div class="text-2xl font-bold text-primary">5</div>
          <div class="text-sm text-muted-foreground">Módulos</div>
        </div>
        <div class="text-center p-4 bg-card/50 rounded-xl border border-border/50">
          <div class="text-2xl font-bold text-primary">25+</div>
          <div class="text-sm text-muted-foreground">Microsesiones</div>
        </div>
        <div class="text-center p-4 bg-card/50 rounded-xl border border-border/50">
          <div class="text-2xl font-bold text-primary">5</div>
          <div class="text-sm text-muted-foreground">Casos prácticos</div>
        </div>
      </div>

      <!-- Modules Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="module in modules"
          :key="module.id"
          class="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 relative"
          @click="goToModule(module.route)"
        >
          <!-- Completion badge -->
          <div v-if="isModuleCompleted(module.id)" class="absolute -top-2 -right-2 z-10">
            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle class="w-5 h-5 text-white" />
            </div>
          </div>

          <CardHeader class="text-center">
            <!-- Module number and icon -->
            <div class="flex items-center justify-center space-x-4 mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                {{ module.id }}
              </div>
              <div :class="`w-14 h-14 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`">
                <component :is="module.icon" class="w-7 h-7 text-white" />
              </div>
            </div>

            <CardTitle class="text-lg group-hover:text-primary transition-colors duration-300">
              {{ module.title }}
            </CardTitle>
            
            <div class="flex items-center justify-center space-x-2">
              <Badge :class="getLevelColor(module.level)" class="text-xs">
                {{ module.level }}
              </Badge>
              <div class="flex items-center text-sm text-muted-foreground">
                <Clock class="w-4 h-4 mr-1" />
                {{ module.duration }}
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <CardDescription class="text-center text-sm leading-relaxed mb-4">
              {{ module.description }}
            </CardDescription>

            <!-- Progress bar -->
            <div class="mb-4">
              <div class="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Progreso</span>
                <span>{{ getModuleProgress(module.id).percentage }}%</span>
              </div>
              <div class="w-full bg-muted rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-primary to-orange-600 h-2 rounded-full transition-all duration-500"
                  :style="`width: ${getModuleProgress(module.id).percentage}%`"
                ></div>
              </div>
            </div>

            <!-- Action button -->
            <Button
              :class="[
                'w-full group-hover:scale-105 transition-all duration-300',
                isModuleCompleted(module.id) 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white'
              ]"
            >
              <component :is="isModuleCompleted(module.id) ? CheckCircle : Play" class="w-4 h-4 mr-2" />
              {{ isModuleCompleted(module.id) ? 'Completado' : 'Comenzar Módulo' }}
            </Button>
          </CardContent>

          <!-- Hover effect -->
          <div :class="`absolute inset-0 rounded-lg ${module.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`"></div>
        </Card>
      </div>

      <!-- Certificate Section -->
      <div v-if="areAllModulesCompleted" class="mt-12">
        <Card class="bg-gradient-to-br from-yellow-50 to-yellow-100/50 dark:from-yellow-950/20 dark:to-yellow-900/10 border-yellow-200 dark:border-yellow-800 text-center">
          <CardHeader>
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <Trophy class="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle class="text-2xl text-yellow-800 dark:text-yellow-400">
              ¡Felicitaciones!
            </CardTitle>
            <CardDescription class="text-yellow-700 dark:text-yellow-300">
              Has completado todos los módulos y casos prácticos del curso
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              @click="generateCertificate"
              class="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download class="w-5 h-5 mr-3" />
              Generar Certificado del Curso
            </Button>
            <p class="text-xs text-yellow-600 dark:text-yellow-400 mt-3">
              Tu certificado oficial del Curso de IA para Abogados
            </p>
          </CardContent>
        </Card>
      </div>

      <!-- Progress section -->
      <div class="mt-12 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
          <CheckCircle class="w-4 h-4" />
          Acceso completo desbloqueado
        </div>
        <p class="text-muted-foreground">
          Tienes acceso completo a todos los módulos del Plan Profesional
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
