import React from "react";
import { Route, Navigate } from "react-router-dom";
import { PATHS } from "../constants";
import history from "../helpers/history";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("klezmer_user") ? ( // todo remove !
        <Component {...props} />
      ) : (
        <Navigate to={`${PATHS.AUTH_LOGIN}`} replace={true} />
      )
    }
  />
);
