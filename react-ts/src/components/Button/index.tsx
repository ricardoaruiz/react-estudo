import React from 'react';
import classnames from 'classnames';
import style from './style.module.scss';

interface IButtonProps {
    label?: string,
    primary?: boolean,
    success?: boolean,
    error?: boolean,
    warn?: boolean,
    disabled?: boolean,
    children?: React.ReactNode,
    onClick: React.MouseEventHandler,
}

const Button = ({
  label,
  primary = false,
  success = false,
  error = false,
  warn = false,
  disabled = false,
  children,
  onClick,
}: IButtonProps) => {

  const classes = classnames(
    style.Button,
    primary ? style.primary : '',
    success ? style.success : '',
    error ? style.error : '',
    warn ? style.warn : '',
  );

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {label || children}
    </button>
  );
};

export default Button;
