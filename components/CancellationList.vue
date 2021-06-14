<template>
  <v-data-iterator
    :items="items"
    :items-per-page.sync="itemsPerPage"
    hide-default-footer
  >
  </v-data-iterator>
</template>

<script>
export default {
  mounted() {
    const db = this.$fireModule.firestore();
    db.collection("clinics")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          this.clinics.push(doc.data());
          this.loading = false;
        });
      });
  },
  data: () => ({
    clinics: [],
    loading: true,
  }),
};
</script>
