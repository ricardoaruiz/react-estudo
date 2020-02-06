import './Nav.scss'

import React from 'react';

const Nav = props => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <a href="#/">
                    <i className="fa fa-home"></i> Início
                </a>
                <a href="#/users">
                    <i className="fa fa-users"></i> Usuários
                </a>
            </nav>
        </aside>
    );
}
 
export default Nav;