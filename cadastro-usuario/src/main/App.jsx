import './App.scss';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '../components/template/footer/Footer';
import Logo from '../components/template/logo/Logo';
import Nav from '../components/template/nav/Nav';
import Routes from '../routes';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Logo image="users" title="Cadastro Usuário"
              size="large" className="logo-create-user" mainPageLink="/" />
        <Nav />
        <Routes />
        <Footer />
      </Router>      
    </div>
  );
}

export default App;
