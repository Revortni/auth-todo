import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import DashBoard from './Dashboard';
// import Main from './Main';

export const ProtectedRoute = ({
  isAuthenticated,
  data,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          // <DashBoard {...props} data={data} />
          children
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};
