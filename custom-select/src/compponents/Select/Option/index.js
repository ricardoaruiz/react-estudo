import React, { useCallback } from 'react';

import * as S from './styles';

const Option = ({ value, selected, onClick, children }) => {

  const handleOptionClick = useCallback(() => {
    if (!selected) {
      onClick(value)
    }
  }, [onClick, selected, value])

  return (
    <S.Option
      selected={selected}
      onClick={handleOptionClick}
      className={selected && 'selected'}
    >
      {children}
    </S.Option>
  )
}

export default Option;
