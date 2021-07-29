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
                {{ $t(item.date) }}
              </h2>
              <div class="timeline-date-headline">
                {{ $t(item.dateHeadline) }}
              </div>
            </v-col>
            <v-col :cols="$vuetify.breakpoint.mobile ? 12 : 7">
              <h3>
                &quot; {{ $t(item.textHeadline) }} &quot;
              </h3>
              <div>
                <p v-for="text in item.text" :key="text">
                  {{ $t(text) }}
                </p>
              </div>
              <div v-if="item.action">
                <a :href="item.action.url">{{ $t(item.action.title) }}</a>
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
        date: "about.timeline.items.0.date",
        dateHeadline: "about.timeline.items.0.dateHeadline",
        text: [
          "about.timeline.items.0.text.0",
          "about.timeline.items.0.text.1"
        ],
        textHeadline: "about.timeline.items.0.textHeadline",
      },
      {
        date: "about.timeline.items.1.date",
        dateHeadline: "about.timeline.items.1.dateHeadline",
        text: [
          "about.timeline.items.1.text.0",
          "about.timeline.items.1.text.1"
        ],
        textHeadline: "about.timeline.items.1.textHeadline",
        action: {
          title: "about.timeline.items.1.action",
          url: "https://github.com/ourjapanlife/findadoc-frontend"
        }
      }]
    };
  }
};
</script>
<style>

.v-timeline-item a {
  text-decoration: underline !important; /* Because Vuetify forces this =( */
}

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
