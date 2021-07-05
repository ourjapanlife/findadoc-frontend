<template>
  <v-form id="add-multilingual-clinic-modal">
    <v-text-field v-model="googleMapsURL" label="Google Maps URL">
    </v-text-field>
    <v-btn @click="submitBtnPressed"> Submit </v-btn>
  </v-form>
</template>

<script>
export default {
  mounted() {
    this.geoencode();
  },
  data() {
    return {
      googleMapsURL: "",
      selectedLocation: "",
    };
  },
  methods: {
    // async submitBtnPressed() {
    //   console.log("googleMapsURL =", this.googleMapsURL);
    // },
    async geoencode() {
      this.selectedLocation = await fetch(
        // "https://maps.googleapis.com/maps/api/geocode/json?latlng=35.43732040158635,139.6515048199808&key="
        "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJeTuyFyBdGGARHAYlHkqC2tI&key="
      ).then((res) => res);
      // await console.log("selectedLocation =", this.selectedLocation);
    },
  },
};
// https://maps.googleapis.com/maps/api/geocode/json?latlng=35.43732040158635,139.6515048199808&key=
</script>
