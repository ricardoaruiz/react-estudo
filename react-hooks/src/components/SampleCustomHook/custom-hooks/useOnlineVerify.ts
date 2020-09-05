// https://pt-br.reactjs.org/docs/hooks-custom.html
import { useEffect, useState } from 'react';

const useOnlineVerify = (connectedFlag: number) => {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(connectedFlag === 1);
  }, [connectedFlag]);

  const teste = () => {
    console.log('Online', online);
  };

  return { online, teste };
};

export default useOnlineVerify;
