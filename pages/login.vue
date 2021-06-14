<template>
  <v-container>
    <v-card>
      <div class="d-flex flex-row justify-content-center">
        <v-text-field
          type="text"
          v-model="email"
          label="Email"
          required
        ></v-text-field>
      </div>
      <div class="d-flex flex-row justify-content-center">
        <v-text-field
          type="password"
          v-model="password"
          label="Password"
          required
        ></v-text-field>
      </div>
      <v-btn class="mr-4" @click="login"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </v-card>
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
    async login() {},
    clear() {
      this.name = "";
      this.email = "";
    },
  },
};
</script>