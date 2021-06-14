<template>
  <v-app light>
    <nuxt />
    <v-footer app fixed>
      <span
        >&copy; {{ new Date().getFullYear() }} —
        <a href="https://ko-fi.com/theyokohamalife" target="_blank">
          Buy me a kofi</a
        ></span
      >
    </v-footer>
  </v-app>
</template>


<style>
.v-data-table__mobile-row {
  display: flex;
  justify-content: left !important;
}
.v-footer {
  justify-content: center !important;
  color: white !important;
}

.v-data-table {
  padding-bottom: 30px !important;
}
</style>
