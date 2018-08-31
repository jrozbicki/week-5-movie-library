import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from "./reducers";
import MovieDetailContainer from "./components/movie-detail-container";
import MainView from "./components/main-view";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <Switch>
        <Route path="/movie/:title" component={MovieDetailContainer} />
        <Route exact path="/" component={MainView} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
