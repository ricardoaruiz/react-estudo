import './App.scss';

import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '../components/template/footer/Footer';
import Logo from '../components/template/logo/Logo';
import Nav from '../components/template/nav/Nav';
import Routes from '../routes';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Logo image="users" title="Cadastro Usuário"
                size="large" className="logo-create-user" mainPageLink="/" />
          <Nav />
          <Routes />
          <Footer />
        </Router>

        {/* TODO refatorar para um componente  */}
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          getState={(state) => state.toastr} // This is the default
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />

      </div>
    </Provider>
  );
}

export default App;
