import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "https://comicbook-server-v01.onrender.com";
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (
    url: string,
    params?: URLSearchParams,
    headers?: AxiosRequestConfig["headers"]
  ) => {
    const config: AxiosRequestConfig = {
      params,
      headers,
    };
    return axios.get(url, config).then(responseBody);
  },
  post: (url: string, body: {}, headers: {}) =>
    axios.post(url, body, headers).then(responseBody),
  patch: (url: string, body: {}, headers: {}) =>
    axios.patch(url, body, headers).then(responseBody),
  delete: (url: string, headers: {}) => axios.delete(url, headers).then(responseBody),
};

const adCatalog = {
  details: (id: string) => requests.get(`/product/${id}`),
};

const agent = {
  requests,
  adCatalog,
};

export default agent;
