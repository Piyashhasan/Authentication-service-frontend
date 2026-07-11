import axios from "axios";

// -- Instance --
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// -- Request Interceptor --
axiosInstance.interceptors.request.use(
  (config) => {
    // Example:
    // const token = localStorage.getItem("accessToken");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => Promise.reject(error),
);

// -- Response Interceptor --
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Refresh token logic
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
