// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["vuetify-nuxt-module"],
  vuetify: {
    moduleOptions: {
      styles: {
        configFile: 'assets/styles/settings.scss',
      },
    }
  }
})