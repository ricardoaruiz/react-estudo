import './Logo.scss';

import React from 'react';

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
            <i 
                className={toCssClass()}
            />
        </aside>
    );
}
 
export default Logo;