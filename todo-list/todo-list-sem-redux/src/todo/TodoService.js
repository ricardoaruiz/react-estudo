import axios from 'axios';

export default class TodoService {

    static _http = undefined;

    static _client() {
        if (!TodoService._http) {
            return axios.create({
                baseURL: 'http://localhost:3001/tasks',
                timeout: 1000
            })
        }
        return TodoService._http;
    }

    static create(task) {
        return TodoService._client().post('', task)
            .catch(error => console.log('Erro ao inserir uma nova task'));
    }

    static search(task) {
        const url = task && task.description ? `?description_like=${task.description}` : '';
        return TodoService._client().get(url)
            .catch(error => console.log('Erro ao consultar as tasks'));
    }

    static delete(task) {
        return TodoService._client().delete(`/${task.id}`)
            .catch(error => console.log('Erro ao remover uma task'));
    }

    static markAsDone(task) {
        return TodoService._client().put(`/${task.id}`, task )
            .catch(error => console.log('Erro ao mudar o status de uma task'));
    }

}