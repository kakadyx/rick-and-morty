// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: false,
  devtools: {
    enabled: true
  },
  modules: ['nuxt-graphql-client'],
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.API_URL || 'https://rickandmortyapi.com/graphql'
    }
  },
  css: ['~/app/styles/MiniReset.css']
})
