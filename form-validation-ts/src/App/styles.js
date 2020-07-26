import styled from 'styled-components';

export const Main = styled.section`
  width: 100%;
  max-width: 40rem;
  margin: 2rem auto 0 auto;

  & form {
    padding: 0 1rem;
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction:column;
  height: 5rem;

  & input {
    padding: 0.5rem;
    outline: none;
    border-radius: 4px;
    border: 1px solid lightgray;
  }

  & span {
    font-size: 0.8rem;
    color: red;
    margin-top: 0.225rem;
  }
`;