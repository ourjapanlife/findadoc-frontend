/* eslint-disable no-console */

import axios from "axios";
import logger from "./logger";
import testimonialsData from "../data/testimonials.json";
import tweetFixtures from "../fixtures/twitterTweetsApiFixture.json";

const API_URL = "https://api.twitter.com/2/tweets?user.fields=profile_image_url,username&expansions=author_id&ids=";
const DEV_MODE = "DEV_MODE";

const Twitter =  {
    async _fetch() {
        const token = this._getToken();
        const options = {
          headers: { Authorization: `Bearer ${token}` },
          mode: "no-cors",
        };

        let json = "";
        if (token === DEV_MODE) {
          logger.info(
            "Twitter instantiated using dev mode; sample tweets will be loaded from fixtures."
          );
          json = tweetFixtures;
        } else {
          try {
            const res = await axios.get(
              `${API_URL}${testimonialsData.tweets}`,
              options
            );
            json = res.data;
          } catch (e) {
            logger.error("Could not retrieve tweets from Twitter API.", e);
          }
        }

        return json;
    },

    _getToken() {
        return process.env.TWITTER_API_BEARER_TOKEN || DEV_MODE;
    },

    _createUserMap(apiUserData) {
      /* Maps users by id. */
      const userMap = {};
      for (const user of apiUserData) {
        userMap[user.id] = user;
      }
      return userMap;
    },

    _annotateTweetsWithUsers(apiTweetData, userMap) {
      /* The twitter API separates user information and tweet content. This method recombines, overwriting fields as necessary. */
      let annotated = [];
      for (const tweet of apiTweetData) {
        const annotatedTweet = Object.assign(tweet, {
          name: userMap[tweet.author_id].name,
          username: userMap[tweet.author_id].username,
          profile_image_url: userMap[tweet.author_id].profile_image_url,
          profile_image_url_original: userMap[
            tweet.author_id
          ].profile_image_url.replace(/_normal\./, "."),
        });
        annotated.push(annotatedTweet);
      }
      return annotated;
    },

    async fetchAnnotatedTweets() {
        const tweets = await this._fetch();
        const userMap = this._createUserMap(tweets.includes.users);
        const annotatedTweets = this._annotateTweetsWithUsers(tweets.data, userMap);

        return annotatedTweets;
    }

}

export default Twitter
