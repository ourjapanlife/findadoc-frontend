<template>
  <div>
    <Tweet :id="tweetId" :options="{ cards: 'hidden' }" />
  </div>
</template>

<script>
import { Tweet } from "vue-tweet-embed";
import json from "../data/testimonials.json";

const idx = Math.floor(Math.random() * json.tweets.length);

export default {
  components: { Tweet },
  data() {
    return {
      tweetId: json.tweets[idx],
    };
  },
};
</script>
