<template>
  <v-app-bar color="deep-purple accent-4" dense dark app>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Find a Doc, JAPAN</v-toolbar-title>

    <v-spacer></v-spacer>
    <nuxt-link to="/add-clinic">
      <v-btn>add a clinic</v-btn>
    </nuxt-link>
  </v-app-bar>
</template>

<style scoped>
a {
  text-decoration: none !important;
}
</style>