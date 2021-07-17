<template>
  <v-carousel
    cycle
    height="400"
    light
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="color" height="100%" width="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      color: "blue lighten-5",
      slides: ["First", "Second", "Third"],
    };
  },
};
</script>
