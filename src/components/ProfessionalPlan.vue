<script setup lang="ts">
import { ref } from 'vue';

// Import new components
import UnifiedNavbar from './UnifiedNavbar.vue';
import ProfessionalHero from './professional/ProfessionalHero.vue';
import DescriptionCTA from './professional/DescriptionCTA.vue';
import ModulesGrid from './professional/ModulesGrid.vue';
import FeaturesList from './professional/FeaturesList.vue';
import CouponForm from './professional/CouponForm.vue';
import PriceCTA from './professional/PriceCTA.vue';
import ProfessionalFAQ from './professional/ProfessionalFAQ.vue';
import Footer from './Footer.vue';

// State management
const loading = ref(false);
const originalAmount = ref(35000000); // 350.000 COP in centavos
const currentAmount = ref(35000000); // 350.000 COP in centavos

// Event handlers
const handleAmountChanged = (newAmount: number) => {
  currentAmount.value = newAmount;
};

const handleCouponApplied = (code: string, discount: number) => {
  console.log(`Cupón aplicado: ${code}, descuento: ${discount}`);
};

const handleCouponRemoved = () => {
  console.log('Cupón removido');
};

const handleCouponError = (message: string) => {
  console.error('Error de cupón:', message);
};



// Removed unused payment handlers - WompiButton handles everything directly
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Unified Navbar -->
    <UnifiedNavbar variant="professional" :show-back-button="true" />

    <!-- Hero Section -->
    <div class="pt-20 md:pt-20">
      <ProfessionalHero
        :title="'CURSO DE IA PARA ABOGADOS – PLAN PROFESIONAL'"
        :subtitle="'⚖️ Aprende a utilizar la IA en el mundo jurídico y diferénciate en tu ejercicio profesional.'"
        :features="['5 módulos intensivos', 'Certificado del curso', 'Contenido 100% práctico']"
      />
    </div>

    <!-- Description and CTA -->
    <DescriptionCTA />

    <!-- Coupon and Pricing Section -->
    <section id="pricing" class="py-16 md:py-24 bg-muted/20 scroll-mt-20">
      <div class="container">
        <div class="max-w-4xl mx-auto space-y-12">

          <!-- Coupon Form -->
          <CouponForm
            :original-amount="originalAmount"
            currency="COP"
            @amount-changed="handleAmountChanged"
            @coupon-applied="handleCouponApplied"
            @coupon-removed="handleCouponRemoved"
            @error="handleCouponError"
          />

          <!-- Price CTA -->
          <PriceCTA
            :amount="currentAmount"
            :original-amount="originalAmount"
            :loading="loading"
            currency="COP"
          />
        </div>
      </div>
    </section>

    <!-- Modules Grid -->
    <div id="modules" class="scroll-mt-20">
      <ModulesGrid />
    </div>

    <!-- Features List -->
    <div id="features" class="scroll-mt-20">
      <FeaturesList />
    </div>



    <!-- FAQ Section -->
    <div id="faq" class="scroll-mt-20">
      <ProfessionalFAQ />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>
