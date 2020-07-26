import React from 'react';
import useFormValidation from '../hooks/useFormValidation';

import * as S from './styles.js';

interface IFormData {
  nome: string;
  senha: string;
}

function App() {

  const initialData: IFormData = {
    nome: '',
    senha: ''
  };

  const validations = {
    nome: (data: IFormData): string => {
      if (!data.nome) {
        return 'O campo nome é obrigatório';
      }
      return '';
    },
    senha: (data: IFormData): string => {
      if (!data.senha) {
        return 'O campo senha é obrigatório';
      }
      if (data.senha.length < 6) {
        return 'O campo senha deve ter no mínimo 6 caracteres';
      }
      return '';
    }
  }

  const { data, errors, toucheds, onChange, onBlur, onSubmit } = useFormValidation(initialData, validations);

  return (
    <S.Main>
      <form onSubmit={onSubmit}>
        <S.FormControl>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" value={data.nome} onChange={onChange} onBlur={onBlur} />
          {errors.nome && toucheds.nome && <span>{errors.nome}</span>}
        </S.FormControl>
        <S.FormControl>
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" value={data.senha} onChange={onChange} onBlur={onBlur} />
          {errors.senha && toucheds.senha && <span>{errors.senha}</span>}
        </S.FormControl>
        <button type="submit">Enviar</button>
      </form>
    </S.Main>
  );
}

export default App;
