<template>
  <v-container>
    <v-alert dismissible color="cyan" text outlined>
      <v-row align="center">
        <v-col class="grow">
          <slot></slot>
        </v-col>
        <v-col class="shrink">
          <v-btn
            light
            color="cyan lighten-1"
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
    buttonText: String,
    buttonUrl: String,
  },
};
</script>
