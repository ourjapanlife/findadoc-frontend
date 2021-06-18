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
    async approve(item) {
      this.dialog = false;
      try {
        await this.$fireModule
          .firestore()
          .collection("clinics")
          .add(this.editedItem);
        await this.deleteItem(item);
      } catch (err) {
        console.log(err);
      }
    },
    editItem(item) {
      for (const key in item) {
        this.pendingItem[key] = item[key];
      }
      this.editedItem = Object.assign(item);
      this.dialog = true;
    },
    async deleteItem(item) {
      const itemIndex = this.clinics.indexOf(item);
      try {
        await this.$fireModule
          .firestore()
          .collection("pending")
          .doc(item.id)
          .delete();
        await this.clinics.splice(itemIndex, 1);
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
