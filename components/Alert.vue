<template>
  <v-container>
    <v-alert dismissible color="alertCard">
      <v-row align="center" no-gutters class="mt-1">
        <div
          class="grow break-normal"
          :class="$vuetify.breakpoint.xs ? 'shrink' : 'col'"
        >
          <slot></slot>
        </div>
        <div
          class="shrink p-2 mx-2"
          :class="$vuetify.breakpoint.xs ? '' : 'col'"
        >
          <v-btn
            :class="$vuetify.breakpoint.xs ? 'mt-4' : 'mt-auto'"
            light
            color="alertButton"
            :href="buttonUrl"
            target="_blank"
            >{{ buttonText }}</v-btn
          >
        </div>
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
