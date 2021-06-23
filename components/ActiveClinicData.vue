<template>
  <v-container v-show="this.$store.getters.isUserLoggedIn">
    <v-card-title>
      Active Clinic Data
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search active clinic data"
        single-line
        filled
        outlined
        clearable
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headerList"
      :items="clinics"
      :items-per-page="10"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:[`item.website`]="{ item }">
        <a target="_blank" :href="item.website">
          {{ truncateWebsite(item.website) }}
        </a>
      </template>

      <template v-slot:[`item.action`]="{ item }">
        <v-dialog v-model="dialogEdit" max-width="500px" :retain-focus="false">
          <v-card>
            <v-card-title>Edit Clinic</v-card-title>
            <v-col cols="12">
              <v-text-field
                v-for="(value, name) in selectedItem"
                :key="name"
                :label="name"
                :value="value"
                v-model="editedItem[name]"
              ></v-text-field>
            </v-col>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="handleApproveBtnPressed(item)"
              >
                Approve
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="handleCancelEditBtnPressed"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-icon small class="mr-2" @click="handleEditBtnPressed(item)">
          mdi-pencil
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import json from "../data/adminDbTableHeaders.json";
export default {
  data() {
    return {
      editedItem: {},
      clinics: [],
      dialogEdit: false,
      headerList: json.headers,
      search: "",
      selectedItem: {
        id: "",
      },
      originalItem: {
        name: "",
        prefecture: "",
        city: "",
        ward: "",
        note: "",
        website: "",
      },
    };
  },
  mounted() {
    if (!this.$store.getters.isUserLoggedIn) {
      this.$router.push("/login");
    }
    this.getActiveClinicData();
  },
  methods: {
    async getActiveClinicData() {
      const db = this.$fireModule.firestore();
      let clinicRef = db.collection("clinics");
      let activeClinics = await clinicRef.get();
      for (const doc of activeClinics.docs) {
        this.id = doc.id;
        this.clinics.push(doc.data());
        this.clinics[this.clinics.length - 1].id = this.id;
      }
    },
    async approve() {
      try {
        await this.$fireModule
          .firestore()
          .collection("clinics")
          .doc(this.editedItem.id)
          .update(this.editedItem);
      } catch (err) {
        console.log(err);
      }
    },
    editItem(item) {
      for (const key in item) {
        this.originalItem[key] = item[key];
        this.editedItem[key] = item[key];
      }
    },
    async handleApproveBtnPressed(item) {
      this.dialogEdit = false;
      await this.approve(item);
    },
    async handleEditBtnPressed(item) {
      this.dialogEdit = true;
      this.selectedItem = item;
      await this.editItem(item);
    },
    async handleCancelEditBtnPressed() {
      this.dialogEdit = false;
      for (const key in this.originalItem) {
        this.editedItem[key] = this.originalItem[key];
      }
      await this.$forceUpdate(); // Had a problem with stackoverflow. Not sure if this fixes it.
    },
    handleCancelBtnPressed() {
      this.showEditDialog = false;
      this.showDeleteDialog = false;
    },
    truncateWebsite(website) {
      const truncated = website.match(/^https?:\/\/([^/]*)/);
      if (truncated == null) {
        return website;
      } else {
        return truncated[1] || website.substring(0, 20) + "...";
      }
    },
  },
};
</script>
