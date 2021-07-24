/* eslint-disable-next-line no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:json/recommended",
    "prettier", // Make sure "prettier" is the last element in this list.
  ],
  // The vue-18n plugin wasn't happy with various json files, so limit it to specific directories
  overrides: [
    {
      files: "{layouts,components}/*",
      plugins: ["@intlify/vue-i18n"],
    },
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "vue/attributes-order": 0,
    "vue/v-slot-style": 0,
    "vue/order-in-components": 0,
    "no-console": "error",
    "@intlify/vue-i18n/no-raw-text": "error",
  },
  settings: {
    "vue-i18n": {
      // extension is glob formatting!
      localeDir:
        "./node_modules/node_modules/@ourjapanlife/findadoc-localization/locales/*.{json}",

      // Specify the version of `vue-i18n` you are using.
      // If not specified, the message will be parsed twice.
      messageSyntaxVersion: "^9.0.0",
    },
  },
};
