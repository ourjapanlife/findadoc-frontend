<template>
  <div>
    <hero-section />
    <div :id="$vuetify.breakpoint.mobile ? 'mobile-news' : 'desktop-news'">
      <div :class="$vuetify.breakpoint.mobile ? '' : 'latest-news'">
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
                <v-btn text color="teal accent-4"> Read More </v-btn></NuxtLink
              >
            </v-card-actions>
          </v-card>
        </div>
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
.desktop-featured-news {
  width: 40%;
}
.mobile-featured-news {
  margin-top: 20px;
}
.latest-news {
  margin-left: 80px;
  margin-top: 60px;
}
#desktop-news {
  display: flex;
  justify-content: space-between;
}
#mobile-news {
  margin: 20px;
}
#news-and-featured {
  display: flex;
  justify-content: space-between;
}
.news-section-title {
  font-weight: 600;
}
</style>
