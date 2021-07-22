<template>
  <!-- <v-col v-if="$vuetify.breakpoint.mobile"> -->
  <div>
    <v-card flat>
      <v-img
        placeholder
        height="70px"
        src="/purple-dots.png"
        position="top 0px right -30px"
        contain
      >
      </v-img>
      <v-card-title class="text-h4 font-weight-bold pt-0">
        Get vaccinated with or without a voucher
      </v-card-title>
      <v-card-subtitle
        class="text-h6 font-italic font-weight-medium black--text mt-8"
      >
        Helping residents of Japan find essential healthcare
      </v-card-subtitle>
      <v-img
        src="green-dots-purple-circle.png"
        height="200px"
        position="top 0px left -90px"
        contain
      >
        <v-card-actions>
          <nuxt-link to="/about">
            <v-btn
              color="secondary"
              class="custom-transform-class text-none ml-3"
              >Find a doc</v-btn
            >
          </nuxt-link>
        </v-card-actions>
      </v-img>
    </v-card>
  </div>
  <!-- </v-col> -->
  <!--
    <div v-else>
      <div>
        <img src="https://findadoc.jp/header-img.jpg" />
      </div>
      <div class="white--text">
        <h1>Get vaccinated with or without a voucher</h1>
        <div>
          <i>Helping residents of Japan find essential healthcare</i>
        </div>
        <nuxt-link to="/about">
          <v-btn color="accent" class="black--text mt-8">Learn more</v-btn>
        </nuxt-link>
      </div>
    </div>
     -->
</template>

<style scoped>
.purple-dots {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
