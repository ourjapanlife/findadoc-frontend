<template>
  <v-container>
    <hero-section />
    <div id="news-section">
      <div id="latest-news">
        <h1 class="news-section-title">Latest News</h1>
        <div v-for="article of articles" :key="article.slug">
          <NuxtLink
            :to="
              localePath({ name: 'news-slug', params: { slug: article.slug } })
            "
          >
            <h2 class="latest-news-title">{{ article.title }}</h2>
          </NuxtLink>
          <p>{{ article.description }}</p>
        </div>
        <div id="news-link">
          <nuxt-link to="/news">View all news</nuxt-link>
        </div>
      </div>
      <div id="featured-news">
        <featured-news />
      </div>
    </div>
    <div id="database-content">
      <cancellation-list />
    </div>
  </v-container>
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

<style scoped>
.container {
  min-width: 100%;
  padding: 0px;
  margin: 0px;
}
#database-content {
  padding: 40px;
}

#featured-news {
  width: 40%;
}

#latest-news {
  padding-left: 80px;
  padding-top: 80px;
  width: 60%;
}

.news-section-title {
  font-size: 27px;
  font-style: normal;
  font-weight: 400;
  line-height: 33px;
  padding-bottom: 20px;
  padding-top: 20px;
}

#news-link {
  text-align: center;
}

#news-section {
  display: flex;
}

.latest-news-title {
  font-size: 18px;
  font-style: normal;
  line-height: 33px;
}
</style>
