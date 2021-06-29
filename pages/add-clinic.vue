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
          ></v-autocomplete>
        </v-row>
        <v-row>
          <v-text-field
            :label="$t('add-clinic.city')"
            :error-messages="errorMessages($v.city, 'city')"
            v-model="$v.city.$model"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            :label="$t('add-clinic.ward')"
            :error-messages="errorMessages($v.ward, 'ward')"
            v-model="$v.ward.$model"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            :label="$t('add-clinic.clinicName')"
            :error-messages="errorMessages($v.clinic, 'clinic')"
            v-model="$v.clinic.$model"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            :label="$t('add-clinic.websiteURL')"
            :error-messages="errorMessages($v.website, 'website')"
            v-model="$v.website.$model"
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
          :disabled="this.$v.$invalid"
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
import { required, minLength, url, helpers } from "vuelidate/lib/validators";
import logger from "../services/logger";

// https://medium.com/@annkilzer/validating-japanese-input-with-vuelidate-and-vue-js-ccdb91d70d36
const validChars = helpers.regex("validChars", /^[A-Za-z0-9\- .,'"„“’]*$/);

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
    clinic: "",
    note: "",
    website: "",
  }),

  validations: {
    city: {
      required,
      minLength: minLength(2),
      validChars,
    },
    ward: {
      required,
      minLength: minLength(2),
      validChars,
    },
    clinic: {
      required,
      minLength: minLength(2),
      validChars,
    },
    website: {
      required,
      url,
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
      if (!this.$v.$invalid) {
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
            .then(() => logger.info(`Added to DB: ${clinic}`))
            .then(this.$router.push("/"));
        } catch (err) {
          logger.error(err);
        }
      } else {
        alert("Please fill out all of the fields!");
      }
    },
    errorMessages(field, name) {
      if (!field.$error) {
        return [];
      }
      const fieldErrs = field
        .$flattenParams()
        .filter((param) => !field[param.name]);
      const errMsgs = fieldErrs.map((param) => {
        const templateArgs = {};
        if (param.name === "minLength") {
          templateArgs["0"] = field.$params.minLength.min;
        }
        return this.$t(
          `add-clinic.validations.${name}.${param.name}`,
          templateArgs
        );
      });
      return errMsgs;
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
