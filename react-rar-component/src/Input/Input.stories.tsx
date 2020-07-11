import React, { useState } from 'react';
import Input from './index';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import './Input.stories.scss';

export default {
  title: 'Input',
};

export const Simple = () => {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  return (
    <>
      <div className="input-cointainer">
        <Input
          value={input1}
          placeholder="Search"
          error={!input1 && 'Campo obrigatório'}
          onChange={(event) => setInput1(event.target.value)}
        />
        {/* <p className="input-result">Input1: {input1}</p> */}
      </div>
      <div className="input-cointainer dark">
        <Input
          icon={FiUser}
          placeholder="User"
          value={input2}
          error={!input2 && 'Campo obrigatório'}
          onChange={(event) => setInput2(event.target.value)}
        />
        {/* <p className="input-result">Input2: {input2}</p> */}
      </div>
      <div className="input-cointainer">
        <Input
          icon={FiLock}
          placeholder="Password"
          type="password"
          value={input3}
          error={!input3 && 'Campo obrigatório'}
          onChange={(event) => setInput3(event.target.value)}
        />
        {/* <p className="input-result">Input3: {input3}</p> */}
      </div>
    </>
  )
};

