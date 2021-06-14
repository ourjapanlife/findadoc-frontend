<template>
  <v-app>
    <toolbar />
    <v-main>
      <div>
        <v-dialog v-model="dialog" max-width="600px">
          <clinic-submission />
        </v-dialog>
      </div>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>