// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "QTIM",
    },
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
    alias: {
    '~types': '~/types'
  }
});
