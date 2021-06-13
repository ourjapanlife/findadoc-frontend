<template>
  <v-app light>
    <nuxt />
    <v-footer>
      <span>Find a Doc Japan &copy; {{ new Date().getFullYear() }}</span>
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
  background-color: rgba(0, 0, 0, 0) !important;
  color: rgb(124, 124, 124) !important;
}
</style>
