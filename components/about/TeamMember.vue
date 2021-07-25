<template>
  <div class="team-member">
    <v-container>
      <v-row>
        <v-col sm="4">
          <v-avatar size="170" color="grey">
            <img
            v-if="customPic"
            :src="require(`~/assets/img/profile/${customPic}`)"
            :alt="githubHandle"
            style="object-fit: cover"
            />
            <img v-else :src="githubAvatarUrl" :alt="githubHandle" />
          </v-avatar>
        </v-col>
        <v-col sm="8">
          <div class="team-member-detail">
            <div class="team-member-detail-content">
              <div class="team-member-detail-info">
              <h3>{{name}}</h3>
              <h4>{{role}}</h4>
              </div>
              <div class="team-member-detail-actions">
                <v-btn icon link color="white" :href="githubProfileUrl">
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                  <v-btn v-if="twitterHandle" icon link color="white" :href="twitterProfileUrl">
                    <v-icon>mdi-twitter</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
const getGithubProfileUrl = function (handle) {
  return `https://github.com/${handle}`;
};

export default {
  props: {
    githubHandle: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    twitterHandle: String,
    customPic: String,
  },
  computed: {
    githubAvatarUrl: function () {
      return `${getGithubProfileUrl(this.githubHandle)}.png`;
    },
    githubProfileUrl: function () {
      return getGithubProfileUrl(this.githubHandle);
    },
    twitterProfileUrl: function () {
      return `https://twitter.com/${this.twitterHandle}`;
    },
  },
};
</script>
<style>
.team-member {
  color:  white;
  background: #324199;
}

.mobile .team-member {
  padding-bottom:  30px;
}

.team-member h3 {
  font-weight: 700;
}

.team-member h4 {
  font-weight: 400;
}

.team-member-detail-content {
  top: 50%;
  transform: translateY(23%);
  position: absolute;
}

.mobile .team-member-detail-content {
  transform: translateY(10%);
}

.team-member-detail-content h3, .team-member-detail-content h4, .team-member-detail-content div {
  margin-bottom:  15px;
}

.team-member-detail {
  position: relative;
}
</style>
