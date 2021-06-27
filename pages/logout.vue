<template>
  <h1 class="logout-message">{{ message }}</h1>
</template>

<script>
export default {
  data() {
    return {
      message: this.$t("logout.message"),
    };
  },
  async mounted() {
    //For better UX, adding delays.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    await this.logout();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    this.$router.push("/");
  },
  methods: {
    async logout() {
      try {
        if (this.$store.getters.isUserLoggedIn) {
          await this.$fireModule.auth().signOut();
        }

        this.$store.commit("updateUser", {
          uid: null,
        });

        this.message = this.$t("logout.successMessage");

        console.log("successfully logged out!");
      } catch (error) {
        //When a firebase login fails, it will throw an error and be handled here.
        console.log("Log out failed.", error);
      }
    },
  },
};
</script>

<style scoped>
.logout-message {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
