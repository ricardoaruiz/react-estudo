import React, { useState } from 'react';
import Toggle from './Toggle';

// import './Button.stories.scss';

export default {
  title: 'Toggle',
};

export const Simple = () => {
  const [toggle1, setToggle1] = useState(false);

  const handleToggle1Change = (state: boolean) => {
    setToggle1(state);
  }

  return (
    <>
      <Toggle state={toggle1} onToggle={handleToggle1Change} />
      <div>
        <span>Estado: {toggle1 ? 'Ligado' : 'Desligado'}</span>
      </div>
    </>
  )
};

