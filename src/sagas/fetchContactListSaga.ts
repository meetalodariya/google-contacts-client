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
import { fetchContactsList } from "../clients/orchestrator-client/contacts";
import { authSelectors } from "../redux/auth/selectors";
import {
  setContactList,
  setContactListSpinner,
  setNumberOfContacts,
} from "../redux/contacts/actions";

export const GET_CONTACTS_LIST = "saga/GET_CONTACTS_LIST";

function* getContactsListSaga({ payload: { user } }: any) {
  const token = yield select(authSelectors.getToken);
  const { data } = yield call(fetchContactsList, token);
  yield put(setContactList(data.contacts));
  yield put(setNumberOfContacts(data.contacts.length));
  yield put(setContactListSpinner(false));
}

export function* watchGetContactsList(): any {
  yield takeLatest(GET_CONTACTS_LIST, getContactsListSaga);
}

export const getContactsList = (user: any) => {
  return {
    type: GET_CONTACTS_LIST,
    payload: { user },
  };
};
