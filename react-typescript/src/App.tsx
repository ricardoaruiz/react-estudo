import React from 'react';
import './App.css';
import { MyButton, MyButtonType } from './components/my-button/my-button';

function App() {

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('o botão foi clicado clicado', event)
  }

  return (
    <div className="App">
      <MyButton onClick={handleButtonClick} type={MyButtonType.PRIMARY} >
        Clique aqui
      </MyButton>
      <MyButton label="Clique aqui" onClick={handleButtonClick} type={MyButtonType.SUCCESS} />
      <MyButton label="Clique aqui" onClick={handleButtonClick} type={MyButtonType.DANGER} />
      <MyButton label="Clique aqui" onClick={handleButtonClick} type={MyButtonType.WARN} />
      <MyButton label="Clique aqui" onClick={handleButtonClick} type={MyButtonType.WARN} disable={true} />
    </div>
  );
}

export default App;
