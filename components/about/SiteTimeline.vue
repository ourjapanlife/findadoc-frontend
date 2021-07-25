<template>
  <v-timeline dense class="timeline-widget">
      <v-timeline-item
        v-for="item in items"
        :key="item.date"
        fill-dot
        small
        color="#96DCE8"
      >
      <v-container>
        <v-row>
            <v-col :cols="$vuetify.breakpoint.mobile ? 12 : 4">
              <h2>
                {{ item.date }}
              </h2>
              <div class="timeline-date-headline">
                {{ item.dateHeadline }}
              </div>
            </v-col>
            <v-col :cols="$vuetify.breakpoint.mobile ? 12 : 7">
              <h3>
                &quot; {{ item.textHeadline }} &quot;
              </h3>
              <div>
                <p v-html="item.text"></p>
              </div>
              <div v-if="item.action">
                <a :href="item.action.url">{{ item.action.title }}</a>
              </div>
            </v-col>
        </v-row>
      </v-container>
      </v-timeline-item>
    </v-timeline>
</template>
<script>
export default {
  data() {
    return {
      items: [{
        date: "2021.06.17",
        dateHeadline: "From idea to health database",
        text: "On that day, LaShawn Toyoda had enough of the lack of direction from officials. A few hours later, Find a Doc is born.<br/> This database aims to better circulate the latest information on healthcare services in Japan.",
        textHeadline: "Watch our daughter, I gotta make something.",
      },
      {
        date: "Presently",
        dateHeadline: "A team of volunteers",
        text: "Find a Doc is community-driven with the support of a team of volunteers. Currently, the team is focused on keeping the immigrant community informed about clinics offering waiting lists for vaccinations to reduce waste. <br> In the future, we want Find a Doc to help non-Japanese speaking residents of Japan find clinics that offer services in their native language.",
        textHeadline: "You can fill the void by citizen action.",
        action: {
          title: "Check out &/or join the team",
          url: "https://github.com/ourjapanlife/findadoc-frontend"
        }
      }]
    };
  }
};
</script>
<style>
.timeline-widget h2, .timeline-widget h3 {
  font-family: "Montserrat";
}
.timeline-widget h2, .timeline-widget p {
  font-weight:  400;
}

.timeline-widget h2 {
  font-size:  2.25rem;
}

.timeline-widget h3 {
  font-size:  1.8rem;
  font-weight:  600;
}

.mobile .timeline-widget h2 {
  font-size:  1.7rem;
}

.mobile .timeline-widget h3 {
  font-size:  1.3rem;
}

.timeline-date-headline {
  text-transform: uppercase;
  color: #666666;
}

.mobile .timeline-date-headline {
  font-size:  0.9rem;
}
</style>
