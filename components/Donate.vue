<template>
  <v-btn
    color="blue lighten-1"
    class="custom-transform-class text-none ml-3"
    dark
    fixed
    bottom
    rounded
    left
    href="https://ko-fi.com/theyokohamalife"
    target="_blank"
  >
    <div class="mr-1">
      <!--eslint-disable-next-line @intlify/vue-i18n/no-raw-text-->
      <v-icon color="red">mdi-heart</v-icon>
    </div>
    <div>{{ $t("donate.supportMe") }}</div>
  </v-btn>
</template>
