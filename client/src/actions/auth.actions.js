import { PATHS, userConstants } from "../constants";
import { authService } from "../services";
import history from "../helpers/history";

export const userActions = {
  resetPassword,
  login,
  logout,
  forgotPassword,
};

function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));
    return authService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/");
      },
      (error) => {
        dispatch(failure(error.toString()));
        // dispatch(alertActions.error(error.toString()));
        return error;
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function forgotPassword(username) {
  return (dispatch) => {
    dispatch(request({ username }));
    return authService.forgotPassword(username).then(
      (user) => {
        dispatch(success(user));
        history.push(PATHS.AUTH_LOGIN);
      },
      (error) => {
        dispatch(failure(error.toString()));
        // dispatch(alertActions.error(error.toString()));
        return error;
      }
    );
  };

  function request(user) {
    return { type: userConstants.FORGOT_PASSWORD_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.FORGOT_PASSWORD_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.FORGOT_PASSWORD_FAILURE, error };
  }
}

function resetPassword(password, token) {
  return authService.resetPassword(password, token);
}

function logout() {
  authService.logout();
  return { type: userConstants.LOGOUT };
}
