<template>
  <v-app>
    <h1 v-if="error.statusCode === 404">
      {{ $t("error.notFound") }}
    </h1>
    <h1 v-else>
      {{ $t("error.otherError") }}
    </h1>
    <NuxtLink to="/">{{ $t("error.homePage") }}</NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
