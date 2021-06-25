<template>
  <v-container class="pb-sm-0 ma-sm-0">
    <alert>
      The only vaccines approved in Japan are Moderna and Pfizer. Be wary of
      clinics offering SinoVac or others, or promiming referal bonuses. The
      content on this site is user generated and while we do our best to
      moderate it, it may contain errors. Please use proper judgement before
      entering your personal data on any of third party sites. We are not liable
      for inaccurate information from these community submissions. Please use
      the report feature, or tweet to @theyokohamalife or @stonecoldkilzer if
      you find fraud.
    </alert>
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
