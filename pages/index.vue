<template>
  <v-container>
    <div align="center">
      <h1 id="page-title">{{ $t("index.title") }}</h1>
    </div>
    <alert class="voucher-alert" />
    <div>
      <cancellation-list />
    </div>
  </v-container>
</template>
<style scoped>
#page-title {
  margin: 1em 0 1em 0;
}

.voucher-alert {
  margin: 0.5em 0 2em 0;
}
</style>
