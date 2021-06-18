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
            <v-col cols="12">
              <v-text-field
                v-for="header in headers"
                v-show="header.value != 'action'"
                :key="header.value"
                :label="header.text"
                v-model="editedItem[header.value]"
              ></v-text-field>
            </v-col>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="approve(item)">
                Approve
              </v-btn>
              <v-btn color="blue darken-1" text @click="cancel"> Cancel </v-btn>
            </v-card-actions>
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
      pendingItem: {
        name: "",
        prefecture: "",
        city: "",
        ward: "",
        note: "",
        website: "",
      },
      // editedIndex: -1,
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
    approve(item) {
      // console.log(item);
      this.dialog = false;
      try {
        this.$fireModule
          .firestore()
          .collection("clinics")
          .add(this.editedItem)
          .then(() => console.log("Approved ID: ", this.editedItem.id))
          .then(this.deleteItem(item));
      } catch (err) {
        console.log(err);
      }
      console.log("approved =", this.editedItem);
    },
    editItem(item) {
      for (const key in item) {
        this.pendingItem[key] = item[key];
      }
      // this.editedIndex = this.clinics.indexOf(item);
      this.editedItem = Object.assign(item);
      this.dialog = true;
    },
    deleteItem(item) {
      console.log("delete: ", item);
      let itemIndex = this.clinics.indexOf(item);
      try {
        this.$fireModule
          .firestore()
          .collection("pending")
          .doc(item.id)
          .delete()
          .then(this.clinics.splice(itemIndex, 1))
          .then(() => console.log("Deleted ID: ", item.id));
      } catch (err) {
        console.log(err);
      }
    },
    cancel() {
      this.dialog = false;
      for (const key in this.pendingItem) {
        this.editedItem[key] = this.pendingItem[key];
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
