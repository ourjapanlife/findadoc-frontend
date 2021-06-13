<template>
  <v-app light>
    <nuxt />
    <v-footer fixed app>
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
