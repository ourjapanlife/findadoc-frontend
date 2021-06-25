<template>
  <v-container class="pb-sm-0 ma-sm-0">
    <alert
      buttonText="view license"
      buttonUrl="https://github.com/ourjapanlife/findadoc-frontend/blob/main/LICENSE"
    >
      The only vaccines approved in Japan are Moderna and Pfizer. Be wary of
      clinics offering SinoVac or others, promiming referal bonuses, or asking
      for advanced payment. The content on this site is user generated and while
      we do our best to moderate it, it may contain errors or unverified
      content. Please use proper judgement before entering your personal data on
      any of third party sites. We are not liable for inaccurate information
      from these community submissions, and we are not liable for third party
      sites. Please use the report feature, or tweet to @theyokohamalife,
      @stonecoldkilzer, or @philipermish if you find fraud or abuse.
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
