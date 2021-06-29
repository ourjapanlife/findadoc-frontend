<template>
  <v-container>
    <v-alert dismissible color="alertCard">
      <v-row align="center">
        <v-col cols="auto">
          <slot></slot>
        </v-col>
        <v-col>
          <v-btn light color="alertButton" :href="buttonUrl" target="_blank">{{
            buttonText
          }}</v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </v-container>
</template>
<script>
export default {
  props: {
    buttonText: { type: String, default: "" },
    buttonUrl: { type: String, default: "" },
  },
};
</script>
