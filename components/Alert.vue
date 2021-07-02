<template>
  <v-container>
    <v-alert dismissible color="alertCard">
      <v-row align="center" no-gutters>
        <v-col class="grow" :cols="$vuetify.breakpoint.xs ? '12' : auto">
          <slot></slot>
        </v-col>
        <v-col class="shrink">
          <v-btn
            :class="$vuetify.breakpoint.xs ? 'mt-4' : 'mt-auto'"
            light
            color="alertButton"
            :href="buttonUrl"
            target="_blank"
            >{{ buttonText }}</v-btn
          >
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
