import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './config/Root';
import { Provider } from "react-redux"
import {createStore, applyMiddleware, compose} from "redux"
import thunk from 'redux-thunk';
import {reducer} from "./store/reducers/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = store => {
  return next => {
      return action => {
          return next(action);
      }
  }
};
const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, thunk )))

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>
    ,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const newApp = require('./config/Root').default;
    render(newApp);
  });
}
