<template>
  <div>
    <v-app-bar color="indigo darken-1" dense dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        ><nuxt-link :to="localePath({ name: 'index' })"
          >Find a Doc, JAPAN</nuxt-link
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <nuxt-link :to="localePath({ name: 'add-clinic' })">
        <v-btn light color="cyan lighten-3">add a clinic</v-btn>
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
            <v-list-item-title>Languages</v-list-item-title>
          </template>

          <v-list-item
            v-for="locale in locales"
            :key="locale.title"
            :to="switchLocalePath(locale.value)"
            link
          >
            <v-list-item-content>
              <v-list-item-title>{{ locale.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home-city", route: "index" },
      { title: "Login", icon: "mdi-account", route: "login" },
      { title: "About", icon: "mdi-head-question", route: "about" },
    ],
    locales: [
      { title: "Chinese (Simplified)", value: "zh_CN" },
      { title: "Dutch", value: "nl" },
      { title: "English", value: "en" },
      { title: "Filipino", value: "fil" },
      { title: "French", value: "fr" },
      { title: "German", value: "de" },
      { title: "Indonesian", value: "id" },
      { title: "Japanese", value: "ja" },
      { title: "Korean", value: "ko" },
      { title: "Nepali", value: "ne" },
      { title: "Portuguese", value: "pt" },
      { title: "Thai", value: "th" },
      { title: "Vietnamese", value: "vi" },
    ],
  }),
  methods: {
    greet(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none !important;
  color: white !important;
}
</style>
