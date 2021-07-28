<template>
  <div class="about-team">
    <AboutSvgWavyBump top />
    <div class="about-team-content">
      <v-container>
        <v-row>
          <h2> {{ $t("about.team.header.headline") }} </h2>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6" v-for="lead in teamLeads" :key="lead.name">
            <AboutTeamMember
              :github-handle="lead.githubHandle"
              :twitter-handle="lead.twitterHandle"
              :name="lead.name"
              :role="lead.role"
              :custom-pic="lead.customPic"
            />
          </v-col>
          <v-col sm="12" md="6" lg="6">
            <div class="about-team-more-contributors">
              <div>
                <h3> {{ $t("about.team.moreContributors.headline") }} </h3>
                <br />
                <i18n path="about.team.moreContributors.action.text" tag="h3">
                  <template v-slot:frontend>
                    <a href="https://github.com/ourjapanlife/findadoc-frontend">
                      {{ $t('about.team.moreContributors.action.frontend') }}
                    </a>
                  </template>
                  <template v-slot:localization>
                    <a href="https://github.com/ourjapanlife/findadoc-localization">
                      {{ $t('about.team.moreContributors.action.localization') }}
                    </a>
                  </template>
                </i18n>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="12">
            <div class="about-team-join">
              <h3> {{ $t("about.team.join.headline") }} </h3>
              <h3> {{ $t("about.team.join.subheadline") }} </h3>
              <h3><a href="https://github.com/ourjapanlife">✋ {{ $t("about.team.join.action") }}</a></h3>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <AboutSvgWavyBump />
  </div>
</template>
<script>
import { leads } from "../../data/contributors.json";

export default {
  data() {
    return {
      teamLeads: leads
    };
  }
};
</script>
<style>
  .about-team {
    color:  white;
  }

  .about-team a {
    color:  white;
  }

  .about-team h2 {
    font-family: Montserrat;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: 78px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 20px;
    margin-bottom: 30px;
  }

  .about-team h3 {
    font-weight: 400;
  }

  .about-team-content {
    padding-bottom: 100px;
    padding-top: 100px;
    background:  #324199;
  }

  .about-team-more-contributors {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

.mobile .about-team-more-contributors {
  padding-bottom: 50px;
}

.about-team-more-contributors a, .about-team-join a,
.mobile .about-team-more-contributors a, .mobile .about-team-join a  {
  text-decoration: underline !important; /* Required, as .v-application a is specified as no decoration */
}

  .about-team-join {
    justify-content: center;
    text-align: center;
  }

</style>
