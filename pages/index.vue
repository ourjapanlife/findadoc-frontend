<template>
  <div>
    <hero-section />
    <!-- <div id="latest-news">
      <h2 class="news-section-title">Latest from Find a Doc</h2>
      <div v-for="article of articles" :key="article.slug">
        <NuxtLink
          :to="
            localePath({ name: 'news-slug', params: { slug: article.slug } })
          "
        >
          <h3 class="latest-news-title">{{ article.title }}</h3>
        </NuxtLink>
        <p>{{ article.description }}</p>
      </div>
      <div id="news-link">
        <nuxt-link to="/news">View all news</nuxt-link>
      </div>
    </div>
    <featured-news /> -->
    <v-container>
      <cancellation-list />
    </v-container>
  </div>
</template>

<script>
// import FeaturedNews from "../components/FeaturedNews.vue";
// export default {
//   components: { FeaturedNews },
//   async asyncData({ $content }) {
//     const articles = await $content("articles")
//       .only(["title", "description", "img", "slug", "author"])
//       .sortBy("createdAt", "asc")
//       .fetch();

//     return {
//       articles,
//     };
//   },
// };
</script>

<style scoped>
#latest-news {
  padding: 20px;
}

.latest-news-title {
  padding-top: 20px;
}

.news-section-title {
  font-weight: 400;
}
</style>
