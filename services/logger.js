/* eslint-disable no-console */

const createLogger = () => {
  const isProdMode =
    process.env.NODE_ENV === "prod" || process.env.NODE_ENV !== "development";

  // level "debug" = debug
  // level "default" = default
  // level "none" = no logging
  //TODO: move this var to env file.
  let logLevel = "default";

  if (isProdMode) {
    return createProdLogger(logLevel);
  }

  return createDevLogger(logLevel);
};

const createProdLogger = (logLevel) => {
  //TODO: read log destination from env. (QA/Prod might be different destination, but log the same)
  //TODO: implement a real Prod logger

  const debugLogFunction = (message) => {
    const loggableLevels = ["debug"];
    const shouldLog = loggableLevels.includes(logLevel);
    if (!shouldLog) return;

    const currentTime = new Date().toLocaleTimeString();
    console.debug(`DEBUG - ${currentTime}: ${message}`);
  };

  const infoLogFunction = (message) => {
    const loggableLevels = ["debug", "default"];
    const shouldLog = loggableLevels.includes(logLevel);
    if (!shouldLog) return;

    const currentTime = new Date().toLocaleTimeString();
    console.log(`INFO - ${currentTime}: ${message}`);
  };

  const warnLogFunction = (message) => {
    const loggableLevels = ["debug", "default"];
    const shouldLog = loggableLevels.includes(logLevel);
    if (!shouldLog) return;

    const currentTime = new Date().toLocaleTimeString();
    console.log(`WARN - ${currentTime}: ${message}`);
  };

  const errorLogFunction = (message, error) => {
    const loggableLevels = ["debug", "default"];
    const shouldLog = loggableLevels.includes(logLevel);
    if (!shouldLog) return;

    const currentTime = new Date().toLocaleTimeString();
    const fullErrorMessage = error
      ? message + `\n actual error: ${error.message} \n ${error.stack}`
      : message;
    console.log(`ERROR - ${currentTime}: ${fullErrorMessage}`);
  };

  return {
    debug: debugLogFunction,
    info: infoLogFunction,
    warn: warnLogFunction,
    error: errorLogFunction,
  };
};

const createDevLogger = (logLevel) => {
  const debugLogFunction = (message) => {
    const loggableLevels = ["debug"];
    const shouldLog = loggableLevels.includes(logLevel);
    if (!shouldLog) return;

    const currentTime = new Date().toLocaleTimeString();
    console.log(`DEBUG - ${currentTime}: ${message}`);
  };

  const infoLogFunction = (message) => {
    const loggableLevels = ["debug", "default"];
    const shouldLog = loggableLevels.includes(logLevel);
    if (!shouldLog) return;

    const currentTime = new Date().toLocaleTimeString();
    console.log(`INFO - ${currentTime}: ${message}`);
  };

  const warnLogFunction = (message) => {
    const loggableLevels = ["debug", "default"];
    const shouldLog = loggableLevels.includes(logLevel);
    if (!shouldLog) return;

    const currentTime = new Date().toLocaleTimeString();
    console.log(`WARN - ${currentTime}: ${message}`);
  };

  const errorLogFunction = (message, error) => {
    const loggableLevels = ["debug", "default"];
    const shouldLog = loggableLevels.includes(logLevel);
    if (!shouldLog) return;

    const currentTime = new Date().toLocaleTimeString();
    const fullErrorMessage = error
      ? message + `\n actual error: ${error.message} \n ${error.stack}`
      : message;
    console.log(`ERROR - ${currentTime}: ${fullErrorMessage}`);
  };

  return {
    debug: debugLogFunction,
    info: infoLogFunction,
    warn: warnLogFunction,
    error: errorLogFunction,
  };
};

let loggerSingleton;
const logger = () => {
  if (!loggerSingleton) loggerSingleton = createLogger();
  return loggerSingleton;
};

export default logger();
