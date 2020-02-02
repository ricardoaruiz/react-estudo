import './FormControls.scss';

import React, { Component } from 'react';

class FormControl extends Component {

    isTouched = () => this.props.touched || this.props.dirt;

    cssClass = () => `form-control 
                      ${this.isTouched() && this.props.warning ? 'input-warn' : ''}
                      ${this.isTouched() && this.props.error ? 'input-error' : ''}
                    `;

    errorSection = () => {
        if (this.props.touched || this.props.dirty) {
            if (this.props.error){
                return <small className="msg-error">{this.props.error}</small>
            } else if (this.props.warning) {
                return <small className="msg-warn">{this.props.warning}</small>
            } else {
                return null;
            }
        }
    }

    render() { 
        return (null);
    }
}
 
export default FormControl;