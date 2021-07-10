<template>
  <div>
    <v-list class="tweet-carousel-delimiter">
      <v-list-item
        v-for="(n, i) in steps"
        :key="i"
        class="tweet-carousel-delimiter-item"
        color="grey-lighten-5"
        :disabled="i !== currentStep"
      >
        &bull;
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  props: {
    steps: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    currentStep: function () {
      return Math.floor(this.index % this.steps);
    },
  },
};
</script>
<style>
.v-sheet.theme--light.v-list.tweet-carousel-delimiter {
  background: none;
}
.tweet-carousel-delimiter {
  text-align: center;
}
.tweet-carousel-delimiter-item {
  display: inline;
  padding: 0 2px;
}
.tweet-carousel-delimiter-item.active {
  color: grey;
}
</style>
