import React, { useCallback } from 'react';
import { FiLogOut, FiTrash, FiUpload, FiUser } from 'react-icons/fi';

import * as S from './App.style';
import Select from './compponents/Select';
import Option from './compponents/Select/Option';

function App() {

  const onSelectHandleChange = useCallback((value) => {
    console.log(value)
  }, []);

  return (
    <S.App>
      <Select onChange={onSelectHandleChange}>
        <Option value="">Selecione uma opção</Option>
        <Option value="1">
          <S.CustoOption>
            <FiUser />
            <div>Usuário</div>
          </S.CustoOption>
        </Option>
        <Option value="2">
          <S.CustoOption>
            <FiUpload />
            <div>Enviar Arquivo</div>
          </S.CustoOption>
        </Option>
        <Option value="3">
          <S.CustoOption>
            <FiTrash />
            <div>Remover</div>
          </S.CustoOption>
        </Option>
        <Option value="4">
          <S.CustoOption>
            <FiLogOut />
            <div>Sair</div>
          </S.CustoOption>
        </Option>
        <Option value="5">Item Simples</Option>
      </Select>
    </S.App>
  );
}

export default App;
