<template>
  <v-app>
    <toolbar app />
    <v-main>
      <Nuxt />
    </v-main>
    <site-footer />
  </v-app>
</template>

<script>
import logger from "../services/logger";

export default {
  async mounted() {
    logger.info(`connected to firebase env: ${process.env.FIREBASE_ENV}`);

    await this.$store.dispatch("refreshUser");
  },
};
</script>

<style lang="sass">
@import '~vuetify/src/styles/styles.sass'
</style>

<style>
html,
body {
  overflow-x: hidden;
}
body {
  position: relative;
}
</style>
