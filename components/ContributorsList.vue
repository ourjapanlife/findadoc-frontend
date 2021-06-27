<template>
  <v-container>
    <v-row class="ma-2">
      <h3>Project Leads</h3>
    </v-row>
    <v-row>
      <v-col sm="4" md="5" lg="6" v-for="lead in leads" :key="lead.name">
        <contributor-lead
        :githubHandle="lead.githubHandle"
        :twitterHandle="lead.twitterHandle"
        :name="lead.name"
        :role="lead.role"
        :customPic="lead.customPic" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import { leads } from "../data/contributors.json";

export default {
  data() {
    return {
      leads: leads
    }
  }
};

</script>
