<template>
  <div>
    <v-app-bar dense app id="topbar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <!-- Set a mobile breakpoint for the name? -->
        <nuxt-link :to="localePath({ name: 'index' })"
          >Find a Doc</nuxt-link
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <nuxt-link :to="localePath({ name: 'add-clinic' })">
        <v-btn color="accent" class="black--text">{{
          $t("toolbar.addClinic")
        }}</v-btn>
      </nuxt-link>
    </v-app-bar>

    <v-navigation-drawer
      color="primary"
      v-model="drawer"
      temporary
      dark
      app
      id="sidebar"
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="localePath({ name: item.route })"
          link
          active-class="cyan--text text--accent-1"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          href="https://github.com/ourjapanlife/findadoc-frontend"
          target="_blank"
        >
          <v-list-item-icon>
            <v-icon>mdi-github</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t("toolbar.github") }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          :value="false"
          prepend-icon="mdi-web"
          active-class="cyan--text text--accent-1"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ $t("toolbar.languages") }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="locale in locales"
            :key="locale.title"
            :to="switchLocalePath(locale.code)"
            link
            active-class="cyan--text text--accent-1"
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
    drawer: false,
    locales: languages,
  }),
  computed: {
    items() {
      return [
        {
          title: this.$t("toolbar.home"),
          icon: "mdi-home-city",
          route: "index",
        },
        this.$store.getters.isUserLoggedIn
          ? [
              {
                title: this.$t("toolbar.adminDashboard"),
                icon: "mdi-shield-account-variant",
                route: "admin-pending",
              },
              {
                title: this.$t("toolbar.logout"),
                icon: "mdi-account",
                route: "logout",
              },
            ]
          : {
              title: this.$t("toolbar.login"),
              icon: "mdi-account",
              route: "login",
            },
        {
          title: this.$t("toolbar.about"),
          icon: "mdi-head-question",
          route: "about",
        },
      ].flat();
    },
  },
  methods: {},
};
</script>

<style scoped>
a {
  text-decoration: none !important;
  color: black !important;
}
</style>
