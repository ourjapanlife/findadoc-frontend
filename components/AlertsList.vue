<template>
  <v-container class="alerts-list">
    <alert
      :buttonText="$t('index.register')"
      buttonUrl="https://www.mod.go.jp/j/approach/defense/saigai/2020/covid/center.html"
    >
      {{ $t("index.massSite") }}
    </alert>
    <alert
      :buttonText="$t('index.getDocument')"
      buttonUrl="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/vaccine_tagengo.html"
    >
      {{ $t("index.prevaccinationScreening") }}
    </alert>
  </v-container>
</template>
<style>
.alerts-list {
  margin: 0.5em 0 2em 0;
}

@media only screen and (max-width: 600px) {
  .alerts-list {
    margin: 0px;
  }
  .container {
    padding-bottom: 8px;
  }
}
</style>
