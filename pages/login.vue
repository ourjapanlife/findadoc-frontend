<template>
  <v-container>
    <div class="d-flex flex-row justify-content-center">
      <v-card></v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async googleSignIn() {},
  },
};
</script>