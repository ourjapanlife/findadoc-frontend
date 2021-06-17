<template>
  <v-card>
    <v-form>
      <div class="d-flex flex-row justify-content-center">
        <v-text-field
          type="text"
          v-model="email"
          :label="$t('login.email')"
          required
        ></v-text-field>
      </div>
      <div class="d-flex flex-row justify-content-center">
        <v-text-field
          type="password"
          v-model="password"
          :label="$t('login.password')"
          required
        ></v-text-field>
      </div>
      <div align="center">
        <v-btn @click="login">{{ $t("login.login") }}</v-btn>
        <v-btn @click="clear">{{ $t("login.clear") }} </v-btn>
      </div>
    </v-form>
  </v-card>
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
    async login() {
      try {
        const isSuccessful = await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });

        //TODO: Show a message saying login failed/succeeded
        isSuccessful
          ? console.log("successfully logged in!")
          : console.log("login failed.");

        this.$router.push("/admin/pending");
      } catch (err) {
        console.log(err);
      }
    },
    clear() {
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.v-btn {
  margin: 10px !important;
  justify-content: center;
}
.v-form {
  padding: 10px !important;
}
.v-card {
  margin: auto;
  margin-top: 20px;
  max-width: 600px !important;
}
</style>
