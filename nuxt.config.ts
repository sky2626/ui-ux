// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "", "@nuxt/image"],
  build: {
    transpile: ["oh-vue-icons"]
  },
  app: {
    head: {
      title: 'Ma Guy',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Your website description' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      ],
    },
  },
  
})