<template>
  <div class="trust-widget">
    <v-container>
        <v-row>
            <v-col col="12">
                <div>
                    <h3> {{ $t("about.trust.header.headline") }} </h3>
                    <h4> {{ $t("about.trust.header.subheadline") }} </h4>
                </div>
            </v-col>
        </v-row>
      <v-row>
        <v-col
            v-for="card in cards"
            :key="card.avatar"
        >
          <v-card width="360px" height="397px" class="my-auto">
            <v-card-title class="justify-center align-center">
                <v-avatar
                    color="teal"
                    size="112px"
                >
                  <component :is="card.avatar" />
                </v-avatar>
            </v-card-title>
            <v-card-text class="card-text">
                <p>{{ $t(card.text.line1) }}</p>
                <p>{{ $t(card.text.line2) }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12">
            <h5>
                {{ $t("about.trust.footer.headline") }}
            </h5>
            <h6>
                <a href="https://github.com/ourjapanlife/findadoc-frontend/blob/main/LICENSE">
                    {{ $t("about.trust.footer.license") }}
                </a>
            </h6>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
      {
        avatar: "AboutSvgDocumentsIcon",
        text: {
            line1: "about.trust.cards.0.text.0",
            line2: "about.trust.cards.0.text.1"
        }
      },
      {
        avatar: "AboutSvgDiversityIcon",
        text: {
            line1: "about.trust.cards.1.text.0",
            line2: "about.trust.cards.1.text.1"
        }
      },
      {
        avatar: "AboutSvgSearchIcon",
        text: {
            line1: "about.trust.cards.2.text.0",
            line2: "about.trust.cards.2.text.1"
        }
      }
      ]
    }
  }
};
</script>
<style>
.trust-widget {
    padding-top: 100px;
    padding-bottom:  50px;
}

.trust-widget h3, .trust-widget h4, .trust-widget h5, .trust-widget h6 {
    text-align:  center;
}

.trust-widget h3 {
    font-size: 3rem;
    font-family: "Montserrat";
}

.trust-widget h4 {
    font-size:  1.3rem;
    text-transform: uppercase;
    margin-top: 30px;
    margin-bottom: 50px;
}

.trust-widget h5 {
    font-size: 1.25rem;
    margin-top: 30px;
    margin-bottom: 20px;
}

.trust-widget h6 {
    font-size: 0.87rem;
}

.trust-widget h6 {
    text-decoration: underline;
}

.trust-widget .card-text {
    margin-top:  50px;
}
</style>
