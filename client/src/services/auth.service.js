import config from "config";
import authHeader from "../helpers/auth";
import { API } from "../constants";

export const authService = {
  resetPassword,
  login,
  logout,
  forgotPassword,
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email_address: username, password }),
  };

  return fetch(`${config.apiUrl}/auth/login`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("klezmer_user", JSON.stringify(user));

      return user;
    });
}

function forgotPassword(username) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: username }),
  };

  return fetch(`${config.apiUrl}${API.FORGOT_PASSWORD}`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      return user;
    });
}

function resetPassword(password, token) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  };

  return fetch(`${config.apiUrl}${API.RESET_PASSWORD}/${token}`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      return user;
    });
}

function logout() {
  localStorage.removeItem("klezmer_user");
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();

        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
