<template>
  <v-container>
    <div align="center">
      <h1 id="page-title">{{ $t("index.title") }}</h1>
    </div>
    <alerts-list />
    <div>
      <cancellation-list />
    </div>
  </v-container>
</template>
<style scoped>
#page-title {
  margin: 1em 0 1em 0;
}
@media only screen and (max-width: 600px) {
  #page-title {
    margin: 0px;
  }
}
</style>
