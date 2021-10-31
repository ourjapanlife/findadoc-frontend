<template>
  <v-carousel cycle height="auto" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="slide.id">
      <v-sheet :color="slides[i].color">
        <div
          class="pt-6 pb-12"
          :class="$vuetify.breakpoint.mobile ? 'px-14' : 'px-16'"
        >
          <div class="pb-6 pt-2 px-2">
            <h2>{{ $t("news.featured") }}</h2>
          </div>
          <div class="p-2 text-h5">{{ slides[i].article.title }}</div>
          <div class="p-2">{{ slides[i].article.description }}</div>
          <div class="px-2 pb-2 mt-6">
            <a
              :href="slides[i].article.link"
              target="_blank"
              class="no-underline"
            >
              <v-btn color="accent" class="black--text">{{
                slides[i].article.buttonText
              }}</v-btn>
            </a>
          </div>
        </div>
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
        {
          id: 1,
          color: "#EBF8FB",
          article: featuredNewsData.prevaccinationScreening,
        },
      ],
    };
  },
};
</script>
