import './App.scss';

import React from 'react';

import Home from '../components/home/Home';
import Footer from '../components/template/footer/Footer';
import Logo from '../components/template/logo/Logo';
import Nav from '../components/template/nav/Nav';

const App = props => {
  return (
    <div className="app">
      <Logo 
        image="user-plus"
        title="Cadastro Usuário"
        size="large"
        className="logo-create-user"
      />

      <Nav />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
