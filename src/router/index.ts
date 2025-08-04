import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import FreePlan from '../components/FreePlan.vue';
import ProfessionalPlan from '../components/ProfessionalPlan.vue';
import EnterprisePlan from '../components/EnterprisePlan.vue';

import EbookForm from '../components/EbookForm.vue';
import PrivacyPolicy from '../components/PrivacyPolicy.vue';
import WompiRedirect from '../pages/pagos/wompi/redirect.vue';

import Home from '../components/Home.vue';

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
