// Dependencies
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Middlewares
import { AuthProvider } from './middlewares/AuthContext';
import PrivateRoute from './middlewares/PrivateRoute';

// Components
import SingUp from './pages/SingUp';
import LogIn from './pages/LogIn';
import ForgotPassword from './pages/ForgotPassword';
import Sandbox from './pages/SandBox';
import Main from './pages/';
import SandBoxUi from './pages/SandBoxUi';

function App() {
  return (
    <Fragment>
      <Router>
        {/* Authentication entity routes (+sandboxb) */}
        <AuthProvider>
          <Switch>
            {/* SingUp */}
            <Route path="/singup" component={SingUp} />

            {/* LogIn */}
            <Route path="/login" component={LogIn} />

            {/* Forgot Password */}
            <Route path="/forgot-password" component={ForgotPassword} />

            {/* SandBox */}
            <Route path="/ui" component={SandBoxUi} />

            {/* sandbox */}
            <PrivateRoute path="/sandbox" component={Sandbox} />

            {/* Main --> last one*/}
            <PrivateRoute path="/" exact component={Main} />
          </Switch>
        </AuthProvider>
      </Router>
    </Fragment>
  );
}

export default App;
