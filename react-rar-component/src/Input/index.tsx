import React, { useState, useCallback, useRef, InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons';
import classnames from 'classnames';

import * as S from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  error?: string;
}

const Input: React.FC<InputProps> = ({ icon: Icon, error, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current.value);
  }, []);

  const classes = classnames({
    focused: isFocused,
    filled: isFilled,
  });

  return (
    <S.Container>
      <S.Input className={classes}>
        {Icon && <Icon size={20} className="icon" />}
        <input
          type="text"
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...props}
        />
      </S.Input>
      <S.Error>{error}</S.Error>
    </S.Container>
  )
}

export default Input;
