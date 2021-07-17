<template>
  <v-footer absolute app dark color="secondary">
    <v-row id="netlify-footer">
      <a href="https://www.netlify.com/" target="_blank">
        <v-icon>mdi-flash</v-icon>
        {{ $t("footer.netlify") }}
      </a>
    </v-row>
    <donate />
  </v-footer>
</template>

<style scoped>
a:link,
a:visited {
  color: white;
  text-decoration: none;
}

#netlify-footer {
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  margin: 0px;
}
</style>
