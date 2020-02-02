import React from 'react';
import './Display.scss'

const Display = props => {

    return (
        <div className="display">
            {props.value}
        </div>
    )

}

Display.displayName = 'Display';

export default Display;