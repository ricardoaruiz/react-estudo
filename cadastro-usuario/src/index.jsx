import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { startApiServer } from './backend/ApiServer';

// Sobe o servidor "mirajejs" (backend mockado)
startApiServer();

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

