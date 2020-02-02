import React from 'react';

import './IconButton.scss';
import If from '../if/If';

const IconButton = props => {

    const buttonClasses = `
        btn
        ${props.type ? 'btn-' + props.type : 'btn-primary'}
        ${props.className ? props.className : ''}
    `;

    return (
        <If test={!props.hide}>
            <button
                className={buttonClasses}
                onClick={props.onClick}
                disabled={props.disabled ? 'disabled' : ''}
            >
                <i className={`fa fa-${props.icon ? props.icon : 'check'}`}></i>   
                {props.label ? props.label : ''}
            </button>
        </If>
    )

}

IconButton.displayName = 'IconButton';

export default IconButton;