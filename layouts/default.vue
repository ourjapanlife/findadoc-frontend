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
    <v-footer fixed app>
      <span
        >&copy; {{ new Date().getFullYear() }} —
        <a href="https://ko-fi.com/theyokohamalife" target="_blank">
          Buy me a kofi</a
        ></span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>