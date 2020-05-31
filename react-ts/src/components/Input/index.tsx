import React from 'react';

import style from './style.module.scss';

interface InputProps {
  id: string,
  type?: 'text' | 'password' | 'number',
  value: string | number,
  label?: string,
  onChange: React.ChangeEventHandler,
}

const Input = ({
  id,
  type = 'text',
  value,
  label,
  onChange,
}: InputProps) => (
  <div className={style.input}>
    <input
      id={id}
      type={type}
      placeholder=" "
      value={value}
      autoComplete="off"
      onChange={onChange}
    />
    {label && (
      <label htmlFor={id}>{label}</label>
    )}
  </div>
);

export default Input;
