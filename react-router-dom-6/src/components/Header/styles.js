import styled from 'styled-components';
import { darken } from 'polished';
import { NavLink } from 'react-router-dom';

const primary = '#4c4c4c';
const navItemColor = '#e8e8e8';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 2rem;
  background-color: ${primary};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  & svg {
    font-size: 4rem;
  }
`;

export const Menu = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
`;

export const ItemMenu = styled(NavLink)`
  color: ${navItemColor};
  display: flex;
  align-items: center;
  align-self: stretch;
  font-size: 1.225rem;
  text-decoration: none;
  padding: 0 1rem;
  transition: all 0.3s;

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
