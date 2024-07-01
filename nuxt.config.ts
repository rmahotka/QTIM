// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "QTIM",
    },
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/fonts"],
  fonts: {
    families: [{ name: "TT Commons", provider: "none" }],
  },
});
