import axios from "axios";
import config from "../../../config.ts";
import storage from "../storage";

const api = axios.create({
  baseURL: config.API_ROOT,
  timeout: 60000
});

api.defaults.params = {};
api.defaults.params["_f"] = "json";
api.defaults.headers.common["Accept"] = "application/json";
api.defaults.headers.common["Cache-Control"] = "no-cache";
api.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";

api.interceptors.request.use(
  configs => {
    configs.headers.Authorization = `Bearer ${storage.get("token")}`;
    return configs;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => response,
  error => {
    if (
      error.response &&
      error.response.status === 401 &&
      window.location.pathname !== "/login"
    ) {
      storage.remove("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
