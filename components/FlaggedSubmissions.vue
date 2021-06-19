<template>
  <v-container v-show="this.$store.getters.isUserLoggedIn">
    <v-card-title>
      Reported Submissions
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search reported submissions"
        single-line
        filled
        outlined
        clearable
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :search="search"
      :headers="headers"
      :items="reports"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:[`item.action`]="{ item }">
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      reports: [],
      dialog: false,
      dialogDelete: false,
      search: "",
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Message", value: "message" },
        { text: "Actions", value: "action", sortable: false, editable: false },
      ],
    };
  },
  mounted() {
    if (!this.$store.getters.isUserLoggedIn) {
      this.$router.push("/login");
    } else {
      const db = this.$fireModule.firestore();
      db.collection("reports")
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            this.id = doc.id;
            this.reports.push(doc.data());
            this.reports[this.reports.length - 1].id = this.id;
          });
        });
    }
  },
  methods: {
    async deleteItem(item) {
      const itemIndex = this.reports.indexOf(item);
      try {
        await this.$fireModule
          .firestore()
          .collection("reports")
          .doc(item.id)
          .delete();
        await this.reports.splice(itemIndex, 1);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
span {
  display: flex;
  justify-content: center !important;
}
</style>
