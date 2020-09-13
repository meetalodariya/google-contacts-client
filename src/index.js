import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import HttpsRedirect from "react-https-redirect";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

ReactDOM.render(
  <Provider store={configureStore()}>
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
