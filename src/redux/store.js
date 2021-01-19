import { createStore } from "redux";

import rootReducer from "./reducers/rootReducer";

//store
const globalStore = createStore(rootReducer);

export default globalStore;
