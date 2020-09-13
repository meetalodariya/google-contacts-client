import { BASE_PATH } from "../constants";
import { getRequest } from "../request";

export const fetchContactsList = (token: any) => {
  const userLoginUrl = `${BASE_PATH}/contacts/all`;
  return getRequest(userLoginUrl, { Authorization: token }).then(
    (json: any) => {
      return json;
    }
  );
};
