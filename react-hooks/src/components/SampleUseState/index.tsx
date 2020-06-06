import React, { useState } from 'react';

import style from './style.module.scss';

const SampleUseState = () => {
  // Criando um estado e seu método de alteração para o componente
  const [count, setCount] = useState(0);

  return (
    <div className={style['use-state-sample']}>
      <p>
        Você clicou
        {' '}
        { count }
        {' '}
        vezes
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default SampleUseState;
