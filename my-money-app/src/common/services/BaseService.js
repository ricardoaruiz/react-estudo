import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export default class BaseService {

    static _http = undefined;

    static get http() {
        if (!BaseService._axios) {
            BaseService._http = axios.create({
                baseURL: BASE_URL,
                timeout: 10000
            })
        }
        return BaseService._http;
    }

    static handleError(customMessage, error) {
        const exception = {
            error: customMessage,
            errorMsg: error.message,
            completeMsg: `${customMessage} - ${error.message}`
        }
        throw exception;
    }

}