<template>
  <v-container :class="turquoise ? 'turquoise' : ''">
    <v-row no-wrap no-gutters>
      <v-col>
        <v-row>
          <v-col class="tweet-column justify-center align-center">
            <v-card-title justify-center>
              <v-avatar :color="avatarColorClasses(turquoise)" size="100">
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
            <v-card-text class="text-body-1 tweet-content">
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
      type: Object,
      required: true
    },
    turquoise: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    avatarColorClasses(turquoise) {
      let classes = ["lighten-2", "avatar-border"];
      if (turquoise) {
        classes.push("white");
      } else {
        classes.push("cyan");
      }

      return classes.join(" ");
    }
  }
};
</script>
<style>
.avatar-border {
  border: 3px solid;
}
.tweet-content {
  max-width: 400px;
}
.tweet-column {
  display: flex;
}
.turquoise .tweet-column, .turquoise .tweet-column .v-list-item__title {
  color:  white;
}
</style>
