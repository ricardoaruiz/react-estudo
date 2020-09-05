import React, { useCallback, FormEvent } from 'react';
import * as Yup from 'yup';

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

  // Validação com YUP
  const yupValidations = Yup.object().shape({
    nome: Yup.string().required('O campo nome é obrigatório'),
    senha: Yup.string().min(6, 'O campo senha deve possuir no mínimo 6 caracteres')
  });

  // Validação básica
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

  // const { data, errors, toucheds, onChange, onBlur, onSubmit } = useFormValidation(initialData, validations, null);
  const {
    data,
    errors,
    toucheds,
    onChange,
    onBlur,
    onSubmit,
    onReset,
    isValid } = useFormValidation(initialData, null, yupValidations);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    onSubmit(event);
    if (isValid) {
      console.log('Vai enviar')
    } else {
      console.log('Não vai enviar')
    }
  }, [isValid, onSubmit])

  return (
    <S.Main>
      <form onSubmit={handleSubmit}>
        <S.FormControl>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={data.nome}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete="off"
          />
          {errors.nome && toucheds.nome && <span>{errors.nome}</span>}
        </S.FormControl>
        <S.FormControl>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={data.senha}
            onChange={onChange}
            onBlur={onBlur}
          />
          {errors.senha && toucheds.senha && <span>{errors.senha}</span>}
        </S.FormControl>
        <button type="submit">Enviar</button>
        <button type="button" onClick={onReset}>Limpar</button>
      </form>
    </S.Main>
  );
}

export default App;
