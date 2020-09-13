import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { LoginCard } from "./LoginCard";

const mapActionCreators = {};

const mapStateToProps = (state) => {
  return {};
};

export const LoginCardContainer = withRouter(
  connect(mapStateToProps, mapActionCreators)(LoginCard)
);
