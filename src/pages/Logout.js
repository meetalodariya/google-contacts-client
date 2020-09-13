import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { logoutUser } from "../sagas/logoutSaga";

class Logout extends Component {
  /**
   * Redirect to login
   */
  renderRedirectToLogin = () => {
    // emit the event
    this.props.logoutUser();
    return <Redirect to="/login" />;
  };

  render() {
    return <React.Fragment>{this.renderRedirectToLogin()}</React.Fragment>;
  }
}

export default connect(null, { logoutUser })(Logout);
