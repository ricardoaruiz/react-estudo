import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.section`
  max-width: 75rem;
  margin: 1rem auto;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  list-style: none;
`

export const ListItem = styled.li`
  & + li {
    margin-top: 1.5rem;
  }

  img {
    width: 100%;
    max-width: 40rem;
  }
`

export const ListItemHeader = styled.div`
  padding: 0.5rem;
  background: ${props => darken(0.2, props.theme.colors.background)};
  color: #fff;
  height: 6rem;

  strong {
    display: block;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`

interface IListItemImage {
  image: string
}
