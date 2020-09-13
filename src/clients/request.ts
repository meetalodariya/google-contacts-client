import axios from "axios";

export const getRequest = (url: string, headers: any) => {
  return axios
    .get(url, {
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    })
    .then((response: any) => {
      console.log(response);
      return { status: response.status, data: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return {
          status: error.response.data,
          data: error.response.data,
        };
      }
    });
};

export const putRequest = async (url: string, payload: any, headers: any) => {
  return axios
    .put(url, payload, {
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response: any) => {
      return { status: response.data.code, data: response.data.data };
    })
    .catch((error) => {
      if (error.response) {
        return {
          status: error.response.data.code,
          data: error.response.data.data,
        };
      }
    });
};

// export const deleteRequest = (url: string) => {
//   return fetch(url, {
//     credentials: "include",
//     method: "DELETE",
//   }).then((response: any) => {
//     return response.json();
//   });
// };

export const postRequest = async (url: string, payload: any, headers: any) => {
  return axios
    .post(url, payload, {
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response: any) => {
      return { status: response.data, data: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return {
          status: error.response.data,
          data: error.response.data,
        };
      }
    });
};
