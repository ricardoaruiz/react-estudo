import DashboardService from "./DashboardService"

export const DASHBOARD_ACTIONS = {
    DASHBOARD_SUMMARY_LOADED: 'DASHBOARD_SUMMARY_LOADED'
}

export const getSummary = () => {
    return dispatch => {
        DashboardService.loadSummary()
            .then(response => { 
                dispatch({ 
                    type: DASHBOARD_ACTIONS.DASHBOARD_SUMMARY_LOADED, 
                    payload: response.data 
                });
            });
    }
}