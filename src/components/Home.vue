<script setup lang="ts">
import Hero from './Hero.vue';
import HowItWorks from './HowItWorks.vue';
import Benefits from './Benefits.vue';
import Pricing from './Pricing.vue';
import FAQ from './FAQ.vue';
import Contact from './Contact.vue';
import Testimonials from './Testimonials.vue';
import Community from './Community.vue';
import Sponsors from './Sponsors.vue';
import Services from './Services.vue';
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-full blur-3xl -z-10"></div>
    <div class="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-orange-500/10 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-600/10 to-orange-700/10 rounded-full blur-3xl -z-10"></div>

    <!-- Sections with improved spacing and transitions -->
    <section class="section-transition">
      <Hero />
    </section>

    <section class="section-transition">
      <Services />
    </section>

    <section class="section-transition">
      <Sponsors />
    </section>

    <section class="section-transition">
      <HowItWorks />
    </section>

    <section class="section-transition">
      <Benefits />
    </section>

    <section class="section-transition">
      <Pricing />
    </section>

    <section class="section-transition">
      <Community />
    </section>

    <section class="section-transition">
      <Testimonials />
    </section>

    <section class="section-transition">
      <FAQ />
    </section>

    <section class="section-transition">
      <Contact />
    </section>
  </div>
</template>

<style scoped>
/* Section transitions and animations */
.section-transition {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: calc(var(--section-index, 0) * 0.1s);
}

.section-transition:nth-child(1) { --section-index: 1; }
.section-transition:nth-child(2) { --section-index: 2; }
.section-transition:nth-child(3) { --section-index: 3; }
.section-transition:nth-child(4) { --section-index: 4; }
.section-transition:nth-child(5) { --section-index: 5; }
.section-transition:nth-child(6) { --section-index: 6; }
.section-transition:nth-child(7) { --section-index: 7; }
.section-transition:nth-child(8) { --section-index: 8; }
.section-transition:nth-child(9) { --section-index: 9; }
.section-transition:nth-child(10) { --section-index: 10; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Background decorations animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(1deg);
  }
  66% {
    transform: translateY(-10px) rotate(-1deg);
  }
}

.absolute {
  animation: float 20s ease-in-out infinite;
}

.absolute:nth-child(2) {
  animation-delay: -7s;
}

.absolute:nth-child(3) {
  animation-delay: -14s;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .section-transition {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .absolute {
    animation: none;
  }

  html {
    scroll-behavior: auto;
  }
}
</style>
