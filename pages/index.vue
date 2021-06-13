<template>
  <v-container>
    <h1>Cancellation Waiting Lists in Japan</h1>
    <div class="my-2" align="center">
      <v-btn large color="primary" dark @click="dialog = !dialog"
        >Submit New Clinic</v-btn
      >
    </div>
    <v-data-table
      :headers="headers"
      :items="clinics"
      :items-per-page="10"
      class="elevation-1"
      loading
    >
    </v-data-table>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card @submit.prevent="submitData">
        <v-card-title>
          <span
            >Fill out this form to add a new clinic to the database that has a
            cancellation waiting list.</span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <span color="error">Romaji only!</span>
            <v-row>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Aichi',
                    'Akita',
                    'Aomori',
                    'Chiba',
                    'Ehime',
                    'Fukui',
                    'Fukuoka',
                    'Fukushima',
                    'Gifu',
                    'Gunma',
                    'Hiroshima',
                    'Hokkaido',
                    'Hyogo',
                    'Ibaraki',
                    'Ishikawa',
                    'Iwate',
                    'Kagawa',
                    'Kagoshima',
                    'Kanagawa',
                    'Kochi',
                    'Kumamoto',
                    'Kyoto',
                    'Mie',
                    'Miyagi',
                    'Miyazaki',
                    'Nagano',
                    'Nagasaki',
                    'Nara',
                    'Niigata',
                    'Oita',
                    'Okayama',
                    'Okinawa',
                    'Osaka',
                    'Saga',
                    'Saitama',
                    'Shiga',
                    'Shimane',
                    'Shizuoka',
                    'Tochigi',
                    'Tokushima',
                    'Tokyo',
                    'Tottori',
                    'Toyama',
                    'Wakayama',
                    'Yamagata',
                    'Yamaguchi',
                    'Yamanashi',
                  ]"
                  label="Prefecture"
                  v-model="prefecture"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="City*"
                  v-model="city"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Ward*"
                  v-model="ward"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Clinic name*"
                  v-model="name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Website URL*"
                  v-model="website"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <div><small>*indicates required field</small></div>

          <div>Your submission will be displayed after it's been reviewed!</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="submitData"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      prefecture: "",
      city: "",
      ward: "",
      name: "",
      website: "",
      clinics: [],
      dialog: false,
      headers: [
        {
          text: "Clinic Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "prefecture", value: "prefecture" },
        { text: "city", value: "city" },
        { text: "ward", value: "ward" },
        { text: "website", value: "website" },
      ],
    };
  },
  mounted() {
    console.log("STARTING");
    const db = this.$fireModule.firestore();
    db.collection("clinics")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          //   this.clinics.push({ [doc.id]: doc.data() });
          this.clinics.push(doc.data());
          console.log("clinics=", this.clinics);
        });
      });
  },
  methods: {
    submitData() {
      this.dialog = false;
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
          .then(() => console.log("added to db"));
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
