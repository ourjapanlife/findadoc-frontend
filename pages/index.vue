<template>
  <v-container>
    <h1>Cancellation Waiting Lists in Japan</h1>
    <ol>
      <li :key="index" v-for="(clinic, index) in clinics">
        {{ clinic.prefecture }}{{ clinic.city }}{{ clinic.ward }}{{ clinic.name
        }}{{ clinic.website }}
      </li>
    </ol>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      clinics: [],
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
