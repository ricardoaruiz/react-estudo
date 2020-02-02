import './Input.scss';

import React from 'react';

import If from '../../operators/If/If';
import FormControl from '../FormControl';

export default class Input extends FormControl {

    render() {
        return (
            <div className={this.props.label ? 'form-group' : ''}>
                <If test={this.props.label}>
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                </If>
                <input 
                    {...this.props.input} 
                    className={this.cssClass()} 
                    placeholder={this.props.placeholder}
                    readOnly={this.props.readOnly}
                    type={this.props.type}
                    autoComplete="off"
                />
                {this.errorSection()}
            </div>
        )
    };
}

export const renderInput = ({
    input, type, name, 
    label, placeholder, readOnly,
    meta: { touched, dirty, error, warning }}) => (
    <Input
        input={input}
        type={type} 
        name={name} 
        label={label} 
        readOnly={readOnly}
        placeholder={placeholder} 
        touched={touched} 
        dirty={dirty}
        error={error}
        warning={warning}
    />
);
