import colors from "vuetify/es5/util/colors";
import { languages } from "@ourjapanlife/findadoc-localization/supported_languages.json";

const SITE_TITLE = "Find a Doc JAPAN";
const SITE_DESCRIPTION =
  "A community database to share clinic information in Japan.";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "COVID-19 Vaccination Info",
    title: SITE_TITLE,
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        name: "google-site-verification",
        content: "-iHcqQwxR-wiZU6Y4BKtcn79tUZJAcyWXJt7w7iobpY",
      },
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: SITE_DESCRIPTION,
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: SITE_TITLE,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: SITE_DESCRIPTION,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://www.findadoc.jp/twitter-card.png",
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: SITE_TITLE,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: SITE_TITLE,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: SITE_DESCRIPTION,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://www.findadoc.jp/social-card.jpeg",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://www.findadoc.jp/social-card.jpeg",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: SITE_TITLE,
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.findadoc.jp",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vuelidate" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],
  env: {
    FIREBASE_ENV: process.env.FIREBASE_ENV,
    TWITTER_API_BEARER_TOKEN: process.env.TWITTER_API_BEARER_TOKEN
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    [
      "@nuxtjs/firebase",
      {
        config: {
          /* eslint-disable-next-line no-undef */
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
          measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        },
        services: {
          auth: true,
          firestore: true,
          analytics: true,
        },
      },
    ],
    [
      "nuxt-i18n",
      {
        locales: languages,
        defaultLocale: "en",
        // https://i18n.nuxtjs.org/options-reference/#detectbrowserlanguage
        detectBrowserLanguage: {
          alwaysRedirect: true, // user selected locale takes precedence
          fallbackLocale: "en",
          onlyOnRoot: true, // recommended for SEO
          useCookie: true,
        },
        langDir: "node_modules/@ourjapanlife/findadoc-localization/locales",
        vueI18n: {
          fallbackLocale: "en",
        },
      },
    ],
    ['@nuxtjs/axios'],
    ['@nuxtjs/proxy'],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      light: true,
      themes: {
        dark: {
          // material trio
          primary: "#031525",
          accent: colors.cyan.lighten1,
          secondary: colors.indigo.darken2,
          // alert colors
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          // misc
          alertCard: colors.cyan.lighten4,
          alertButton: colors.cyan.lighten1,
        },
        light: {
          // material trio
          primary: "#031525",
          accent: colors.cyan.lighten3,
          secondary: colors.indigo.darken2,
          // alert colors
          info: colors.teal.darken2,
          warning: colors.orange.darken4,
          error: colors.red.darken4,
          success: colors.green.darken3,
          // misc
          alertCard: colors.cyan.lighten4,
          alertButton: colors.cyan.lighten1,
        },
      },
    },
  },

  axios: {
    proxy: true
  },

  proxy: {
    '/twitter/': {
      target: 'https://api.twitter.com',
      pathRewrite: { "^/twitter": "/" }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },
};
