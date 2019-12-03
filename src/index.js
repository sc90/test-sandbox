import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import store from "./redux/store";
import configureStore from "./configureStore";
import TodoApp from "./TodoApp";

const store = configureStore();
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);
