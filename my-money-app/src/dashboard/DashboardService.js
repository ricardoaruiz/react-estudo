import BaseService from '../common/services/BaseService';

export default class DashboardService {

    static loadSummary() {
        return BaseService.http.get('/dashboard-summary')
            .catch(error => console.log('Erro ao carregar o dashboard'));
    }

}