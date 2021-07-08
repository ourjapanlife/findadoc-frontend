<template>
    <v-container>
        <v-row no-wrap no-gutters>
            <v-col>
                <v-row>
                    <v-col class="d-flex justify-center align-center">
                      <v-card-title justify-center>
                        <v-avatar color="white avatar-border" size="100">
                            <v-img
                              class="elevation-6"
                              :alt="tweet.name"
                              :src="tweet.profile_image_url_original"
                            ></v-img>
                        </v-avatar>
                      </v-card-title>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="d-flex justify-center">
                      <v-card-text class="text-body-1" height="400px">
                        {{ tweet.text }}
                      </v-card-text>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="d-flex justify-center align-center">
                      <v-card-actions>
                          <v-list-item-content>
                            <v-list-item-title>
                                @{{ tweet.username }}
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-card-actions>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<style>
.avatar-border {
    border: 3px solid;
}
</style>
<script>
export default {
    props: {
        tweet: {
            required: true,
            type: Object
        }
    }
};
</script>
