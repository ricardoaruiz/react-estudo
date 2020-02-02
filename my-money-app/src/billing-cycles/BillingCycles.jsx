import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TabContent from '../common/tab/TabContent';
import TabHeader from '../common/tab/TabHeader';
import Tabs from '../common/tab/Tabs';
import TabsContent from '../common/tab/TabsContent';
import TabsHeader from '../common/tab/TabsHeader';
import Content from '../common/template/content/Content';
import ContentHeader from '../common/template/content/ContentHeader';
import { init, create, update, remove } from './billing-cycles-actions';
import BillingCyclesForm from './form/BillingCyclesForm';
import BillingCyclesList from './list/BillingCyclesList';

export const TABS = {
    TAB_LIST:   'tabList',
    TAB_CREATE: 'tabCreate',
    TAB_UPDATE: 'tabUpdate',
    TAB_DELETE: 'tabDelete',
}

class BillingCycles extends Component {

    componentDidMount() {
        this.props.init();
    }

    render() { 
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" subtitle="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar"  icon="bars" target={TABS.TAB_LIST}  />
                            <TabHeader label="Incluir" icon="plus" target={TABS.TAB_CREATE} />
                            <TabHeader label="Alterar" icon="pencil" target={TABS.TAB_UPDATE} />
                            <TabHeader label="Excluir" icon="trash-o" target={TABS.TAB_DELETE} />
                        </TabsHeader>

                        <TabsContent>
                            <TabContent id={TABS.TAB_LIST} >
                                <BillingCyclesList />
                            </TabContent>
                            <TabContent id={TABS.TAB_CREATE}>
                                <BillingCyclesForm 
                                    onConfirm={this.props.create} 
                                    submitLabel="Incluir"
                                    submitClass="primary"
                                />
                            </TabContent>
                            <TabContent id={TABS.TAB_UPDATE}>
                                <BillingCyclesForm 
                                    onConfirm={this.props.update} 
                                    submitLabel="Alterar"
                                    submitClass="warning"
                                    cancelLabel="Cancelar"
                                />
                            </TabContent>
                            <TabContent id={TABS.TAB_DELETE}>
                                <BillingCyclesForm 
                                    onConfirm={this.props.remove} 
                                    submitLabel="Remover"
                                    submitClass="danger"
                                    cancelLabel="Cancelar"
                                    readOnly
                                />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {init, create, update, remove}, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycles);

