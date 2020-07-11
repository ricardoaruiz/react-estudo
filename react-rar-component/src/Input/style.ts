import styled from 'styled-components';

export const Container = styled.div`
  height: 3.5rem;
  padding: 0.5rem 0;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.3rem;
  border: 1px solid gray;
  border-radius: .5rem;
  
  .icon {
    width: 1.5rem;
    color: gray;
  }

  input {
    flex: 1;
    padding: 0.5rem;
    border: 0;
    outline: none;
    font-size: 1.2rem;
    background: transparent;

    &::placeholder {
      font-size: .9rem;
    }
  }

  &.focused {
    border: 1px solid black;

    .icon {
      color: black;
    }

    input {
      &::placeholder {
        color: black;
      }
    }
  }

  &.filled {
    .icon {
      color: green;
    }
  }
`;

export const Error = styled.p`
  margin: 0.25rem 0;
  font-size: 0.8rem;
  color: red;
`;