import React from 'react';

const ValueBox = props => {
    return (
        <div className={`small-box bg-${props.color}`}>
            <div className="inner">
                <h3>{props.value}</h3>
                <p>{props.text}</p>
                <div className='icon'>
                    <i className={`fa fa-${props.icon}`}></i>
                </div>
            </div>
        </div>
    );
}
 
export default ValueBox;