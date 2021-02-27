// Core
import { put, call } from "redux-saga/effects";

// Instruments
import { asteroidsActions } from "../../actions";
import { verifyEnvironment, developmentLogger, productionLogger } from "../../../../helpers";

const url =
  "http://www.asterank.com/api/asterank?query=%7B%22e%22:%7B%22$lt%22:0.1%7D,%22i%22:%7B%22$lt%22:4%7D,%22a%22:%7B%22$lt%22:1.5%7D%7D&limit=10";

export function* loadAsteroids() {
  const { isDevelopment, isProduction } = verifyEnvironment();
  let status = null;

  try {
    if (isDevelopment) {
      developmentLogger.info(`API GET request to ${url} was started...`);
    }

    const response = yield call(fetch, url);
    status = response.status;

    const results = yield call([response, response.json]);

    if (status !== 200) {
      if (isDevelopment) {
        developmentLogger.warn({
          message: `We can't receive asteroids. Current status code is ${status}`,
        });
      }

      if (isProduction) {
        productionLogger.warn({
          url,
          method: "GET",
          status,
          message: `API Error`,
        });
      }
    }

    yield put(asteroidsActions.fillAsteroids(results));
  } catch (error) {
    if (isDevelopment) {
      developmentLogger.warn({
        message: `We can't receive asteroids. Current status code is ${status}`,
      });
    }

    if (isProduction) {
      productionLogger.warn({
        url,
        method: "GET",
        status,
        message: `Api Error`,
      });
    }
  } finally {
    if (isDevelopment) {
      developmentLogger.info(`API GET request to ${url} was finished with status ${status}`);
    }
  }
}
