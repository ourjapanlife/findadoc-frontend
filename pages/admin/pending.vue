<template>
  <v-container v-show="this.$store.getters.isUserLoggedIn">
    <pending-submissions />
    <reported-submissions />
    <active-clinic-data />
  </v-container>
</template>
