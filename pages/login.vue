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
import "firebase/auth";
import * as firebase from "firebase/app";

export default {
  data() {
    return {
      email: "",
      password: "",
      user: "",
    };
  },
  methods: {
    async login() {
      this.$fireModule
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$store.commit("updateUser", user.uid);
          console.log(user);
          this.$router.push("/admin/pending");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clear() {
      this.name = "";
      this.email = "";
    },
  },
};
</script>