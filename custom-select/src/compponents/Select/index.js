import React, { useCallback, useMemo, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import * as S from './styles';

const Select = ({ onChange, disabled = false, children }) => {

  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSelect = useCallback(() => {
    if (!disabled) {
      setIsOpen(state => !state);
    }
  }, [disabled]);

  const handleOptionClick = useCallback((value) => {
    setSelectedValue(value);
    handleToggleSelect();
    onChange(value);
  }, [handleToggleSelect, onChange]);

  const renderOptions = useCallback(() => {
    return React.Children.map(children, option => {
      return React.cloneElement(option, {
        value: option.props.value,
        selected: option.props.value === selectedValue,
        onClick: (value) => { handleOptionClick(value) }
      })
    })
  }, [children, handleOptionClick, selectedValue]);

  const renderSelectedOption = useMemo(() => {
    const selectedOption = React.Children.toArray(children).find(option => {
      return option.props.value === selectedValue
    });

    return React.cloneElement(selectedOption, { value: selectedValue, selected: true });
  }, [children, selectedValue]);

  return (
    <S.Select disabled={disabled}>

      <S.SelectedOption
        onClick={handleToggleSelect}
        disabled={disabled}
      >
        {renderSelectedOption}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </S.SelectedOption>

      <S.Options isOpen={isOpen}>
        {renderOptions()}
      </S.Options>

      <S.OptionOverlay
        isOpen={isOpen}
        onClick={handleToggleSelect}
      />

    </S.Select>
  )
}

export default Select;
;