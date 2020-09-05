import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    margin-top: 1rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.225rem;
    line-height: 2rem;
    color: #fff;
  }
`
