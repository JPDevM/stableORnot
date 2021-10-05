// Dependencies
import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// Middlewares
import PrivateRoute from '../middlewares/PrivateRoute';

// Components
import Main from '../pages/';
import SingUp from '../pages/SingUp';
import LogIn from '../pages/LogIn';
import ForgotPassword from '../pages/ForgotPassword';
import Contact from '../pages/Contact';
import About from '../pages/About';
import SandBox from '../pages/SandBox';
import SandBoxJP from '../pages/SandBoxJP';
import NotFound from '../pages/NotFound';

const MainRouter = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          
          {/* LogIn */}
          <Route exact path="/login" component={LogIn} />

          {/* SingUp / Register */}
          <Route exact path="/singup" component={SingUp} />
          <Route path="/forgot-password" component={ForgotPassword} />

          {/* Contact */}
          <Route exact path="/contact" component={Contact} />

          {/* About */}
          <Route exact path="/about" component={About} />

          {/* SandBox */}
          <Route exact path="/sandbox" component={SandBox} />
          <Route exact path="/sandboxjp" component={SandBoxJP} />

          {/* Main / Home Page */}
          <PrivateRoute exact path="/" component={Main} />

          {/* 404 --> Last Route */}
          <Route path="/404" component={NotFound} />
          <Route path="*">
            <Redirect to="/404" />
          </Route>

        </Switch>
      </Router>
    </Fragment>
  );
}
export default MainRouter