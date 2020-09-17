import React from 'react'
import { FaBuilding } from 'react-icons/fa'

import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <S.LogoContainer>
        <FaBuilding />
      </S.LogoContainer>
      <S.Menu>
        <S.ItemMenu to="/" end >Home</S.ItemMenu>
        <S.ItemMenu to="/products">Products</S.ItemMenu>
        <S.ItemMenu to="/About">About</S.ItemMenu>
      </S.Menu>
    </S.Header>
  )
}

export default Header
