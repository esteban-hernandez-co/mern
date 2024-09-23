export const userConstants = {
    LOGIN_REQUEST: "USERS_LOGIN_REQUEST",
    LOGIN_SUCCESS: "USERS_LOGIN_SUCCESS",
    LOGIN_FAILURE: "USERS_LOGIN_FAILURE",
    FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST",
    FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
    FORGOT_PASSWORD_FAILURE: "FORGOT_PASSWORD_FAILURE",
    LOGOUT: "USERS_LOGOUT",
    RESET_STORE: "RESET_STORE",
    GET_ALL_ROLES_REQUEST: "GET_ALL_ROLES_REQUEST",
    GET_ALL_ROLES_SUCCESS: "GET_ALL_ROLES_SUCCESS",
    GET_ALL_ROLES_FAILURE: "GET_ALL_ROLES_FAILURE",
    GET_ALL_USERS_REQUEST: "GET_ALL_USERS_REQUEST",
    GET_ALL_USERS_SUCCESS: "GET_ALL_USERS_SUCCESS",
    GET_ALL_USERS_FAILURE: "GET_ALL_USERS_FAILURE",
    DELETE_USER_REQUEST: "DELETE_USER_REQUEST",
    DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
    DELETE_USER_FAILURE: "DELETE_USER_FAILURE",
    UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST",
    UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
    UPDATE_USER_FAILURE: "UPDATE_USER_FAILURE",
    CREATE_USER_REQUEST: "CREATE_USER_REQUEST",
    CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
    CREATE_USER_FAILURE: "CREATE_USER_FAILURE",
    
  };
  
  export const userPermissions = {
    ADMIN: {
      addEdit: [
        {
          id: 1,
          title: "Labels",
          selected: true
        },
        {
          id: 2,
          title: "Artists",
          selected: true
        },
        {
          id: 3,
          title: "User",
          selected: true
        }
      ],
      testAccess: [
        {
          id: 4,
          title: "Mark",
          selected: true
        },
        {
          id: 5,
          title: "Send",
          selected: true
        },
        {
          id: 6,
          title: "Change Results",
          selected: true
        }
      ],
      view: [
        {
          id: 7,
          title: "Results",
          selected: true
        },
        {
          id: 8,
          title: "Recommendation",
          selected: true
        }
      ]
    },
    ASSESSOR: {
      addEdit: [
        {
          id: 1,
          title: "Institutions",
          selected: false
        },
        {
          id: 2,
          title: "Students",
          selected: true
        },
        {
          id: 3,
          title: "User",
          selected: false
        }
      ],
      testAccess: [
        {
          id: 4,
          title: "Mark",
          selected: true
        },
        {
          id: 5,
          title: "Send",
          selected: true
        },
        {
          id: 6,
          title: "Change Results",
          selected: false
        }
      ],
      view: [
        {
          id: 7,
          title: "Results",
          selected: true
        },
        {
          id: 8,
          title: "Recommendation",
          selected: true
        }
      ]
    }
  };
  