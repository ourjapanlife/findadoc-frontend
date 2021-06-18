<template>
  <v-container v-show="this.$store.getters.isUserLoggedIn">
    <v-card-title>
      Active Data
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :search="search"
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
            <template v-slot:[`item.website`]="{ item }">
              <a target="_blank" :href="item.website">
                {{ truncateWebsite(item.website) }}
              </a>
            </template>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="approve(item)">
                Approve
              </v-btn>
              <v-btn color="blue darken-1" text @click="cancel"> Cancel </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <!-- <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItem(item)"
                >Delete</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions> -->
          </v-card>
        </v-dialog>

        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="dialogDelete"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      editedItem: {},
      clinics: [],
      dialog: false,
      dialogDelete: false,
      search: "",
      pendingItem: {
        name: "",
        prefecture: "",
        city: "",
        ward: "",
        note: "",
        website: "",
      },
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
      db.collection("clinics")
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
          .doc(item.id)
          .update(this.editedItem);
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
      console.log("deleting ", item);
      //   const itemIndex = this.clinics.indexOf(item);
      //   try {
      //     await this.$fireModule
      //       .firestore()
      //       .collection("clinics")
      //       .doc(item.id)
      //       .delete();
      //     await this.clinics.splice(itemIndex, 1);
      //   } catch (err) {
      //     console.log(err);
      //   }
    },
    cancel() {
      this.dialog = false;
      for (const key in this.pendingItem) {
        this.editedItem[key] = this.pendingItem[key];
      }
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    truncateWebsite(website) {
      const truncated = website.match(/^https?:\/\/([^/]*)/);
      return truncated[1] || website.substring(0, 20) + "...";
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
