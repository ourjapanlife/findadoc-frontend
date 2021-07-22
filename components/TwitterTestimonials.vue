<template>
  <v-card
    class="mx-auto tweet-widget"
    :class="$vuetify.breakpoint.mobile ? 'mobile' : ''"
    color="white"
  >
    <v-carousel
      v-model="activeTweetIndex"
      hide-delimiters
      :show-arrows="!$vuetify.breakpoint.mobile"
      class="tweet-carousel"
      light
    >
      <v-carousel-item v-for="(tweet, i) in tweets" :key="tweet.id">
        <tweet :tweet="tweets[i]" />
      </v-carousel-item>
    </v-carousel>
    <tweet-carousel-delimiter
      v-show="$vuetify.breakpoint.mobile"
      :steps="3"
      :index="activeTweetIndex"
    />
    <quote-symbol :width="200" :height="200" class="quote-symbol" />
  </v-card>
</template>
<script>
export default {
  props: {
    tweets: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeTweetIndex: 0,
      isLoaded: false,
    };
  }
};
</script>
<style>
.tweet-widget {
  height: 600px;
}
.quote-symbol {
  z-index: 1;
  position: absolute;
  top: 24%;
  left: 33%;
}
.mobile > .quote-symbol {
  left: 20%;
}
.tweet-widget .v-window__prev,
.tweet-widget .v-window__next {
  background: inherit;
}
.tweet-carousel {
  z-index: 2;
}
</style>
