import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Middleware que permite que uma action retorne uma promise e quando for resolvida
// o resolver conseguira receber os dados.
// import promise from 'redux-promise';

// Middleware para permitir que uma action possa fazer dispatch para outras actions
import multi from 'redux-multi';

// Middleware que permite que uma action tenha um objeto dispatch disponível assim 
// é possível chamar uma promise e no then fazer o dispatch garantindo assim que outras
// actions ou reducers sejam chamados somente quando o processamento assincrono tenha 
// finalizado
import thunk from 'redux-thunk';

import App from './main/App';
import reducers from './main/reducers';

// Configuração para utilizar o plugin do redux no chrome
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Cria o store aplicando os middlewares
const store = applyMiddleware(thunk, multi)(createStore)(reducers, devtools);
// const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devtools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
