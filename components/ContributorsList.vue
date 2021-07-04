<template>
  <v-container>
    <v-row>
      <h2>{{ $t("about.contributorLeads") }}</h2>
    </v-row>
    <v-row>
      <v-col sm="4" md="5" lg="6" v-for="lead in leads" :key="lead.name">
        <contributor-lead
          :github-handle="lead.githubHandle"
          :twitter-handle="lead.twitterHandle"
          :name="lead.name"
          :role="lead.role"
          :custom-pic="lead.customPic"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { leads } from "../data/contributors.json";

export default {
  data() {
    return {
      leads: leads,
    };
  },
};
</script>
