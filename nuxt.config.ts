// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
})
