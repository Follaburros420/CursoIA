import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import FreePlan from '../components/FreePlan.vue';
import ProfessionalPlan from '../components/ProfessionalPlan.vue';

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
import ConsigueClientesMeta from '../views/modules/ConsigueClientesMeta.vue';

// Microsessions
import FundamentosIA_Microsesion1 from '../views/modules/microsessions/FundamentosIA_Microsesion1.vue';
import FundamentosIA_Microsesion2 from '../views/modules/microsessions/FundamentosIA_Microsesion2.vue';
import FundamentosIA_Microsesion3 from '../views/modules/microsessions/FundamentosIA_Microsesion3.vue';
import FundamentosIA_Microsesion4 from '../views/modules/microsessions/FundamentosIA_Microsesion4.vue';
import FundamentosIA_Microsesion5 from '../views/modules/microsessions/FundamentosIA_Microsesion5.vue';
import FundamentosIA_Microsesion6 from '../views/modules/microsessions/FundamentosIA_Microsesion6.vue';
import HerramientasUtiles_Microsesion1 from '../views/modules/microsessions/HerramientasUtiles_Microsesion1.vue';
import HerramientasUtiles_Microsesion2 from '../views/modules/microsessions/HerramientasUtiles_Microsesion2.vue';
import HerramientasUtiles_Microsesion3 from '../views/modules/microsessions/HerramientasUtiles_Microsesion3.vue';
import HerramientasUtiles_Microsesion4 from '../views/modules/microsessions/HerramientasUtiles_Microsesion4.vue';
import HerramientasUtiles_Microsesion5 from '../views/modules/microsessions/HerramientasUtiles_Microsesion5.vue';
import HerramientasUtiles_Microsesion6 from '../views/modules/microsessions/HerramientasUtiles_Microsesion6.vue';
import HerramientasUtiles_Microsesion7 from '../views/modules/microsessions/HerramientasUtiles_Microsesion7.vue';
import HerramientasUtiles_Microsesion8 from '../views/modules/microsessions/HerramientasUtiles_Microsesion8.vue';
import HerramientasUtiles_Microsesion9 from '../views/modules/microsessions/HerramientasUtiles_Microsesion9.vue';
import RedaccionLegal_Microsesion1 from '../views/modules/microsessions/RedaccionLegal_Microsesion1.vue';
import RedaccionLegal_Microsesion2 from '../views/modules/microsessions/RedaccionLegal_Microsesion2.vue';
import RedaccionLegal_Microsesion3 from '../views/modules/microsessions/RedaccionLegal_Microsesion3.vue';
import RedaccionLegal_Microsesion4 from '../views/modules/microsessions/RedaccionLegal_Microsesion4.vue';
import RedaccionLegal_Microsesion5 from '../views/modules/microsessions/RedaccionLegal_Microsesion5.vue';
import RedaccionLegal_Microsesion6 from '../views/modules/microsessions/RedaccionLegal_Microsesion6.vue';
import RedaccionLegal_Microsesion7 from '../views/modules/microsessions/RedaccionLegal_Microsesion7.vue';
import RedaccionLegal_Microsesion8 from '../views/modules/microsessions/RedaccionLegal_Microsesion8.vue';
import RedaccionLegal_Microsesion9 from '../views/modules/microsessions/RedaccionLegal_Microsesion9.vue';
import BusquedaJuridica_Microsesion1 from '../views/modules/microsessions/BusquedaJuridica_Microsesion1.vue';
import BusquedaJuridica_Microsesion2 from '../views/modules/microsessions/BusquedaJuridica_Microsesion2.vue';
import BusquedaJuridica_Microsesion3 from '../views/modules/microsessions/BusquedaJuridica_Microsesion3.vue';
import BusquedaJuridica_Microsesion4 from '../views/modules/microsessions/BusquedaJuridica_Microsesion4.vue';
import BusquedaJuridica_Microsesion5 from '../views/modules/microsessions/BusquedaJuridica_Microsesion5.vue';
import BusquedaJuridica_Microsesion6 from '../views/modules/microsessions/BusquedaJuridica_Microsesion6.vue';
import BusquedaJuridica_Microsesion7 from '../views/modules/microsessions/BusquedaJuridica_Microsesion7.vue';
import BusquedaJuridica_Microsesion8 from '../views/modules/microsessions/BusquedaJuridica_Microsesion8.vue';

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
    path: '/plan-profesiional',
    redirect: '/plan-profesional',
  },
  {
    path: '/plan-profesional',
    name: 'ProfessionalPlan',
    component: ProfessionalPlan,
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
  {
    path: '/modulo/consigue-clientes-meta',
    name: 'ConsigueClientesMeta',
    component: ConsigueClientesMeta,
  },
  // Microsessions routes
  {
    path: '/modulo/fundamentos-ia/microsesion-1',
    name: 'FundamentosIA_Microsesion1',
    component: FundamentosIA_Microsesion1,
  },
  {
    path: '/modulo/fundamentos-ia/microsesion-2',
    name: 'FundamentosIA_Microsesion2',
    component: FundamentosIA_Microsesion2,
  },
  {
    path: '/modulo/fundamentos-ia/microsesion-3',
    name: 'FundamentosIA_Microsesion3',
    component: FundamentosIA_Microsesion3,
  },
  {
    path: '/modulo/fundamentos-ia/microsesion-4',
    name: 'FundamentosIA_Microsesion4',
    component: FundamentosIA_Microsesion4,
  },
  {
    path: '/modulo/fundamentos-ia/microsesion-5',
    name: 'FundamentosIA_Microsesion5',
    component: FundamentosIA_Microsesion5,
  },
  {
    path: '/modulo/fundamentos-ia/microsesion-6',
    name: 'FundamentosIA_Microsesion6',
    component: FundamentosIA_Microsesion6,
  },

  // Herramientas Útiles Microsessions routes
  {
    path: '/modulo/herramientas-utiles/microsesion-1',
    name: 'HerramientasUtiles_Microsesion1',
    component: HerramientasUtiles_Microsesion1,
  },
  {
    path: '/modulo/herramientas-utiles/microsesion-2',
    name: 'HerramientasUtiles_Microsesion2',
    component: HerramientasUtiles_Microsesion2,
  },
  {
    path: '/modulo/herramientas-utiles/microsesion-3',
    name: 'HerramientasUtiles_Microsesion3',
    component: HerramientasUtiles_Microsesion3,
  },
  {
    path: '/modulo/herramientas-utiles/microsesion-4',
    name: 'HerramientasUtiles_Microsesion4',
    component: HerramientasUtiles_Microsesion4,
  },
  {
    path: '/modulo/herramientas-utiles/microsesion-5',
    name: 'HerramientasUtiles_Microsesion5',
    component: HerramientasUtiles_Microsesion5,
  },
  {
    path: '/modulo/herramientas-utiles/microsesion-6',
    name: 'HerramientasUtiles_Microsesion6',
    component: HerramientasUtiles_Microsesion6,
  },
  {
    path: '/modulo/herramientas-utiles/microsesion-7',
    name: 'HerramientasUtiles_Microsesion7',
    component: HerramientasUtiles_Microsesion7,
  },
  {
    path: '/modulo/herramientas-utiles/microsesion-8',
    name: 'HerramientasUtiles_Microsesion8',
    component: HerramientasUtiles_Microsesion8,
  },
  {
    path: '/modulo/herramientas-utiles/microsesion-9',
    name: 'HerramientasUtiles_Microsesion9',
    component: HerramientasUtiles_Microsesion9,
  },

  // Redacción Legal Microsessions routes
  {
    path: '/modulo/redaccion-legal/microsesion-1',
    name: 'RedaccionLegal_Microsesion1',
    component: RedaccionLegal_Microsesion1,
  },
  {
    path: '/modulo/redaccion-legal/microsesion-2',
    name: 'RedaccionLegal_Microsesion2',
    component: RedaccionLegal_Microsesion2,
  },
  {
    path: '/modulo/redaccion-legal/microsesion-3',
    name: 'RedaccionLegal_Microsesion3',
    component: RedaccionLegal_Microsesion3,
  },
  {
    path: '/modulo/redaccion-legal/microsesion-4',
    name: 'RedaccionLegal_Microsesion4',
    component: RedaccionLegal_Microsesion4,
  },
  {
    path: '/modulo/redaccion-legal/microsesion-5',
    name: 'RedaccionLegal_Microsesion5',
    component: RedaccionLegal_Microsesion5,
  },
  {
    path: '/modulo/redaccion-legal/microsesion-6',
    name: 'RedaccionLegal_Microsesion6',
    component: RedaccionLegal_Microsesion6,
  },
  {
    path: '/modulo/redaccion-legal/microsesion-7',
    name: 'RedaccionLegal_Microsesion7',
    component: RedaccionLegal_Microsesion7,
  },
  {
    path: '/modulo/redaccion-legal/microsesion-8',
    name: 'RedaccionLegal_Microsesion8',
    component: RedaccionLegal_Microsesion8,
  },
  {
    path: '/modulo/redaccion-legal/microsesion-9',
    name: 'RedaccionLegal_Microsesion9',
    component: RedaccionLegal_Microsesion9,
  },

  // Búsqueda Jurídica Microsessions routes
  {
    path: '/modulo/busqueda-juridica/microsesion-1',
    name: 'BusquedaJuridica_Microsesion1',
    component: BusquedaJuridica_Microsesion1,
  },
  {
    path: '/modulo/busqueda-juridica/microsesion-2',
    name: 'BusquedaJuridica_Microsesion2',
    component: BusquedaJuridica_Microsesion2,
  },
  {
    path: '/modulo/busqueda-juridica/microsesion-3',
    name: 'BusquedaJuridica_Microsesion3',
    component: BusquedaJuridica_Microsesion3,
  },
  {
    path: '/modulo/busqueda-juridica/microsesion-4',
    name: 'BusquedaJuridica_Microsesion4',
    component: BusquedaJuridica_Microsesion4,
  },
  {
    path: '/modulo/busqueda-juridica/microsesion-5',
    name: 'BusquedaJuridica_Microsesion5',
    component: BusquedaJuridica_Microsesion5,
  },
  {
    path: '/modulo/busqueda-juridica/microsesion-6',
    name: 'BusquedaJuridica_Microsesion6',
    component: BusquedaJuridica_Microsesion6,
  },
  {
    path: '/modulo/busqueda-juridica/microsesion-7',
    name: 'BusquedaJuridica_Microsesion7',
    component: BusquedaJuridica_Microsesion7,
  },
  {
    path: '/modulo/busqueda-juridica/microsesion-8',
    name: 'BusquedaJuridica_Microsesion8',
    component: BusquedaJuridica_Microsesion8,
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
