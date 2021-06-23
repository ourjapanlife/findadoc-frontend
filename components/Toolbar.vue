<template>
  <div>
    <v-app-bar color="indigo darken-1" dense dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        ><nuxt-link :to="localePath({ name: 'index' })">{{
          $t("toolbar.title")
        }}</nuxt-link></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <nuxt-link :to="localePath({ name: 'add-clinic' })">
        <v-btn light color="cyan lighten-3">{{
          $t("toolbar.addClinic")
        }}</v-btn>
      </nuxt-link>
    </v-app-bar>
    <v-navigation-drawer color="#031525" v-model="drawer" temporary dark app>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="localePath({ name: item.route })"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group :value="false" prepend-icon="mdi-web">
          <template v-slot:activator>
            <v-list-item-title>{{ $t("toolbar.languages") }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="locale in locales"
            :key="locale.title"
            :to="switchLocalePath(locale.code)"
            link
          >
            <v-list-item-content>
              <v-list-item-title>{{ locale.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { languages } from "../i18n/supported_languages.json";

export default {
  data: () => ({
    drawer: null,
    locales: languages,
  }),
  computed: {
    items() {
      return [
        { title: this.$t("toolbar.home"), icon: "mdi-home-city", route: "index" },
        this.$store.getters.isUserLoggedIn
          ? [
              {
                title: this.$t("toolbar.adminDashboard"),
                icon: "mdi-shield-account-variant",
                route: "admin-pending",
              },
              { title: this.$t("toolbar.logout"), icon: "mdi-account", route: "logout" },
            ]
          : { title: this.$t("toolbar.login"), icon: "mdi-account", route: "login" },
        { title: this.$t("toolbar.about"), icon: "mdi-head-question", route: "about" },
      ].flat();
    },
  },
  methods: {},
};
</script>

<style scoped>
a {
  text-decoration: none !important;
  color: white !important;
}
</style>
