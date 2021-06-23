<template>
  <v-container class="alerts-list">
    <!--<alert buttonText="Go to Nagomi Clinic Site" buttonUrl="https://ikebukuro-nagomi-clinic.mdja.jp/index.php?del2=1">
            Any resident of Japan with Japanese health insurance and ID card can
            register for a first vaccine shot at Ikebukuro Nagomi Clinic without a
            voucher.
            <a href="https://twitter.com/theyokohamalife/status/1407176450956873728?s=20">More details.</a>
        </alert> -->
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
