import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import FreePlan from '../components/FreePlan.vue';
import ProfessionalPlan from '../components/ProfessionalPlan.vue';
import EbookForm from '../components/EbookForm.vue';

const routes: Array<RouteRecordRaw> = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
