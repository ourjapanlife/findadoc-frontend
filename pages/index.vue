<template>
  <div>
    <hero-section />
<<<<<<< HEAD
=======
    <div id="news-and-featured">
      <div class="latest-news">
        <h2 class="news-section-title">Latest from Find a Doc</h2>
        <div v-for="article of articles" :key="article.slug">
          <v-card class="mx-auto my-4" max-width="344" outlined>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-h6 mb-1">
                  {{ article.title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ article.description }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <NuxtLink
                :to="
                  localePath({
                    name: 'news-slug',
                    params: { slug: article.slug },
                  })
                "
              >
                <v-btn text color="teal accent-4"> Read More </v-btn>
              </NuxtLink>
            </v-card-actions>
          </v-card>
        </div>
        <div class="news-link">
          <nuxt-link to="/news">View all news</nuxt-link>
        </div>
      </div>
      <div class="featured-news">
        <featured-news />
      </div>
    </div>
>>>>>>> 270074a (create cards for news)
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

<style scoped>
a {
  text-decoration: none;
}
.featured-news {
  width: 40%;
}
.latest-news {
  padding-left: 80px;
  padding-top: 30px;
}

.latest-news-title {
  padding-top: 20px;
}

#news-and-featured {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.news-section-title {
  font-weight: 400;
}
</style>
