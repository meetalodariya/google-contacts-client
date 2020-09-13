import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { Redirect } from "react-router-dom";
import { loginUser } from "../sagas/loginSaga";
import { isUserAuthenticated } from "../helpers/authUtils";
import { LoginCard } from "../components/LoginCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

class Login extends Component {
  componentDidMount() {
    if (queryString.parse(window.location.search).token) {
      const user = queryString.parse(this.props.location.search);
      this.props.loginUser(user);
    }
    this._isMounted = true;
  }

  /**
   * Redirect to root
   */
  renderRedirectToRoot = () => {
    const isAuthTokenValid = isUserAuthenticated();
    if (isAuthTokenValid) {
      return <Redirect to="/contacts" />;
    }
  };

  render() {
    const isAuthTokenValid = isUserAuthenticated();
    return (
      <React.Fragment>
        {this.renderRedirectToRoot()}
        {(this._isMounted || !isAuthTokenValid) && (
          <div className="container-fluid">
            {/* preloader */}
            {this.props.error && (
              <div color="danger">
                <div>Error! Try again.</div>
              </div>
            )}
            <div className="background-login">
              <div className="row">
                <LoginCard />
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, loading, error } = state.Auth;
  return { user, loading, error };
};

export default connect(mapStateToProps, { loginUser })(Login);
