import './Main.scss';

import React from 'react';

import Header from '../header/Header';

const Main = props => {
    return (
        <React.Fragment>
            <Header {...props} />
            <div className="content container-fluid">
                <div className="p-3 mt-3">
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Main;