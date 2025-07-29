import path from "path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";



export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()],
      },
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 5174,
      host: true,
      historyApiFallback: {
        index: '/index.html',
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    define: {
      // Make sure environment variables are available
      __VITE_WOMPI_PUBLIC_KEY__: JSON.stringify(env.VITE_WOMPI_PUBLIC_KEY),
    },
  };
});
