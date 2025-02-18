import axios, { AxiosResponse } from "axios";
import { Activity } from "../../models/activity";

// simulator deplay time when excute task(call api...)
const sleep = (delay: number) => {
  return new Promise((resolver) => {
    setTimeout(resolver, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5087/api";

//  Interceptors trong Axios cho phép bạn can thiệp vào quá trình xử lý request và response trước khi chúng được trả về hoặc gửi đi.
axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

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
  details: (id: string) => request.get<Activity>(`/activities/${id}`),
  create: (activity: Activity) => axios.post<void>("/activities", activity),
  update: (activity: Activity) =>
    axios.put<void>(`/activities/${activity.id}`, activity),
  delete: (id: string) => axios.delete<void>(`/activities/${id}`),
};
const agent = { Activites };

export default agent;
