export default {
  telemetry: false,
  ssr: false,
  target: 'static',
  head: {
    title: 'Project Heartcode 2020',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'og:title', name: 'og:title', content: 'Project Heartcode 2020'},
      {hid: 'og:description', name: 'og:description', content: process.env.npm_package_description || ''},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
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
    '@/plugins/api.js',
    '@/plugins/vue-highlightjs.js',
    '@/plugins/vuex-persist.js',
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
  env: {
    apiUrl: process.env.NODE_ENV === "production" ? 'https://api.heartcode.app' : 'http://localhost:4000',
  },
  generate: {
    async routes() {
      const {$content} = require('@nuxt/content')
      const files = await $content({deep: true}).only(['path']).fetch()

      return files.map(file => file.path)
    }
  },
  build: {
    extend(config) {
      config.resolve.alias['vue$'] = 'vue/dist/vue.common'
    }
  }
}
