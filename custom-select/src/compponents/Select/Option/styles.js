import styled, { css } from 'styled-components';

export const Option = styled.li`
  padding: 0.5rem;

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:hover {
    ${props => !props.selected && css`
      background-color: #333;
      color: #fff;
    `}
  }

`;