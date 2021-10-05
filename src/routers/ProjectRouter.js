// Dependencies
import React, { Fragment } from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

// Middlewares
import PrivateRoute from '../middlewares/PrivateRoute';

//Components
import Project from '../pages/Project';

export default function ProjectRouter() {
  const { url } = useRouteMatch();

  return (
    <Fragment>
      {/* <ul>
        <li>
          <NavLink exact to={`${url}`} activeClassName="active">
            All
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/terror`} activeClassName="active">
            Terror
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/action`} activeClassName="active">
            Action
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/anime`} activeClassName="active">
            Anime
          </NavLink>
        </li>
      </ul> */}
      <Switch>
        <PrivateRoute exact path="/project/:id" component={Project} />

        {/* TODO: Editar categorías en el terror */}
        {/* <PrivateRoute path="/project/terror" component={TerrorRouter} />

        <PrivateRoute exact path="/project/action">
          <h1>Project de JP</h1>
        </PrivateRoute>
        <PrivateRoute exact path="/project/anime">
          <h1>Project de Gon</h1>
        </PrivateRoute> */}
        {/* Profile */}
        {/* <PrivateRoute exact path="/profile/:username" component={Profile} /> */}
      </Switch>
    </Fragment>
  );
}

// function TerrorRouter() {
//   const { url } = useRouteMatch();

// return (
//   <div>
//     <ul>
//       <li>
//         <Link to="/categories/terror">All</Link>
//       </li>
//       <li>
//         <Link to="/categories/terror/gore">Gore</Link>
//       </li>
//       <li>
//         <Link to="/categories/terror/suspense">Suspense</Link>
//       </li>
//     </ul>
//     <Switch>
//       <Route exact path={`${url}`}>
//         <h3>Category Terror</h3>
//       </Route>
//       <Route exact path={`${url}/gore`}>
//         <h3>Gore</h3>
//       </Route>
//       <Route exact path={`${url}/suspense`}>
//         <h3>Suspense</h3>
//       </Route>
//       <Route path="*">
//         <Redirect to="/404" />
//       </Route>
//     </Switch> 
//   </div>
// );
}
