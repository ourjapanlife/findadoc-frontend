<template>
  <v-container>
    <div align="center">
      <h1>{{ $t("index.title") }}</h1>
    </div>
    <alert />
    <div>
      <cancellation-list />
    </div>
  </v-container>
</template>
<script>
export default {
  setup() {
    console.log("in setup method");
    // onMounted(async () => {
    //   console.log('in onmounted method')
    //   await dispatch("refreshUser");
    // });
  },
};
</script>
