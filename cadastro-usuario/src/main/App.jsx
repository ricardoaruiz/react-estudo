import './App.scss';

import React from 'react';

import Footer from '../components/template/footer/Footer';
import Logo from '../components/template/logo/Logo';
import Main from '../components/template/main/Main';
import Nav from '../components/template/nav/Nav';

const App = props => {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
