<template>
  <GMap
    ref="gMap"
    map-type-id="terrain"
    language="en"
    :cluster="{ options: { styles: clusterStyle } }"
    :center="{ lat: currentLocation.lat, lng: currentLocation.lng }"
    :options="options"
    :zoom="2"
  >
    <GMapMarker
      v-for="location in locations"
      :key="location.id"
      :position="{ lat: location.lat, lng: location.lng }"
      :options="{
        icon: location === currentLocation ? pins.selected : pins.notSelected,
      }"
      @click="currentLocation = location"
    >
      <GMapInfoWindow :options="{ maxWidth: 200 }">
        <code> lat: {{ location.lat }}, lng: {{ location.lng }} </code>
      </GMapInfoWindow>
    </GMapMarker>
    <!-- <GMapCircle :options="circleOptions" /> -->
  </GMap>
</template>

<script>
export default {
  mounted() {
    this.geolocate();
  },
  data() {
    return {
      options: {
        mapId: "8f5d2e0511f0e754",
      },
      currentLocation: { lat: 0, lng: 0 },
      // circleOptions: {},
      locations: [],
      pins: {
        selected:
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        notSelected:
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      },
      // mapStyle: [...],
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff",
        },
      ],
    };
  },
  methods: {
    geolocate() {
      // console.log("GEOLOCATE!!!!!");
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log("position =", position);
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        // console.log("currentLocation =", this.currentLocation);
        this.locations.push(this.currentLocation);
        // console.log("locations =", this.locations);
      });
    },
  },
};
</script>

<style>
.GMap__Wrapper {
  min-height: 100vh !important;
  min-width: 100vw !important;
  padding: 0px !important;
  margin: 0px !important;
  overflow: visible !important;
}
</style>
