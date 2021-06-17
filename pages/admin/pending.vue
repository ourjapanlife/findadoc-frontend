<template>
  <v-container v-show="this.$store.getters.isUserLoggedIn">
    <h1>Pending Submissions</h1>
    <v-data-table
      :headers="headers"
      :items="clinics"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:[`item.action`]="{ item }">
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>Edit Submission</v-card-title>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-for="header in headers"
                v-show="header.value != 'action'"
                :key="header.value"
                :label="header.text"
                v-model="editedItem[header.value]"
              ></v-text-field>
            </v-col>
          </v-card>
        </v-dialog>
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      editedIndex: -1,
      editedItem: {},
      clinics: [],
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Prefecture", value: "prefecture" },
        { text: "City", value: "city" },
        { text: "Ward", value: "ward" },
        { text: "Note", value: "note" },
        { text: "Website", value: "website" },
        { text: "Actions", value: "action", sortable: false, editable: false },
      ],
    };
  },
  mounted() {
    if (!this.$store.getters.isUserLoggedIn) {
      this.$router.push("/login");
    } else {
      const db = this.$fireModule.firestore();
      db.collection("pending")
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            this.id = doc.id;
            this.clinics.push(doc.data());
            this.clinics[this.clinics.length - 1].id = this.id;
          });
        });
    }
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.clinics.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      console.log("editedItem: ", this.editedItem);
    },
    deleteItem(item) {
      console.log("delete: ", item);
    },
    moderate(row) {
      this.dialog = true;
      (this.id = row.id),
        (this.prefecture = row.prefecture),
        (this.city = row.city),
        (this.ward = row.ward),
        (this.name = row.name),
        (this.note = row.note),
        (this.website = row.website);
      console.log(this.note);
    },
    approveClinic() {
      this.dialog = false;
      const clinic = {
        prefecture: this.prefecture,
        city: this.city,
        ward: this.ward,
        name: this.name,
        note: this.note,
        website: this.website,
        approved: true,
      };
      try {
        this.$fireModule
          .firestore()
          .collection("clinics")
          .add(clinic)
          .then(() => console.log("Approved ID: ", this.id))
          .then(this.deleteClinic());
      } catch (err) {
        console.log(err);
      }
    },

    cancel() {
      this.dialog = false;
    },
    deleteClinic() {
      this.dialog = false;
      try {
        this.$fireModule
          .firestore()
          .collection("pending")
          .doc(this.id)
          .delete()

          .then(() => console.log("Deleted ID: ", this.id));
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
