<template>
  <v-btn @click="searchBtnPressed">Search</v-btn>
</template>

<script>
export default {
  methods: {
    searchBtnPressed() {
      alert("Searching!!");
    },
  },
};
</script>
