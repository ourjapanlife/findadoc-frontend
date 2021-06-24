/* eslint-disable-next-line no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:json/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    // most of these are disabled because they fight with prettier
    "vue/max-attributes-per-line": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-indent": 0,
    "vue/html-closing-bracket-newline": 0,
  },
};
