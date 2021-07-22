<template>
  <div class="about-team">
    <AboutSvgWavyBump top />
    <div class="about-team-content">
      <v-container>
        <v-row>
          <h2>Meet the Team</h2>
        </v-row>
        <v-row>
          <v-col sm="12" md="6" lg="6" v-for="lead in leads" :key="lead.name">
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
              <h3>Plus many more members who have lent us a helping hand!</h3>
              <br />
              <h3>Find them on our <a href="https://github.com/ourjapanlife/findadoc-frontend">front end</a> and <a href="https://github.com/ourjapanlife/findadoc-localization">localization</a> Github contributors pages</h3>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="12">
            <div class="about-team-join">
              <h3>Does Find a Doc’s mission spark your interests?</h3>
              <h3>Join us over on GitHub to see how you can contribute!</h3>
              <h3><a href="https://github.com/ourjapanlife">✋ I want to join!</a></h3>
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
      leads: leads
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
    justify-content: center;
  }

  .about-team-join {
    justify-content: center;
    text-align: center;
  }

</style>
