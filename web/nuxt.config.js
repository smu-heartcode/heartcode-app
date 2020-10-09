export default {
  telemetry: false,
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
    {src: '@/plugins/api.js'},
    {src: '@/plugins/vue-highlightjs.js'},
    {src: '@/plugins/vuep.js', mode: 'client'},
    {src: '@/plugins/vuex-persist.js', mode: 'client'},
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@smu-heartcode/smu-heartcode-components',
  ],
  env: {
    apiUrl: process.env.NODE_ENV === "production" ? 'https://api.heartcode.app' : 'http://localhost:4000',
  },
  build: {
    extend(config) {
      config.resolve.alias['vue$'] = 'vue/dist/vue.common'
    }
  }
}
