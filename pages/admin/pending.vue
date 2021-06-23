<template>
  <v-container v-show="this.$store.getters.isUserLoggedIn">
    <reported-submissions />
    <pending-submissions />
  </v-container>
</template>
