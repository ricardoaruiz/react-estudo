import BaseService from '../../shared/service/BaseService'

const USER_URL = '/users';

export default class UserService {

    static list() {
        return BaseService.http.get(USER_URL)
            .then(response => response.data)
            .catch(error => BaseService.handleError(error));
    }

    static insert(user) {
        return BaseService.http.post(USER_URL, user)
            .then(response => response.data)
            .catch(error => BaseService.handleError(error));
    }

    static update(user) {
        const userId = user.id;   
        delete user.id;
        return BaseService.http.put(`${USER_URL}/${userId}`, user)
            .then(response => response.data)
            .catch(error => BaseService.handleError(error));
    }

    static delete(user) {
        return BaseService.http.delete(`${USER_URL}/${user.id}`)
            .catch(error => BaseService.handleError(error));
    }

}