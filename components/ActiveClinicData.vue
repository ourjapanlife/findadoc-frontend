<template>
  <v-container v-show="$store.getters.isUserLoggedIn">
    <v-card-title>
      {{ $t("activeClinic.data") }}
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
            <v-card-title>{{ $t("activeClinic.editClinic") }}</v-card-title>
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
                color="primary"
                text
                @click="handleApproveBtnPressed(item)"
              >
                {{ $t("general.approve") }}
              </v-btn>
              <v-btn color="primary" text @click="handleCancelEditBtnPressed">
                {{ $t("general.cancel") }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-menu>
          <template v-slot:activator="{ attrs, on }">
            <v-btn color="indigo" icon v-bind="attrs" v-on="on">
              <!--eslint-disable-next-line @intlify/vue-i18n/no-raw-text-->
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="action in adminActions"
              :key="action.label"
              link
            >
              <v-list-item-title
                v-text="action.label"
                @click="handleEditBtnPressed(item)"
              ></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import json from "../data/adminDbTableHeaders.json";
import logger from "../services/logger";

export default {
  data() {
    return {
      adminActions: [
        { label: "Edit", action: this.handleEditBtnPressed },
        // { label: "Delete", action: this.handleDeleteBtnPressed }, // This will be implemented once deleted data is logged.
      ],
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
        logger.error(err);
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
