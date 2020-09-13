import React from "react";
import { BASE_PATH } from "../../clients/constants";
export const LoginCard = () => {
  return (
    <div className="login-card col-md-12 col-sm-6 col-xs-4">
      <div className="pt-4 mt-4">
        <div className="text-center w-100">
          <div className="google-logo"></div>
        </div>
      </div>
      <div className="login-card-header mt-1 mb-5">
        <h2 className="text-center header">Sign in with Google</h2>
      </div>
      <div className="mt-4 mx-4">
        <input
          type="email"
          id="email"
          className="form-control form-control-lg input-box mb-4 mt-3"
          placeholder="Email"
        ></input>
        <input
          type="password"
          id="password"
          className="form-control form-control-lg input-box"
          placeholder="Password"
        ></input>
      </div>

      <div className="button-div mx-4 mt-5">
        <a href={`${BASE_PATH}/user/auth`}>
          <button
            className="btn btn-primary btn-block"
            type="button"
            onClick={() => {
              console.log("meet");
            }}
          >
            Sign In
          </button>
        </a>
      </div>
    </div>
  );
};

LoginCard.displayName = "LoginCard";
LoginCard.propTypes = {};
LoginCard.defaultProps = {};
