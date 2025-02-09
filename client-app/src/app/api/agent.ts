import axios, { AxiosResponse } from "axios";
import { Activity } from "../../models/activity";

axios.defaults.baseURL = "http://localhost:5087/api";

const responseBody = <T>(reponse: AxiosResponse<T>) => reponse.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete(url).then<T>(responseBody),
};

const Activites = {
  list: () => request.get<Activity[]>("/activities"),
};
const agent = { Activites };

export default agent;
