import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext/useAuth';
import Menu from '../Menu';

import * as S from './styles';

const Header = () => {

  const history = useHistory();
  const { logout } = useAuth();

  const handleLogoffButtonClick = useCallback(() => {
    logout();
    history.push('/');
  }, [history, logout])

  return (
    <S.Header>
      <S.Logo></S.Logo>
      <S.Content>
        <Menu />
        <button type="button" onClick={handleLogoffButtonClick}>Logout</button>
      </S.Content>
    </S.Header>
  )
}

export default Header;
