import { userConstants, ACTION_TYPES } from "../constants";

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_ALL_USERS_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GET_ALL_USERS_SUCCESS:
      return {
        users: action.users,
      };
    case userConstants.GET_ALL_USERS_FAILURE:
      return {
        error: action.error,
      };
    case userConstants.CREATE_USER_REQUEST:
      return {
        loading: true,
      };
    case userConstants.CREATE_USER_SUCCESS:
      return {
        newUser: action.user,
      };
    case userConstants.CREATE_USER_FAILURE:
      return {
        error: action.error,
      };
    case userConstants.RESET_STORE:
      return {
        error: "",
      };
    default:
      return state;
  }
}
