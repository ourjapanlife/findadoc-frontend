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
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
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
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="City*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Ward*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Clinic name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Website URL*" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {},
};
</script>
