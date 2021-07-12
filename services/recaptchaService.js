import { getAuthTokenForCloudFunction } from "./authService";
import logger from "./logger";

export const validateRecaptcha = async (token) => {
  logger.info(token);

  const recaptchaFunctionURL =
    "https://us-central1-findadoc-test.cloudfunctions.net/authenticateRecaptcha";
  const authToken = await getAuthTokenForCloudFunction(recaptchaFunctionURL);

  if (!authToken) {
    logger.error("Couldn't get recaptcha auth token");
    return;
  }

  // const response = await $http.$get(
  //   `https://us-central1-findadoc-test.cloudfunctions.net/authenticateRecaptcha?response=${token}`,
  //   { headers: { Authorization: `bearer ${authToken}` } }
  // );

  // logger.info(response);
};
