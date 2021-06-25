const createLogger = () => {
  const isProdMode =
    process.env.NODE_ENV === "prod" || process.env.NODE_ENV !== "development"
      ? true
      : false;

  //TODO: move this var to env file.
  // level 1 = debug
  // level 2 = default
  // level 3 = no logging
  let logLevel = 2;

  if (isProdMode) {
    return createProdLogger(logLevel);
  }

  return createDevLogger(logLevel);
};

const createProdLogger = (logLevel) => {
  //TODO: read log destination from env. (QA/Prod might be different destination, but log the same)
  //TODO: implement a real Prod logger

  const debugLogFunction = (message) => {
    if (logLevel > 1) return;

    const currentTime = new Date().toLocaleTimeString();
    console.log(`${currentTime}: ${message}`);
  };

  const infoLogFunction = (message) => {
    if (logLevel > 2) return;

    const currentTime = new Date().toLocaleTimeString();
    console.log(`${currentTime}: ${message}`);
  };

  const warnLogFunction = (message) => {
    if (logLevel > 2) return;

    const currentTime = new Date().toLocaleTimeString();
    console.log(`${currentTime}: ${message}`);
  };

  const errorLogFunction = (message, error) => {
    if (logLevel > 2) return;

    const currentTime = new Date().toLocaleTimeString();
    const fullErrorMessage = error
      ? message + `\n actual error: ${error.message} \n ${error.stack}`
      : message;
    console.log(`${currentTime}: ${fullErrorMessage}`);
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
    if (logLevel > 1) return;

    const currentTime = new Date().toLocaleTimeString();
    console.log(`${currentTime}: ${message}`);
  };

  const infoLogFunction = (message) => {
    if (logLevel > 2) return;

    const currentTime = new Date().toLocaleTimeString();
    console.log(`${currentTime}: ${message}`);
  };

  const warnLogFunction = (message) => {
    if (logLevel > 2) return;

    const currentTime = new Date().toLocaleTimeString();
    console.log(`${currentTime}: ${message}`);
  };

  const errorLogFunction = (message, error) => {
    if (logLevel > 2) return;

    const currentTime = new Date().toLocaleTimeString();
    const fullErrorMessage = error
      ? message + `\n actual error: ${error.message} \n ${error.stack}`
      : message;
    console.log(`${currentTime}: ${fullErrorMessage}`);
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
