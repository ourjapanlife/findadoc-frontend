<template>
  <Nuxt />
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
