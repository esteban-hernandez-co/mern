import config from "config";
import authHeader from "../helpers/auth";
import handleResponse from "./handleResponse";
import { API } from "../constants";

export const usersServices = {
  getRoles,
  getUsers,
  getInstitutions,
  createInstitution,
  updateInstitution,
  deleteInstitution,
  createUser,
  updateUser,
  deleteUser,
};

function getRoles() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", ...authHeader() },
  };
  return fetch(`${config.apiUrl}${API.USER_ROLE}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      return data;
    });
}

function getUsers() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", ...authHeader() },
  };
  return fetch(`${config.apiUrl}${API.USER}`, requestOptions)
    .then(handleResponse)
    .then((users) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      return users;
    });
}

function getInstitutions() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", ...authHeader() },
  };
  return fetch(`${config.apiUrl}${API.INSTITUTION}`, requestOptions)
    .then(handleResponse)
    .then((institution) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes

      return institution;
    });
}

function createInstitution(body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify({ ...body }),
  };
  return fetch(`${config.apiUrl}${API.INSTITUTION}`, requestOptions)
    .then(handleResponse)
    .then((institution) => {
      return institution;
    });
}

function updateInstitution(body) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify({ ...body }),
  };
  return fetch(`${config.apiUrl}${API.INSTITUTION}/${body.id}`, requestOptions)
    .then(handleResponse)
    .then((institution) => {
      return institution;
    });
}

function deleteInstitution(body) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify({ ...body }),
  };
  return fetch(`${config.apiUrl}${API.INSTITUTION}/${body.id}`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes

      return user;
    });
}

function createUser(body) {
  // console.log("body ", body)
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify({ ...body }),
  };
  return fetch(`${config.apiUrl}${API.USER}`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes

      return user;
    });
}

function updateUser(body) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify({ ...body }),
  };
  return fetch(`${config.apiUrl}${API.USER}/${body.id}`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes

      return user;
    });
}

function deleteUser(body) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify({ ...body }),
  };
  return fetch(`${config.apiUrl}${API.USER}/${body.id}`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes

      return user;
    });
}
