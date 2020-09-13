export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";
export const LOGOUT_USER = "LOGOUT_USER";

type AuthAction = { type: string; payload: {} | string };

export const loginUser = (username: string, password: string): AuthAction => ({
  type: LOGIN_USER,
  payload: { username, password },
});

export const loginUserSuccess = (user: any): AuthAction => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFailed = (error: string): AuthAction => ({
  type: LOGIN_USER_FAILED,
  payload: error,
});

export const logoutUser = (history: any): AuthAction => ({
  type: LOGOUT_USER,
  payload: { history },
});

export const SET_LOADING_SPINNER = "auth/SET_LOADING_SPINNER";
export const setLoadingSpinner = (value: boolean): AuthAction => ({
  type: SET_LOADING_SPINNER,
  payload: value,
});

export const SET_AUTH_FIELD_VALUES = "auth/SET_AUTH_FIELDS_VALUES";
export const setAuthFieldValue = (field: string, value: any): AuthAction => ({
  type: SET_AUTH_FIELD_VALUES,
  payload: { field, value },
});
