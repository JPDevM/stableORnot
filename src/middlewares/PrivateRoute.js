// Dependencies
import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

// Components
import { useAuth } from '../middlewares/AuthContext';

// Styles

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          //<Redirect to="/login" />
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        );
      }}
    ></Route>
  );
}