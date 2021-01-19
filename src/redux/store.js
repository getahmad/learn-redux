import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./middleware/sagas";

//saga
const sagaMiddleware = createSagaMiddleware();

//store
const globalStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//run saga
sagaMiddleware.run(rootSaga);

export default globalStore;
