// Dependencies
import React, { Fragment } from 'react';

// Middlewares
import { AuthProvider } from './middlewares/AuthContext';
import MainRouter from './routers/MainRouter';

// Components

function App() {
  return (
    <Fragment>
      {/* Router */}
        <AuthProvider>
          <MainRouter />
        </AuthProvider>
    </Fragment>
  );
}

export default App;