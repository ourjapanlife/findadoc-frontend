<template>
  <v-card>
    <form @submit.prevent="submitData">
      <div align="center">
        Fill out this form to add a new clinic to the database that has a
        cancellation waiting list.
      </div>
      <v-container>
        <span color="error">Romaji only!</span>
        <v-row>
          <v-col cols="12" sm="6">
            <v-autocomplete
              :items="prefectures"
              label="Prefecture"
              v-model="prefecture"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="City*" v-model="city" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Ward*" v-model="ward" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Clinic name*"
              v-model="name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Website URL*"
              v-model="website"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <div><small>*indicates required field</small></div>

      <div>Your submission will be displayed after it's been reviewed!</div>
      <v-btn color="blue darken-1" text @click="dialog = false"> Close </v-btn>
      <v-btn color="blue darken-1" text @click="submitData"> Save </v-btn>
    </form>
  </v-card>
</template>

<script>
import json from "../data/prefectures.json";
export default {
  mounted() {},
  data: () => ({
    prefectures: json.prefectures,
  }),

  methods: {},
};
</script>
