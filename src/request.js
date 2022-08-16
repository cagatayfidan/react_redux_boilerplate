import axios from "axios";

const requestAuth = (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
}

const responseSuccess = function (response) {
  if (response.status === 200) {
    if (response.data?.token) localStorage.setItem("token", response.data.token);
    return response;
  }

  if (response.status === 401 || (response.status === 500 && response.data.error === "401")) {
    logOut();
  }

  if (response.status === 500 || response.status === 400) {

  }
  const errorMessage = { message: response };
  throw errorMessage;
};

const responseError = function (err) {
  console.log(err)
  const errorMessage = { message: "SERVER_ERROR" };
  throw errorMessage;
};

export const logOut = () => {
  localStorage.removeItem('token');
}

const createAxios = url => {
  const axiosInstance = axios.create({
    baseURL: `${"http://localhost:5000/api"}/${url}`,
    timeout: 5000,
    withCredentials: false,
    headers: {
      'accept': '*/*',
      "Access-Control-Allow--Origin":"*",
      "Content-Type": "application/json; charset=utf-8"
    },
    validateStatus(status) {
      return status >= 200 && status < 501;
    }
  });
  axiosInstance.interceptors.request.use(requestAuth);
  axiosInstance.interceptors.response.use(responseSuccess, responseError);
  return axiosInstance;
}

var auth = createAxios("Auth");

var ApiStore = {
  auth
};

export default ApiStore;