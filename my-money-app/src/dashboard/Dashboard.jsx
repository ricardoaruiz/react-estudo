import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ValueBox from '../common/value-box/ValueBox';
import Content from '../common/template/content/Content';
import ContentHeader from '../common/template/content/ContentHeader';

import Row from '../common/layout/grid/Row';
import Col from '../common/layout/grid/Col';
import { getSummary } from './dashboard-actions'

class Dashboard extends Component {

    componentDidMount() {
        this.props.getSummary();
    }

    render() { 
        const { credit, debit } = this.props.summary;
        return ( 
            <div>
                <ContentHeader title="Dashboard" subtitle="Versão 1.0" />
                <Content>
                    <Row>
                        <Col grid="12 4">
                            <ValueBox
                                value={credit}
                                text="Total de Créditos"
                                icon="bank"
                                color="green"
                            />
                        </Col>
                        <Col grid="12 4">
                            <ValueBox 
                                value={debit}
                                text="Total de Débitos"
                                icon="credit-card"
                                color="red"
                            />
                        </Col>
                        <Col grid="12 4">
                            <ValueBox 
                                value={credit - debit}
                                text="Valor Consolidado"
                                icon="money"
                                color="blue"
                            />
                        </Col>
                    </Row>
                </Content>
            </div>
         );
    }
}
 
const mapStateToProps = state => ({ summary: state.dashboard.summary });
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);