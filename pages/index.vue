<template>
  <div>
    <hero-section />
    <div class="text-h5 ml-4">The Latest from Find a Doc</div>
    <v-card elevation="0" v-for="article of articles" :key="article">
      <v-card-title>
        <NuxtLink
          :to="
            localePath({
              name: 'news-slug',
              params: { slug: article.slug },
            })
          "
        >
          {{ article.title }}
        </NuxtLink>
      </v-card-title>
      <v-card-subtitle>
        {{ article.description }}
        <NuxtLink
          :to="
            localePath({
              name: 'news-slug',
              params: { slug: article.slug },
            })
          "
        >
          <v-btn text color="teal accent-4"> Read More </v-btn></NuxtLink
        >
      </v-card-subtitle>
      <v-divider></v-divider>
    </v-card>
    <div class="my-5" :align="$vuetify.breakpoint.mobile ? '' : 'center'">
      <NuxtLink to="/news">
        <v-btn text> View all news </v-btn>
      </NuxtLink>
    </div>
    <div
      :class="
        $vuetify.breakpoint.mobile
          ? 'mobile-featured-news'
          : 'desktop-featured-news'
      "
    >
      <featured-news />
    </div>
    <v-container>
      <cancellation-list />
    </v-container>
  </div>
</template>

<script>
import FeaturedNews from "../components/FeaturedNews.vue";
export default {
  components: { FeaturedNews },
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
    };
  },
};
</script>
