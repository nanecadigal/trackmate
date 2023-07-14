import React from "react";
import { Route, Navigate } from "react-router-dom";

const UnauthenticatedRoutes = ({
  component: Component,
  restricted,
  ...rest
}) => {
  const isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Navigate to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default UnauthenticatedRoutes;
