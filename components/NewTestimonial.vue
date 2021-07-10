<template>
  <v-card
    class="mx-auto tweet-widget"
    :class="$vuetify.breakpoint.mobile ? 'mobile':''"
    color="white"
  >
    <v-carousel v-model="tweetIndex" hide-delimiters :show-arrows="!$vuetify.breakpoint.mobile" light>
        <v-carousel-item
        v-for="(tweet, i) in tweets"
        :key="tweet.id"
        >
        <tweet :tweet="tweets[i]" />
      </v-carousel-item>
    </v-carousel>
    <tweet-carousel-delimiter v-show="$vuetify.breakpoint.mobile" :steps="3" :index="tweetIndex" />
  </v-card>
</template>
<style>
.tweet-widget {
  height:  600px;
}
.tweet-widget::after {
  /* stylized quotes in background */
  content: "\201d";
  font-size: 31rem;
  font-family: serif;
  position: absolute;
  top: 2%;
  left: 30%;
  color: #90CAF9;
  opacity: .2;
}
.tweet-widget.mobile::after {
  left:  15%;
}
.tweet-widget .v-window__prev, .tweet-widget .v-window__next {
  background: inherit;
}
</style>

<script>
import testimonialsData from "../data/testimonials.json";
import tweetFixtures from "../fixtures/twitterTweetsApiFixture.json";

const API_URL = "https://api.twitter.com/2/tweets?user.fields=profile_image_url,username&expansions=author_id&ids=";
const DEV_MODE = "DEV_MODE";

const token = process.env.TWITTER_API_BEARER_TOKEN || DEV_MODE;

const options = { headers: { 'Authorization': `Bearer ${token}` }, mode: 'no-cors' };

export default {
  data() {
    return {
      tweets: [],
      tweetIndex: 0,
      isLoaded: false
    };
  },
  methods: {
    createUserMap: function(apiUserData) {
      const userMap = {};
      for (const user of apiUserData) {
        userMap[user.id] = user;
      }
      return userMap;
    },
    annotateTweetsWithUsers: function(apiTweetData, userMap) {
      let annotated = [];
      for (const tweet of apiTweetData) {
        // tweet.name = userMap[tweet.author_id].name;
        // tweet.username = userMap[tweet.author_id].username;
        // tweet.profile_image_url = userMap[tweet.author_id].profile_image_url;
        // tweet.profile_image_url_original = userMap[tweet.author_id].profile_image_url.replace(/_normal\./, '.');
        const annotatedTweet = Object.assign(tweet, {
          'name': userMap[tweet.author_id].name,
          'username': userMap[tweet.author_id].username,
          'profile_image_url': userMap[tweet.author_id].profile_image_url,
          'profile_image_url_original': userMap[tweet.author_id].profile_image_url.replace(/_normal\./, '.')
        });
        annotated.push(annotatedTweet);
      }
      return annotated;
    }
  },
  async fetch() {

      let json = "";

      if (token === DEV_MODE) {
        console.log("DBDEBUG Using dev mode");
        json = tweetFixtures;

      } else {
        json = await fetch(`${API_URL}${testimonialsData.tweets}`, options).then(res => res.json());
      }

      const userMap = this.createUserMap(json.includes.users);
      const annotatedTweets = this.annotateTweetsWithUsers(json.data, userMap);

      // this.tweets = json.data;
      this.tweets = annotatedTweets;
      this.isLoaded = true;

  }
};
</script>
