<template>
  <div
    id="about"
    class="about-page"
    :class="$vuetify.breakpoint.mobile ? 'mobile' : ''"
  >
    <section class="about-header">
      <AboutHeader />
    </section>
    <section class="timeline">
      <AboutSiteTimeline />
    </section>
    <section class="midpage-widgets">
      <v-row class="no-gutters">
        <v-col cols="12" xs="12" md="6">
          <AboutKofiWidget />
        </v-col>
        <v-col cols="12" xs="12" md="6">
          <AboutTwitterTestimonials :tweets="tweets" turquoise />
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
      <AboutTwitterTestimonials :tweets="tweets" />
    </section>
  </div>
</template>
<script>
import TwitterService from "../services/twitter";

export default {
  data() {
    return {
      tweets: [],
    };
  },
  async asyncData({ $axios }) {
    const twitter = new TwitterService($axios);
    const tweets = await twitter.getTweets();

    return {
      tweets: tweets
    }
  },
};
</script>
<style scoped>
#about {
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

section {
  width: 100%;
}

.mobile .bottom-twitter-widget {
  margin-bottom: 100px;
}
</style>
