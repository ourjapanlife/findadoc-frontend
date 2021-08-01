const colors = require("tailwindcss/colors")

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
    colors: {
      primary: '#324199',
      secondary: '#96DCE8',
      black: '#2A2A2C',
    },
    fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
    },
    fontSize: {
        'subtitle': '.78rem',
        'base': '1.25rem',
        'h5': '1.12rem',
        'h4': '1.5rem',
        'h3': '2rem',
        'h2': '2.66rem',
        'h1': '3.33rem'
    }
  }
}