import styled from 'styled-components';

interface StyledProps {
  primary?: boolean,
  success?: boolean,
  error?: boolean,
  warn?: boolean
}

const Button = styled.button<StyledProps>`
  background: gray;
  padding: 8px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  color: #fff;
  outline: none;
  cursor: pointer;

  ${(p) => p.primary && `
     background: #0099ff;

     &:hover {
       background: #007eff;
     } 
  `}
  ${(p) => p.success && `
    background: #008000;

    &:hover {
      background: #007200;
    }
  `}
  ${(p) => p.error && `
    background: #ff0000;

    &:hover {
      background: #df0000;
    }
  `}
  ${(p) => p.warn && `
    background: #ffa500;

    &:hover {
      background: #e79600;
    }
  `}

  &:disabled {
      background: lightgray;

      &:hover {
        background: lightgray;
        cursor: default;
      }
    }

`;

// eslint-disable-next-line import/prefer-default-export
export { Button };
