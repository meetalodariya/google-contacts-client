export type ContactsAction = { type: string; payload: any };

export const ACTION_REDUCER_SET_CONTACT_LIST_SPINNER =
  "contacts/SET_CONTACT_LIST_SPINNER";
export const setContactListSpinner = (value: boolean): ContactsAction => ({
  type: ACTION_REDUCER_SET_CONTACT_LIST_SPINNER,
  payload: value,
});

export const ACTION_REDUCER_SET_CONTACT_LIST = "contacts/SET_CONTACT_LIST";

export const setContactList = (value: any[]): ContactsAction => ({
  type: ACTION_REDUCER_SET_CONTACT_LIST,
  payload: value,
});

export const ACTION_REDUCER_SET_NUMBER_OF_CONTACTS =
  "contacts/SET_NUMBER_OF_CONTACTS";

export const setNumberOfContacts = (value: number): ContactsAction => ({
  type: ACTION_REDUCER_SET_NUMBER_OF_CONTACTS,
  payload: value,
});
