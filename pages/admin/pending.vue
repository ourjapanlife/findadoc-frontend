<template>
  <v-container v-show="this.$store.state.user !== null">
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
        <v-card-title class="text-h5"> Approve Submission?</v-card-title>
        <span>ID: {{ id }}</span>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="approveClinic">
            Approve
          </v-btn>
          <v-btn color="green darken-1" text @click="deleteClinic">
            Delete
          </v-btn>
          <v-btn color="green darken-1" text @click="cancel"> Cancel </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      prefecture: "",
      city: "",
      ward: "",
      name: "",
      website: "",
      note: "",
      clinics: [],
      dialog: false,
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Prefecture", value: "prefecture" },
        { text: "City", value: "city" },
        { text: "Ward", value: "ward" },
        { text: "Note", value: "note" },
        { text: "Website", value: "website" },
      ],
    };
  },
  mounted() {
    if (this.$store.state.user === null) {
      this.$router.push("/login");
    } else {
      const db = this.$fireModule.firestore();
      db.collection("pending")
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            this.id = doc.id;
            this.clinics.push(doc.data());
            this.clinics[this.clinics.length - 1].id = this.id;
          });
        });
    }
  },
  methods: {
    moderate(row) {
      this.dialog = true;
      (this.id = row.id),
        (this.prefecture = row.prefecture),
        (this.city = row.city),
        (this.ward = row.ward),
        (this.name = row.name),
        (this.note = row.note),
        (this.website = row.website);
      console.log(this.note);
    },
    approveClinic() {
      this.dialog = false;
      const clinic = {
        prefecture: this.prefecture,
        city: this.city,
        ward: this.ward,
        name: this.name,
        note: this.note,
        website: this.website,
        approved: true,
      };
      try {
        this.$fireModule
          .firestore()
          .collection("clinics")
          .add(clinic)
          .then(() => console.log("Approved ID: ", this.id))
          .then(this.deleteClinic());
      } catch (err) {
        console.log(err);
      }
    },

    cancel() {
      this.dialog = false;
    },
    deleteClinic() {
      this.dialog = false;
      try {
        this.$fireModule
          .firestore()
          .collection("pending")
          .doc(this.id)
          .delete()

          .then(() => console.log("Deleted ID: ", this.id));
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
span {
  display: flex;
  justify-content: center !important;
}
</style>
