// -------------------------------------
// ----- auth.service types ------------
// -------------------------------------

// -- login payload interface --
export interface LoginPayload {
  email: string;
  password: string;
}

// -- login return response interface --
export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: string;
      name: string;
      email: string;
    };
    accessToken: string;
  };
}

// -- user interface --
export interface User {
  id: string;
  name: string;
  email: string;
}
