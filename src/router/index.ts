import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import FreePlan from '../components/FreePlan.vue';
import ProfessionalPlan from '../components/ProfessionalPlan.vue';
import EnterprisePlan from '../components/EnterprisePlan.vue';

import EbookForm from '../components/EbookForm.vue';
import PrivacyPolicy from '../components/PrivacyPolicy.vue';
import WompiRedirect from '../pages/pagos/wompi/redirect.vue';

import Home from '../components/Home.vue';
import AuthCallback from '../components/auth/AuthCallback.vue';
import VectorSearch from '../components/VectorSearch.vue';
import LLMChat from '../components/LLMChat.vue';
import PIIAnonymizer from '../components/PIIAnonymizer.vue';

// Auth and Course components
import Login from '../views/Login.vue';
import CourseDashboard from '../views/Dashboard.vue';
import FundamentosIA from '../views/modules/FundamentosIA.vue';
import HerramientasUtiles from '../views/modules/HerramientasUtiles.vue';
import RedaccionLegal from '../views/modules/RedaccionLegal.vue';
import BusquedaJuridica from '../views/modules/BusquedaJuridica.vue';
import Automatizaciones from '../views/modules/Automatizaciones.vue';

// Microsessions
import FundamentosIA_Microsesion1 from '../views/modules/microsessions/FundamentosIA_Microsesion1.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/plan-gratuito',
    name: 'FreePlan',
    component: FreePlan,
  },
  {
    path: '/plan-profesional',
    name: 'ProfessionalPlan',
    component: ProfessionalPlan,
  },
  {
    path: '/plan-empresarial',
    name: 'EnterprisePlan',
    component: EnterprisePlan,
  },

  {
    path: '/ebook-gratis',
    name: 'EbookForm',
    component: EbookForm,
  },
  {
    path: '/politica-de-privacidad',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
  {
    path: '/pagos/wompi/redirect',
    name: 'WompiRedirect',
    component: WompiRedirect,
  },
  {
    path: '/auth/callback',
    name: 'AuthCallback',
    component: AuthCallback,
  },
  {
    path: '/busqueda-vectorial',
    name: 'VectorSearch',
    component: VectorSearch,
  },
  {
    path: '/chat-ia',
    name: 'LLMChat',
    component: LLMChat,
  },
  {
    path: '/anonimizador-pii',
    name: 'PIIAnonymizer',
    component: PIIAnonymizer,
  },
  // Auth and Course routes
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'CourseDashboard',
    component: CourseDashboard,
  },
  {
    path: '/modulo/fundamentos-ia',
    name: 'FundamentosIA',
    component: FundamentosIA,
  },
  {
    path: '/modulo/herramientas-utiles',
    name: 'HerramientasUtiles',
    component: HerramientasUtiles,
  },
  {
    path: '/modulo/redaccion-legal',
    name: 'RedaccionLegal',
    component: RedaccionLegal,
  },
  {
    path: '/modulo/busqueda-juridica',
    name: 'BusquedaJuridica',
    component: BusquedaJuridica,
  },
  {
    path: '/modulo/automatizaciones',
    name: 'Automatizaciones',
    component: Automatizaciones,
  },
  // Microsessions routes
  {
    path: '/modulo/fundamentos-ia/microsesion-1',
    name: 'FundamentosIA_Microsesion1',
    component: FundamentosIA_Microsesion1,
  },
  // Catch all route - must be last
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    // Si hay una posición guardada (por ejemplo, al usar el botón atrás del navegador)
    if (savedPosition) {
      return savedPosition;
    }
    // Si la ruta tiene un hash (ancla), ir a ese elemento
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    // Por defecto, siempre ir al inicio de la página
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;
