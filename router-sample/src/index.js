import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import RootRoutes from './routes/RootRoutes';

import GlobalStyles from './GlobalStyles'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <BrowserRouter>
        <RootRoutes />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
