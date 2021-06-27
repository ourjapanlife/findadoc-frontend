<template>
  <v-container class="pb-sm-0 ma-sm-0">
    <alert
      :button-text="$t('index.register')"
      button-url="https://www.mod.go.jp/j/approach/defense/saigai/2020/covid/center.html"
    >
      {{ $t("index.massSite") }}
    </alert>
    <alert
      :button-text="$t('index.getDocument')"
      button-url="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/vaccine_tagengo.html"
    >
      {{ $t("index.prevaccinationScreening") }}
    </alert>
  </v-container>
</template>
