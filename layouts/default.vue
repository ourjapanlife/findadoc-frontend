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
    <v-footer fixed app dark color="#8ea1b9">
      <div id="kofi">
        &copy; {{ new Date().getFullYear() }} —
        <a href="https://ko-fi.com/theyokohamalife" target="_blank">
          Buy me a kofi</a
        >
      </div>
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

<style scoped>
.v-footer {
  display: flex;
  justify-content: center;
}
a {
  text-decoration: none;
  color: #1967d2;
  font-weight: bold;
}
</style>