import { PATHS, userConstants } from "../constants";
import { authService, usersServices } from "../services";
import history from "../helpers/history";

export const usersActions = {
  resetStore,
  getRoles,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
};

function getUsers() {
  return (dispatch) => {
    dispatch(request());
    return usersServices.getUsers().then(
      (users) => {
        dispatch(success(users));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.GET_ALL_USERS_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_ALL_USERS_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_ALL_USERS_FAILURE, error };
  }
}

function createUser(body) {
  return (dispatch) => {
    dispatch(request(body));
    return usersServices.createUser(body).then(
      (user) => {
        dispatch(success(user));
        history.push(PATHS.USERS_ROOT);
      },
      (error) => {
        console.log("error ", error);
        dispatch(failure(error.toString()));
      }
    );
  };
  function request() {
    return { type: userConstants.CREATE_USER_REQUEST };
  }
  function success(user) {
    return { type: userConstants.CREATE_USER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.CREATE_USER_FAILURE, error };
  }
}

function updateUser(body, path) {
  return (dispatch) => {
    dispatch(request(body));
    return usersServices.updateUser(body).then(
      (user) => {
        dispatch(success(user));
        history.push(path);
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
  function request() {
    return { type: userConstants.UPDATE_USER_REQUEST };
  }
  function success(user) {
    return { type: userConstants.UPDATE_USER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.UPDATE_USER_FAILURE, error };
  }
}

function deleteUser(body) {
  return (dispatch) => {
    dispatch(request(body));
    return usersServices.deleteUser(body).then(
      (user) => {
        dispatch(success(user));
        location.reload();
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
  function request() {
    return { type: userConstants.DELETE_USER_REQUEST };
  }
  function success(user) {
    return { type: userConstants.DELETE_USER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.DELETE_USER_FAILURE, error };
  }
}

function getRoles() {
  return (dispatch) => {
    dispatch(request());
    return usersServices.getRoles().then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.GET_ALL_ROLES_REQUEST };
  }
  function success(data) {
    return { type: userConstants.GET_ALL_ROLES_SUCCESS, data };
  }
  function failure(error) {
    return { type: userConstants.GET_ALL_ROLES_FAILURE, error };
  }
}

function resetStore() {
  // authService.logout();
  return { type: userConstants.RESET_STORE };
}
