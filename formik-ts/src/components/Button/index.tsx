import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <S.Container {...props}>
      {children}
    </S.Container>
  )
}

export default Button
