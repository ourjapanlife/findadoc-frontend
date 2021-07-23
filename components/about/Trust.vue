<template>
  <div class="trust-widget">
    <v-container>
        <v-row>
            <v-col col="12">
                <div>
                    <h3>Can this information be trusted?</h3>
                    <h4>In short, yes, but do your due diligence</h4>
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
                <p>{{ card.text.line1 }}</p>
                <p>{{ card.text.line2 }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12">
            <h5>
                This is an open-source project, and we are not liable for any damages that may be incurred from the use of Find a Doc.
            </h5>
            <h6>
                <a href="https://github.com/ourjapanlife/findadoc-frontend/blob/main/LICENSE">
                    Read more about it in our license.
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
            line1: "All links lead to official resources such as clinic and government websites.",
            line2: "Read them thoroughly before registering your personal information with them."
        }
      },
      {
        avatar: "AboutSvgDiversityIcon",
        text: {
            line1: "Anyone in the community can submit content to the database.",
            line2: "As a result, is not possible for us to guarantee that accuracy. If you notice any errors, please report the issue to moderators."
        }
      },
      {
        avatar: "AboutSvgSearchIcon",
        text: {
            line1: "Our moderators try their best to detect fraudulent information.",
            line2: "Even so, research any service that you find on here before visiting the location or submitting your personal information to a third-party website."
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
