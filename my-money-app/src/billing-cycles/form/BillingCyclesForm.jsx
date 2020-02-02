import './BillingCyclesForm.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import { renderInput } from '../../common/form/input/Input';
import { maxLength, minLength, required, validMonth } from '../../common/form/utils/validation-utils';
import Col from '../../common/layout/grid/Col';
import Row from '../../common/layout/grid/Row';
import If from '../../common/operators/If/If';
import { init } from '../billing-cycles-actions';
import CreditDebitList, { TYPE } from '../credit-debit-list/CreditDebitList';

export const FORM_NAME = 'billingCyclesForm';

// Custom validations
const length4 = value => {
    const errorMin = minLength(4)(value);
    const errorMax = maxLength(4)(value);

    return errorMin || errorMax
        ? 'O campo deve ter 4 caracters'
        : undefined
}

const minYear = value => {
    return value < 2010
        ? 'Não é aconselhável ano inferior a 2010'
        : undefined;
}

class BillingCyclesForm extends Component {
     
    render() { 
        const { handleSubmit, pristine, submitting, 
                invalid, readOnly, credits, debits } = this.props;

        return (
            <form onSubmit={handleSubmit(this.props.onConfirm.bind(this))}>
                <div className="box-body">
                    <Row>
                        <Col grid="12 4">
                            <Field 
                                type="text"
                                name="name" 
                                label='Nome'
                                placeholder="Informe o nome"
                                readOnly={readOnly}
                                component={renderInput}  
                                validate={[required]}
                            />
                        </Col>
                        <Col grid="12 4">
                            <Field 
                                type="number"
                                name="month" 
                                label="Mês"
                                placeholder="Informe o mês"
                                readOnly={readOnly}
                                component={renderInput} 
                                validate={[required, validMonth]}
                            />
                        </Col>
                        <Col grid="12 4">
                            <Field 
                                type="number"
                                name="year" 
                                label="Ano"
                                placeholder="Informe o ano"    
                                readOnly={readOnly}
                                component={renderInput} 
                                validate={[required, length4]}
                                warn={[minYear]}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col grid="12 6">
                            <CreditDebitList
                                type={TYPE.CREDIT} 
                                list={credits}
                                readOnly={readOnly}
                            />
                        </Col>
                        <Col grid="12 6">
                            <CreditDebitList
                                type={TYPE.DEBIT} 
                                list={debits}
                                readOnly={readOnly}
                            />
                        </Col>
                    </Row>
                </div>

                <div className="box-footer">
                    <button 
                        type="submit" 
                        className={`btn btn-${this.props.submitClass}`}
                        disabled={
                            !readOnly 
                                ? pristine || invalid || submitting
                                : submitting
                        }                        
                    >
                        {this.props.submitLabel || 'Confirmar'}
                    </button>
                    <If test={this.props.cancelLabel}>
                        <button 
                            type="button" 
                            className="btn btn-default"
                            onClick={this.props.init}
                        >
                            {this.props.cancelLabel}
                        </button>
                    </If>
                </div>
            </form>
        );
    }
}

const selector = formValueSelector(FORM_NAME)

const mapStateToProps = state => ({ 
    credits: selector(state, 'credits'),
    debits: selector(state, 'debits')
});

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default compose(
    reduxForm({ form: FORM_NAME, destroyOnUnmount: false }),
    connect(mapStateToProps, mapDispatchToProps)
)(BillingCyclesForm);
