import React, { useReducer } from 'react';

import style from './style.module.scss';

type State = {
  count: number,
}

type Action = {
  type: 'init' | 'increment' | 'decrement',
  payload?: any
}

const INITIAL_STATE: State = {
  count: 0,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'init':
      return { count: action.payload };
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};


const SampleUseReducer = () => {
  // Definindo um reducer e o estado para o componente
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div className={style['use-reducer-sample']}>
      <p>
        Contador
        {' '}
        { state.count }
      </p>
      <button type="button" onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
      <button type="button" onClick={() => dispatch({ type: 'init', payload: INITIAL_STATE.count })}>Inicializar</button>
    </div>
  );
};

export default SampleUseReducer;
