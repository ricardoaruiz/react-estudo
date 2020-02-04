import './Main.scss';

import React from 'react';

import Header from '../header/Header';

const Main = props => {
    return (
        <React.Fragment>
            <Header />
            <div className="content">
                Conteúdo
            </div>
        </React.Fragment>
    );
}
 
export default Main;