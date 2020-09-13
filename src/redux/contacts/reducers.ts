import { contactsState } from "./state";
import * as contactsActions from "./actions";

export const ContactsReducer = (
  state: any = contactsState,
  action: contactsActions.ContactsAction
) => {
  switch (action.type) {
    case contactsActions.ACTION_REDUCER_SET_CONTACT_LIST_SPINNER:
      return { ...state, showListSpinner: action.payload };
    case contactsActions.ACTION_REDUCER_SET_CONTACT_LIST:
      return { ...state, contacts: action.payload };
    case contactsActions.ACTION_REDUCER_SET_NUMBER_OF_CONTACTS:
      return { ...state, numberContacts: action.payload };

    default:
      return { ...state };
  }
};
