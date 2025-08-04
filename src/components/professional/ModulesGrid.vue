<script setup lang="ts">
import { ref } from 'vue';
import { Badge } from "@/components/ui/badge";

import {
  Brain,
  Database,
  FileText,
  Search,
  Cog,
  Clock,
  Award,
  ChevronDown,
  Target,
  BookOpen,
  CheckCircle
} from "lucide-vue-next";

interface MicroSession {
  title: string;
  objective: string;
  content: string;
  exercise: string;
}

interface Module {
  id: number;
  icon: any;
  title: string;
  description: string;
  objective: string;
  duration: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  microSessions: MicroSession[];
  practicalCase: {
    title: string;
    description: string;
  };
}

const modules: Module[] = [
  {
    id: 1,
    icon: Brain,
    title: "Fundamentos de IA",
    description: "Que el abogado entienda qué es la IA, cómo funciona por debajo, sus límites, riesgos legales/éticos y qué aplicaciones reales tiene en su práctica.",
    objective: "Desmitificar la IA y establecer bases sólidas para su aplicación ética en el derecho",
    duration: "6 horas",
    level: "Básico",
    microSessions: [
      {
        title: "Qué es la IA",
        objective: "Desmitificar y alinear expectativas.",
        content: "Distinción entre IA débil/fuerte, generación vs. clasificación, diferencia entre asistente y autor.",
        exercise: "Pregunta a un LLM '¿Qué puede y qué no puede hacer la IA en un análisis jurídico?' y anota 3 limitaciones clave."
      },
      {
        title: "Tipos de IA",
        objective: "Saber cuándo una solución es basada en reglas vs. aprendizaje.",
        content: "Sistemas basados en reglas, machine learning, deep learning, redes neuronales vs. árboles de decisión.",
        exercise: "Dado un problema legal (ej. clasificar cláusulas riesgosas), decidir si se resolvería mejor con reglas, ML o LLM y justificar."
      },
      {
        title: "Machine Learning y Deep Learning",
        objective: "Entender sobre entrenamiento, sobreajuste, generalización y por qué los modelos cometen errores.",
        content: "Datos de entrenamiento, etiquetas, 'garbage in garbage out', interpretabilidad.",
        exercise: "Revisar un ejemplo de output incorrecto y proponer qué pudo fallar en el entrenamiento o en el prompt."
      },
      {
        title: "Procesamiento de Lenguaje Natural (NLP)",
        objective: "Saber qué hace posible que los modelos entiendan y generen texto legal.",
        content: "Tokenización, embeddings, similitud semántica, resumen, extracción de entidades.",
        exercise: "Generar embeddings de dos textos similares y medir con la IA su distancia/igualdad."
      },
      {
        title: "Sesgos y ética",
        objective: "Reconocer y mitigar sesgos en outputs legales.",
        content: "Tipos de sesgo (de datos, confirmación, de género, cultural), impacto en decisiones jurídicas, human in the loop.",
        exercise: "Detectar un sesgo en una recomendación automatizada y reescribir el prompt para mitigarlo."
      },
      {
        title: "Marco regulatorio y legal",
        objective: "Conocer restricciones, responsabilidades y estándares de uso de IA en el ejercicio legal.",
        content: "Protección de datos (Habeas Data), responsabilidad profesional, uso de algoritmos en decisiones, comparación con EU/EEUU.",
        exercise: "Analizar un caso hipotético donde un abogado depende de IA y hay un error: ¿quién responde y qué protocolos previos debía tener?"
      }
    ],
    practicalCase: {
      title: "Auditoría de confianza de una recomendación de IA",
      description: "Se da un borrador generado por IA (opinión legal con recomendaciones contradictorias). El alumno debe identificar errores, sesgos y supuestos no explícitos, corregir el prompt/entrada para mejorar la calidad, y escribir un short memo de por qué se puede confiar (o no) en esa recomendación."
    }
  },
  {
    id: 2,
    icon: Database,
    title: "Herramientas más útiles (LLMs, RAG y bases de datos)",
    description: "Enseñar el ecosistema técnico operativo: qué herramientas usar, cómo combinarlas y qué puedes lograr con ellas en una práctica legal escalable.",
    objective: "Dominar las herramientas fundamentales para implementar IA en la práctica legal",
    duration: "8 horas",
    level: "Intermedio",
    microSessions: [
      {
        title: "Introducción a los LLMs",
        objective: "Comprender diferencias entre proveedores y optimizar su uso.",
        content: "Qué son, diferencias entre proveedores (open vs. fine-tuned), temperatura, tokens, costos de uso.",
        exercise: "Comparar la misma pregunta legal en dos modelos y analizar diferencias de respuesta y consistencia."
      },
      {
        title: "RAG (Retrieval-Augmented Generation)",
        objective: "Combinar conocimiento específico con generación.",
        content: "Cómo funciona el pipeline: vector store + búsqueda semántica + generación con contexto.",
        exercise: "Montar (aunque sea conceptual/manual) un RAG simple para un conjunto de precedentes y hacer una consulta."
      },
      {
        title: "Bases de datos y almacenamiento de conocimiento",
        objective: "Estructurar información legal para consulta eficiente.",
        content: "Tipos: vectoriales vs. tradicionales, versionado de documentos, gestión de fuentes.",
        exercise: "Diseñar la estructura mínima para almacenar opiniones previas, precedentes y versiones de documentos."
      },
      {
        title: "Integraciones prácticas y conectores",
        objective: "Conectar herramientas con sistemas existentes.",
        content: "Conectar LLM con Google Docs / Notion / sistema interno. Automatizar ingestion (scanning, OCR, extracción).",
        exercise: "Esquematizar cómo entra un documento nuevo y termina como un insight en el sistema."
      }
    ],
    practicalCase: {
      title: "Construir un asistente de consulta legal",
      description: "El alumno debe diseñar e implementar un flujo RAG donde se ingieren 10 documentos normativos/precedentes, una pregunta del cliente se responde combinando esos documentos con un resumen generado, incluyendo evaluación de confianza y explicación para el cliente."
    }
  },
  {
    id: 3,
    icon: FileText,
    title: "Redacción legal inteligente",
    description: "Dominar la generación, adaptación y control de textos legales con IA, minimizando errores y preservando voz y responsabilidad.",
    objective: "Crear documentos legales de alta calidad con asistencia de IA manteniendo estándares profesionales",
    duration: "7 horas",
    level: "Avanzado",
    microSessions: [
      {
        title: "Mejores modelos para redacción legal",
        objective: "Identificar qué modelos destacan en coherencia, precisión y seguimiento de instrucciones.",
        content: "Comparación de modelos, evaluación de capacidades específicas para textos legales.",
        exercise: "Probar 2 prompts con distinto modelo y evaluar resultados."
      },
      {
        title: "Estructuras de documentos",
        objective: "Dominar plantillas para diferentes tipos de documentos legales.",
        content: "Plantillas: memo, opinión, contrato, cláusula, carta.",
        exercise: "Elegir una plantilla y pedir a la IA que la rellene parcialmente con inputs dados."
      },
      {
        title: "Prompts y plantillas",
        objective: "Construir prompts efectivos para generación legal.",
        content: "Arquitectura de prompts (instrucción + contexto + ejemplo + restricción).",
        exercise: "Construir un prompt para generar una cláusula específica con tono formal y cláusulas de escape."
      },
      {
        title: "Adaptar tono y estilo",
        objective: "Preservar la voz del despacho/abogado en diferentes contextos.",
        content: "Preservar la voz del despacho/abogado, ajustes formales vs. coloquiales.",
        exercise: "Generar una misma opinión en tono 'corporativo', 'amistoso' y 'urgente'."
      },
      {
        title: "Detección de riesgos e inconsistencias",
        objective: "Identificar y corregir problemas en textos generados.",
        content: "Uso de prompts para interrogatorios (ej. '¿Qué supuestos implícitos hay aquí?').",
        exercise: "Hacer que la IA audite su propio texto y sugiera correcciones."
      }
    ],
    practicalCase: {
      title: "Crear una opinión legal completa",
      description: "Ejercicio integral: recoger inputs, generar borrador, adaptar tono, detectar y corregir riesgos, anonimizar datos sensibles, y traducir resumen para un stakeholder internacional."
    }
  },
  {
    id: 4,
    icon: Search,
    title: "Búsqueda de información jurídica",
    description: "Dominar cómo localizar, evaluar y organizar información jurídica de forma eficiente y fiable usando IA como potenciador.",
    objective: "Optimizar la investigación legal con herramientas de IA manteniendo rigor académico",
    duration: "6 horas",
    level: "Intermedio",
    microSessions: [
      {
        title: "Fuentes primarias, secundarias y doctrina",
        objective: "Distinguir tipos de fuentes y cuándo usar cada una.",
        content: "Jerarquía normativa, qué tiene peso, cómo se interpreta. Fuentes primarias vs. secundarias.",
        exercise: "Clasificar un conjunto de fuentes y determinar su peso jurídico."
      },
      {
        title: "Mejores modelos y herramientas de búsqueda",
        objective: "Seleccionar herramientas optimizadas para recuperación legal.",
        content: "Modelos optimizados para recuperación, comparadores de motores semánticos.",
        exercise: "Comparar resultados de búsqueda entre diferentes herramientas."
      },
      {
        title: "Técnicas avanzadas de búsqueda",
        objective: "Aplicar técnicas sofisticadas para búsquedas precisas.",
        content: "Chain-of-thought para refinar búsquedas, reformulación automática, expansión de consultas.",
        exercise: "Refinar una consulta compleja usando técnicas de reformulación."
      },
      {
        title: "Filtrado y validación de información",
        objective: "Asegurar calidad y vigencia de la información encontrada.",
        content: "Verificación cruzada, scoring de credibilidad, fechas de vigencia.",
        exercise: "Validar un conjunto de fuentes y asignar scores de confiabilidad."
      }
    ],
    practicalCase: {
      title: "Resolver una pregunta compleja con respaldo documental",
      description: "Escenario: '¿Qué obligaciones contractuales tiene una empresa colombiana bajo una cláusula de fuerza mayor en contratos con contraparte extranjera durante una crisis sanitaria?' Formular estrategia de búsqueda, recolectar fuentes, validar y filtrar, entregar brief con citas correctas y resumen ejecutivo."
    }
  },
  {
    id: 5,
    icon: Cog,
    title: "Automatizaciones en acción",
    description: "Construir y desplegar automatizaciones prácticas que conviertan flujos legales repetitivos en sistemas semi-autónomos.",
    objective: "Implementar automatizaciones que transformen la eficiencia del despacho",
    duration: "9 horas",
    level: "Avanzado",
    microSessions: [
      {
        title: "Principios de automatización legal",
        objective: "Establecer criterios para automatizar procesos legales.",
        content: "Qué automatizar, qué no, fallbacks, control humano.",
        exercise: "Evaluar procesos del despacho y determinar candidatos para automatización."
      },
      {
        title: "Automatización 1: Onboarding de cliente",
        objective: "Automatizar la captación y procesamiento inicial de clientes.",
        content: "Flujo: formulario → resumen de necesidades → borrador inicial → revisión.",
        exercise: "Diseñar un flujo de onboarding automatizado para un tipo de cliente específico."
      },
      {
        title: "Automatización 2: Monitoreo normativo",
        objective: "Crear sistemas de alerta para cambios normativos relevantes.",
        content: "Flujo: fuentes ingestas → comparación con base anterior → notificación de cambio relevante.",
        exercise: "Configurar un sistema de monitoreo para una área legal específica."
      },
      {
        title: "Automatización 3: Auditoría de riesgos contractuales",
        objective: "Automatizar la evaluación inicial de riesgos en contratos.",
        content: "Flujo: upload contrato → análisis de cláusulas clave → score de riesgo + recomendaciones.",
        exercise: "Crear un sistema de scoring automático para contratos de un tipo específico."
      }
    ],
    practicalCase: {
      title: "Implementar una automatización completa",
      description: "Elegir una de las tres automatizaciones estudiadas e implementar un prototipo funcional que incluya: ingesta de datos, procesamiento con IA, validación humana, y entrega de resultados. Acceso a biblioteca de 5,000+ workflows verificados para adaptación."
    }
  }
];

const expandedModules = ref<Set<number>>(new Set());

const toggleModule = (moduleId: number) => {
  if (expandedModules.value.has(moduleId)) {
    expandedModules.value.delete(moduleId);
  } else {
    expandedModules.value.add(moduleId);
  }
};

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
</script>

<template>
  <section class="py-16 md:py-24 bg-background">
    <div class="container">
      <div class="max-w-6xl mx-auto">

        <!-- Section header -->
        <div class="text-center space-y-6 mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            <Award class="w-4 h-4" />
            Programa de estudios
          </div>

          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text">
              5 Módulos Intensivos
            </span>
          </h2>

          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un programa completo diseñado para llevarte desde los fundamentos hasta la implementación avanzada de IA en tu práctica legal
          </p>
        </div>

        <!-- Modules accordion -->
        <div class="space-y-6">
          <div
            v-for="module in modules"
            :key="module.id"
            class="group relative"
          >
            <!-- Module card -->
            <div class="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/80 transition-all duration-300 hover:shadow-lg">

              <!-- Module header - clickable -->
              <div
                @click="toggleModule(module.id)"
                class="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/20 transition-colors duration-200 rounded-t-2xl"
              >
                <div class="flex items-center gap-6">
                  <!-- Module number -->
                  <div class="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {{ module.id }}
                  </div>

                  <!-- Icon -->
                  <div class="w-14 h-14 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <component
                      :is="module.icon"
                      class="w-7 h-7 text-primary group-hover:text-orange-600 transition-colors duration-300"
                    />
                  </div>

                  <!-- Title and basic info -->
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {{ module.title }}
                      </h3>
                      <Badge :class="getLevelColor(module.level)" class="text-xs font-medium">
                        {{ module.level }}
                      </Badge>
                    </div>

                    <p class="text-muted-foreground text-sm leading-relaxed mb-2">
                      {{ module.description }}
                    </p>

                    <!-- Duration -->
                    <div class="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock class="w-4 h-4" />
                      <span>{{ module.duration }} de contenido</span>
                    </div>
                  </div>
                </div>

                <!-- Expand/collapse icon -->
                <ChevronDown
                  :class="[
                    'w-5 h-5 text-muted-foreground transition-transform duration-300',
                    expandedModules.has(module.id) ? 'rotate-180' : ''
                  ]"
                />
              </div>

              <!-- Expandable content -->
              <div
                v-if="expandedModules.has(module.id)"
                class="border-t border-border/50 p-6 space-y-8 animate-in slide-in-from-top-2 duration-300"
              >
                <!-- Objective -->
                <div class="bg-primary/5 rounded-xl p-4">
                  <div class="flex items-center gap-2 mb-2">
                    <Target class="w-5 h-5 text-primary" />
                    <h4 class="font-semibold text-foreground">Objetivo del módulo</h4>
                  </div>
                  <p class="text-muted-foreground text-sm">{{ module.objective }}</p>
                </div>

                <!-- Micro-sessions -->
                <div>
                  <div class="flex items-center gap-2 mb-4">
                    <BookOpen class="w-5 h-5 text-primary" />
                    <h4 class="font-semibold text-foreground">Micro-sesiones</h4>
                  </div>

                  <div class="grid gap-4">
                    <div
                      v-for="(session, index) in module.microSessions"
                      :key="index"
                      class="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors duration-200"
                    >
                      <h5 class="font-medium text-foreground mb-2">{{ session.title }}</h5>
                      <p class="text-sm text-muted-foreground mb-2"><strong>Objetivo:</strong> {{ session.objective }}</p>
                      <p class="text-sm text-muted-foreground mb-2"><strong>Contenido:</strong> {{ session.content }}</p>
                      <p class="text-sm text-primary"><strong>Ejercicio:</strong> {{ session.exercise }}</p>
                    </div>
                  </div>
                </div>

                <!-- Practical case -->
                <div class="bg-orange-50 dark:bg-orange-950/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
                  <div class="flex items-center gap-2 mb-2">
                    <CheckCircle class="w-5 h-5 text-orange-600" />
                    <h4 class="font-semibold text-foreground">Caso práctico</h4>
                  </div>
                  <h5 class="font-medium text-foreground mb-2">{{ module.practicalCase.title }}</h5>
                  <p class="text-sm text-muted-foreground">{{ module.practicalCase.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Summary stats -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center space-y-2">
            <div class="text-3xl font-bold text-primary">8+</div>
            <div class="text-sm text-muted-foreground">Horas de contenido</div>
          </div>

          <div class="text-center space-y-2">
            <div class="text-3xl font-bold text-primary">25+</div>
            <div class="text-sm text-muted-foreground">Microsesiones (5-20 min)</div>
          </div>

          <div class="text-center space-y-2">
            <div class="text-3xl font-bold text-primary">5</div>
            <div class="text-sm text-muted-foreground">Casos prácticos</div>
          </div>

          <div class="text-center space-y-2">
            <div class="text-3xl font-bold text-primary">5,000+</div>
            <div class="text-sm text-muted-foreground">Workflows verificados</div>
          </div>
        </div>

        <!-- Call to action -->
        <div class="mt-12 text-center">
          <p class="text-muted-foreground text-sm">
            💡 <strong>Tip:</strong> Haz clic en cada módulo para ver el contenido detallado, objetivos y ejercicios prácticos
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .animate-float {
    animation: float 8s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}
</style>
