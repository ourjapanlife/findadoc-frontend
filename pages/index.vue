<template>
  <v-container>
    <div align="center">
      <h1>{{ $t("index.title") }}</h1>
    </div>
    <v-alert border="left" colored-border type="info" elevation="1">
      <v-row align="center">
        <v-col class="grow">
          Anyone 18 years or older that has a voucher can now get vaccinated at
          the Tokyo or Osaka mass vaccination sites.
        </v-col>
        <v-col class="shrink">
          <v-btn
            dark
            color="indigo darken-1"
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

