<template>
  <v-card
    class="mx-auto tweet-widget"
    color="#26c6da"
    dark
    max-width="400"
  >
<!--     <v-container fill-height>
      <v-row no-wrap no-gutters>
        <v-col class="d-none d-md-flex justify-center align-center">
          <v-btn icon v-on:click="loadPreviousTweet()">
            <v-icon left>
              mdi-less-than
            </v-icon>
          </v-btn>
        </v-col>
        <v-col md="8">
          <tweet v-if="isLoaded" :tweet="tweets[tweetIndex]"/>
          <div v-else class="d-none d-md-flex justify-center align-center">
            <v-progress-circular
                indeterminate
                color="white"
              >
            </v-progress-circular>
          </div>
        </v-col>
        <v-col class="d-none d-md-flex justify-center align-center">
          <v-btn icon>
            <v-icon right v-on:click="loadNextTweet()">
                mdi-greater-than
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container> -->
      <v-carousel v-model="tweetIndex" v-on:change="updateWindow">
        <v-carousel-item
        v-for="(tweet, i) in tweets"
        :key="tweet.id"
        >
        <tweet :tweet="tweets[i]" />
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>
<style>
.tweet-widget {
  height:  600px;
}
</style>

<script>
import testimonialsData from "../data/testimonials.json";

const options = { headers: { 'Authorization': `Bearer ${TWITTER_API_BEARER_TOKEN}` }, mode: 'no-cors' };

const slidingWindow = {
  start: 0,
  end: 0,
  max: 0,
  step: 3,
  contains: function(i) {
    const isContained = i >= this.start && i < this.end;
    console.log(`${i} isContained?`, isContained);
    return isContained;
  },
  forward: function() {
    this.start = Math.min(this.start + this.step, this.max - this.step);
    this.end = Math.min(this.end + this.step, this.max)
  },
  back: function() {
    this.end = Math.max(this.end - this.step, this.step);
    this.start = Math.max(this.start - this.step, 0);
  }
};

export default {
  data() {
    return {
      tweets: [],
      windowedTweets: [],
      tweetIndex: 0,
      isLoaded: false
    };
  },
  methods: {
    loadPreviousTweet: function() {
      this.tweetIndex = this.tweetIndex > 0 ? this.tweetIndex - 1: this.tweets.length - 1;
    },
    loadNextTweet: function() {
      this.tweetIndex = this.tweetIndex == this.tweets.length - 1 ? 0 : this.tweetIndex + 1;
    },
    updateWindow: function(index) {
      console.log("mwahaha", index);
      let nextIndex = index + 1;
      if (!slidingWindow.contains(nextIndex)) {
        if (index > nextIndex) {
          slidingWindow.back();
        }
        if (index < nextIndex) {
          slidingWindow.forward();
        }
      }
      console.log("slidingWindow updated to ", slidingWindow);
    }
  },
  async fetch() {
      this.$http.onRequest(config => {
        console.log('Making request to ' + config.url)
        console.log('Config keys ', config )
      })

      const json = await fetch(`https://api.twitter.com/2/tweets?user.fields=profile_image_url,username&expansions=author_id&ids=${testimonialsData.tweets}`, options).then(res => res.json());
      // console.log('all json', json);
      let userMap = {};
      for (const user of json.includes.users) {
        // console.log("adding", user);
        userMap[user.id] = user;
      }

      let tweetData = json.data;
      for (const tweet of tweetData) {
        tweet.name = userMap[tweet.author_id].name;
        tweet.username = userMap[tweet.author_id].username;
        tweet.profile_image_url = userMap[tweet.author_id].profile_image_url;
        tweet.profile_image_url_original = userMap[tweet.author_id].profile_image_url.replace(/_normal\./, '.');
      }

      this.tweets = json.data;
      console.log('first entry', this.tweets[0]);
      this.tweetIndex = Math.floor(Math.random() * this.tweets.length);
      slidingWindow.end = slidingWindow.step -1;
      slidingWindow.max = this.tweets.length;
      this.isLoaded = true;

  }
};
</script>
