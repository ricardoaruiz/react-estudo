// https://www.youtube.com/watch?v=kuLF17WL3Qk&fbclid=IwAR0vMYzpucMazfbHq6ZCwgOBniUNZgceu1bIs8lj2lcH90pzj-LxnoB5CbQ
// https://pt-br.reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often
import React, { useState } from 'react';

import style from './style.module.scss';

const SampleUseStateAdvanced = () => {
  // Criando um estado e seu método de alteração para o componente
  const [saldo, setSaldo] = useState(100);
  const [btnDepositoLabel, setBtnDepositoLabel] = useState('Depositar 15');

  // Quando a atualização do estado for em função do estado anterior, ou seja,
  // stadoAtual - 10, utilizar o formato setSaldo((s) => s - 10) para garantir
  // que o valor não seja alterado de maneira errada em função de concorrência.
  const sacar = () => {
    setSaldo((prevState) => prevState - 100);
    // setSaldo(saldo - 100);
  };

  const depositar = () => {
    setBtnDepositoLabel('Depositando...');
    setTimeout(() => {
      setBtnDepositoLabel('Depositar 15');
      setSaldo((prevState) => prevState + 15);
      // setSaldo(saldo + 15);
    }, 2000);
  };

  return (
    <div className={style['use-state-sample']}>
      <p>
        Seu saldo é de R$
        {' '}
        {saldo}
      </p>
      <button type="button" onClick={depositar}>{btnDepositoLabel}</button>
      <button type="button" onClick={sacar}>Sacar 100</button>
    </div>
  );
};

export default SampleUseStateAdvanced;
