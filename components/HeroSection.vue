<template>
  <div>
    <div
      id="hero-cta"
      class="secondary white--text"
      v-if="$vuetify.breakpoint.mobile"
    >
      <h1 id="page-title">Get vaccinated with or without a voucher</h1>
      <div id="lead-text">
        <i>Helping residents of Japan find essential healthcare</i>
      </div>
      <nuxt-link to="/about">
        <v-btn color="accent" class="black--text mt-8">Learn more</v-btn>
      </nuxt-link>
    </div>
    <div v-else class="desktop-header-section">
      <div class="desktop-header-img">
        <img src="header-img.jpg" />
      </div>
      <div id="desktop-header-text" class="secondary white--text">
        <h1 class="desktop-header-title">
          Get vaccinated with or without a voucher
        </h1>
        <div class="desktop-lead-text">
          <i>Helping residents of Japan find essential healthcare</i>
        </div>
        <nuxt-link to="/about">
          <v-btn color="accent" class="black--text mt-8">Learn more</v-btn>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

#hero-cta {
  padding: 30px;
}
.desktop-header-section {
  display: flex;
}
.desktop-header-img {
  display: flex;
  height: 452px;
  width: 40%;
  background-color: #2640e1;
  justify-content: center;
}

#desktop-header-text {
  width: 60%;
}

#desktop-header-text {
  padding: 80px;
}
.desktop-header-title {
  font-size: 50px;
  font-weight: 400;
  font-family: Arial;
}
.desktop-lead-text {
  font-weight: 500;
  letter-spacing: 0.06em;
  padding-top: 20px;
}

#lead-text {
  font-weight: 500;
  letter-spacing: 0.06em;
  padding-top: 20px;
}

#page-title {
  font-weight: 500;
}
</style>
