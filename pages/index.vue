<template>
  <div>
    <hero-section />
<<<<<<< HEAD
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
=======
    <v-container>
      <div id="news-and-featured">
        <div class="latest-news">
          <h2 class="news-section-title">Latest News</h2>
          <div
            class="article-section"
            v-for="article of articles"
            :key="article.slug"
          >
            <v-card elevation="0" outlined>
              <v-card-title>
                <NuxtLink
                  :to="
                    localePath({
                      name: 'news-slug',
                      params: { slug: article.slug },
                    })
                  "
                >
>>>>>>> bd99c00 (create news card)
                  {{ article.title }}
                </NuxtLink>
              </v-card-title>
              <v-card-subtitle>
                {{ article.description }}
              </v-card-subtitle>
              <v-card-actions>
                <NuxtLink
                  :to="
                    localePath({
                      name: 'news-slug',
                      params: { slug: article.slug },
                    })
                  "
                >
                  <v-btn text color="teal accent-4">
                    Read More
                  </v-btn></NuxtLink
                >
              </v-card-actions>
            </v-card>
          </div>
        </div>
        <!-- <div class="featured-news">
        <featured-news />
      </div> -->
      </div>
<<<<<<< HEAD
    </div>
>>>>>>> 270074a (create cards for news)
    <v-container>
=======
>>>>>>> bd99c00 (create news card)
      <cancellation-list />
    </v-container>
  </div>
</template>

<script>
// import FeaturedNews from "../components/FeaturedNews.vue";
export default {
  // components: { FeaturedNews },
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
.article-title {
  margin-top: 20px;
}
.article-description {
  margin-top: 15px;
}
.article-readmore-btn {
  margin: 0px;
}
.article-section {
  margin-top: 20px;
}
.featured-news {
  width: 40%;
}
.latest-news {
  padding-top: 40px;
  padding-bottom: 30px;
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
  font-weight: 600;
}
</style>
