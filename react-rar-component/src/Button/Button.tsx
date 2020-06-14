import React from 'react'

import './Button.scss';

type ButtonProps = {
  label?: string,
  primary?: boolean,
  success?: boolean,
  error?: boolean,
  warn?: boolean
  block?: boolean,
  disabled?: boolean,
  style?: React.CSSProperties,
  customClass?: string,
  children?: React.ReactNode,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FunctionComponent<ButtonProps> = ({
  label = '',
  primary = false,
  success = false,
  error = false,
  warn = false,
  block = false,
  disabled = false,
  style,
  customClass,
  children = null,
  onClick,
}: ButtonProps) => {

  const classes = `
    button-component  
    ${primary ? 'primary' : ''}
    ${success ? 'success' : ''}
    ${error ? 'error' : ''}
    ${warn ? 'warn' : ''}
    ${block ? 'block' : ''}
    ${customClass}
  `;

  return (
    <button 
      type="button" 
      className={classes}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {label}
      {children}
    </button>
  )
}

export default Button;
