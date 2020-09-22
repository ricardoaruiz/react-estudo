import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Select = styled.ul`
  position: relative;
  list-style: none;
  background-color: #fff;
  cursor: pointer;
  width: 100%;

  ${props => props.disabled && css`
    cursor: not-allowed;
    color: ${lighten(0.5, '#333')}
  `}
`;

export const SelectedOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;

  ${props => props.disabled && css`
  border: 1px solid ${lighten(0.5, '#333')};
  `}
`;

export const Options = styled.div`
  position: absolute;
  display: ${props => props.isOpen ? 'block' : 'none'};  
  margin-top: 0.225rem; 
  box-shadow: 0px 2px 4px rgba(0,0,0,.3);
  border-radius: 4px;
  width: 100%;

  & .selected {
    background-color: #555;
    color: #fff;
    cursor: default;
  }
`;

export const OptionOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: transparent;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;
