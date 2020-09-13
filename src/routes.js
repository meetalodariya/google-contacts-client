import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { isUserAuthenticated } from "./helpers/authUtils";
import Home from "./pages/Home";

// auth
const Login = React.lazy(() => import("./pages/Login"));
const Logout = React.lazy(() => import("./pages/Logout"));

// handle auth and authorization
const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isAuthTokenValid = isUserAuthenticated();
      if (!isAuthTokenValid) {
        // not logged in so redirect to login page with the return url
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

const routes = [
  // auth and account
  { path: "/login", name: "Login", component: Login, route: Route },
  {
    path: "/",
    exact: true,
    name: "Login",
    component: () => <Redirect to="/login" />,
    route: Route,
  },
  { path: "/logout", name: "Logout", component: Logout, route: Route },

  // other pages
  {
    path: "/contacts",
    exact: true,
    component: Home,
    route: PrivateRoute,
  },
];

export { routes, PrivateRoute };
