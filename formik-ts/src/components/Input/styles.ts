import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 3.5rem;
`;

interface InputContainerProps {
  hasError: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 0 0.5rem;
    transition: all 0.3s;

    ${props => props.hasError && css`
        border: 1px solid red;
    `}

    &:hover {
      border: 1px solid gray;
    }

    & svg {
      margin-right: .225rem;

      ${props => props.hasError && css`
          color: red;
      `}
    }

    & input {
      padding: 0.5rem;
      border: 0;
      background: transparent;
      outline: none;
      width: 100%;
    }
`;

export const Error = styled.div`
  margin: 0.225rem 0 0 0.5rem;
  color: red;
  font-size: 0.8rem;
`;