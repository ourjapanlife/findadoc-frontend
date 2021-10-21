const colors = require("tailwindcss/colors");

module.exports = {
  // mode: 'jit',
  purge: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false,
  theme: {
    boxShadow: {
      //from vuetify .elevation-2 https://vuetifyjs.com/en/styles/elevation/#usage
      card: "0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)",
    },
    colors: {
      primary: "#324199",
      secondary: "#96DCE8",
      black: "#2A2A2C",
      // dark: {
      //   // material trio
      //   primary: "#031525",
      //   accent: colors.cyan.lighten1,
      //   secondary: colors.indigo.darken2,
      //   // alert colors
      //   info: colors.teal.lighten1,
      //   warning: colors.amber.base,
      //   error: colors.deepOrange.accent4,
      //   success: colors.green.accent3,
      //   // misc
      //   alertCard: colors.cyan.lighten4,
      //   alertButton: colors.cyan.lighten1,
      // },
      // light: {
      //   // material trio
      //   primary: "#031525",
      //   accent: colors.cyan.lighten3,
      //   secondary: colors.indigo.darken2,
      //   // alert colors
      //   info: colors.teal.darken2,
      //   warning: colors.orange.darken4,
      //   error: colors.red.darken4,
      //   success: colors.green.darken3,
      //   // misc
      //   alertCard: colors.cyan.lighten4,
      //   alertButton: colors.cyan.lighten1,
      // },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Montserrat", "serif"],
      default: ["Montserrat", "Roboto", "sans-serif"],
    },
    fontSize: {
      subtitle: ".78rem",
      base: "1.25rem",
      h5: "1.12rem",
      h4: "1.5rem",
      h3: "2rem",
      h2: "2.66rem",
      h1: "3.33rem",
    },
  },
};
