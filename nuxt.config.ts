// https://nuxt.com/docs/api/configuration/nuxt-config
import graphql from '@rollup/plugin-graphql'

export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: [
      'vuetify',
      '@apollo/client',
      'ts-invariant/process',
      '@pinia/nuxt',
    ],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: ['@pinia/nuxt', '@nuxtjs/apollo'],
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
  apollo: {
    clients: {
      starwars: {
        httpEndpoint:
          'https://swapi-graphql.netlify.app/.netlify/functions/index',
      },
      pokemon: {
        httpEndpoint: 'https://beta.pokeapi.co/graphql/v1beta',
      },
    },
  },
  app: {
    head: {
      title: "Ken's Continued Test",
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  pinia: {
    autoImports: ['defineStore'],
  },
})
