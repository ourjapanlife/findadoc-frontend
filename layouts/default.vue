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
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  components: { SiteFooter },
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
