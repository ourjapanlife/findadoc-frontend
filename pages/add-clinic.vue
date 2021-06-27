<template>
  <v-card max-width="600px">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submitData"
      class="mb-8 mt-8"
    >
      <div align="center" id="instructions">
        <h2>{{ $t("add-clinic.fillForm") }}</h2>
      </div>
      <v-container>
        <v-row class="red--text text--darken-4 mb-4 justify-center">
          <b>{{ $t("add-clinic.romajiOnly") }}</b>
        </v-row>
        <v-row>
          <v-autocomplete
            :items="prefectureList"
            :label="$t('add-clinic.prefecture')"
            v-model="prefecture"
            required
            outlined
          ></v-autocomplete>
        </v-row>
        <v-row>
          <v-text-field
            :label="$t('add-clinic.city')"
            v-model="city"
            required
            filled
            :rules="cityRules"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            :label="$t('add-clinic.ward')"
            v-model="ward"
            required
            filled
            :rules="wardRules"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            :label="$t('add-clinic.clinicName')"
            v-model="name"
            required
            filled
            :rules="nameRules"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            :label="$t('add-clinic.websiteURL')"
            v-model="website"
            required
            filled
            :rules="websiteRules"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-col>
            <v-switch
              v-model="voucher.required"
              inset
              :label="$t('add-clinic.voucherRequired') + `${voucher.text}`"
              @change="handleVoucherSwitch"
            ></v-switch>
          </v-col>
          <v-col>
            <v-switch
              v-model="wardResidency.required"
              inset
              :label="
                $t('add-clinic.wardResidencyRequired') + `${wardResidency.text}`
              "
              @change="handleWardResidencySwitch"
            ></v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-textarea
            v-model="note"
            outlined
            name="input-7-4"
            :label="$t('add-clinic.additionalInfo')"
            :placeholder="$t('add-clinic.note')"
          ></v-textarea>
        </v-row>
      </v-container>

      <div align="center">
        {{ $t("add-clinic.reviewMessage") }}
      </div>
      <div align="center">
        <v-btn
          color="accent"
          class="black--text"
          :disabled="!valid"
          @click="submitData"
        >
          {{ $t("add-clinic.submitClinic") }}
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import json from "../data/prefectures.json";
export default {
  mounted() {},
  data: (vue) => ({
    valid: true,
    voucher: {
      required: false,
      text: `${vue.$t("add-clinic.no")}`,
    },
    wardResidency: {
      required: false,
      text: `${vue.$t("add-clinic.no")}`,
    },
    prefectureList: json.prefectures,
    prefecture: "",
    city: "",
    ward: "",
    name: "",
    note: "",
    website: "",
  }),

  computed: {
    cityRules() {
      const minLength = 2;

      return [
        (v) => !!v || this.$i18n.t("add-clinic.validations.cityRequired"),
        (v) =>
          (v && v.length >= minLength) ||
          this.$i18n.t("add-clinic.validations.cityValidation", [minLength]),
      ];
    },

    wardRules() {
      const minLength = 2;

      return [
        (v) => !!v || this.$i18n.t("add-clinic.validations.wardRequired"),
        (v) =>
          (v && v.length >= minLength) ||
          this.$i18n.t("add-clinic.validations.wardValidation", [minLength]),
      ];
    },

    nameRules() {
      const minLength = 2;

      return [
        (v) => !!v || this.$i18n.t("add-clinic.validations.clinicRequired"),
        (v) =>
          (v && v.length >= minLength) ||
          this.$i18n.t("add-clinic.validations.clinicValidation", [minLength]),
      ];
    },

    websiteRules() {
      // Simple URL pattern check: it must starts with either "http" or
      // "https" and contains one character after the prefix.
      // Regex can be tested on https://regex101.com/
      const urlPattern = /^http[s]?:\/\/(.+)/;

      return [
        (v) => !!v || this.$i18n.t("add-clinic.validations.websiteRequired"),
        (v) =>
          urlPattern.test(v) ||
          this.$i18n.t("add-clinic.validations.websiteValidation"),
      ];
    },
  },

  methods: {
    handleVoucherSwitch() {
      if (this.voucher.required) {
        this.voucher.text = "Yes";
      } else {
        this.voucher.text = "No";
      }
    },
    handleWardResidencySwitch() {
      if (this.wardResidency.required) {
        this.wardResidency.text = "Yes";
      } else {
        this.wardResidency.text = "No";
      }
    },
    submitData() {
      if (this.$refs.form.validate()) {
        const clinic = {
          prefecture: this.prefecture,
          city: this.city,
          ward: this.ward,
          name: this.name,
          website: this.website,
          note: this.note,
          voucherRequired: this.voucher.required,
          wardResidencyRequired: this.wardResidency.required,
        };
        try {
          this.$fireModule
            .firestore()
            .collection("pending")
            .add(clinic)
            .then(() => console.log("added to db", this.clinic))
            .then(this.$router.push("/"));
        } catch (err) {
          console.log(err);
        }
      } else {
        alert("Please fill out all of the fields!");
      }
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style scoped>
.v-btn {
  margin-top: 20px !important;
  margin-bottom: 20px !important;
}
#instructions {
  margin-top: 20px;
}
.v-form {
  padding: 10px !important;
}
.v-card {
  margin: auto;
  margin-top: 20px;
}
</style>
