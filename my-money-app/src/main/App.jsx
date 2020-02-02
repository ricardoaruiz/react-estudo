import '../common/template/dependecies';
import './App.scss';

import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Footer from '../common/template/footer/Footer';
import Header from '../common/template/header/Header';
import SideBar from '../common/template/side-bar/SideBar';
import Routes from './routes/Routes';
import Messages from '../common/messages/Messages'


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <SideBar />

        <div className="content-wrapper">
          <Routes />
        </div>

        <Footer />

        <Messages />
      </Router>
    </div>
  );
}

export default App;
