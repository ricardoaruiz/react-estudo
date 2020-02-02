import React from 'react';

export default props => (
    <header className="main-header">
        <a href="#/" className='logo'>
            <span className="logo-mini"><strong>My</strong> M</span>
            <span className="logo-lg">
                <i className='fa fa-money'></i>
                <strong>My</strong> Money
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <span  className="sidebar-toggle" data-toggle="offcanvas">
            </span>
        </nav>
    </header>
)