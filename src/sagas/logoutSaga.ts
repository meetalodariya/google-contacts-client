// @flow
import {
  select,
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { Cookies } from "react-cookie";
import { setAuthFieldValue } from "../redux/actions";

export const LOGOUT_USER = "saga/LOGOUT_USER";

function* userLogoutSaga() {
  let cookies = new Cookies();
  cookies.remove("user");
  yield put(setAuthFieldValue("isLogged", false));
  yield put(setAuthFieldValue("user", {}));
}

export function* watchUserLogout(): any {
  yield takeLatest(LOGOUT_USER, userLogoutSaga);
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
