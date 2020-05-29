import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.github.com/',
});

export default class GithubService {
  static getRepos(user) {
    return http.get(`/users/${user}/repos`)
      .then((response) => response.data);
  }
}
