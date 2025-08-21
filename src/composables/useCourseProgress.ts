import { ref, computed } from 'vue';

interface ModuleProgress {
  moduleId: number;
  sessionsCompleted: number[];
  practicalCaseCompleted: boolean;
}

const STORAGE_KEY = 'course_progress';

// Estado global del progreso
const moduleProgress = ref<ModuleProgress[]>([
  { moduleId: 1, sessionsCompleted: [], practicalCaseCompleted: false },
  { moduleId: 2, sessionsCompleted: [], practicalCaseCompleted: false },
  { moduleId: 3, sessionsCompleted: [], practicalCaseCompleted: false },
  { moduleId: 4, sessionsCompleted: [], practicalCaseCompleted: false },
  { moduleId: 5, sessionsCompleted: [], practicalCaseCompleted: false }
]);

// Configuración de módulos
const moduleConfig = [
  { id: 1, totalSessions: 6, title: "Fundamentos de IA" },
  { id: 2, totalSessions: 4, title: "Herramientas más útiles" },
  { id: 3, totalSessions: 5, title: "Redacción legal inteligente" },
  { id: 4, totalSessions: 4, title: "Búsqueda de información jurídica" },
  { id: 5, totalSessions: 4, title: "Automatizaciones en acción" }
];

export function useCourseProgress() {
  // Cargar progreso del localStorage al inicializar
  const loadProgress = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        moduleProgress.value = JSON.parse(saved);
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  };

  // Guardar progreso en localStorage
  const saveProgress = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(moduleProgress.value));
  };

  // Marcar/desmarcar sesión como completada
  const toggleSessionComplete = (moduleId: number, sessionIndex: number) => {
    const module = moduleProgress.value.find(m => m.moduleId === moduleId);
    if (!module) return;

    const sessionIdx = module.sessionsCompleted.indexOf(sessionIndex);
    if (sessionIdx > -1) {
      // Ya está completada, la removemos
      module.sessionsCompleted.splice(sessionIdx, 1);
    } else {
      // No está completada, la agregamos
      module.sessionsCompleted.push(sessionIndex);
    }
    
    saveProgress();
  };

  // Marcar/desmarcar caso práctico como completado
  const togglePracticalCaseComplete = (moduleId: number) => {
    const module = moduleProgress.value.find(m => m.moduleId === moduleId);
    if (!module) return;

    module.practicalCaseCompleted = !module.practicalCaseCompleted;
    saveProgress();
  };

  // Verificar si una sesión está completada
  const isSessionCompleted = (moduleId: number, sessionIndex: number) => {
    const module = moduleProgress.value.find(m => m.moduleId === moduleId);
    return module ? module.sessionsCompleted.includes(sessionIndex) : false;
  };

  // Verificar si un caso práctico está completado
  const isPracticalCaseCompleted = (moduleId: number) => {
    const module = moduleProgress.value.find(m => m.moduleId === moduleId);
    return module ? module.practicalCaseCompleted : false;
  };

  // Calcular progreso de un módulo específico
  const getModuleProgress = (moduleId: number) => {
    const module = moduleProgress.value.find(m => m.moduleId === moduleId);
    const config = moduleConfig.find(c => c.id === moduleId);
    
    if (!module || !config) return { percentage: 0, completed: 0, total: 0 };

    const sessionsCompleted = module.sessionsCompleted.length;
    const practicalCompleted = module.practicalCaseCompleted ? 1 : 0;
    const totalCompleted = sessionsCompleted + practicalCompleted;
    const totalItems = config.totalSessions + 1; // +1 para el caso práctico
    
    return {
      percentage: Math.round((totalCompleted / totalItems) * 100),
      completed: totalCompleted,
      total: totalItems
    };
  };

  // Verificar si un módulo está completamente terminado
  const isModuleCompleted = (moduleId: number) => {
    const progress = getModuleProgress(moduleId);
    return progress.percentage === 100;
  };

  // Verificar si todos los módulos están completados
  const areAllModulesCompleted = computed(() => {
    return moduleConfig.every(config => isModuleCompleted(config.id));
  });

  // Calcular progreso total del curso
  const totalCourseProgress = computed(() => {
    const totalModules = moduleConfig.length;
    const completedModules = moduleConfig.filter(config => isModuleCompleted(config.id)).length;
    
    return {
      percentage: Math.round((completedModules / totalModules) * 100),
      completed: completedModules,
      total: totalModules
    };
  });

  // Obtener estadísticas generales
  const getCourseStats = computed(() => {
    let totalSessions = 0;
    let completedSessions = 0;
    let totalPracticalCases = moduleConfig.length;
    let completedPracticalCases = 0;

    moduleConfig.forEach(config => {
      totalSessions += config.totalSessions;
      const module = moduleProgress.value.find(m => m.moduleId === config.id);
      if (module) {
        completedSessions += module.sessionsCompleted.length;
        if (module.practicalCaseCompleted) {
          completedPracticalCases++;
        }
      }
    });

    return {
      sessions: { completed: completedSessions, total: totalSessions },
      practicalCases: { completed: completedPracticalCases, total: totalPracticalCases },
      modules: { completed: totalCourseProgress.value.completed, total: totalCourseProgress.value.total }
    };
  });

  // Inicializar progreso
  loadProgress();

  return {
    moduleProgress,
    moduleConfig,
    toggleSessionComplete,
    togglePracticalCaseComplete,
    isSessionCompleted,
    isPracticalCaseCompleted,
    getModuleProgress,
    isModuleCompleted,
    areAllModulesCompleted,
    totalCourseProgress,
    getCourseStats,
    loadProgress,
    saveProgress
  };
}
