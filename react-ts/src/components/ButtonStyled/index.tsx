import React from 'react';
import * as S from './styled';

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

const ButtonStyled = ({
  label,
  primary = false,
  success = false,
  error = false,
  warn = false,
  disabled = false,
  children,
  onClick,
}: IButtonProps) => (
  <S.Button
    onClick={onClick}
    primary={primary}
    success={success}
    error={error}
    warn={warn}
    disabled={disabled}
  >
    {label || children}
  </S.Button>
);

export default ButtonStyled;
