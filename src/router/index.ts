import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import FreePlan from '../components/FreePlan.vue';
import ProfessionalPlan from '../components/ProfessionalPlan.vue';
import EbookForm from '../components/EbookForm.vue';
import PrivacyPolicy from '../components/PrivacyPolicy.vue';

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
    path: '/ebook-gratis',
    name: 'EbookForm',
    component: EbookForm,
  },
  {
    path: '/politica-de-privacidad',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
