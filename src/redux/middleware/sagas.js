import axios from "axios";
import { all, put, select, takeLatest } from "redux-saga/effects";
import types from "../actions/types";

const getKeywords = (state) => state.keywords;

//saga watcher
function* searchMovieWatcher() {
  yield takeLatest(types.SEARCH_MOVIES_REQUEST, searchMovieWorker);
}

//saga worker
function* searchMovieWorker() {
  try {
    let keywords = yield select(getKeywords);
    const response = yield axios.get(
      `https://www.omdbapi.com/?apikey=efb4cbba&s=${keywords}`
    );
    const movies = response.data.Search;

    yield put({ type: types.SEARCH_MOVIES_SUCCESS, movies: movies });
  } catch (error) {
    yield put({ type: types.SEARCH_MOVIES_FAILURE });
  }
}

//combine all saga watcher
function* rootsaga() {
  yield all([searchMovieWatcher()]);
}

export default rootsaga;
