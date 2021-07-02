<template>
  <GMap
    ref="gMap"
    map-type-id="terrain"
    language="en"
    :cluster="{ options: { styles: clusterStyle } }"
    :center="{ lat: locations[0].lat, lng: locations[0].lng }"
    :options="options"
    :zoom="10"
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
      // currentLocation: {},
      currentLocation: { lat: 0, lng: 0 },
      // circleOptions: {},
      locations: [{ lat: 35.45876386849445, lng: 139.57797929721434 }],
      pins: {
        selected: "/svg/doctor.svg",
        notSelected: "/svg/doctor.svg",
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
    async geolocate() {
      await navigator.geolocation.getCurrentPosition((position) => {
        // console.log("POSITION", position);
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        // this.currentLocation = position;
        this.locations.push(this.currentLocation);
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
