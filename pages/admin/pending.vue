<template>
  <v-container v-show="this.$store.getters.isUserLoggedIn">
    <pending-submissions />
    <reported-submissions />
  </v-container>
</template>
