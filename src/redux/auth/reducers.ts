// @flow
import { getLoggedInUser } from "../../helpers/authUtils";
import { SET_AUTH_FIELD_VALUES, SET_LOADING_SPINNER } from "./actions";
import { set } from "lodash";

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";
export const LOGOUT_USER = "LOGOUT_USER";

const INIT_STATE = {
  user: getLoggedInUser(),
  loading: false,
  value: false,
  isLogged: false,
};

type AuthAction = { type: string; payload: any };
type State = { user?: {} | null; loading?: boolean; value?: boolean };

const Auth = (state: State = INIT_STATE, action: AuthAction) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
        isLogged: true,
      };

    case SET_LOADING_SPINNER:
      return { ...state, loading: action.payload };
    case SET_AUTH_FIELD_VALUES:
      return set(state, action.payload.field, action.payload.value);
    default:
      return { ...state };
  }
};

export default Auth;
