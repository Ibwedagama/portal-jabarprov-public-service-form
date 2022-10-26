// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/axios'],
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
})
