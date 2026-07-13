import axiosInstance from "@/config/axios";
import { LoginPayload, LoginResponse, User } from "@/types/auth.types";

// -- Auth Service --
export const authService = {
  login(payload: LoginPayload) {
    return axiosInstance.post<LoginResponse>("/auth/login", payload);
  },

  logout() {
    return axiosInstance.post("/auth/logout");
  },

  getCurrentUser() {
    return axiosInstance.get<User>("/auth/me");
  },
};
