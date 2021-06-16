<template>
  <v-card max-width="600px">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submitData"
    >
      <div align="center" id="instructions">
        <h2>{{ $t("add-clinic.fillForm") }}</h2>
      </div>
      <v-container>
        <div align="center" class="romaji">
          <b>{{ $t("add-clinic.romajiOnly") }}</b>
        </div>
        <v-row>
          <v-col cols="12" sm="6">
            <v-autocomplete
              :items="prefectureList"
              :label="$t('add-clinic.prefecture')"
              v-model="prefecture"
              required
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              :label="$t('add-clinic.city')"
              v-model="city"
              required
              :rules="cityRules"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              :label="$t('add-clinic.ward')"
              v-model="ward"
              required
              :rules="wardRules"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              :label="$t('add-clinic.clinicName')"
              v-model="name"
              required
              :rules="nameRules"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              :label="$t('add-clinic.websiteURL')"
              v-model="website"
              required
              :rules="websiteRules"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <div align="center">
        {{ $t("add-clinic.reviewMessage") }}
      </div>
      <div align="center">
        <v-btn
          dark
          color="blue darken-1"
          :disabled="!valid"
          @click="submitData"
        >
          Submit Clinic
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import json from "../data/prefectures.json";
export default {
  mounted() {},
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
    website: "",
    websiteRules: [
      (v) => !!v || "Website URL is required",
      (v) => (v && v.length >= 5) || "Please enter a valid URL",
    ],
  }),

  methods: {
    submitData() {
      if (this.$refs.form.validate()) {
        const clinic = {
          prefecture: this.prefecture,
          city: this.city,
          ward: this.ward,
          name: this.name,
          website: this.website,
          approved: false,
        };
        try {
          this.$fireModule
            .firestore()
            .collection("pending")
            .add(clinic)
            .then(() => console.log("added to db"))
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
.romaji {
  color: red;
}
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
