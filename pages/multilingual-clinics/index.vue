<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select
          :items="items"
          label="Select a language"
          outlined
          filled
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          :items="items"
          label="Select a specialty"
          outlined
          filled
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>
