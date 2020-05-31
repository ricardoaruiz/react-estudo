import React, { useState } from 'react';
import classnames from 'classnames';
import style from './style.module.scss';

interface InputProps {
  id: string,
  type?: 'text' | 'password' | 'number',
  placeholder?: string,
  value: string | number,
  label?: string,
  onChange: React.ChangeEventHandler,
}

const Input = ({
  id,
  type = 'text',
  placeholder,
  value,
  label,
  onChange,
}: InputProps) => {
  const [focused, setFocused] = useState(false);

  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
  };
  const labelClass = classnames(
    focused || value ? style.focused : '',
  );
  return (
    <div className={style.input}>
      {label && (
        <label htmlFor={id} className={labelClass}>{label}</label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete="off"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
