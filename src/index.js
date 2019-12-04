import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './configureStore/reducers';
import { Provider } from 'react-redux';
import App from './App';
import rootSaga from './configureStore/saga';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ReduxThunk];
const store = createStore(
    reducers,
    compose(
      applyMiddleware(...middlewares, sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
