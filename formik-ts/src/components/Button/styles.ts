import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  border: 0;
  outline: none;
  border-radius: 4px;
  background: #f34ef3;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  & + button {
    margin-left: 0.5rem;
  }

  &:hover {
    background: ${shade(0.1, '#f34ef3')}
  }
  &:active {
    background: ${shade(0.2, '#f34ef3')}
  }

`;