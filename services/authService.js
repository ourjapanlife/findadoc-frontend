import GoogleAuth from "google-auth-library";
import { URL } from "url";

import logger from "./logger";

export const getAuthTokenForCloudFunction = async (cloudFunctionUrl) => {
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
