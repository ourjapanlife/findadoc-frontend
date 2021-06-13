<template>
  <ul>
    <li :key="item.key" v-for="item in testCollection">{{ item }}</li>
  </ul>
</template>

<script>
// import "firebase/firestore";

export default {
  data() {
    return {
      testCollection: [],
    };
  },
  mounted() {
    console.log("STARTING");
    const db = this.$fireModule.firestore();
    db.collection("doctors")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          this.testCollection.push({ [doc.id]: doc.data() });
        });
      });
  },
  methods: {
    // getClinics() {
    //   console.log("STARTING");
    //   const ref = this.$firestore.collection("doctors").doc(id);
    //   this.clinics = ref.get();
    //   console.log("clinics =", this.clinics);
    // },
  },
};
</script>
