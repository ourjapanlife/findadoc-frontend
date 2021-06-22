<template>
  <v-footer fixed app dark color="#8ea1b9">
    <v-container fluid>
      <v-col>
        <v-row>
          <v-col id="kofi">
            {{ $t("footer.siteTitle", [new Date().getFullYear()]) }}
          </v-col>
          <v-col>
            <a href="https://ko-fi.com/theyokohamalife" target="_blank">
              {{ $t("footer.kofi") }}</a
            >
          </v-col>
          <v-col id="github">
            <a
              href="https://github.com/ourjapanlife/findadoc-frontend"
              target="_blank"
            >
              {{ $t("footer.github") }}</a
            >
          </v-col>
          <v-col id="netlify">
            <a href="https://www.netlify.com/" target="_blank">
              {{ $t("footer.netlify") }}</a
            >
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-footer>
</template>
