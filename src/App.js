import React, { Component, Suspense } from "react";
import { routes } from "./routes";
import { BrowserRouter } from "react-router-dom";

const loading = () => <div />;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          {routes.map((route, index) => {
            return (
              <route.route
                key={index}
                path={route.path}
                exact={route.exact}
                component={(props) => {
                  return (
                    <Suspense fallback={loading()}>
                      <route.component {...props} />
                    </Suspense>
                  );
                }}
              />
            );
          })}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
