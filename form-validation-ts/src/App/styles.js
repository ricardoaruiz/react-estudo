import styled from 'styled-components';

export const Main = styled.section``;

export const FormControl = styled.div`
  display: flex;
  flex-direction:column;
  height: 5rem;

  & input {
    padding: 0.5rem;
    outline: none;
  }

  & span {
    font-size: 0.8rem;
    color: red;
    margin-top: 0.225rem;
  }
`;