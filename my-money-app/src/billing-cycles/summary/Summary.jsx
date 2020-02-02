import React, { Component } from 'react';

import Col from '../../common/layout/grid/Col';
import Row from '../../common/layout/grid/Row';
import ValueBox from '../../common/value-box/ValueBox';


export default class Symmary extends Component {

    render() {
        const { credit, debit } = this.props;
        const total = Math.round( (credit - debit) * 100 ) / 100;
        return (  
            <Row>
                <Col grid="12">
                    <fieldset>
                        <legend>Resumo</legend>
                        <Row>
                            <Col grid="12 4">
                                <ValueBox
                                    color="green"
                                    icon="bank"
                                    value={`R$ ${credit}`}
                                    text="Total de Créditos"
                                />
                            </Col>
                            <Col grid="12 4">
                                <ValueBox
                                    color="red"
                                    icon="credit-card"
                                    value={`R$ ${debit}`}
                                    text="Total de Débitos"
                                />
                            </Col>
                            <Col grid="12 4">
                                <ValueBox
                                    color="blue"
                                    icon="money"
                                    value={`R$ ${total}`}
                                    text="Valor Consolidado"
                                />
                            </Col>
                        </Row>
                    </fieldset>
                </Col>
            </Row>
    )};
}