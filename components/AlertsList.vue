<template>
  <v-container class="alerts-list">
    <alert
      :buttonText="$t('index.register')"
      buttonUrl="https://www.mod.go.jp/j/approach/defense/saigai/2020/covid/center.html"
    >
      {{ $t("index.massSite") }}
    </alert>
  </v-container>
</template>
<style>
.alerts-list {
  margin: 0.5em 0 2em 0;
}
</style>
