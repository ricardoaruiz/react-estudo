// https://pt-br.reactjs.org/docs/hooks-custom.html
import React from 'react';

import useOnlineVerify from './custom-hooks/useOnlineVerify';
import style from './style.module.scss';

// import React, { useState, useEffect } from 'react';

const SampleCustomHook = () => {
  const connectedFlag = Math.floor(Math.random() * 2);

  // Utilização de um custom hook que pode ser reaproveitado em outros componentes
  const online = useOnlineVerify(connectedFlag);

  // Hook sendo usado diretamente no componente
  // const [online, setOnline] = useState(false);
  // useEffect(() => {
  //   if (numberBetweenZeroAndOne === 0) {
  //     setOnline(false);
  //   } else {
  //     setOnline(true);
  //   }
  // }, [numberBetweenZeroAndOne]);

  return (
    <div className={style['custom-hook-sample']}>
      Você está
      {' '}
      <span className={online ? style.online : style.offline}>{online ? 'on-line' : 'off-line'}</span>
    </div>
  );
};

export default SampleCustomHook;
