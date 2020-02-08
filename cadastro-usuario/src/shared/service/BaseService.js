import axios from 'axios';

export default class BaseService {

    static _http = undefined;

    static get http() {
        if(!BaseService._http) {
            BaseService._http = axios.create({
                baseURL: '/api',
                timeout: 10000
            })
        }
        return BaseService._http;
    }

    static handleError(error) {
        console.log('handleError', error)
        const objError = {
            status: error.response.status,
            errors: error.response.data.errors
                ? error.response.data.errors.map(e => ({ field: e.field, message: e.message })) 
                : []
        };
        throw objError;
    }

}