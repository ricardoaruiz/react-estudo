// https://pt-br.reactjs.org/docs/hooks-custom.html
import { useEffect, useState } from 'react';

const useOnlineVerify = (connectedFlag: number) => {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(connectedFlag === 1);
  }, [connectedFlag]);

  return online;
};

export default useOnlineVerify;
