import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form';

import { selectTab, showTabs } from '../common/tab/tab-actions';
import { TABS } from './BillingCycles';
import BillingCyclesService from './BillingCyclesService';
import { FORM_NAME } from './form/BillingCyclesForm';

const BILLING_CYCLES_FORM_INITIAL_VALUES = {
    id: '',
    name: '',
    mont: '',
    year: '',
    credits: [{name: '', value: ''}],
    debits: [{name: '', value: '', status: ''}]
};

export const BILLING_CYCLES_ACTIONS = {
    BILLING_CYCLES_FETCHED: 'BILLING_CYCLES_FETCHED',
    BILLING_CYCLES_ADDED: 'BILLING_CYCLES_ADDED',
};

export const getList = () => {
    const response = BillingCyclesService.getList()
        .catch(e => toastr.error('Erro', e.completeMsg))

    return {
        type: BILLING_CYCLES_ACTIONS.BILLING_CYCLES_FETCHED,
        payload: response
    };
}

export const create = billingCycle => {
    return submit(
        'create', billingCycle, 'Ciclo de pagamentos criado com sucesso');
}

export const update = billingCycle => {
    return submit(
        'update', billingCycle, 'Ciclo de pagamentos alterado com sucesso');
}

export const remove = billingCycle => {
    return submit(
        'delete', billingCycle, 'Ciclo de pagamento removido com sucesso');
}

export const showTab = (billingCycle, tab) => {

    billingCycle.credits = !billingCycle.credits 
        ? BILLING_CYCLES_FORM_INITIAL_VALUES.credits
        : billingCycle.credits;

    billingCycle.debits = !billingCycle.debits 
        ? BILLING_CYCLES_FORM_INITIAL_VALUES.debits
        : billingCycle.debits;

    return [
        showTabs(tab),
        selectTab(tab),
        initialize(FORM_NAME, billingCycle)
    ]
}

export const init = () => {
    return [
        showTabs(TABS.TAB_LIST, TABS.TAB_CREATE),
        selectTab(TABS.TAB_LIST),
        getList(),
        initialize(FORM_NAME, BILLING_CYCLES_FORM_INITIAL_VALUES)
    ];
}

const submit = (method, billingCycle, successMsg) => {
    return dispatch => {
        BillingCyclesService[method](billingCycle)
            .then(() => {
                toastr.success('Sucesso', successMsg);
                dispatch(init());
            })
            .catch(e => toastr.error('Erro', e.completeMsg))
    }
}