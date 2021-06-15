<template>
  <v-container>
    <div align="center">
      <h1>{{ $t("index.title") }}</h1>
    </div>
    <v-alert prominent type="error">
      <v-row align="center">
        <v-col class="grow">
          Breaking news: Anyone 18 years or older that has a voucher can now get
          vaccinated at the Tokyo or Osaka mass vaccination sites. 2021-06-16
        </v-col>
        <v-col class="shrink">
          <v-btn
            href="https://www.mod.go.jp/j/approach/defense/saigai/2020/covid/center.html"
            target="_blank"
            >Go to Registration Site</v-btn
          >
        </v-col>
      </v-row>
    </v-alert>

    <div>
      <cancellation-list />
    </div>
  </v-container>
</template>

