<template>
  <v-footer fixed app dark color="accent">
      <v-col fluid>
        <v-row>
          <v-col>
            {{ $t("footer.siteTitle", [new Date().getFullYear()]) }}
          </v-col>
          <v-col id="donate">
            <a href="https://ko-fi.com/theyokohamalife" target="_blank">
              {{ $t("footer.donate") }}</a
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

  </v-footer>
</template>

<style>
a:link, a:visited {
  color: white;
}
</style>
