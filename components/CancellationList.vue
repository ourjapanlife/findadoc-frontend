<template>
  <div>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      :label="$t('cancelList.search')"
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
        <a target="_blank" :href="item.website">
          {{ $t("cancelList.moreInfo") }}
        </a>
      </template>
      <template v-slot:[`item.flag`]="{ item }" align="left">
        <v-icon @click="flagData(item)">mdi-flag</v-icon>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title class="text-h5"> Report this Data </v-card-title>
        <v-form v-model="valid" ref="form" lazy-validation>
          <span><b>Clinic name:</b> {{ report.name }}</span>
          <v-textarea
            v-model="report.message"
            :rules="reportRules"
            required
            background-color="light-blue lighten-4"
            color="black"
            label="Why are you reporting this clinic?"
          ></v-textarea>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="!valid" text @click="sendReport">
              Report
            </v-btn>
            <v-btn color="primary" text @click="cancel"> Cancel </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  mounted() {
    const db = this.$fireModule.firestore();
    db.collection("clinics")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          this.id = doc.id;
          this.items.push(doc.data());
          this.items[this.items.length - 1].id = this.id;
          this.loading = false;
        });
      });
  },
  data: (vue) => ({
    dialog: false,
    id: "",
    items: [],
    itemsPerPage: 10,
    loading: true,
    search: "",
    report: {
      id: "",
      name: "",
      message: "",
    },
    reportRules: [
      (v) => !!v || "Report message is required",
      (v) =>
        (v && v.length >= 5) || "Report message must be at least 5 characters",
    ],
    valid: true,
    headers: [
      {
        text: `${vue.$t("cancelList.header.clinicName")}:`,
        align: "start",
        value: "name",
      },
      {
        text: `${vue.$t("cancelList.header.prefecture")}:`,
        value: "prefecture",
      },
      { text: `${vue.$t("cancelList.header.city")}:`, value: "city" },
      { text: `${vue.$t("cancelList.header.ward")}:`, value: "ward" },
      { text: `${vue.$t("cancelList.header.note")}:`, value: "note" },
      {
        text: `${vue.$t("cancelList.header.website")}:`,
        value: "website",
        sortable: false,
      },
      {
        text: `${vue.$t("cancelList.header.flag")}:`,
        value: "flag",
        sortable: false,
      },
    ],
  }),
  methods: {
    cancel() {
      this.dialog = false;
    },
    flagData(item) {
      this.report.id = item.id;
      this.report.name = item.name;
      // console.log(item);
      this.dialog = true;
    },
    sendReport() {
      try {
        this.$fireModule
          .firestore()
          .collection("reports")
          .add(this.report)
          .then((this.dialog = false))
          .then(() => console.log("Reported", this.report));
      } catch (err) {
        console.log(err);
      }
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style scoped>
.v-sheet.v-card {
  padding-left: 20px !important;
  padding-right: 20px !important;
}
.v-text-area {
  margin-top: 20px !important;
  padding-inline: 20px !important;
}
</style>
