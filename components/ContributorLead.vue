<template>
    <v-card
    class="mx-auto"
    max-width="344"
    outlined
    >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h7 mb-1">
          {{ name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ role }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
        <img v-if="customPic" :src="require(`~/assets/img/profile/${customPic}`)" :alt="githubHandle" style="object-fit: cover;" />
        <img v-else :src="githubAvatarUrl" :alt="githubHandle" />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        link
        :href="githubProfileUrl"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn v-if="twitterHandle"
        outlined
        rounded
        text
        link
        :href="twitterProfileUrl"
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>

const getGithubProfileUrl = function(handle){
    return `https://github.com/${handle}`;
}

export default {
    props: {
        githubHandle: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        role: {
          type: String,
          required: true
        },
        twitterHandle: String,
        customPic: String
    },
    computed: {
        githubAvatarUrl: function() { return `${getGithubProfileUrl(this.githubHandle)}.png`; },
        githubProfileUrl: function() { return getGithubProfileUrl(this.githubHandle); },
        twitterProfileUrl: function() { return `https://twitter.com/${this.twitterHandle}`}
    }
};

</script>
