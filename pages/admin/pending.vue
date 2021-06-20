<template>
  <v-container v-show="this.$store.getters.isUserLoggedIn">
    <pending-submissions />
  </v-container>
</template>
