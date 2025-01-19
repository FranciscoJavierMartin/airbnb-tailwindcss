// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 3110,
  },
  app: {
    head: {
      title: 'Airbnb | Vacation rentals, cabins, beach houses, & more',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
});
