<template>
  <div>
    <hero-section />
    <div
      class="mb-4"
      :class="$vuetify.breakpoint.mobile ? 'mt-12' : 'mt-20'">
      <featured-news />
    </div>
    <div class="text-center">
      <NuxtLink to="/news">
        <v-btn text>{{ $t("index.viewAllNews") }}</v-btn>
      </NuxtLink>
    </div>
    <v-container class="mt-12">
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
