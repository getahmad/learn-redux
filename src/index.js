import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

//init state
const globalState = {
  order: 0,
  price: 50000,
};

const rootReducer = (state = globalState, action) => {
  if (action.type === "PLUS_ORDER") {
    return {
      ...state,
      order: state.order + 1,
    };
  }
  if (action.type === "MINUS_ORDER") {
    return {
      ...state,
      order: state.order - 1,
    };
  }
  return state;
};

// store
const globalStore = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
