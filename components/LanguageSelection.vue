<template>
  <section>
    <h1>{{ $t("hello") }}</h1>
    <div class="language-picker">
      <button @click="changeLanguage('en')">EN</button> |
      <button @click="changeLanguage('ja')">JA</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    /**
     * Called when a language button is clicked
     * Changes the language displayed on the user's screen
     */
    changeLanguage(lang) {
      // Change the i18n context variable's locale
      // This makes it so the correct locale file is used
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
.language-picker {
  padding: 2rem;
}

.lang-active {
  font-weight: bold;
}

button:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>