import './Button.scss';

import React from 'react';

const Button = props => {

    const btnClasses = `
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `;

    return (
        <button
            onClick={() => props.click(props.label)}
            className={btnClasses}>
            {props.label}
        </button>
    )
};

Button.displayName = 'Button'

export default Button;