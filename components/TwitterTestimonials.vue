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
import testimonialsData from "../data/testimonials.json";
import tweetFixtures from "../fixtures/twitterTweetsApiFixture.json";
import logger from "../services/logger";

// Axios requires proxies for origin changes. /twitter/ will get overwritten with https://api.twitter.com.
const API_URL = "/twitter/2/tweets?user.fields=profile_image_url,username&expansions=author_id&ids=";
const DEV_MODE = "DEV_MODE";

const token = process.env.TWITTER_API_BEARER_TOKEN || DEV_MODE;
const options = {
  headers: { Authorization: `Bearer ${token}` },
  mode: "no-cors",
};

export default {
  data() {
    return {
      tweets: [],
      activeTweetIndex: 0,
      isLoaded: false,
    };
  },
  methods: {
    createUserMap: function (apiUserData) {
      /* Maps users by id. */
      const userMap = {};
      for (const user of apiUserData) {
        userMap[user.id] = user;
      }
      return userMap;
    },
    annotateTweetsWithUsers: function (apiTweetData, userMap) {
      /* The twitter API separates user information and tweet content. This method recombines, overwriting fields as necessary. */
      let annotated = [];
      for (const tweet of apiTweetData) {
        const annotatedTweet = Object.assign(tweet, {
          name: userMap[tweet.author_id].name,
          username: userMap[tweet.author_id].username,
          profile_image_url: userMap[tweet.author_id].profile_image_url,
          profile_image_url_original: userMap[
            tweet.author_id
          ].profile_image_url.replace(/_normal\./, "."),
        });
        annotated.push(annotatedTweet);
      }
      return annotated;
    },
  },
  async fetch() {
    /* Automatically called on component instantiation. */

    let json = "";
    if (token === DEV_MODE) {
      logger.info(
        "Twitter instantiated using dev mode; sample tweets will be loaded from fixtures."
      );
      json = tweetFixtures;
    } else {
      try {
        const res = await this.$axios.get(
          `${API_URL}${testimonialsData.tweets}`,
          options
        );
        json = res.data;
      } catch (e) {
        logger.error("Could not retrieve tweets from Twitter API.", e.message);
      }
    }

    const userMap = this.createUserMap(json.includes.users);
    const annotatedTweets = this.annotateTweetsWithUsers(json.data, userMap);

    this.tweets = annotatedTweets;
    this.isLoaded = true;
  },
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
