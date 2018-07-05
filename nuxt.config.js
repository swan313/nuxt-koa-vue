const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#FFFFFF'},

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'/*,
    '@nuxtjs/proxy'*/
  ],
  /*proxy: [
    [
      '/api/',
      {
        target: 'https://forca.yjlbld.com/admin' // api主机
      }
    ]
  ],*/
  /*
  ** Axios module configuration
  */
  axios: {
    prefix: '/api/',
    proxy: true
    // baseURL:'http://localhost:3000'
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      /*if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/
    }
  },
  // cache: true,
  srcDir: 'client/',
  router: {
    // middleware: 'auth'
  }
}
