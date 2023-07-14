import React from "react";
import { Route, Navigate } from "react-router-dom";

const AuthenticatedRoutes = ({ component: Component, isAdmin, ...rest }) => {
  const isAuthenticated = true;
  const isAuthorized = isAdmin;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && isAuthorized ? (
          <Component {...props} />
        ) : (
          <Navigate to="login" />
        )
      }
    />
  );
};

export default AuthenticatedRoutes;
