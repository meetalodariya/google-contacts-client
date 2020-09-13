import React, { useState } from "react";
import logout from "../../assets/images/logout.svg";
import "./topbarStyles.css";
import { Link } from "react-router-dom";

export const Topbar = ({ name, profile, email, logoutUser }) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="logo-box d-flex flex-row row-hl ">
          <div className="profile-picture mr-5">
            <span className="rounded-eclipse"></span>
            <span className="logo-lg">
              <img
                className="profile-pic"
                src={profile}
                alt="dp"
                style={{ borderRadius: "50%" }}
              ></img>
            </span>
          </div>
          <div className="d-flex flex-column row-hl profile-detail-group">
            <div className="profile-name">{name}</div>
            <div className="profile-email">{email}</div>
          </div>
        </div>
        <Link to="/logout">
          <div className="logout mr-4">
            <img src={logout} alt="logout"></img>
          </div>
        </Link>
      </div>
    </nav>
  );
};

Topbar.displayName = "Topbar";
Topbar.propTypes = {};
Topbar.defaultProps = {};
