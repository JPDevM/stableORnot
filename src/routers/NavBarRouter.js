// Dependencies
import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';

// Middlewares
import PrivateRoute from '../middlewares/PrivateRoute';

// Components
import Projects from '../components/Projects/';
import Profile from '../pages/Profile';
import Help from '../pages/Help';
import Settings from '../pages/Settings';

const NavBarRouter = () => {
  return (
    <Fragment>
      {/* Render Pages */}
      <Switch>
        {/* By default */}
        <PrivateRoute exact path="/" component={Projects} />
        {/* Profile */}
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/help" component={Help} />
        <PrivateRoute exact path="/settings" component={Settings} />
      </Switch>
    </Fragment>
  );
};

export default NavBarRouter;
