import { NavLink } from 'react-router-dom';
import { darken } from 'polished';
import styled from 'styled-components';

const primary = '#4c4c4c';
const navItemColor = '#e8e8e8';

export const Container = styled.section`
  position: relative;
  display: flex;
`;

export const ProductList = styled.aside`
  display: flex;
  flex-direction: column;
  width: 10rem;
  background-color: ${primary};
  min-height: calc(100vh - 5rem);
`;

export const ProductListItem = styled(NavLink)`
  text-decoration: none;
  color: ${navItemColor};
  padding: 1rem;
  display: flex;
  justify-content: center;
  font-size: 1.225rem;

  &:hover {
    background-color: ${darken(0.7, navItemColor)};
  }
  &:active {
    background-color: ${darken(0.9, navItemColor)};
  }
  &.active {
    background-color: ${darken(0.8, navItemColor)};
  }
`;

export const ProductContent = styled.main`
  /* margin-left: 10rem; */
`;
