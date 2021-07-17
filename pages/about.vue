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
    <section class="meet-the-team">
      <contributors-list />
    </section>
    <section class="bottom-twitter-widget">
      <twitter-testimonials />
    </section>
    <div id="info">
      <div align="center">
        <h1>{{ $t("about.welcome") }}</h1>
      </div>
      <div>
        <h2>{{ $t("about.whatIsThisQ") }}</h2>
        <p v-html="$t('about.whatIsThisA')"></p>
      </div>
      <div>
        <h2>{{ $t("about.trustQ") }}</h2>
        <p v-html="$t('about.trustA')"></p>
      </div>
      <div>
        <h2>{{ $t("about.supportQ") }}</h2>
        <p v-html="$t('about.supportA')"></p>
      </div>
      <div>
        <contributors-list />
      </div>
    </div>
    <div id="widgets">
      <div id="donate">
        <iframe
          src="https://ko-fi.com/theyokohamalife/?hidefeed=true&widget=true&embed=true&preview=true"
          style="border: none; width: 100%; padding: 4px; background: #f9f9f9"
          height="650"
          title="theyokohamalife"
        ></iframe>
      </div>
    </div>
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
