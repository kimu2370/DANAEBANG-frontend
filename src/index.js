import React from "react";
import ReactDOM from "react-dom";
import Routes from "Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "Redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

ReactDOM.render(
  <Provider store={createStore(rootReducer, composeWithDevTools())}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
