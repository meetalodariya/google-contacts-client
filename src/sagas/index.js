import { all } from "redux-saga/effects";
import { watchGetContactsList } from "./fetchContactListSaga";
import { watchUserLogin } from "./loginSaga";
import { watchUserLogout } from "./logoutSaga";

export default function* rootSaga(getState) {
  yield all([watchUserLogin(), watchUserLogout(), watchGetContactsList()]);
}
