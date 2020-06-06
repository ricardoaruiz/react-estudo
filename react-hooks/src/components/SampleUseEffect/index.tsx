// https://pt-br.reactjs.org/docs/hooks-effect.html
import React, { useEffect, useState } from 'react';

import style from './style.module.scss';

const SampleUseEffect = () => {
  // Criando estados e seu métodos de alteração para o componente
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Similar ao componentDidMount e componentDidUpdate
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('SampleUseEffect => Passando na construção do componente e sempre que ocorrer mudanças de estado');

    setMessage(count ? `Você clicou ${count} vezes` : 'Você ainda não clicou no botão');
  }, [count]);

  return (
    <div className={style['use-effect-sample']}>
      <p>{message}</p>
      <button type="button" onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default SampleUseEffect;
