<template>
  <div id="homepage-header">
    <div id="hero-img">
      <img src="/header-img.jpg" alt="" />
    </div>
    <div id="hero-cta" class="secondary white--text">
      <div class="white--text">
        <h1 id="page-title" class="font-weight-medium">
          Get vaccinated with or without a voucher
        </h1>
      </div>
      <div id="lead-text">
        <i>It shouldn't be hard to secure your appointment</i>
      </div>
      <div class="mt-6">
        <v-btn color="accent" class="black--text">Find a clinic</v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: Montserrat;
  font-weight: 600;
  font-style: normal;
  font-size: 60px;
  line-height: 73px;
  width: 740px;
  height: 146px;
}
#hero-cta {
  padding-top: 32px;
  padding-left: 60px;
  min-width: 100%;
  height: 452px;
}
#hero-img {
  position: relative;
  top: 0px;
  left: 0px;
}
#homepage-header {
  display: flex;
  height: 452px;
}
#lead-text {
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  margin: 32px 0px;
  letter-spacing: 0.06em;
}
</style>
