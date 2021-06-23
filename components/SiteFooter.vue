<template>
  <v-footer fixed app dark color="footer">
    <v-col fluid align-content="center" align="center">
      <v-row>
        <v-col id="donate">
          <a href="https://ko-fi.com/theyokohamalife" target="_blank">
            <v-icon>mdi-heart</v-icon>
            {{ $t("footer.donate") }}
          </a>
        </v-col>
        <v-col id="netlify" align-content="right">
          <a href="https://www.netlify.com/" target="_blank">
            <v-icon>mdi-flash</v-icon>
            {{ $t("footer.netlify") }}
          </a>
        </v-col>
      </v-row>
    </v-col>
  </v-footer>
</template>

<style scoped>
a:link,
a:visited {
  color: white;
  text-decoration: none;
}
.col {
  padding: 6px !important;
}
</style>
