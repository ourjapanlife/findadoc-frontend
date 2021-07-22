<template>
  <div
    id="about"
    class="about-page"
    :class="$vuetify.breakpoint.mobile ? 'mobile' : ''"
  >
    <section class="about-header">
      <h1>About Find A Doc, the database reducing vaccine waste.</h1>
    </section>
    <section class="timeline">
      <AboutSiteTimeline />
    </section>
    <section class="midpage-widgets">
      <v-row>
        <v-col sm="12" md="6">
          <AboutKofiWidget />
        </v-col>
        <v-col sm="12" md="6">
          <twitter-testimonials :tweets="tweets" />
        </v-col>
      </v-row>
    </section>
    <section class="trust">
      <AboutTrust />
    </section>
    <section class="team">
      <AboutTeam />
    </section>
    <section class="bottom-twitter-widget">
      <twitter-testimonials :tweets="tweets" />
    </section>
  </div>
</template>
<script>

import twitter from "../services/twitter";

export default {
  data() {
    return {
      tweets: []
    }
  },
  async fetch() {
    const tweets = await twitter.fetchAnnotatedTweets();
    console.log("got this on the about page:", tweets);
    this.tweets = tweets;
  }
};
</script>
<style scoped>
.about-header {
  padding: 257px 445px 306px 255px;
  font-size: 4rem;
  color: white;
  background: #324199;
}
.mobile .about-header {
  padding: 83px 40px 52px 40px;
  font-size: 1.5rem;
}

#about {
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

#info {
  max-width: 600px;
}

section {
  width: 100%;
}
</style>
