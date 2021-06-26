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
    cityRules: [
      (v) => !!v || "City is required",
      (v) => (v && v.length >= 2) || "City name must be at least 2 characters",
    ],
    ward: "",
    wardRules: [
      (v) => !!v || "Ward is required",
      (v) => (v && v.length >= 2) || "Ward name must be at least 2 characters",
    ],
    name: "",
    nameRules: [
      (v) => !!v || "Clinic name is required",
      (v) =>
        (v && v.length >= 2) || "Clinic name must be at least 2 characters",
    ],
    note: "",
    website: "",
    websiteRules: [
      (v) => !!v || "Website URL is required",
      (v) => (v && v.length >= 5) || "Please enter a valid URL",
    ],
  }),

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
