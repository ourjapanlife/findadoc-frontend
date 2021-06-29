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
  },
};
