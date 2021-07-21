<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="slides[i].color" height="100%">
        <v-col
          :class="$vuetify.breakpoint.mobile ? '' : 'fill-height pt-12 px-12'"
        >
          <v-col>
            <h2>Featured</h2>
          </v-col>
          <v-col class="text-h5">{{ slides[i].article.title }}</v-col>
          <v-col>{{ slides[i].article.description }}</v-col>
          <v-col>
            <a :href="slides[i].article.link" target="_blank">
              <v-btn color="accent" class="black--text">{{
                slides[i].article.buttonText
              }}</v-btn>
            </a>
          </v-col>
        </v-col>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import featuredNewsData from "../data/featured-news.json";
export default {
  data() {
    return {
      slides: [
        { color: "#EBF8FB", article: featuredNewsData.prevaccinationScreening },
      ],
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
