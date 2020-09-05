import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom';

import * as S from './styles';

const Menu = () => {
  const { url } = useRouteMatch();
  return (
    <S.Menu>
      <S.ItemMenu>
        <S.ItemLink to={`${url}/dashboard`}>Dashboard</S.ItemLink>
      </S.ItemMenu>
      <S.ItemMenu>
        <S.ItemLink to={`${url}/users`}>Users</S.ItemLink>
      </S.ItemMenu>
    </S.Menu>
  )
}

export default Menu
