import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Menu = styled.ul`
  display: flex;
`;

export const ItemMenu = styled.li`
  display: flex;
`;

export const ItemLink = styled(Link)`
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  color: #fff;

  &:hover {
    background: #666;
    color: #000;
  }
`;