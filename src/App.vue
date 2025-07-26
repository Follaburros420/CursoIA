<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import { RouterView } from 'vue-router';
import ChatbotFloating from "./components/ChatbotFloating.vue";
import WhatsappFloating from "./components/WhatsappFloating.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <RouterView />
  <ChatbotFloating />
  <WhatsappFloating />
  <Footer />
</template>
