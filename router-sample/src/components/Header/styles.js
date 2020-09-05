import styled from 'styled-components';

export const Header = styled.header`
  height: 3.75rem;
  background: #333;

  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 10rem;
  background: #666;
`;

export const Content = styled.div`
  display: flex;

  & button {
    margin: 0 1rem;
    align-self: center;
  }
`;