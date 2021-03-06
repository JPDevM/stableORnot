// Dependencies
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Components
import { useAuth } from './AuthContext';

// Styles

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}