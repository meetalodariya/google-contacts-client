import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: string;
  }
}

export function configureStore(initialState: any): any {
  const composeEnhancers: any =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(sagas);
  return store;
}
