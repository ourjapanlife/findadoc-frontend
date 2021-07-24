<template>
  <v-container>
    <v-row no-wrap no-gutters>
      <v-col>
        <v-row>
          <v-col class="tweet-column justify-center align-center">
            <v-card-title justify-center>
              <v-avatar color="cyan lighten-2 avatar-border" size="100">
                <v-img
                  class="elevation-6"
                  :alt="tweet.name"
                  :src="tweet.profile_image_url_original"
                ></v-img>
              </v-avatar>
            </v-card-title>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="tweet-column justify-center">
            <v-card-text class="text-body-1 tweet-content" height="400px">
              {{ tweet.text }}
            </v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="tweet-column justify-center align-center">
            <v-card-actions>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <!--eslint-disable-next-line @intlify/vue-i18n/no-raw-text-->
                    <b> @{{ tweet.username }} </b>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    tweet: {
      required: true,
      type: Object,
    },
  },
};
</script>
<style>
.avatar-border {
  border: 3px solid;
}
.tweet-content {
  max-width: 75%;
}
.tweet-column {
  display: flex;
}
</style>
