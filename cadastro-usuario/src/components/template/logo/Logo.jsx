import './Logo.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Logo = props => {

    const toCssClass = () => {
        return `
            fa fa-${props.image ? props.image : 'question'}
            ${props.size ? props.size : 'medium'}
            ${props.className ? props.className : ''}
        `;
    }

    return (
        <aside className="logo">
            <Link to={props.mainPageLink} >
                <i 
                    className={toCssClass()}
                />
                <div className="title">{props.title}</div>
            </Link>
        </aside>
    );
}
 
export default Logo;