<template>
  <div>
    <v-virtual-scroll :bench="benched" :items="items" item-height="280">
      <template v-slot:default="{ item }">
        <v-card class="ma-4 pa-4">
          <v-card-title>
            Doctor {{ item.doctorFirstName }}
            {{ item.doctorLastName }}</v-card-title
          >

          <v-chip label class="ml-4">
            <v-icon left> mdi-label </v-icon>{{ item.language }}
          </v-chip>

          <v-card-text> {{ item.location }} </v-card-text>

          <v-chip class="ml-4">
            <v-icon left> mdi-star </v-icon>{{ item.specialty }}
          </v-chip>

          <v-row align="center" justify="end" id="googleMapMarker">
            <v-card-actions>
              <a target="_blank" :href="item.googleMaps">
                <v-icon x-large> mdi-map-marker </v-icon>
              </a>
            </v-card-actions>
          </v-row>
        </v-card>
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
export default {
  mounted() {
    this.listDoctors();
  },
  data: () => ({
    benched: 3,
    id: "",
    items: [],
  }),
  methods: {
    listDoctors() {
      const db = this.$fireModule.firestore();

      db.collection("multilingual-clinics")
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            this.id = doc.id;
            this.items.push(doc.data());
            this.items[this.items.length - 1].id = this.id;
          });
        });
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
