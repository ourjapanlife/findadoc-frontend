<template>
  <v-container v-show="$store.getters.isUserLoggedIn">
    <pending-submissions />
    <reported-submissions />
    <active-clinic-data />
  </v-container>
</template>
