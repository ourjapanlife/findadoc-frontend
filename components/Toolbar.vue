<template>
  <div>
    <v-app-bar color="blue darken-4" dense dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Find a Doc, JAPAN</v-toolbar-title>

      <v-spacer></v-spacer>
      <nuxt-link to="/add-clinic">
        <v-btn color="secondary">add a clinic</v-btn>
      </nuxt-link>
    </v-app-bar>
    <v-navigation-drawer
      color="#031525"
      v-model="drawer"
      absolute
      temporary
      dark
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home-city", route: "/" },
      { title: "Login", icon: "mdi-account", route: "/login" },
    ],
  }),
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
</style>