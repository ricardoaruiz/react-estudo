import React from 'react';

import If from '../../operators/If/If';
import FormControl from '../FormControl';

export default class Select extends FormControl {

    renderOptions = () => {
        const options = this.props.options || [];
        let jsxOptions = options.map(option => 
            <option key={option.value} value={option.value}>{option.label}</option>    
        )
        if (this.props.blankOption) {
            jsxOptions = [
                <option key="" value="">{this.props.blankOption}</option>,
                ...jsxOptions
            ]
        }
        return jsxOptions;
    }

    render() {
        return (
            <div className="form-group">
                <If test={this.props.label}>
                    <label 
                        htmlFor={this.props.name}
                    >
                        {this.props.label}
                    </label>
                </If>
                <select 
                    {...this.props.input} 
                    className={this.cssClass()} 
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled}
                >
                    {this.renderOptions()}
                </select>
                {this.errorSection()}
            </div>
        )
    };
}

export const renderSelect = ({
    input, name, label, blankOption, disabled, options,
    meta: { touched, dirty, error, warning }}) => (
    <Select
        input={input}
        name={name} 
        label={label} 
        blankOption={blankOption} 
        disabled={disabled}
        options={options}
        touched={touched} 
        dirty={dirty}
        error={error}
        warning={warning}
    />
)