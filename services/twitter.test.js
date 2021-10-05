import TwitterService from "./twitter";
import { tweetsMock } from "./mocks/tweets-mock";

describe("TwitterService", () => {
  it("returns the list of tweets", async () => {
    const twitterService = new TwitterService();
    const tweets = await twitterService.getTweets();

    expect(tweets).toEqual(tweetsMock);
  });
});
