import React, { useState, useMemo } from 'react';
import Errors from './Errors';

const SampleUseMemo = () => {
  const [pwd, setPwd] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const handlePwdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPwd(value);
    setShowErrors(value.length < 8);
  };

  // Utilizando o useMemo até que o estado showErrors não sofra mudança a constante
  // errors não terá o seu valor alterado e consequentemente nesse caso o componente
  // Errors não será re-renderizado
  const errors = useMemo(() => <Errors active={showErrors} />, [showErrors]);

  return (
    <div>
      <form action="">
        <input type="password" name="senha" id="senha" value={pwd} onChange={handlePwdChange} />
      </form>
      {/* <Errors active={showErrors} /> */}
      {errors}
    </div>
  );
};

export default SampleUseMemo;
