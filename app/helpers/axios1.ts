import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import useLoadingStore from "../store/loading";

const axios1 = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const { setBLoading } = useLoadingStore.getState();

const onRequest = (
  req: InternalAxiosRequestConfig<any>
):
  | InternalAxiosRequestConfig<any>
  | Promise<InternalAxiosRequestConfig<any>> => {
  setBLoading(true);
  return req;
};

const onResponse = (res: AxiosResponse<any, any>): AxiosResponse<any, any> => {
  setBLoading(false);
  return res;
};

axios1.interceptors.request.use(onRequest);
axios1.interceptors.response.use(onResponse);

export default axios1;
