<template>
  <v-container v-show="this.$store.getters.isUserLoggedIn">
    <delete-dialog
      :idToDelete="selectedItem.id"
      :showDeleteDialog="showDeleteDialog"
      @on-cancel-btn-pressed="handleCancelBtnPressed()"
      @on-confirm-delete-btn-pressed="
        handleConfirmDeleteBtnPressed(selectedItem)
      "
    />
    <edit-dialog
      :headers="headers"
      :itemToEdit="selectedItem"
      :showEditDialog="showEditDialog"
      @on-cancel-btn-pressed="handleCancelBtnPressed()"
      @on-approve-btn-pressed="handleApproveBtnPressed(selectedItem)"
      @item-value-edited="handleEditedValue($event)"
    />
    <v-card-title>
      Active Data
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search active data"
        single-line
        filled
        outlined
        clearable
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :search="search"
      :headers="headers"
      :items="clinics"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:[`item.website`]="{ item }">
        <a target="_blank" :href="item.website">
          {{ item.website }}
        </a>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <v-icon small class="mr-2" @click="handleEditBtn(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="handleDeleteBtn(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      editedItem: {},
      clinics: [],
      dialog: false,
      showEditDialog: false,
      showDeleteDialog: false,
      search: "",
      selectedItem: {
        id: "",
      },
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
    async approve(editedItem) {
      this.showEditDialog = false;
      try {
        await this.$fireModule
          .firestore()
          .collection("clinics")
          .doc(editedItem.id)
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
      // const itemIndex = this.clinics.indexOf(item);
      try {
        await this.$fireModule
          .firestore()
          .collection("clinics")
          .doc(item)
          .delete();
        // await this.clinics.splice(itemIndex, 1);
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
    async handleConfirmDeleteBtnPressed(item) {
      this.deleteItem(item.id);
      this.showDeleteDialog = false;
    },
    handleCancelBtnPressed() {
      this.showEditDialog = false;
      this.showDeleteDialog = false;
    },
    handleDeleteBtn(item) {
      this.selectedItem = item;
      this.showDeleteDialog = true;
    },
    handleApproveBtnPressed(item) {
      console.log("Approved: ", item.id);
      this.selectedItem = item;
      this.showEditDialog = false;
      this.approve(item);
    },
    handleEditBtn(item) {
      console.log("Editing: ", item);
      this.selectedItem = item;
      this.showEditDialog = true;
    },
    handleEditedValue($event) {
      console.log("Emitted item: ", $event);
    },
    // truncateWebsite(website) {
    //   const truncated = website.match(/^https?:\/\/([^/]*)/);
    //   return truncated[1] || website.substring(0, 20) + "...";
    // },
  },
};
</script>

<style scoped>
span {
  display: flex;
  justify-content: center !important;
}
</style>
