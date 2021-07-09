<template>
  <div id="about">
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
      <testimonial />
    </div>
  </div>
</template>

<style scoped>
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

div {
  padding: 10px;
}
</style>
