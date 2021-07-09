<template>
  <v-card>
    <v-form>
      <h1 class="login-fields">{{ $t("login.adminLogin") }}</h1>
      <div class="d-flex flex-row justify-content-center">
        <v-text-field
          type="text"
          v-model="email"
          color="secondary"
          :label="$t('login.email')"
          required
        ></v-text-field>
      </div>
      <div class="d-flex flex-row justify-content-center">
        <v-text-field
          type="password"
          v-model="password"
          color="secondary"
          :label="$t('login.password')"
          required
        ></v-text-field>
      </div>
      <div align="center">
        <v-btn color="secondary" @click="login">{{ $t("login.login") }}</v-btn>
        <v-btn @click="clear">{{ $t("login.clear") }} </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import logger from "../services/logger";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  watch: {
    "$store.state.user": {
      deep: true,
      handler() {
        if (this.$store.getters.isUserLoggedIn) {
          this.$router.push("/admin/pending");
        }
      },
    },
  },
  mounted() {
    if (this.$store.getters.isUserLoggedIn) {
      this.$router.push("/admin/pending");
    }
  },
  methods: {
    async login() {
      try {
        //set the lifetime of the session to persist when the browser is closed.
        await this.$fireModule
          .auth()
          .setPersistence(this.$fireModule.auth.Auth.Persistence.LOCAL);

        const successfulLoginResult = await this.$fireModule
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);

        this.$store.commit("updateUser", {
          uid: successfulLoginResult.user.uid,
        });

        //TODO: Show the user a message saying login failed/succeeded

        logger.info("successfully logged in!");
        this.$router.push("/admin/pending");
      } catch (error) {
        //When a firebase login fails, it will throw an error and be handled here.
        logger.warn("Login failed.", error);
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
  margin: 10px;
  justify-content: center;
}

.v-form {
  padding: 1.25rem;
  letter-spacing: 0.15rem;
}

.v-card {
  margin: auto;
  margin-top: 8%;
  max-width: 600px;
}

.v-text-field {
  padding-top: 1.2rem;
}

.login-fields {
  text-align: center;
}
</style>
