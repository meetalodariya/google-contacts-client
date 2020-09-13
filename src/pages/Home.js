import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import { Topbar } from "../components/Topbar";
import { ContactsTable } from "../components/ContactsTable/";
import { getContactsList } from "../sagas/fetchContactListSaga";
import Loader from "../components/Loaders/Loader";
import { contactSelectors } from "../redux/contacts/selectors";

class ContactList extends Component {
  componentDidMount() {
    this.props.getContactsList();
  }

  render() {
    console.log(this.props.numberContacts);
    return (
      <React.Fragment>
        <div className="bg-contacts">
          <Topbar />
          <div className="wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div>
                    <span className="contact-head">Contacts</span>
                    <span className="number-contacts">
                      ( {this.props.numberContacts} )
                    </span>
                  </div>
                  <div id="table-wrapper">
                    <div id="table-scroll">
                      {this.props.showListSpinner ? (
                        <Loader />
                      ) : (
                        <ContactsTable />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    user: { profile, email, name, isLogged },
  } = state.Auth;
  const {
    showListSpinner,
    numberContacts,
  } = contactSelectors.getContactStateValues(state);
  return { profile, email, name, isLogged, showListSpinner, numberContacts };
};

export default connect(mapStateToProps, { getContactsList })(ContactList);
