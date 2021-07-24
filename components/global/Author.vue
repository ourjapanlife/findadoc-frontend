<template>
  <div>
    <h4>{{ $t("news.author") }}</h4>
    <p>{{ author.name }}</p>
    <p>{{ author.bio }}</p>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>
