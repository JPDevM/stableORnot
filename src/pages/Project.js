// Dependencies
import React, { Fragment } from 'react';

// Middlewares
import PrivateRoute from '../middlewares/PrivateRoute';


import ProjectRouter from '../routers/ProjectRouter';

import Projects from '../components/Projects';

import Profile from '../pages/Profile';
import ProjectShow from '../components/Projects/ProjectShow';

export default function Project() {
  return (
    <Fragment>
      {/* TODO: Set ProjectRouter */}
      {/*<Route path="/project/:projectname" component={ProjectRouter} />*/}
      <PrivateRoute path="/project/:id" component={ProjectShow} />
    </Fragment>
  );
}
