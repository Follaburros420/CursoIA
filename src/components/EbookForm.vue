<template>
  <div class="min-h-screen bg-background">
    <UnifiedNavbar variant="default" :show-back-button="true" />
    <div class="pt-20">
    <div class="p-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="md:w-1/2">
        <img src="/ebook.png" alt="Ebook" class="rounded shadow-lg" />
      </div>
      <div class="md:w-1/2">
      <section class="mb-8 text-center">
        <h1 class="text-4xl font-extrabold mb-4">Descarga tu Ebook Gratis</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Highlights del libro para abogados que quieren saber de IA:
        </p>
      </section>
      
      <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="firstName" class="block text-sm font-medium mb-1">Nombre</label>
            <input
              v-model="form.firstName"
              id="firstName"
              type="text"
              required
              :class="inputClass"
            />
          </div>
          <div>
            <label for="lastName" class="block text-sm font-medium mb-1">Apellido</label>
            <input
              v-model="form.lastName"
              id="lastName"
              type="text"
              required
              :class="inputClass"
            />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium mb-1">Número</label>
            <input
              v-model="form.phone"
              id="phone"
              type="tel"
              required
              :class="inputClass"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium mb-1">Correo Electrónico</label>
            <input
              v-model="form.email"
              id="email"
              type="email"
              required
              :class="inputClass"
            />
          </div>
          <div>
            <label for="age" class="block text-sm font-medium mb-1">Edad</label>
            <input
              v-model="form.age"
              id="age"
              type="number"
              min="0"
              required
              :class="inputClass"
            />
          </div>
          <button
            type="submit"
            class="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            Descargar Ebook
          </button>
        </form>
        <p v-if="successMessage" class="mt-4 text-green-600 font-semibold">{{ successMessage }}</p>
        <p v-if="errorMessage" class="mt-4 text-red-600 font-semibold">{{ errorMessage }}</p>
      </div>
    </div>
    <HowItWorks />
    <Pricing />
    <FAQ />
    <VideoPreview />
  </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue';
import UnifiedNavbar from './UnifiedNavbar.vue';

const form = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  age: '',
});

const successMessage = ref('');
const errorMessage = ref('');

const inputClass = computed(() => {
  return `w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 transition ${
    document.documentElement.classList.contains('dark')
      ? 'border-gray-600 bg-gray-800 text-white focus:ring-orange-500'
      : 'border-gray-300 bg-white text-black focus:ring-orange-500'
  }`;
});

async function submitForm() {
  successMessage.value = '';
  errorMessage.value = '';

  const payload = {
    firstName: form.firstName,
    lastName: form.lastName,
    phone: form.phone,
    email: form.email,
    age: form.age,
  };

  try {
    // Send to ebook webhook via local API
    const res = await fetch('/api/ebook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Error en el envío de datos: ${res.status} - ${errorText}`);
    }

    successMessage.value = '¡Gracias! Revisa tu correo para descargar el Ebook.';
    // Clear form
    form.firstName = '';
    form.lastName = '';
    form.phone = '';
    form.email = '';
    form.age = '';
  } catch (error: any) {
    if (error instanceof Error) {
      console.error('Fetch error:', error.name, error.message);
      errorMessage.value = `Error al enviar datos: ${error.name} - ${error.message}`;
    } else {
      errorMessage.value = 'Error desconocido al enviar datos.';
    }
  }
}
</script>

<style scoped>
/* Estilos específicos para el formulario */
</style>
