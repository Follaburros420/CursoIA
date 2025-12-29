<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, ArrowLeft, Clock, CheckCircle, Play, Video, Layers, Rocket, BarChart3, ChevronDown } from "lucide-vue-next";

const router = useRouter();

onMounted(() => {
  const authStatus = localStorage.getItem('isAuthenticated');
  if (authStatus !== 'true') {
    router.push('/login');
  }
});

interface MicroSession {
  id: number;
  title: string;
  creativeTitle: string;
  objective: string;
  content: string;
  exercise: string;
  completed: boolean;
  section: number;
}

const sections = [
  {
    id: 1,
    title: "Fundamentos y Visión de Éxito",
    icon: Video,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    id: 2,
    title: "Construyendo los Cimientos (Infraestructura)",
    icon: Layers,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800"
  },
  {
    id: 3,
    title: "Estrategia y Lanzamiento de Campañas",
    icon: Rocket,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800"
  },
  {
    id: 4,
    title: "Análisis y Optimización",
    icon: BarChart3,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800"
  }
];

const microSessions: MicroSession[] = [
  // SECCIÓN 1: Fundamentos y Visión de Éxito
  {
    id: 1,
    section: 1,
    title: "Video de Introducción",
    creativeTitle: "El Despegue: Tu Mapa de Ruta hacia el Éxito Digital",
    objective: "Entender el 'por qué' de este curso, la metodología que seguiremos y cómo este conocimiento cambiará la forma en que haces negocios.",
    content: "Una bienvenida estratégica donde entenderás el 'por qué' de este curso, la metodología que seguiremos y cómo este conocimiento cambiará la forma en que haces negocios.",
    exercise: "Actividad de Introspección: Escribe tus 3 objetivos principales para el curso y define tu situación actual (ventas/seguidores) para medir el progreso al final.",
    completed: false
  },
  // SECCIÓN 2: Construyendo los Cimientos
  {
    id: 5,
    section: 2,
    title: "Crear cuenta publicitaria",
    creativeTitle: "Tu Centro de Operaciones: Activando el Business Manager",
    objective: "Crear y configurar correctamente tu cuenta publicitaria, asegurando que tu estructura sea profesional y segura frente a bloqueos.",
    content: "Paso a paso técnico para crear y configurar correctamente tu cuenta publicitaria, asegurando que tu estructura sea profesional y segura frente a bloqueos.",
    exercise: "Checklist de Seguridad: Entrega una lista de verificación con los pasos de seguridad (autenticación en dos pasos, datos de facturación) que debes marcar al completar.",
    completed: false
  },
  {
    id: 6,
    section: 2,
    title: "Crear y conectar IG y FB",
    creativeTitle: "Ecosistema Sincronizado: Uniendo tus Redes de Poder",
    objective: "Vincular tu Fan Page de Facebook con tu cuenta de Instagram para que tus anuncios se distribuyan de forma fluida en todo el inventario de Meta.",
    content: "Aprende a vincular tu Fan Page de Facebook con tu cuenta de Instagram para que tus anuncios se distribuyan de forma fluida en todo el inventario de Meta.",
    exercise: "Auditoría de Perfil: Verifica que tu biografía de IG y tu info de FB sean coherentes antes de lanzar publicidad.",
    completed: false
  },
  {
    id: 7,
    section: 2,
    title: "Crear y Conectar WhatsApp Business",
    creativeTitle: "Ventas al Chat: El Puente Directo con tu Cliente",
    objective: "Configurar WhatsApp Business como destino de tus anuncios para facilitar el cierre de ventas mediante la conversación directa.",
    content: "Configuración de WhatsApp Business como destino de tus anuncios para facilitar el cierre de ventas mediante la conversación directa.",
    exercise: "Script de Bienvenida: Diseña un mensaje de respuesta automática que reciba a los prospectos que lleguen desde los anuncios.",
    completed: false
  },
  {
    id: 8,
    section: 2,
    title: "Resumen Módulo 2",
    creativeTitle: "Cimientos Listos: Recuento de tu Infraestructura",
    objective: "Repaso rápido de los activos creados y verificación de que toda la conexión técnica funciona antes de pasar a la estrategia de pauta.",
    content: "Repaso rápido de los activos creados y verificación de que toda la conexión técnica funciona antes de pasar a la estrategia de pauta.",
    exercise: "Autoevaluación: Un breve cuestionario de 3 preguntas para confirmar que entiendes la diferencia entre perfil personal y cuenta comercial.",
    completed: false
  },
  // SECCIÓN 3: Estrategia y Lanzamiento de Campañas
  {
    id: 9,
    section: 3,
    title: "Introducción a Meta Ads",
    creativeTitle: "Dominando el Algoritmo: El ADN de una Campaña Ganadora",
    objective: "Explicación de la estructura de campañas (Campaña, Conjunto de Anuncios y Anuncio) y cómo funciona la subasta de Meta.",
    content: "Explicación de la estructura de campañas (Campaña, Conjunto de Anuncios y Anuncio) y cómo funciona la subasta de Meta.",
    exercise: "Mapa Conceptual: Dibuja o esquematiza la jerarquía de una campaña para entender dónde se elige el presupuesto y dónde el diseño.",
    completed: false
  },
  {
    id: 10,
    section: 3,
    title: "Crea tu primera campaña de ventas",
    creativeTitle: "Fórmula de Conversión: Tu Primera Campaña de Ventas",
    objective: "Lanzar una campaña enfocada en transacciones, optimizando para el público con mayor intención de compra.",
    content: "Guía práctica para lanzar una campaña enfocada en transacciones, optimizando para el público con mayor intención de compra.",
    exercise: "Definición de Oferta Irresistible: Redacta cuál será la oferta principal (descuento, bono, beneficio) que promocionarás en esta campaña.",
    completed: false
  },
  {
    id: 11,
    section: 3,
    title: "Tip extra: Ahorra tiempo en tus campañas",
    creativeTitle: "Hack de Productividad: Automatiza y Escala sin Esfuerzo",
    objective: "Consejos avanzados para duplicar anuncios, usar plantillas y atajos del Administrador que te ahorrarán horas de trabajo manual.",
    content: "Consejos avanzados para duplicar anuncios, usar plantillas y atajos del Administrador que te ahorrarán horas de trabajo manual.",
    exercise: "Ejercicio de Duplicación: Practica la creación de un nuevo conjunto de anuncios usando la función 'Duplicado rápido'.",
    completed: false
  },
  {
    id: 12,
    section: 3,
    title: "Crea tus anuncios IA en minutos",
    creativeTitle: "Publicidad Inteligente: Usando la IA para Anuncios Magnéticos",
    objective: "Aprovechar las herramientas de Inteligencia Artificial de Meta (Advantage+) para mejorar imágenes, redactar textos y optimizar creativos automáticamente.",
    content: "Cómo aprovechar las herramientas de Inteligencia Artificial de Meta (Advantage+) para mejorar imágenes, redactar textos y optimizar creativos automáticamente.",
    exercise: "Test A/B IA: Crea un anuncio tradicional y uno asistido por IA para comparar cuál genera mayor CTR (clics) en el futuro.",
    completed: false
  },
  {
    id: 13,
    section: 3,
    title: "Crea tu primera campaña de interacción",
    creativeTitle: "Conexión y Comunidad: Campañas para Generar Confianza",
    objective: "Configurar campañas para obtener likes, comentarios y mensajes, ideales para calentar audiencias y construir prueba social.",
    content: "Configuración de campañas para obtener likes, comentarios y mensajes, ideales para calentar audiencias y construir prueba social.",
    exercise: "El Gancho (Hook): Escribe 3 títulos diferentes que usarías para detener el 'scroll' de un usuario en Instagram.",
    completed: false
  },
  {
    id: 14,
    section: 3,
    title: "Crea tu primera campaña de clientes potenciales (Lead Gen)",
    creativeTitle: "Máquina de Prospectos: Capturando Datos de Calidad",
    objective: "Crear formularios instantáneos dentro de Facebook y capturar nombres, correos y teléfonos de interesados sin que salgan de la app.",
    content: "Tutorial para crear formularios instantáneos dentro de Facebook y capturar nombres, correos y teléfonos de interesados sin que salgan de la app.",
    exercise: "Diseño del Lead Magnet: Define qué regalo o información valiosa le darás al usuario a cambio de sus datos (ej: un PDF, una asesoría, un catálogo).",
    completed: false
  },
  {
    id: 15,
    section: 3,
    title: "Resumen Módulo 3",
    creativeTitle: "Estrategia en Marcha: Tu Ecosistema de Anuncios Activo",
    objective: "Consolidación de todas las campañas creadas y revisión de la coherencia entre el mensaje y el objetivo elegido.",
    content: "Consolidación de todas las campañas creadas y revisión de la coherencia entre el mensaje y el objetivo elegido.",
    exercise: "Planificador de Campañas: Rellena una hoja de ruta con las fechas de inicio, presupuestos y audiencias de las campañas configuradas.",
    completed: false
  },
  // SECCIÓN 4: Análisis y Optimización
  {
    id: 16,
    section: 4,
    title: "Lee tus métricas",
    creativeTitle: "Lectura de Datos: Traduciendo Clics en Dinero Real",
    objective: "Aprender a interpretar el CTR, CPC, ROAS y CPA para saber qué anuncios apagar y en cuáles invertir más dinero.",
    content: "Aprende a interpretar el CTR, CPC, ROAS y CPA para saber qué anuncios apagar y en cuáles invertir más dinero.",
    exercise: "El Semáforo de Métricas: Clasifica tus métricas: Verde (Buen desempeño), Amarillo (Por mejorar) y Rojo (Apagar anuncio), basándote en tus costos por resultado.",
    completed: false
  }
];

const toggleSessionComplete = (sessionId: number) => {
  const session = microSessions.find(s => s.id === sessionId);
  if (session) {
    session.completed = !session.completed;
  }
};

const getSessionsBySection = (sectionId: number) => {
  return microSessions.filter(s => s.section === sectionId);
};

const introductionVideoId = "1zaSU8kV83s";

// Estado para controlar qué secciones están expandidas
const expandedSections = ref<Set<number>>(new Set([1])); // Por defecto, la primera sección está expandida

const toggleSection = (sectionId: number) => {
  if (expandedSections.value.has(sectionId)) {
    expandedSections.value.delete(sectionId);
  } else {
    expandedSections.value.add(sectionId);
  }
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
    <!-- Header -->
    <div class="border-b border-border/50 bg-card/30 backdrop-blur-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center space-x-4">
          <Button @click="router.push('/dashboard')" variant="ghost" size="sm">
            <ArrowLeft class="w-4 h-4 mr-2" />
            Dashboard
          </Button>
          
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Target class="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 class="text-lg font-bold text-foreground">Módulo 6: Consigue clientes con meta</h1>
              <div class="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock class="w-4 h-4" />
                <span>+2 horas de contenido</span>
                <Badge class="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 text-xs">
                  Intermedio
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto space-y-8">
        
        <!-- Banner Landing -->
        <div class="relative w-full overflow-hidden rounded-lg shadow-lg">
          <img
            src="/landing modulo 6.png"
            alt="Consigue clientes con meta - Banner"
            class="w-full h-auto object-cover"
          />
        </div>

        <!-- Video de Introducción: Resultados que obtendrás -->
        <Card class="overflow-hidden">
          <CardHeader class="text-center">
            <CardTitle class="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text">
              Resultados que obtendrás
            </CardTitle>
            <CardDescription>
              Video de introducción al módulo
            </CardDescription>
          </CardHeader>
          <CardContent class="p-0">
            <div class="relative w-full" style="padding-bottom: 56.25%; /* 16:9 aspect ratio */">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-b-lg"
                :src="`https://www.youtube.com/embed/${introductionVideoId}`"
                title="Resultados que obtendrás"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </CardContent>
        </Card>

        <!-- Secciones -->
        <div class="space-y-12">
          <div
            v-for="section in sections"
            :key="section.id"
            class="space-y-6"
          >
            <!-- Section Header - Clickable -->
            <Card 
              :class="`${section.bgColor} ${section.borderColor} border-2 cursor-pointer transition-all duration-300 hover:shadow-lg`"
              @click="toggleSection(section.id)"
            >
              <CardHeader>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3 flex-1">
                    <div :class="`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center flex-shrink-0`">
                      <component :is="section.icon" class="w-6 h-6 text-white" />
                    </div>
                    <div class="flex-1">
                      <CardTitle class="text-xl">
                        SECCIÓN {{ section.id }}: {{ section.title }}
                      </CardTitle>
                      <p class="text-sm text-muted-foreground mt-1">
                        {{ getSessionsBySection(section.id).length }} microsesión{{ getSessionsBySection(section.id).length !== 1 ? 'es' : '' }}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    :class="[
                      'w-6 h-6 text-muted-foreground transition-transform duration-300 flex-shrink-0',
                      expandedSections.has(section.id) ? 'rotate-180' : ''
                    ]"
                  />
                </div>
              </CardHeader>
            </Card>

            <!-- Sessions in this section - Collapsible -->
            <div v-show="expandedSections.has(section.id)" class="grid gap-6 transition-all duration-300">
              <Card
                v-for="session in getSessionsBySection(section.id)"
                :key="session.id"
                class="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                @click="toggleSessionComplete(session.id)"
              >
                <CardHeader>
                  <div class="flex items-start justify-between">
                    <div class="flex items-center space-x-3 flex-1">
                      <div :class="`w-10 h-10 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0`">
                        {{ session.id }}
                      </div>
                      <div class="flex-1 min-w-0">
                        <CardTitle class="text-lg group-hover:text-primary transition-colors mb-1">
                          {{ session.title }}
                        </CardTitle>
                        <p class="text-sm font-medium text-primary mb-2">
                          {{ session.creativeTitle }}
                        </p>
                        <p class="text-sm text-muted-foreground">
                          <strong>Objetivo:</strong> {{ session.objective }}
                        </p>
                      </div>
                    </div>
                    
                    <CheckCircle 
                      :class="[
                        'w-6 h-6 transition-colors duration-300 flex-shrink-0',
                        session.completed ? 'text-green-500' : 'text-muted-foreground'
                      ]"
                    />
                  </div>
                </CardHeader>
                
                <CardContent class="space-y-4">
                  <div>
                    <h5 class="font-medium text-foreground mb-1">Resumen General:</h5>
                    <p class="text-sm text-muted-foreground">{{ session.content }}</p>
                  </div>
                  
                  <div>
                    <h5 class="font-medium text-primary mb-1">Propuesta Pedagógica:</h5>
                    <p class="text-sm text-muted-foreground">{{ session.exercise }}</p>
                  </div>

                  <Button
                    size="sm"
                    :variant="session.completed ? 'secondary' : 'default'"
                    class="w-full mt-4"
                  >
                    <Play class="w-4 h-4 mr-2" />
                    {{ session.completed ? 'Completado' : 'Comenzar sesión' }}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex justify-between items-center pt-8">
          <Button @click="router.push('/modulo/automatizaciones')" variant="outline">
            <ArrowLeft class="w-4 h-4 mr-2" />
            Módulo Anterior
          </Button>
          
          <Button
            @click="router.push('/dashboard')"
            class="bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white"
          >
            Volver al Dashboard
            <CheckCircle class="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
