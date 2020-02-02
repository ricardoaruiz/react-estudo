import './BillingCyclesList.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getList, showTab } from '../billing-cycles-actions';
import { TABS } from '../BillingCycles'

class BillingCyclesList extends Component {

    componentDidMount() {
        this.props.getList();
    }

    renderRows = () => {
        const list = this.props.list || [];
        return list.map(item => (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.month}</td>
                <td>{item.year}</td>
                <td>
                    <button 
                        className="btn btn-warning"
                        onClick={() => this.props.showTab(item, TABS.TAB_UPDATE)}
                    >
                        <i className="fa fa-pencil"></i>
                    </button>

                    <button 
                        className="btn btn-danger"
                        onClick={() => this.props.showTab(item, TABS.TAB_DELETE)}
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    render() { 
        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {this.renderRows()}    
                    </tbody>               
                </table>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({ list: state.billingCycles.list });
const mapDispatchToProps = dispatch => bindActionCreators({getList, showTab }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCyclesList);