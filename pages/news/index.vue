<template>
  <v-container>
    <div id="all-news">
      <h1>Important News and Information</h1>
      <div v-for="article of articles" :key="article.slug">
        <NuxtLink
          :to="
            localePath({ name: 'news-slug', params: { slug: article.slug } })
          "
        >
          <img :src="article.img" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
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
#all-news {
  padding: 40px;
}
</style>
