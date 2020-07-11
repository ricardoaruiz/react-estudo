import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import { IconBaseProps } from 'react-icons';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }: InputProps) => {
  const [field, meta] = useField(rest);

  return (
    <S.Container>
      <S.InputContainer hasError={meta.touched && !!meta.error}>
        {Icon && <Icon size={20} />}
        <input
          {...field}
          {...rest}
        />
      </S.InputContainer>

      {meta.touched && meta.error ?
        <S.Error>{meta.error}</S.Error> : null}
    </S.Container>
  )
}

export default Input
