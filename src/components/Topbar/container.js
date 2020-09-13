import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../sagas/logoutSaga";
import { authSelectors } from "../../redux/auth/selectors";
import { Topbar } from "./Topbar";

const mapActionCreators = { logoutUser };

const mapStateToProps = (state) => {
  const { name, profile, email } = authSelectors.getUserDetails(state);
  return { name, profile, email };
};

export const TopbarContainer = withRouter(
  connect(mapStateToProps, mapActionCreators)(Topbar)
);
