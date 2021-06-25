<template>
  <v-container v-show="$store.getters.isUserLoggedIn">
    <delete-dialog
      :id-to-delete="selectedItem.id"
      :show-delete-dialog="showDeleteDialog"
      @on-cancel-btn-pressed="handleCancelBtnPressed()"
      @on-confirm-delete-btn-pressed="
        handleConfirmDeleteBtnPressed(selectedItem)
      "
    />
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
      :headers="headerList"
      :items="reportedClinics"
      :items-per-page="10"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:[`item.action`]="{ item }">
        <v-icon small @click="handleDeleteBtnPressed(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import DeleteDialog from "./DeleteDialog.vue";
export default {
  components: { DeleteDialog },
  data() {
    return {
      reportedClinics: [],
      dialogDelete: false,
      headerList: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Message", value: "message", width: "60%" },
        {
          text: "Actions",
          value: "action",
          sortable: false,
          editable: false,
        },
      ],
      search: "",
      showDeleteDialog: false,
      selectedItem: {
        id: "",
      },
    };
  },
  mounted() {
    if (!this.$store.getters.isUserLoggedIn) {
      this.$router.push("/login");
    }
    this.getReportedSubmissions();
  },
  methods: {
    async getReportedSubmissions() {
      const db = this.$fireModule.firestore();
      let reportedRef = db.collection("reports");
      let reportedClinics = await reportedRef.get();
      if (reportedClinics) {
        for (const doc of reportedClinics.docs) {
          this.id = doc.id;
          this.reportedClinics.push(doc.data());
          this.reportedClinics[this.reportedClinics.length - 1].id = this.id;
        }
      }
    },
    async deleteItem(item) {
      const itemIndex = this.reportedClinics.indexOf(item);
      try {
        await this.$fireModule
          .firestore()
          .collection("reports")
          .doc(item.id)
          .delete();
        await this.reportedClinics.splice(itemIndex, 1);
        await console.log("Deleted ", item.id);
      } catch (err) {
        console.log(err);
      }
    },
    handleDeleteBtnPressed(item) {
      this.selectedItem = item;
      this.showDeleteDialog = true;
    },
    async handleConfirmDeleteBtnPressed(item) {
      await this.deleteItem(item);
      this.showDeleteDialog = false;
    },
    handleCancelBtnPressed() {
      this.showEditDialog = false;
      this.showDeleteDialog = false;
    },
  },
};
</script>
