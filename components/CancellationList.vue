<template>
  <div>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      outlined
      clearable
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="10"
      class="elevation-2"
      :loading="loading"
      loading-text="Loading... Please wait"
      :search="search"
    >
      <template v-slot:[`item.name`]="{ item }" align="left">
        <div class="dflex justify-left">
          {{ item.name }}
        </div>
      </template>
      <template v-slot:[`item.website`]="{ item }">
        <a target="_blank" :href="item.website"> Click for more info </a>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("MOUNTED");
    const db = this.$fireModule.firestore();
    db.collection("clinics")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          this.items.push(doc.data());
          this.loading = false;
        });
      });
  },
  data: () => ({
    items: [],
    loading: true,
    itemsPerPage: 10,
    headers: [
      {
        text: "Clinic Name:",
        align: "start",
        value: "name",
      },
      { text: "Prefecture:", value: "prefecture" },
      { text: "City:", value: "city" },
      { text: "Ward:", value: "ward" },
      { text: "Website:", value: "website", sortable: false },
    ],
    search: "",
  }),
};
</script>
