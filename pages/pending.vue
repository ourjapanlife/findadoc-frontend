<template>
  <v-container>
    <h1>Pending Submissions</h1>
    <v-data-table
      :headers="headers"
      :items="clinics"
      :items-per-page="10"
      class="elevation-1"
      @click:row="moderate"
    >
    </v-data-table>

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Approve Submission? </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="approveClinic">
            Approve
          </v-btn>
          <v-btn color="green darken-1" text @click="deleteClinic">
            Delete
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
      prefecture: "",
      city: "",
      ward: "",
      name: "",
      website: "",
      clinics: [],
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: "name", value: "name" },
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
    db.collection("pending")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          this.clinics.push(doc.data());
        });
      });
  },
  methods: {
    moderate(row) {
      this.dialog = true;
      console.log(row);
      (this.prefecture = row.prefecture),
        (this.city = row.city),
        (this.ward = row.ward),
        (this.name = row.name),
        (this.website = row.website);
    },
    approveClinic() {
      this.dialog = false;
      const clinic = {
        prefecture: this.prefecture,
        city: this.city,
        ward: this.ward,
        name: this.name,
        website: this.website,
        approved: true,
      };
      try {
        this.$fireModule
          .firestore()
          .collection("clinics")
          .add(clinic)
          .then(() => console.log("added to db"));
      } catch (err) {
        console.log(err);
      }
    },
    deleteClinic() {
      this.dialog = false;
      try {
        this.$fireModule
          .firestore()
          .collection("delete")
          .add(clinic)
          .then(() => console.log("added to DELETION"));
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>