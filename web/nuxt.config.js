export default {
  telemetry: false,
  ssr: false,
  target: 'static',
  head: {
    title: 'Project Heartcode 2020',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/favicon.png'},
    ]
  },
  css: [],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.less',
  },
  plugins: [
    '@/plugins/vue-highlightjs.js',
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],
  axios: {},
  build: {
    extend(config) {
      config.resolve.alias['vue$'] = 'vue/dist/vue.common'
    }
  }
}
