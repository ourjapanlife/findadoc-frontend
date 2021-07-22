<template>
  <div
    id="about"
    class="about-page"
    :class="$vuetify.breakpoint.mobile ? 'mobile' : ''"
  >
    <section class="about-header">
      <h1>About Find A Doc, the database reducing vaccine waste.</h1>
    </section>
    <section class="timeline">
      <AboutSiteTimeline />
    </section>
    <section class="midpage-widgets">
      <AboutKofiWidget />
      <div class="fake-twitter-replace-later">Fake Twitter</div>
    </section>
    <section class="trust">
      <AboutTrust />
    </section>
    <section class="team">
      <AboutTeam />
    </section>
    <section class="bottom-twitter-widget">
      <twitter-testimonials />
    </section>
  </div>
</template>

<style scoped>
.about-header {
  padding: 257px 445px 306px 255px;
  font-size: 4rem;
  color: white;
  background: #324199;
}
.mobile .about-header {
  padding: 83px 40px 52px 40px;
  font-size: 1.5rem;
}

#about {
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

#info {
  max-width: 600px;
}

section {
  width: 100%;
}

/*div {
  padding: 10px;
}*/
</style>
