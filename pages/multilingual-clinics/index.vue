<template>
  <div>
    <v-data-iterator :items="items" :search="search" hide-default-footer>
      <template v-slot:header>
        <v-toolbar dark color="indigo" class="mb-1">
          <v-select
            v-model="search"
            :items="items"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Doctor's Language"
            item-text="language"
          ></v-select>

          <v-select
            v-model="search"
            :items="items"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Doctor's specialty"
            item-text="specialty"
            class="ml-2"
          >
          </v-select>
        </v-toolbar>
      </template>

      <template v-slot:[`item`]="{ item }">
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
    </v-data-iterator>

    <!-- <v-virtual-scroll :bench="benched" :items="items" item-height="280">
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
    </v-virtual-scroll> -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.listDoctors();
  },
  computed: {
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
    // filteredLanguages() {
    //   return this.languages.filter((language) => language === "language");
    // },
    // filteredSpecialties() {
    //   return this.specialties.filter((specialty) => specialty === "specialty");
    // },
  },
  data: () => ({
    benched: 2,
    id: "",
    items: [],
    keys: [
      "doctorFirstName",
      "doctorLastName",
      "language",
      "location",
      "specialty",
      "clinicName",
    ],
    specialty: "",
    loading: false,
    search: "",
    sortBy: "doctorFirstName",
    sortDesc: false,
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

<style scoped>
a {
  text-decoration: none;
}
</style>
