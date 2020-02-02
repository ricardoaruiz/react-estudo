import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { arrayInsert, arrayRemove, Field } from 'redux-form';

import { renderInput } from '../../common/form/input/Input';
import { renderSelect } from '../../common/form/select/Select';
import { FORM_NAME } from '../form/BillingCyclesForm'
import If from '../../common/operators/If/If';
import { required } from '../../common/form/utils/validation-utils';

export const TYPE = {
    CREDIT: { label: 'Créditos', action: 'credits'},
    DEBIT: { label: 'Débitos', action: 'debits'},
}

const BILLING_CYCLE_DEBIT_STATUS = [
    { value: 1, label: 'PENDENTE'},
    { value: 2, label: 'AGENDADO'},
    { value: 3, label: 'PAGO'},
];

class CreditList extends Component {

    add = (index, item = {}) => {
        if (!this.props.readOnly){
            this.props.arrayInsert(
                FORM_NAME, this.props.type.action, index, item);
        }
    }

    remove = index => {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove(
                FORM_NAME, this.props.type.action, index);
        }
    }

    renderRows = () => {
        const list = this.props.list || [];
        const action = this.props.type.action
        return (
            list.map((item, index) => 
                <tr key={index}>
                    <td>
                        <Field 
                            type="text"
                            name={`${action}[${index}].name`} 
                            placeholder="Informe o nome"
                            readOnly={this.props.readOnly}
                            component={renderInput}
                        />                        
                    </td>
                    <td>  
                        <Field 
                            type="text"
                            name={`${action}[${index}].value`} 
                            placeholder="Informe o valor"
                            readOnly={this.props.readOnly}
                            component={renderInput}
                        />
                    </td>
                    <If test={this.props.type === TYPE.DEBIT}>
                        <td>  
                            <Field 
                                name={`${action}[${index}].status`} 
                                disabled={this.props.readOnly}
                                blankOption="Selecione um status"
                                component={renderSelect}
                                options={BILLING_CYCLE_DEBIT_STATUS}
                            />
                        </td>
                    </If>
                    <td>
                        <If test={!this.props.readOnly}>
                            <button 
                                type="button"
                                className="btn btn-success"
                                onClick={() => this.add(index + 1)}
                            >
                                <i className="fa fa-plus"></i>
                            </button>

                            <button 
                                type="button"
                                className="btn btn-warning"
                                onClick={() => this.add(index + 1, item)}
                            >
                                <i className="fa fa-clone"></i>
                            </button>

                            <If test={this.props.list.length > 1}>
                                <button 
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => this.remove(index)}
                                >
                                    <i className="fa fa-trash-o"></i>
                                </button>
                            </If>
                        </If>    
                    </td>                    
                </tr>    
            )
        )
    }

    render() { 
        return (
            <fieldset>
                <legend>{this.props.type.label}</legend>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <If test={this.props.type === TYPE.DEBIT}>
                                <th>Status</th>
                            </If>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </fieldset>
        );
    }
}
 
const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(CreditList);