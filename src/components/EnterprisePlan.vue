<script setup lang="ts">
import UnifiedNavbar from './UnifiedNavbar.vue';
import EnterpriseHero from './enterprise/EnterpriseHero.vue';
import EnterpriseAutomations from './enterprise/EnterpriseAutomations.vue';
import EnterpriseBenefits from './enterprise/EnterpriseBenefits.vue';
import EnterpriseProcess from './enterprise/EnterpriseProcess.vue';
import EnterpriseCTA from './enterprise/EnterpriseCTA.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Navbar -->
    <UnifiedNavbar variant="default" :show-back-button="true" />

    <!-- Hero Section -->
    <div class="pt-20 md:pt-20">
      <EnterpriseHero />
    </div>

    <!-- Automatizaciones Section -->
    <EnterpriseAutomations />

    <!-- Beneficios Section -->
    <EnterpriseBenefits />

    <!-- Proceso Section -->
    <EnterpriseProcess />

    <!-- CTA Section -->
    <EnterpriseCTA />

    <!-- Footer -->
    <Footer />
  </div>
</template>
