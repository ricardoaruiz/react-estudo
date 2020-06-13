import React, { useState, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import style from './style.module.scss';

const SampleUseCallback = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('blue');

  useEffect(() => {
    setMessage('Você ainda não clicou no botão');
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`Você clicou no botão ${count} vezes`);
    setMessage(`Você clicou no botão ${count} vezes`);
  }, [count]);

  const handleIncrementButtonClick = () => {
    setCount((c) => c + 1);
  };

  const handleChangeColorButtonClick = () => {
    setColor((c) => (c === 'blue' ? 'red' : 'blue'));
  };

  // Utilizando o useCallback faz com que a função buttonIncrementClasses não seja
  // recriada até que o estado "color" sofra alguma alteração, portanto nesse caso
  // se somente o estado "count" sofrer alteração na nova renderização do componente
  // essa função não será recriada utilizando a mesma versão da renderização anterior
  const buttonIncrementClasses = useCallback(
    () => classnames(
      color === 'blue' ? style.blue : '',
      color === 'red' ? style.red : '',
    ),
    [color],
  );

  return (
    <div className={style['use-callback-sample']}>
      <button
        type="button"
        onClick={handleIncrementButtonClick}
        className={buttonIncrementClasses()}
      >
        Incrementar
      </button>
      <button type="button" onClick={handleChangeColorButtonClick}>
        Trocar a cor
      </button>
      <p>{message}</p>
    </div>
  );
};

export default SampleUseCallback;
