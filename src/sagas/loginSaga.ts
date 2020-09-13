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
import { loginUserSuccess } from "../redux/actions";

export const LOGIN_USER = "saga/LOGIN_USER";

/**
 * Sets the session
 * @param {*} user
 */
const setSession = (user: any) => {
  let cookies = new Cookies();
  cookies.set("user", JSON.stringify(user), { path: "/" });
};

function* userLoginSaga({ payload: { user } }: any) {
  setSession(user);
  yield put(loginUserSuccess(user));
}

export function* watchUserLogin(): any {
  yield takeLatest(LOGIN_USER, userLoginSaga);
}

export const loginUser = (user: any) => {
  return {
    type: LOGIN_USER,
    payload: { user },
  };
};
