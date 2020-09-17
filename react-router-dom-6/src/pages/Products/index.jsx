import React from 'react'
import { Outlet } from 'react-router-dom'

import * as S from './styles';

const Products = () => {
  return (
    <S.Container>
      <S.ProductList>
        <S.ProductListItem to="notebook">Notebook</S.ProductListItem>
        <S.ProductListItem to="smartphone">Smartphone</S.ProductListItem>
      </S.ProductList>

      <S.ProductContent>
        <Outlet />
      </S.ProductContent>
    </S.Container>
  )
}

export default Products
