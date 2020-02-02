import './App.scss';

import React from 'react';
import { HashRouter } from 'react-router-dom';
import Menu from '../template/menu/Menu';
import Routes from './Routes';


function App() {
  return (
    <div className="container">
      <HashRouter >
        <Menu />
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
