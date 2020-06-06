// https://pt-br.reactjs.org/docs/hooks-effect.html
import React, { useEffect, useState } from 'react';

import style from './style.module.scss';

const SampleUseEffectWithClean = () => {
  // Criando estados e seu métodos de alteração para o componente
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // A ordem que os hooks estão declarados no componente é importante, pois
  // é a ordem que serão executados.

  // Similar ao componentDidMount e componendtWilUnmount, como no segundo parâmetro do hook
  // foi passado um array vazio, esse hook será executado somente na construção do componente
  // e como retorna uma função, também será executado na destruição do componente executando
  // a função retornada.
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('SampleUseEffectWithClean => Passando aqui somente na construção do componente');

    // Essa função retornada indica o comportamento que deve ser executado no desmonte do componente
    return () => {
      // eslint-disable-next-line no-console
      console.log('SampleUseEffectWithClean => Passando aqui somente na destruição do componente');
    };
  }, []);

  // Similar ao componentDidUpdate, pois foi passado no array (segundo parâmetro do hook)
  // a variável do estado que quando for alterada disparará esse hook
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('SampleUseEffectWithClean => Aqui vai passar sempre que o count for alterado');

    setMessage(count ? `Você clicou ${count} vezes` : 'Você ainda não clicou no botão');
  }, [count]);

  return (
    <div className={style['use-effect-with-clean-sample']}>
      <p>{message}</p>
      <button type="button" onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default SampleUseEffectWithClean;
