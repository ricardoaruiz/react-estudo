import './Menu.scss';

import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link to="/" className="navbar-brand">
                <i className="fa fa-calendar-plus-o mr-2" />
                Todo List
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>            
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/todo" className="nav-link">Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">Sobre</Link>
                    </li>
                </ul>
            </div>            
        </nav>
    )
}