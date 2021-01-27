import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./middleware/sagas";

//saga
const sagaMiddleware = createSagaMiddleware();

//store
const globalStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
  // applyMiddleware(sagaMiddleware)
);

//run saga
sagaMiddleware.run(rootSaga);

export default globalStore;
