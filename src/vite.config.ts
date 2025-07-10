import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', // Alias para facilitar las importaciones
    },
  },
  build: {
    rollupOptions: {
      external: [], // Puedes agregar módulos externos aquí si es necesario
    },
  },
});
