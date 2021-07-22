<template>
  <v-row dense>
    <v-col :cols="$vuetify.breakpoint.mobile ? '0' : '4'">
      <v-card flat v-show="!$vuetify.breakpoint.mobile">
        <v-img
          height="600px"
          src="/desktop-user.png"
          position="top 0px left 0px"
          contain
          aspect-ratio="1.7778"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="blue"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-card>
    </v-col>
    <v-col :cols="$vuetify.breakpoint.mobile ? '12' : '8'">
      <v-card flat>
        <v-img
          height="70px"
          src="/purple-dots.png"
          position="top 0px right -30px"
          contain
          aspect-ratio="1.7778"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="blue"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-card-title
          :class="
            $vuetify.breakpoint.mobile
              ? 'text-h3 font-weight-bold pt-0'
              : 'text-h1 font-weight-bold pt-0'
          "
        >
          Get vaccinated with or without a voucher
        </v-card-title>
        <v-card-subtitle
          class="text-h6 font-italic font-weight-medium black--text mt-8"
        >
          Helping residents of Japan find essential healthcare
        </v-card-subtitle>
        <div v-if="$vuetify.breakpoint.mobile">
          <v-img
            src="green-dots-purple-circle.png"
            height="200px"
            position="top 0px left -90px"
            contain
          >
            <v-card-actions>
              <a href="#waiting-lists-table">
                <v-btn
                  color="secondary"
                  class="custom-transform-class text-none ml-3"
                  >Find a doc</v-btn
                >
              </a>
            </v-card-actions>
          </v-img>
        </div>
        <div v-else>
          <v-card-actions>
            <a href="#waiting-lists-table">
              <v-btn
                color="secondary"
                class="custom-transform-class text-none ml-3"
                >Find a doc</v-btn
              >
            </a>
          </v-card-actions>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
