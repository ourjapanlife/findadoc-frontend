/* eslint-disable-next-line no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
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
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "no-console": "error",
    // Details here: https://eslint-plugin-vue-i18n.intlify.dev/rules/no-raw-text.html#rule-details
    "@intlify/vue-i18n/no-raw-text": [
      "error",
      {
        // Icons have literal text
        ignoreNodes: ["v-icon"],
        // Ignore quotes and specific emoji used in design
        ignorePattern: '^["✋☕]',
      },
    ],
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
