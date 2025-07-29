import store from "@/store";
import authThunks from "@/store/thunks/auth.thunks";
import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

const request = async (method, url, data, config) => {
  try {
    const res = await httpRequest.request({
      method,
      url,
      data,
      ...config,
    });

    if (res.status == 204) {
      return { data: { success: true }, error: null };
    }

    const response = res.data;
    return { data: response.data, error: null };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: {
        message: error.response?.data?.message ?? error.message,
        details: error.response?.data?.details,
      },
    };
  }
};

const get = (url, config) => request("GET", url, null, config);
const post = (url, data, config) => request("POST", url, data, config);
const put = (url, data, config) => request("PUT", url, data, config);
const patch = (url, data, config) => request("PATCH", url, data, config);
const del = (url, data, config) => request("DELETE", url, data, config);

let isRefreshing = false;
let failedQueue = [];

httpRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const shouldRenewToken = error.response?.status === 401;

    if (
      !shouldRenewToken ||
      originalRequest._retry ||
      originalRequest.url?.includes("/auth/refresh-token")
    ) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject, config: originalRequest });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const result = await store.dispatch(authThunks.refreshToken());

      if (authThunks.refreshToken.rejected.match(result)) {
        throw new Error("Token refresh failed");
      }

      failedQueue.forEach(({ resolve, config }) => {
        resolve(httpRequest(config));
      });
      return httpRequest(originalRequest);
    } catch (error) {
      console.error(error);
      store.dispatch(authThunks.logout());

      failedQueue.forEach(({ reject }) => {
        reject(error);
      });

      return Promise.reject(error);
    } finally {
      isRefreshing = false;
      failedQueue = [];
    }
  },
);

export default { get, post, put, patch, del };
