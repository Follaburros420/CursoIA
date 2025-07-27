<script setup lang="ts">
import { ref } from 'vue';
import { apiService } from '@/services/api';

// Import Elite components
import UnifiedNavbar from './UnifiedNavbar.vue';
import EliteHero from './elite/EliteHero.vue';
import PainPoints from './elite/PainPoints.vue';
import EliteSolution from './elite/EliteSolution.vue';
import EliteBenefits from './elite/EliteBenefits.vue';
import EliteCurriculum from './elite/EliteCurriculum.vue';
import EliteTestimonials from './elite/EliteTestimonials.vue';
import ElitePricing from './elite/ElitePricing.vue';
import EliteFAQ from './elite/EliteFAQ.vue';
import EliteFooter from './elite/EliteFooter.vue';

const loading = ref(false);
const originalAmount = ref(120000000); // 1,200 USD in centavos
const amountInCents = ref(originalAmount.value);

async function handleReserveSpot() {
  loading.value = true;
  try {
    const reference = `ELITE_PLAN_${Date.now()}`;
    const response = await apiService.wompiCreateSession({
      amount_in_cents: amountInCents.value,
      currency: 'USD',
      reference,
      redirect_url: `${window.location.origin}/pagos/wompi/redirect`
    });
    const { checkoutUrl } = response;
    console.log('Redirecting to checkout:', checkoutUrl);
    window.location.href = checkoutUrl;
  } catch (error) {
    console.error('Error iniciando pago:', error);
    alert('Error al iniciar pago. Por favor, intenta de nuevo.');
  } finally {
    loading.value = false;
  }
}

// Removed unused payment handlers - WompiButton handles everything directly
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Unified Navbar -->
    <UnifiedNavbar variant="elite" :show-back-button="true" custom-title="Elite Program" />

    <!-- Hero Section -->
    <div class="pt-20">
      <EliteHero @reserve-spot="handleReserveSpot" />
    </div>

    <!-- Pain Points Section -->
    <div id="pain-points">
      <PainPoints />
    </div>

    <!-- Solution Section -->
    <div id="solution">
      <EliteSolution @get-started="handleReserveSpot" />
    </div>

    <!-- Benefits Section -->
    <div id="benefits">
      <EliteBenefits />
    </div>

    <!-- Curriculum Section -->
    <div id="curriculum" class="scroll-mt-20">
      <EliteCurriculum />
    </div>

    <!-- Testimonials Section -->
    <div id="testimonials" class="scroll-mt-20">
      <EliteTestimonials />
    </div>

    <!-- Pricing Section -->
    <div id="pricing" class="scroll-mt-20">
      <ElitePricing />
    </div>

    <!-- FAQ Section -->
    <div id="faq" class="scroll-mt-20">
      <EliteFAQ @reserve-spot="handleReserveSpot" />
    </div>

    <!-- Elite Footer -->
    <EliteFooter @reserve-spot="handleReserveSpot" />
  </div>
</template>
