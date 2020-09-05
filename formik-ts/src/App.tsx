import './App.css';

import { Form, Formik } from 'formik';
import React, { useCallback } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import * as Yup from 'yup';

import Button from './components/Button';
import Input from './components/Input';

interface FormData {
  name: string;
  email: string;
}

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  const initialValues: FormData = { name: '', email: '' };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  });

  const handleSubmit = useCallback(async (data: FormData) => {
    console.log(data);
  }, []);

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Input type="text" name="name" placeholder="Nome" icon={FiMail} />
          <Input type="email" name="email" placeholder="E-mail" icon={FiLock} />
          <Button type="submit">Enviar</Button>
          <Button type="reset">Limpar</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
