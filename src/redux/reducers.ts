import { combineReducers } from "redux";
import Auth from "./auth/reducers";
import { ContactsReducer as Contacts } from "./contacts/reducers";

export default combineReducers({
  Auth,
  Contacts,
});
