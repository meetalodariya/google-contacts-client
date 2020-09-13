import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { authSelectors } from "../../redux/auth/selectors";
import { contactSelectors } from "../../redux/contacts/selectors";
import { ContactsTable } from "./ContactsTable";

const mapActionCreators = {};

const mapStateToProps = (state) => {
  const { name, profile, email } = authSelectors.getUserDetails(state);
  const { contacts } = contactSelectors.getContactStateValues(state);
  return { name, profile, email, contacts };
};

export const ContactsTableContainer = withRouter(
  connect(mapStateToProps, mapActionCreators)(ContactsTable)
);
