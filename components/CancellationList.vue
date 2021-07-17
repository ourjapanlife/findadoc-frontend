<template>
  <div id="waiting-lists-table">
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
      class="clinics-table elevation-2"
      :loading="loading"
      loading-text="Loading... Please wait"
      :search="search"
    >
      <template v-slot:[`item.name`]="{ item }" align="left">
        <div class="dflex justify-left">
          <a target="_blank" :href="item.website">
            {{ item.name }}
          </a>
        </div>
      </template>
      <template v-slot:[`item.voucherRequired`]="{ item }" align="left">
        <v-chip
          v-if="item.voucherRequired === true"
          class="ma-2"
          color="pink"
          label
          text-color="white"
        >
          {{ $t("cancelList.voucher.required") }}
        </v-chip>
        <v-chip
          v-if="item.voucherRequired === false"
          class="ma-2"
          color="green"
          label
          text-color="white"
        >
          {{ $t("cancelList.voucher.notRequired") }}
        </v-chip>
      </template>
      <template v-slot:[`item.wardResidencyRequired`]="{ item }" align="left">
        <v-chip
          v-if="item.wardResidencyRequired === true"
          class="ma-2"
          color="pink"
          label
          text-color="white"
        >
          {{ $t("cancelList.wardResidency.required") }}
        </v-chip>
        <v-chip
          v-if="item.wardResidencyRequired === false"
          class="ma-2"
          color="green"
          label
          text-color="white"
        >
          {{ $t("cancelList.wardResidency.notRequired") }}
        </v-chip>
      </template>

      <template v-slot:[`item.note`]="{ item }" align="left">
        <div
          v-if="item.note && item.note.length > 1"
          class="dflex justify-center"
        >
          <v-icon @click="showNote(item.note)" color="cyan darken-1" center
            >mdi-note-text</v-icon
          >
        </div>
      </template>

      <template v-slot:[`item.website`]="{ item }">
        <a target="_blank" :href="item.website">
          {{ truncateWebsite(item.website) }}
        </a>
      </template>
      <template v-slot:[`item.flag`]="{ item }" align="left">
        <v-icon @click="flagData(item)">mdi-flag</v-icon>
      </template>
    </v-data-table>
    <v-dialog v-model="showDialog.report" max-width="600px">
      <v-card>
        <v-card-title class="text-h5">{{
          $t("cancelList.report.title")
        }}</v-card-title>
        <v-form v-model="validReport" ref="form" lazy-validation>
          <span
            ><b>{{ $t("cancelList.report.clinicName") }}</b>
            {{ report.name }}</span
          >
          <v-textarea
            v-model="report.message"
            :rules="reportRules"
            required
            background-color="light-blue lighten-5"
            color="black"
            :label="$t('cancelList.report.reason')"
          ></v-textarea>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!validReport || report.message.length < 5"
              text
              @click="sendReport"
            >
              {{ $t("cancelList.report.submitReport") }}
            </v-btn>
            <v-btn text @click="cancelReport">
              {{ $t("general.cancel") }}
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-dialog v-model="showDialog.note" max-width="300px">
      <v-card id="note" align="center">
        <v-card-title>{{ $t("cancelList.header.note") }}</v-card-title>
        {{ selectedNote }}
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import logger from "../services/logger";

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
        });
        this.loading = false;
      });
  },
  data: (vue) => ({
    showDialog: {
      report: false,
      clinicSubmission: false,
      note: false,
    },
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
    selectedNote: "",
    reportRules: [
      (v) => !!v || "Report message is required",
      (v) =>
        (v && v.length >= 5) || "Report message must be at least 5 characters",
    ],
    valid: true,
    validReport: true,
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
      {
        text: `${vue.$t("cancelList.header.voucherRequired")}:`,
        value: "voucherRequired",
      },
      {
        text: `${vue.$t("cancelList.header.wardResidencyRequired")}:`,
        value: "wardResidencyRequired",
      },
      { text: `${vue.$t("cancelList.header.note")}:`, value: "note" },
      {
        text: `${vue.$t("cancelList.header.website")}:`,
        value: "website",
        sortable: false,
      },
      {
        text: `${vue.$t("cancelList.header.report")}:`,
        value: "flag",
        sortable: false,
      },
    ],
  }),
  methods: {
    cancelReport() {
      this.showDialog.report = false;
    },
    cancelClinicSubmission() {
      this.showDialog.clinicSubmission = false;
    },
    flagData(item) {
      this.report.id = item.id;
      this.report.name = item.name;
      this.showDialog.report = true;
    },
    sendReport() {
      try {
        this.$fireModule
          .firestore()
          .collection("reports")
          .add(this.report)
          .then((this.showDialog.report = false))
          .then(() => logger.info(`Reported. ${this.report}`));
      } catch (err) {
        logger.error(err);
      }
    },
    showNote(note) {
      this.showDialog.note = true;
      this.selectedNote = note;
    },
    truncateWebsite(website) {
      const truncated = website.match(/^https?:\/\/([^/]*)/);
      if (truncated == null) {
        return website;
      } else {
        return truncated[1] || website.substring(0, 20) + "...";
      }
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
.v-sheet.v-card {
  padding-left: 20px;
  padding-right: 20px;
}

.v-text-area {
  margin-top: 20px;
  padding-inline: 20px;
}

#note {
  padding-bottom: 20px;
}

#waiting-lists-table {
  margin-top: 20px;
  margin-bottom: 20px;
}
/* stylelint-disable */
::v-deep .clinics-table {
  table > thead > tr > th {
    font-size: 0.875rem;
  }
}
</style>
