<template>
  <v-container>
    <article class="pa-4">
      {{ article.tag }}
      <h1 class="text-uppercase">{{ article.title }}</h1>
      <p class="grey--text text--darken-1">
        {{ $t("news.updated", [formatDate(article.updatedAt)]) }}
      </p>
      <p class="font-italic">{{ article.description }}</p>
      <nuxt-content :document="article" />
      <author :author="article.author" />
    </article>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
