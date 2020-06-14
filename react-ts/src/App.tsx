import './App.css';

import React, { useState } from 'react';

import Button from './components/Button';
import ButtonStyled from './components/ButtonStyled';
import Input from './components/Input';
import Steps from './components/Steps';

function App() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');
  const [disabled] = useState(true);

  const handleButtonClick = () => {
    // eslint-disable-next-line no-console
    console.log('Botao clicado', `${nome} ${sobrenome} ${idade} anos`);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (e.target.id === 'nome') {
      setNome(value);
    }
    if (e.target.id === 'sobrenome') {
      setSobrenome(value);
    }
    if (e.target.id === 'idade') {
      setIdade(value);
    }
  };
  return (
    <div className="App">
      <h1>Exemplos de criação de componentes React utilizando Typescript</h1>

      <div className="line">
        <p>Botões com SCSS modules</p>
      </div>
      <div className="line">
        <Button type="submit" onClick={handleButtonClick} primary>Conteudo</Button>
        <Button onClick={handleButtonClick} success>Conteudo</Button>
        <Button onClick={handleButtonClick} error>Conteudo</Button>
        <Button onClick={handleButtonClick} warn>Conteudo</Button>
        <Button onClick={handleButtonClick} warn disabled>Conteudo</Button>
      </div>

      <div className="line">
        <p>Botões com Styled Components</p>
      </div>
      <div className="line">
        <ButtonStyled label="Label Styled" onClick={handleButtonClick} primary />
        <ButtonStyled onClick={handleButtonClick} success>
          Children Styled
        </ButtonStyled>
        <ButtonStyled label="Label Styled" onClick={handleButtonClick} error />
        <ButtonStyled label="Label Styled" onClick={handleButtonClick} warn />
        <ButtonStyled label="Label Styled" onClick={handleButtonClick} primary disabled={disabled} />
      </div>

      <div className="line">
        <p>Input com SCSS modules</p>
      </div>
      <div className="line">
        <div className="col">
          <Input
            id="nome"
            value={nome}
            label="Nome"
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <Input
            id="sobrenome"
            value={sobrenome}
            label="Sobrenome"
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <Input
            id="idade"
            type="number"
            value={idade}
            label="Idade"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="line">
        <p>Steps com SCSS modules</p>
      </div>
      <div className="line">
        <Steps />
      </div>

    </div>


  );
}

export default App;
