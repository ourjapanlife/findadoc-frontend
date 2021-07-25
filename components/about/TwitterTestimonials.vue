<template>
  <div
    class="mx-auto tweet-widget"
    :class="getClasses(turquoise)"
  >
    <div class="tweet-wrapper">
      <div class="tweet-carousel">
        <v-carousel
          v-model="activeTweetIndex"
          hide-delimiters
          :show-arrows="!$vuetify.breakpoint.mobile"
          light
        >
          <v-carousel-item v-for="(tweet, i) in tweets" :key="tweet.id">
            <AboutTweet :tweet="tweets[i]" :turquoise="turquoise" />
          </v-carousel-item>
        </v-carousel>
        <AboutTweetCarouselDelimiter
          v-show="$vuetify.breakpoint.mobile"
          :steps="3"
          :index="activeTweetIndex"
        />
      </div>
      <AboutSvgQuoteSymbol v-if="!turquoise" :width="200" :height="200" class="quote-symbol" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tweets: {
      type: Array,
      required: true
    },
    turquoise: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      activeTweetIndex: 0,
      isLoaded: false,
    };
  },
  methods: {
    getClasses(turquoise) {
      return {
        mobile: this.$vuetify.breakpoint.mobile,
        turquoise: turquoise
      }
    }
  }
};
</script>
<style>
.tweet-widget {
  height: 600px;
}
.tweet-widget.turquoise {
  background: #32B9D3;
}

.tweet-wrapper {
  width: 100%;
  height: 100%;
  position:  relative;
}

.tweet-carousel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
}

.quote-symbol {
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
