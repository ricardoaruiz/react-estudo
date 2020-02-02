import './Calculator.scss';

import React from 'react';

import Button from '../components/button/Button';
import Display from '../components/display/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends React.Component {

    state = { ...initialState };

    buttonClick = (value) => {
        if (value === 'AC') {
            this.clearMemory();
        } else if (new RegExp('^[0-9.]$').test(value)) {
            this.addDigit(value);
        } else {
            this.setOperation(value);
        }
    }

    clearMemory = () => {
        this.setState({ ...initialState });
    }

    addDigit = (digit) => {
        if (digit === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + digit;
        this.setState({ displayValue, clearDisplay: false })

        if (digit !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values });
        }
    }

    setOperation = (operation) => {
        if (this.state.current === 0) {
            this.setState({ current: 1, clearDisplay: true, operation });
        } else {
            const equals = operation === '=';
            const currentOperation = this.state.operation;
            const values = [...this.state.values];
            
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
            } catch(e) {
                values[0] = this.state.values[0];
            }

            values[1] = 0;
            this.setState({ 
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.buttonClick} triple/>
                <Button label="/"  click={this.buttonClick} operation/>
                <Button label="7"  click={this.buttonClick}/>
                <Button label="8"  click={this.buttonClick}/>
                <Button label="9"  click={this.buttonClick}/>
                <Button label="*"  click={this.buttonClick} operation/>
                <Button label="4"  click={this.buttonClick}/>
                <Button label="5"  click={this.buttonClick}/>
                <Button label="6"  click={this.buttonClick}/>
                <Button label="-"  click={this.buttonClick} operation/>
                <Button label="1"  click={this.buttonClick}/>
                <Button label="2"  click={this.buttonClick}/>
                <Button label="3"  click={this.buttonClick}/>
                <Button label="+"  click={this.buttonClick} operation/>
                <Button label="0"  click={this.buttonClick} double/>
                <Button label="."  click={this.buttonClick}/>
                <Button label="="  click={this.buttonClick} operation/>
            </div>
        )
    }

}