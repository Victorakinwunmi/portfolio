// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
   modules: [
        '@primevue/nuxt-module'
    ],
     primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    },
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: [
      '~/assets/css/main.css',
    ],
    vite: {
      plugins: [
        tailwindcss(),
      ],
    },
})
