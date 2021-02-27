// Core
import { put, call, delay } from "redux-saga/effects";

// Instruments
import { catsActions } from "../../../actions";
import { verifyEnvironment, productionLogger } from "../../../../../helpers";

const url = "https://cat-fact.herokuapp.com/facts";

export function* loadCats() {
  const { isProduction } = verifyEnvironment();
  let status = null;

  try {
    yield put(catsActions.loadCatsStart());

    if (isProduction) {
      productionLogger.info(`API GET request to ${url} was started...`);
    }
    const response = yield call(fetch, url);
    status = response.status;

    const results = yield call([response, response.json]);

    if (response.status !== 200) {
      throw new Error(`We can't receive starships 😢`);
    }

    yield delay(2000);
    yield put(catsActions.fillCats(results));
  } catch (error) {
    console.log("loadCatsAsync", error);
  } finally {
    if (isProduction) {
      productionLogger.info(`API GET request to ${url} was finished with status ${status}`);
    }
    yield put(catsActions.loadCatsEnd());
  }
}
