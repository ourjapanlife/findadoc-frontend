import { getAuthTokenForCloudFunction } from "./authService";

import logger from "./logger";

const validateRecaptcha = async () => {
  const recaptchaFunctionURL =
    "https://us-central1-findadoc-test.cloudfunctions.net/authenticateRecaptcha";
  const authToken = await getAuthTokenForCloudFunction(recaptchaFunctionURL);

  if (!authToken) {
    logger.error("TODO: log something bad here. ");
    //TODO: fail here.
  }

  // TODO: ...your axios code here. (add the auth token as a bearer token
  // something like
  // const axiosOptions = { `Authorization: bearer ${authToken}` }
};

// TODO: put this call in your component
validateRecaptcha();
