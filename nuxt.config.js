import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Find a Doc JAPAN",
    description: "A community database to share clinic information in Japan.",
    titleTemplate: "Community-driven database",
    image: "/assets/img/social-card.jpg",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "A community database to share clinic information in Japan."
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Find a Doc JAPAN"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "A community database to share clinic information in Japan."
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "www.findadoc.jp/social-card.jpg"
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: "Find a Doc JAPAN"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Find a Doc JAPAN"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "A community database to share clinic information in Japan."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "www.findadoc.jp/social-card.jpg"
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "www.findadoc.jp/social-card.jpg"
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Find a Doc JAPAN"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Nunito&display=swap"
      }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.js",
        async: true,
        defer: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyAjIhMU4Co5LvhhEoqiGqbF5R6zmsQfIZY",
          authDomain: "findadoc-bc230.firebaseapp.com",
          databaseURL: "https://findadoc-bc230-default-rtdb.firebaseio.com",
          projectId: "findadoc-bc230",
          storageBucket: "findadoc-bc230.appspot.com",
          messagingSenderId: "871643437476",
          appId: "1:871643437476:web:d7271d01ee125e9f7bc931",
          measurementId: "G-SN6SHYMJKY"
        },
        services: {
          auth: false,
          firestore: true,
          analytics: true
        }
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      light: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
