<template>
  <v-app>
    <toolbar app />
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer fixed app dark color="#8ea1b9">
      <div id="kofi">
        &copy; {{ new Date().getFullYear() }} —
        <a href="https://ko-fi.com/theyokohamalife" target="_blank">
          {{ $t("footer.kofi") }}</a
        >
      </div>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  async mounted() {
    await this.$store.dispatch("refreshUser");
  },
};
</script>
<style scoped>
.v-footer {
  display: flex;
  justify-content: center;
}
a {
  text-decoration: none;
  color: #1967d2;
  font-weight: bold;
}
</style>
