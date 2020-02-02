import BaseService from '../common/services/BaseService';

const BILLING_CYCLES_URL = '/billingcycles';

export default class BillingCyclesService {

    static getList() {
        return BaseService.http.get(BILLING_CYCLES_URL)
            .catch(error => BaseService.handleError('Erro ao obter a lista de ciclos de pagamento', error));
    }

    static create(billingCycle) {
        return BaseService.http.post(BILLING_CYCLES_URL, billingCycle)
            .catch(error => BaseService.handleError('Erro ao criar um ciclo de pagamento', error));
    }

    static update(billingCycle) {
        return BaseService.http.put(`${BILLING_CYCLES_URL}/${billingCycle.id}`, billingCycle)
            .catch(error => BaseService.handleError('Erro ao alterar um ciclo de pagamento', error));
    }

    static delete(billingCycle) {
        return BaseService.http.delete(`${BILLING_CYCLES_URL}/${billingCycle.id}`)
            .catch(error => BaseService.handleError('Erro ao alterar um ciclo de pagamento', error));
    }

}