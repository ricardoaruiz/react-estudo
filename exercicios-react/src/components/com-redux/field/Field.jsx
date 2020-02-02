import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeValue } from './fieldActions';

class Field extends React.Component {

    render() {
        return (
            <div>
                <label htmlFor="id">Valor: </label>
                <input 
                    id="field"
                    type="text" 
                    onChange={this.props.changeValue} 
                    value={this.props.value}
                />
                <br/>
                Valor informado: <span>{this.props.value}</span>
            </div>
        )
    }

}

/**
 * Mapeamento dos stados globais nas propriedades do componente
 * @param {*} state 
 */
const mapStateToProps = state => {
    return {
        value: state.field.value
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ changeValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);