// Core
import { takeEvery, all, call } from "redux-saga/effects";

// Types
import { actionTypes } from "../types";

// Workers
import { loadAsteroids } from "./workers/loadAsteroids";

function* watchLoadAsteroids() {
  yield takeEvery(actionTypes.LOAD_ASTEROIDS_ASYNC, loadAsteroids);
}

export function* watchAsteroids() {
  yield all([call(watchLoadAsteroids)]);
}
