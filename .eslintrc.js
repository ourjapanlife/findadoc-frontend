/* eslint-disable-next-line no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:json/recommended",
    "prettier", // Make sure "prettier" is the last element in this list.
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "vue/this-in-template": 1,
  },
};
