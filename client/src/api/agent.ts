import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5233/";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
};

const PasswordsFinder = {
  find: (input: string) => requests.get(`Passwords/${input}`),
};

const agent = { PasswordsFinder };

export default agent;
