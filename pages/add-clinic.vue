<template>
  <v-card max-width="600px">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submitData"
    >
      <div id="instructions" align="center">
        <h2>{{ $t("add-clinic.fillForm") }}</h2>
      </div>
      <v-container>
        <div align="center" class="red--text text--darken-4">
          <b>{{ $t("add-clinic.romajiOnly") }}</b>
        </div>
        <v-row>
          <v-col cols="12" sm="6">
            <v-autocomplete
              v-model="prefecture"
              :items="prefectureList"
              :label="$t('add-clinic.prefecture')"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="city"
              :label="$t('add-clinic.city')"
              required
              :rules="cityRules"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="ward"
              :label="$t('add-clinic.ward')"
              required
              :rules="wardRules"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="name"
              :label="$t('add-clinic.clinicName')"
              required
              :rules="nameRules"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="website"
              :label="$t('add-clinic.websiteURL')"
              required
              :rules="websiteRules"
            />
          </v-col>
          <v-col>
            <v-textarea
              v-model="note"
              outlined
              name="input-7-4"
              :label="$t('add-clinic.additionalInfo')"
              placeholder="Share helpful or important details"
            />
          </v-col>
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
  data: () => ({
    valid: true,
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
  mounted() {},

  methods: {
    submitData() {
      if (this.$refs.form.validate()) {
        const clinic = {
          prefecture: this.prefecture,
          city: this.city,
          ward: this.ward,
          name: this.name,
          website: this.website,
          note: this.note,
          approved: false,
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
