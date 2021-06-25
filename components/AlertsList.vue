<template>
  <v-container class="pb-sm-0 ma-sm-0">
    
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
    <div id="disclaimer">
      The only vaccines approved in Japan are Moderna and Pfizer. Be wary of
      clinics offering SinoVac or others. The content on this site is user generated and while
      we do our best to moderate it, it may contain errors or unverified
      content. We are not liable for inaccurate information
      from these community submissions, and we are not liable for third-party
      sites. Use your best judgment and please use the report feature if you suspect fraudulent information.
    </div>
  </v-container>
</template>

<style scoped>
#disclaimer {
  padding-bottom: 8px;
}
</style>
