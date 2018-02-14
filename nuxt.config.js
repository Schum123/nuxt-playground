module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'playground',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'playground' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#efc14e' },
  modules:
  ['nuxt-material-design-icons',
    ['nuxt-google-maps-module', {
        key: 'AIzaSyCo5nL_4BFMj2UKboWb_6VCOCcBCJyX77A',
      }
    ],
  ],
  css: [
    '@/assets/css/main.css',
    '@/assets/css/main.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios', 'vue-google-autocomplete'],

    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [ {
    src: '~/plugins/vue-google-autocomplete', ssr: false
  }]
}
