import GoogleAuth from "google-auth-library";
import { URL } from "url";

import logger from "./logger";

const getAuthTokenForCloudFunction = async (cloudFunctionUrl) => {
  try {
    // Will authenticate based on google credentials variable (GOOGLE_APPLICATION_CREDENTIALS) in .env file or env variable.
    const auth = new GoogleAuth();
    const targetAudience = new URL(cloudFunctionUrl).origin;
    const client = await auth.getIdTokenClient(targetAudience);
    const result = await client.request({ cloudFunctionUrl });

    const authToken = result.data;
    return authToken;
  } catch (error) {
    logger.error("failed to log into recaptcha cloud function.");
  }
};

const validateRecaptcha = async () => {
  const recaptchaFunctionURL =
    "https://us-central1-findadoc-test.cloudfunctions.net/authenticateRecaptcha";
  const authToken = await getAuthTokenForCloudFunction(recaptchaFunctionURL);

  if (!authToken) {
    //TODO: fail here.
  }

  // TODO: ...your axios code here. (add the auth token as a bearer token
  // something like
  // const axiosOptions = { `Authorization: bearer ${authToken}` }
};

// TODO: put this call in your component
validateRecaptcha();
