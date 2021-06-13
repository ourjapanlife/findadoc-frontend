<template>
  <v-app light>
    <nuxt />
    <v-footer>
      <span>Find a Doc Japan &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.v-data-table__mobile-row {
  display: flex;
  justify-content: left !important;
}
</style>
