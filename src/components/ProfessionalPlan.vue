<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const loading = ref(false);
const originalAmount = ref(40000000); // 400,000 COP in centavos
const amountInCents = ref(originalAmount.value);
const couponCode = ref('');
const couponLoading = ref(false);
const couponError = ref('');
const couponApplied = ref(false);

const defaultValue = 'item-1';
const accordionItems = [
  { value: 'item-1', title: '¿Es accesible?', content: 'Sí. Adhiere al patrón WAI-ARIA para accesibilidad.' },
  { value: 'item-2', title: '¿Está sin estilos?', content: 'Sí. Llega sin estilos por defecto para que definas tu propio diseño.' },
  { value: 'item-3', title: '¿Se puede animar?', content: '¡Claro! Usa la prop transition para configurar la animación.' },
];

async function applyCoupon() {
  couponError.value = '';
  couponLoading.value = true;
  try {
    const { data } = await axios.post('/api/coupons/validate', {
      code: couponCode.value,
      originalAmount: originalAmount.value
    });
    if (data.valid && typeof data.discountedAmount === 'number') {
      amountInCents.value = data.discountedAmount;
      couponApplied.value = true;
    } else {
      couponError.value = 'Cupón inválido';
      amountInCents.value = originalAmount.value;
      couponApplied.value = false;
    }
  } catch {
    couponError.value = 'Error al validar cupón';
    amountInCents.value = originalAmount.value;
    couponApplied.value = false;
  } finally {
    couponLoading.value = false;
  }
}

async function handleCheckout() {
  loading.value = true;
  try {
    const reference = `PLAN_PROF_${Date.now()}`;
    const response = await axios.post('/api/wompi/create-session', {
      amount_in_cents: amountInCents.value,
      currency: 'COP',
      reference,
      redirect_url: `${window.location.origin}/pagos/wompi/redirect`
    });
    const { checkoutUrl } = response.data;
    window.location.href = checkoutUrl;
  } catch (error) {
    console.error('Error iniciando pago:', error);
    alert('Error al iniciar pago');
  } finally {
    loading.value = false;
  }
}
</script>

<template>
<section class="py-12 bg-gray-50 dark:bg-black">
<div class="max-w-4xl mx-auto p-6 bg-white dark:bg-black rounded-lg shadow-lg">
<h1 class="text-5xl font-extrabold mb-8 text-center text-primary uppercase tracking-wide">Curso de IA para Abogados - Plan Profesional</h1>
<div class="text-center mb-6 space-y-2">
  <p class="text-lg text-gray-700 dark:text-gray-300">⚖️ Aprende a utilizar la IA en el mundo juridico y diferénciate en tu ejercicio profesional.</p>
  <p class="text-base text-gray-700 dark:text-gray-300">✅ 5 módulos intensivos | 📄 Certificado oficial | 🧠 Contenido 100% práctico</p>
</div>
      <div class="flex flex-col md:flex-row items-center gap-8">
        <img src="/profesional.png" alt="Curso IA" class="w-full md:w-1/2 rounded-lg shadow" />
        <div class="md:w-1/2 space-y-4">
          <p class="text-lg leading-relaxed text-gray-700">
            Transforma tu práctica legal con herramientas de inteligencia artificial. Aprende a automatizar procesos y ofrecer un servicio de alto impacto.
          </p>
<ul class="list-disc list-inside marker:text-orange-500 text-gray-700 space-y-1">
            <li>Contenido exclusivo y actualizado</li>
            <li>Soporte personalizado</li>
            <li>Casos prácticos y material descargable</li>
            <li>Certificado profesional</li>
          </ul>

          <!-- Cupón -->
          <div class="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <input
              v-model="couponCode"
              type="text"
              placeholder="Código de cupón"
class="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              :disabled="couponLoading || couponApplied"
            />
            <button
              @click="applyCoupon"
              class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
              :disabled="couponLoading || couponApplied"
            >
              {{ couponLoading ? 'Aplicando...' : couponApplied ? 'Aplicado' : 'Aplicar' }}
            </button>
          </div>
          <p v-if="couponError" class="text-red-600 text-sm">{{ couponError }}</p>

          <p class="mt-4 text-xl font-semibold">
            Monto a pagar:
            <span class="text-primary">{{ (amountInCents / 100).toLocaleString('es-CO', { style: 'currency', currency: 'COP' }) }}</span>
          </p>

          <button
            @click="handleCheckout"
class="w-full mt-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-500 transition"
            :disabled="loading"
          >
            {{ loading ? 'Procesando pago...' : 'Comprar ahora' }}
          </button>
        </div>
      </div>

      <!-- FAQ Accordion -->
      <section class="mt-12">
<h2 class="text-3xl font-bold mb-4 text-center text-primary uppercase">Preguntas Frecuentes</h2>
        <Accordion type="single" collapsible class="w-full" :default-value="defaultValue">
          <AccordionItem
            v-for="item in accordionItems"
            :key="item.value"
            :value="item.value"
class="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
<AccordionTrigger class="py-3 text-left w-full font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 bg-transparent">
              {{ item.title }}
            </AccordionTrigger>
<AccordionContent class="p-4 text-gray-600 dark:text-gray-400 bg-transparent">
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  </section>
</template>

<style scoped>
.text-primary {
  color: theme('colors.orange.500');
}
.bg-primary {
  background-color: theme('colors.orange.500');
}
.bg-primary-dark {
  background-color: theme('colors.orange.600');
}
</style>
