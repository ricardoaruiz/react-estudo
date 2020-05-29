import GithubService from '../../services/github.service';

// Action Types
const ACTION_TYPES = {
  MIN_CHANGED: '@numbers/MIN_CHANGED',
  MAX_CHANGED: '@numbers/MAX_CHANGED',
};

// Action Creators

// Action Creator utilizando o Redux-Thunk
const changeMin = (payload) => {
  return (dispatch) => {
    // eslint-disable-next-line no-console
    console.log('Chamando a API do Github para teste...');

    GithubService.getRepos('ricardoaruiz')
      .then((repos) => {
        // eslint-disable-next-line no-console
        console.log('Resultado da API e em seguida o dispatch da action', repos);

        dispatch({
          type: ACTION_TYPES.MIN_CHANGED,
          payload,
        });
      });
  };
};

const changeMax = (payload) => ({
  type: ACTION_TYPES.MAX_CHANGED,
  payload,
});

export { ACTION_TYPES, changeMin, changeMax };
